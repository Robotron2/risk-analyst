const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  tokenAddress: {
    type: String,
    required: [true, 'Token address is required'],
    lowercase: true,
    trim: true
  },
  chain: {
    type: String,
    default: 'hashkey'
  },
  riskScore: {
    type: Number,
    required: true
  },
  riskLevel: {
    type: String,
    required: true,
    enum: ['Low', 'Medium', 'High']
  },
  summary: {
    type: String,
    required: true
  },
  complianceFlags: {
    type: [String],
    default: []
  },
  recommendation: {
    type: String,
    required: true
  },
  source: {
    type: String,
    enum: ['hashkey_explorer'],
  },
  activityLevel: String,
  transactionCount: Number,
  signals: [String],
  status: {
    type: String,
    enum: ['processing', 'completed', 'failed'],
    default: 'completed'
  },
  createdAt: {
    type: Date,
    default: Date.now
  } // Automatically creates the createdAt field with the time of insertion
});

// Indexes for fast querying
reportSchema.index({ tokenAddress: 1 });
reportSchema.index({ createdAt: -1 });

// Helper instance method to check freshness
reportSchema.methods.isFresh = function() {
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;
  return (Date.now() - this.createdAt.getTime()) < ONE_DAY_MS;
};

// Also add a static helper
reportSchema.statics.getLatestReport = async function(tokenAddress) {
  return this.findOne({ tokenAddress }).sort({ createdAt: -1 });
};

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
