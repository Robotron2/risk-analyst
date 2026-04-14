const axios = require('axios');
const { AppError } = require('../utils/errors');

class ExplorerService {
  constructor() {
    this.searchBaseUrl = 'https://testnet-explorer.hsk.xyz/api/v2/search';
    this.txBaseUrl = 'https://testnet-explorer.hsk.xyz/api/v2/addresses';
  }

  async fetchTokenData(tokenAddress) {
    try {
      // 1. Fetch Token Info Search API
      const searchRes = await axios.get(`${this.searchBaseUrl}?q=${tokenAddress}`);
      const searchData = searchRes.data;
      console.log(searchData)

      // Ensure we have some results
      if (!searchData || !searchData.items || searchData.items.length === 0) {
        throw new AppError('Token not found on HashKey explorer', 404);
      }

      // Exact match finding or fallback to first item
      const tokenItem = searchData.items.find(t => t.address?.toLowerCase() === tokenAddress.toLowerCase()) || searchData.items[0];
      
      const { 
        name = 'Unknown', 
        symbol = 'UNK', 
        type = 'N/A', 
        is_smart_contract_verified = false, 
        certified = false 
      } = tokenItem;

      // 2. Fetch Transactions (for activity level)
      // The endpoint for blockscout derivatives is usually: /api/v2/addresses/{hash}/transactions 
      // or /api/v2/addresses/{hash}/counters for tx count
      let txCount = 0;
      let failedTx = 0;

      try {
        const txRes = await axios.get(`${this.txBaseUrl}/${tokenAddress}/transactions`);
        console.log(txRes)
        const txs = txRes.data?.items || [];
        txCount = txs.length; // This is a rough estimation based on recent txs. For exact total, we'd use the counters endpoint, but this is a solid heuristic
        failedTx = txs.filter(tx => tx.status !== 'ok' && tx.result !== 'success').length;
      } catch (txError) {
        console.warn('Could not fetch exact transactions for activity parsing. Using defaults.', txError.message);
      }

      // 3. Normalized Derived Fields
      const verified = is_smart_contract_verified || certified;
      
      let activityLevel = 'low';
      if (txCount > 1000) activityLevel = 'high';
      else if (txCount > 100) activityLevel = 'medium';

      const signals = [];
      if (!verified) signals.push('unverified contract');
      if (failedTx > (txCount * 0.1) && txCount > 10) signals.push('high failure rate in recent transactions');
      if (txCount > 0) signals.push('active contract interactions');
      if (txCount === 0) signals.push('no recent transactions');

      return {
        token_name: name,
        contract_address: tokenAddress,
        token_type: type,
        verified,
        activity_level: activityLevel,
        transaction_count: txCount,
        signals
      };

    } catch (error) {
      if (error instanceof AppError) throw error;
      console.error(error)
      
      console.error('Explorer Fetch Error:', error.message);
      throw new AppError('Failed to fetch data from blockchain explorer', 502);
    }
  }
}

module.exports = new ExplorerService();
