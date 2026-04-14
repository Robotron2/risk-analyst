const cacheService = require('../services/cache.service');
const aiService = require('../services/ai.service');
const explorerService = require('../services/explorer.service');
const Report = require('../models/Report');
const { AppError } = require('../utils/errors');

// In-memory lock to prevent concurrent AI calls for the same token
const activeAnalysisLocks = new Map();

exports.analyzeToken = async (req, res, next) => {
  try {
    const { tokenAddress, chain = 'hashkey' } = req.body;

    if (!tokenAddress) {
      throw new AppError('tokenAddress is required', 400);
    }

    const normalizedAddress = tokenAddress.toLowerCase();

    // 1. Check Cache
    const freshReport = await cacheService.getFreshReport(normalizedAddress);
    if (freshReport) {
      return res.status(200).json(freshReport);
    }

    // 2. Concurrency Lock Check
    if (activeAnalysisLocks.has(normalizedAddress)) {
      const result = await activeAnalysisLocks.get(normalizedAddress);
      return res.status(200).json(result);
    }

    // Process analysis inside a lock
    const analysisPromise = (async () => {
       try {
           // 3. Fetch Real Token Data via Explorer Service
           const normalizedPayload = await explorerService.fetchTokenData(normalizedAddress);

           // 4. Call AI Service with Explorer Data
           const aiResult = await aiService.analyzeToken(normalizedPayload);

           // 5. Save NEW Record
           const newReport = await Report.create({
               tokenAddress: normalizedAddress,
               chain,
               source: 'hashkey_explorer',
               activityLevel: normalizedPayload.activity_level,
               transactionCount: normalizedPayload.transaction_count,
               signals: normalizedPayload.signals,
               ...aiResult
           });
           
           return newReport;
       } finally {
           activeAnalysisLocks.delete(normalizedAddress);
       }
    })();

    activeAnalysisLocks.set(normalizedAddress, analysisPromise);
    const result = await analysisPromise;

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getLatestReport = async (req, res, next) => {
  try {
    const { tokenAddress } = req.params;
    const normalizedAddress = tokenAddress.toLowerCase();

    // Get the latest single report
    const report = await Report.getLatestReport(normalizedAddress);
    if (!report) {
      throw new AppError('No report found for this token address', 404);
    }

    // Include historical count
    const historyCount = await Report.countDocuments({ tokenAddress: normalizedAddress });

    // Converting to plain object to attach custom property safely
    const reportObj = report.toObject();
    reportObj.historicalCount = historyCount;

    res.status(200).json(reportObj);
  } catch (error) {
    next(error);
  }
};

exports.getHistory = async (req, res, next) => {
  try {
    const { tokenAddress } = req.params;
    const normalizedAddress = tokenAddress.toLowerCase();

    const reports = await Report.find({ tokenAddress: normalizedAddress }).sort({ createdAt: -1 });
    
    // Return empty array instead of 404 for a RESTful approach
    res.status(200).json(reports);
  } catch (error) {
    next(error);
  }
};

exports.logOnChain = async (req, res, next) => {
  try {
    const { tokenAddress, riskScore, riskLevel } = req.body;

    if (!tokenAddress || riskScore === undefined || !riskLevel) {
       throw new AppError('tokenAddress, riskScore, and riskLevel are required', 400);
    }

    // Validation success, frontend handles actual blockchain TX
    res.status(200).json({
      success: true,
      message: 'Payload validated. Ready for on-chain submission.',
      payload: {
        tokenAddress: tokenAddress.toLowerCase(),
        riskScore,
        riskLevel
      }
    });

  } catch (error) {
    next(error);
  }
};
