const Report = require('../models/Report');

class CacheService {
  /**
   * Evaluates if there is a cached, fresh report for the given token.
   * Returns the report document if it is fresh, otherwise returns null.
   * DOES NOT clear historical data.
   */
  async getFreshReport(tokenAddress) {
    const report = await Report.getLatestReport(tokenAddress.toLowerCase());
    
    if (!report) {
      return null;
    }

    if (report.isFresh()) {
      return report;
    }

    return null; // Exists but stale
  }
}

module.exports = new CacheService();
