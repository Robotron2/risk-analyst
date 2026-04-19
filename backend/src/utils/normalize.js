/**
 * normalize.js
 *
 * Reduces the explorer payload to only the fields the AI model needs.
 * Keeps the prompt small, cheap, and focused.
 */

/**
 * @param {object} explorerData - Raw data returned by ExplorerService.fetchTokenData()
 * @returns {object} Lean payload safe to send to the AI model
 */
function normalizeData(explorerData) {
  return {
    token: {
      name: explorerData.token_name,
      address: explorerData.contract_address,
      type: explorerData.token_type,
      verified: explorerData.verified,
    },
    metrics: {
      transactionCount: explorerData.transaction_count,
      activityLevel: explorerData.activity_level,
    },
    signals: explorerData.signals ?? [],
  };
}

module.exports = { normalizeData };
