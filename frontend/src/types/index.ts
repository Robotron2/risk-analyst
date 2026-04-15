// ===== TYPE DEFINITIONS =====

export type RiskLevel = 'low' | 'medium' | 'high';
export type ReportStatus = 'verified' | 'under_review' | 'warning' | 'pending';
export type FlagStatus = 'clear' | 'active' | 'pending' | 'flagged';

export interface RiskBreakdown {
  contractRisk: number;
  liquidityRisk: number;
  ownershipRisk: number;
  complianceRisk: number;
}

export interface ComplianceFlag {
  label: string;
  status: FlagStatus;
  description: string;
}

export interface OnChainData {
  txHash: string;
  network: string;
  status: 'confirmed' | 'pending';
  gasUsed: string;
  blockNumber: number;
  timestamp: string;
}

export interface Report {
  id: string;
  tokenName: string;
  tokenSymbol: string;
  contractAddress: string;
  network: string;
  riskScore: number;
  riskLevel: RiskLevel;
  status: ReportStatus;
  date: string;
  type: string;
  aiExplanation: string;
  riskBreakdown: RiskBreakdown;
  complianceFlags: ComplianceFlag[];
  onChain: OnChainData;
  volatility: string;
  liquidity: string;
  marketCap: string;
  cached: boolean;
}

export interface ActivityEntry {
  id: string;
  tokenName: string;
  address: string;
  riskScore: number;
  riskLevel: RiskLevel;
  date: string;
  status: ReportStatus;
}

export interface HistoryEntry {
  id: string;
  contractAddress: string;
  tokenName: string;
  network: string;
  timestamp: string;
  cached: boolean;
  reportId: string;
}

export interface DashboardMetrics {
  totalAnalyses: number;
  highRiskTokens: number;
  mediumRiskTokens: number;
  lowRiskTokens: number;
  averageRiskScore: number;
  criticalAlerts: number;
  totalValueMonitored: string;
}
