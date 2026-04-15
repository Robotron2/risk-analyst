// Smart Contract Configuration
// Contract deployed on HashKey Chain Testnet

export const CONTRACT_ADDRESS = "0x01a991c5b234211390613acC2be1104037600106" as const;

export const CONTRACT_ABI = [
  {
    name: "logAnalysis",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "token", type: "address" },
      { name: "riskScore", type: "uint8" },
      { name: "riskLevel", type: "string" },
    ],
    outputs: [],
  },
  {
    name: "getLatestAnalysis",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "token", type: "address" }],
    outputs: [
      {
        components: [
          { name: "token", type: "address" },
          { name: "riskScore", type: "uint8" },
          { name: "riskLevel", type: "string" },
          { name: "timestamp", type: "uint256" },
          { name: "reporter", type: "address" },
        ],
        type: "tuple",
      },
    ],
  },
] as const;
