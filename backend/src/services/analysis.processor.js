const { getIO } = require("../config/socket");
const explorerService = require("./explorer.service");
const aiService = require("./ai.service");
const Report = require("../models/Report");

async function updateStatus(tokenAddress, status) {
  try {
     return await Report.findOneAndUpdate(
       { tokenAddress },
       { status },
       { new: true, sort: { createdAt: -1 } }
     );
  } catch (err) {
     console.error('Failed to update status for', tokenAddress, err.message);
  }
}

async function processAnalysis(tokenAddress) {
  const io = getIO();

  try {
    const explorerData = await explorerService.fetchTokenData(tokenAddress);
    
    const aiResult = await aiService.analyzeToken(explorerData);

    const saved = await Report.findOneAndUpdate(
      { tokenAddress },
      {
         chain: 'hashkey',
         source: 'hashkey_explorer',
         activityLevel: explorerData.activity_level,
         transactionCount: explorerData.transaction_count,
         signals: explorerData.signals,
         ...aiResult,
         status: "completed"
      },
      { new: true, upsert: true, sort: { createdAt: -1 } }
    );

    io.to(tokenAddress).emit("analysis_complete", {
      tokenAddress,
      data: saved
    });

  } catch (error) {
    console.error('Analysis processor failed for', tokenAddress, ':', error.message);
    await updateStatus(tokenAddress, "failed");

    io.to(tokenAddress).emit("analysis_failed", {
      tokenAddress,
      error: error.message
    });
  }
}

module.exports = {
  processAnalysis,
  updateStatus
};
