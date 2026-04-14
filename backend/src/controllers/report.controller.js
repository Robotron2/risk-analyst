const cacheService = require('../services/cache.service');
const aiService = require('../services/ai.service');
const explorerService = require('../services/explorer.service');
const Report = require('../models/Report');
const { AppError } = require('../utils/errors');

// In-memory lock to prevent concurrent AI calls for the same token
const activeAnalysisLocks = new Map();

const { processAnalysis } = require('../services/analysis.processor');

exports.analyzeToken = async (req, res, next) => {
  try {
    const { tokenAddress, chain = 'hashkey' } = req.body;

    if (!tokenAddress) {
      throw new AppError('tokenAddress is required', 400);
    }

    const normalizedAddress = tokenAddress.toLowerCase();

    // 1. Check Cache first (Latest report)
    const latestReport = await Report.getLatestReport(normalizedAddress);

    if (latestReport) {
      if (latestReport.status === 'processing') {
        return res.status(202).json({
          status: 'processing',
          tokenAddress: normalizedAddress
        });
      }
      
      if (latestReport.status === 'completed' && latestReport.isFresh()) {
        return res.status(200).json(latestReport);
      }
    }

    // 2. Create a preliminary Processing Record
    // Since we maintain history, we can just create a new processing report entry
    const processingRecord = await Report.create({
      tokenAddress: normalizedAddress,
      chain,
      status: 'processing',
      riskScore: 0, // defaults until fulfilled
      riskLevel: 'Medium',
      summary: 'Analysis in progress...',
      recommendation: 'Please wait'
    });

    // 3. Initiate Non-Blocking Background Processor
    setImmediate(() => {
      processAnalysis(normalizedAddress);
    });

    // 4. Return Accept Response
    res.status(202).json({
      status: 'processing',
      tokenAddress: normalizedAddress
    });
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
