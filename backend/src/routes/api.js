const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report.controller');

// Analyse endpoint (creates/returns AI analysis based on TTL)
router.post('/analyze', reportController.analyzeToken);

// Get latest report with historical count
router.get('/report/:tokenAddress', reportController.getLatestReport);

// Get all historical reports for a token
router.get('/history/:tokenAddress', reportController.getHistory);

// Placeholder for validating data before onchain submission
router.post('/log-onchain', reportController.logOnChain);

module.exports = router;
