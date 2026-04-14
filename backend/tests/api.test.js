require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app');
const Report = require('../src/models/Report');
const aiService = require('../src/services/ai.service');
const explorerService = require('../src/services/explorer.service');

// Default valid JSON string that Gemini would return
const mockGeminiResponseText = JSON.stringify({
  risk_score: 25,
  risk_level: "Low",
  summary: "Safe token",
  compliance_flags: [],
  institutional_recommendation: "Good"
});

// Mock the external Services
jest.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: jest.fn().mockImplementation(() => {
      return {
        getGenerativeModel: jest.fn().mockReturnValue({
          generateContent: jest.fn().mockResolvedValue({
            response: {
              text: () => "\`\`\`json\n" + mockGeminiResponseText + "\n\`\`\`" // Simulate markdown response
            }
          })
        })
      };
    })
  };
});
jest.mock('../src/services/explorer.service');

describe('API Endpoints Testing', () => {
  const testTokenAddress = '0x1234567890abcdef1234567890abcdef12345678';
  let analyzeTokenSpy;

  beforeAll(async () => {
    // Connect to a specific test database
    const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
    const testUri = dbUri.endsWith('/') ? `${dbUri}rwa-token-risk-analyzer-test` : `${dbUri}/rwa-token-risk-analyzer-test`;
    await mongoose.connect(testUri);
    // Spy on the real aiService method
    analyzeTokenSpy = jest.spyOn(aiService, 'analyzeToken');
  });

  afterAll(async () => {
    analyzeTokenSpy.mockRestore();
    // Clean up and disconnect
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    // Clear reports before each run
    await Report.deleteMany({});
    jest.clearAllMocks();
  });

  describe('POST /api/analyze', () => {
    it('should return 400 if tokenAddress is missing', async () => {
      const res = await request(app)
        .post('/api/analyze')
        .send({ tokenName: 'IgnoreMe' });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty('error', true);
    });

    it('should successfully analyze a new token address (Cache Miss)', async () => {
      // Mock the Explorer response
      const mockExplorerResponse = {
        token_name: 'RiskToken',
        contract_address: testTokenAddress,
        token_type: 'ERC20',
        verified: true,
        activity_level: 'medium',
        transaction_count: 500,
        signals: ['active contract interactions']
      };
      explorerService.fetchTokenData.mockResolvedValue(mockExplorerResponse);

      const res = await request(app)
        .post('/api/analyze')
        .send({ tokenAddress: testTokenAddress });

      expect(res.statusCode).toBe(201);
      expect(res.body.tokenAddress).toBe(testTokenAddress.toLowerCase());
      expect(res.body.riskScore).toBe(25);
      expect(explorerService.fetchTokenData).toHaveBeenCalledTimes(1);
    });

    it('should return cached analysis if fresh (Cache Hit)', async () => {
      // Create a fresh report artificially
      await Report.create({
        tokenAddress: testTokenAddress.toLowerCase(),
        chain: 'hashkey',
        riskScore: 50,
        riskLevel: 'Medium',
        summary: 'Cached',
        complianceFlags: [],
        recommendation: 'Hold',
        source: 'hashkey_explorer',
        activityLevel: 'medium',
        transactionCount: 200,
        signals: []
      });

      const res = await request(app)
        .post('/api/analyze')
        .send({ tokenAddress: testTokenAddress });

      expect(res.statusCode).toBe(200);
      expect(res.body.summary).toBe('Cached');
      expect(explorerService.fetchTokenData).not.toHaveBeenCalled();
      expect(analyzeTokenSpy).not.toHaveBeenCalled();
    });

    it('should call AI service again if cached report is stale (Older than 24h)', async () => {
      // Create a stale report (25 hours old)
      const staleDate = new Date(Date.now() - (25 * 60 * 60 * 1000));
      await Report.create({
        tokenAddress: testTokenAddress.toLowerCase(),
        chain: 'hashkey',
        riskScore: 50,
        riskLevel: 'Medium',
        summary: 'Stale',
        complianceFlags: [],
        recommendation: 'Hold',
        createdAt: staleDate,
        source: 'hashkey_explorer',
        activityLevel: 'low',
        transactionCount: 1,
        signals: []
      });

      const mockExplorerResponse = {
        token_name: 'RiskToken',
        contract_address: testTokenAddress,
        token_type: 'ERC20',
        verified: true,
        activity_level: 'high',
        transaction_count: 5000,
        signals: ['active contract interactions']
      };
      explorerService.fetchTokenData.mockResolvedValue(mockExplorerResponse);

      const res = await request(app)
        .post('/api/analyze')
        .send({ tokenAddress: testTokenAddress });

      expect(res.statusCode).toBe(201);
      expect(res.body.summary).toBe('Safe token'); // Gemini mock returns 'Safe token'
      expect(analyzeTokenSpy).toHaveBeenCalledTimes(1);

      // Verify that there are now 2 reports in the database
      const count = await Report.countDocuments();
      expect(count).toBe(2);
    });
  });

  describe('GET /api/report/:tokenAddress', () => {
    it('should return 404 if no report exists', async () => {
      const res = await request(app).get(`/api/report/${testTokenAddress}`);
      expect(res.statusCode).toBe(404);
    });

    it('should return the latest report and historical count', async () => {
      await Report.create({
        tokenAddress: testTokenAddress.toLowerCase(),
        riskScore: 10,
        riskLevel: 'Low',
        summary: 'First',
        recommendation: 'Buy',
        createdAt: new Date(Date.now() - 100000)
      });
      await Report.create({
        tokenAddress: testTokenAddress.toLowerCase(),
        riskScore: 40,
        riskLevel: 'Medium',
        summary: 'Latest',
        recommendation: 'Hold'
      });

      const res = await request(app).get(`/api/report/${testTokenAddress}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.summary).toBe('Latest');
      expect(res.body.historicalCount).toBe(2);
    });
  });

  describe('GET /api/history/:tokenAddress', () => {
    it('should return empty array if no historical data', async () => {
      const res = await request(app).get(`/api/history/${testTokenAddress}`);
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBe(0);
    });
  });
});
