import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Share2,
  Download,
  Shield,
  CheckCircle,
  Clock,
  AlertTriangle,
  ChevronRight,
  TrendingUp,
  Droplets,
  DollarSign,
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import OnChainModal from '../components/OnChainModal';
import { useReports } from '../contexts/ReportContext';
import { mockReports } from '../data/mockData';

const performanceData = [
  { month: 'Sep', token: 78, benchmark: 72 },
  { month: 'Oct', token: 82, benchmark: 75 },
  { month: 'Nov', token: 85, benchmark: 78 },
  { month: 'Dec', token: 80, benchmark: 76 },
  { month: 'Jan', token: 88, benchmark: 80 },
  { month: 'Feb', token: 86, benchmark: 82 },
  { month: 'Mar', token: 90, benchmark: 84 },
  { month: 'Apr', token: 85, benchmark: 83 },
];

export default function RiskReport() {
  const { id } = useParams<{ id: string }>();
  const { getReportById } = useReports();
  const [showOnChainModal, setShowOnChainModal] = useState(false);

  const report = getReportById(id || '') || mockReports[0];

  const getRiskColor = (score: number) => {
    if (score <= 30) return 'var(--color-risk-low)';
    if (score <= 60) return 'var(--color-risk-medium)';
    return 'var(--color-risk-high)';
  };

  const breakdownItems = [
    { label: 'Volatility', value: report.volatility, icon: TrendingUp },
    { label: 'Liquidity', value: report.liquidity, icon: Droplets },
    { label: 'Market Cap', value: report.marketCap, icon: DollarSign },
  ];

  const flagIconMap: Record<string, typeof CheckCircle> = {
    clear: CheckCircle,
    active: Shield,
    pending: Clock,
    flagged: AlertTriangle,
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
        <Link to="/reports" className="hover:text-[var(--color-primary)] transition-colors">Risk Ledger</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--color-primary)] font-medium">Risk Report</span>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text)]">{report.tokenName} Prime Report</h1>
          <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">
            Institutional-Grade Asset Risk Assessment • Updated {new Date(report.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} ago
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--color-border)] text-xs font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] transition-colors">
              <Share2 className="w-3.5 h-3.5" />
              Share
            </button>
            <div className="absolute right-0 top-full mt-2 w-40 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2">
               <div className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mb-2 px-2">Share Report</div>
               <button 
                 onClick={() => navigator.clipboard.writeText(window.location.href)}
                 className="w-full text-left px-2 py-1.5 text-xs text-[var(--color-text)] hover:bg-[var(--color-border)] rounded transition-colors"
               >
                 Copy Link
               </button>
            </div>
          </div>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--color-border)] text-xs font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Export PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Risk Score + AI Summary */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Score Circle */}
            <Card className="md:col-span-2 flex flex-col items-center justify-center py-8" padding="lg">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-3">
                Institutional Risk Score
              </p>
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="var(--color-border)" strokeWidth="8" />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke={getRiskColor(report.riskScore)}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${(report.riskScore / 100) * 327} 327`}
                    transform="rotate(-90 60 60)"
                    className="transition-all duration-1000 ease-out"
                  />
                  <text x="60" y="55" textAnchor="middle" className="text-3xl font-bold" fill="var(--color-text)">
                    {report.riskScore}
                  </text>
                  <text x="60" y="72" textAnchor="middle" className="text-xs" fill={getRiskColor(report.riskScore)}>
                    {report.riskLevel === 'low' ? 'Low' : report.riskLevel === 'medium' ? 'Medium' : 'High'}
                  </text>
                  <text x="60" y="85" textAnchor="middle" className="text-[9px]" fill="var(--color-text-muted)">
                    Risk
                  </text>
                </svg>
                {/* Checkmark for low risk */}
                {report.riskLevel === 'low' && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--color-risk-low)] flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
              </div>
              <div className="flex gap-4 mt-6 text-center">
                <div>
                  <span className="text-[10px] text-[var(--color-text-muted)]">Contract</span>
                  <p className="text-xs font-semibold text-[var(--color-text)]">{report.riskBreakdown.contractRisk}%</p>
                </div>
                <div className="w-px bg-[var(--color-border)]" />
                <div>
                  <span className="text-[10px] text-[var(--color-text-muted)]">Liquidity</span>
                  <p className="text-xs font-semibold text-[var(--color-text)]">{report.riskBreakdown.liquidityRisk}%</p>
                </div>
                <div className="w-px bg-[var(--color-border)]" />
                <div>
                  <span className="text-[10px] text-[var(--color-text-muted)]">Owner</span>
                  <p className="text-xs font-semibold text-[var(--color-text)]">{report.riskBreakdown.ownershipRisk}%</p>
                </div>
              </div>
            </Card>

            {/* AI Explanation */}
            <Card className="md:col-span-3" padding="lg">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-4 h-4 text-[var(--color-primary)]" />
                <h3 className="text-sm font-semibold text-[var(--color-text)]">Executive Intelligence Summary</h3>
                <Badge variant={report.status === 'verified' ? 'clear' : report.status === 'warning' ? 'flagged' : 'pending'}>
                  {report.status === 'verified' ? 'Confirmed' : report.status === 'warning' ? 'Alert' : 'Pending'}
                </Badge>
              </div>
              <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3">
                {report.aiExplanation.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-5 pt-5 border-t border-[var(--color-border)]">
                {breakdownItems.map((item) => {
                  return (
                    <div key={item.label}>
                      <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">{item.label}</p>
                      <p className="text-sm font-semibold text-[var(--color-text)] mt-0.5">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Compliance & Audit Flags */}
          <Card padding="lg">
            <h3 className="text-base font-semibold text-[var(--color-text)] mb-4">Compliance & Audit Flags</h3>
            <div className="space-y-3">
              {report.complianceFlags.map((flag, i) => {
                const FlagIcon = flagIconMap[flag.status] || Clock;
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 px-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        flag.status === 'clear' ? 'bg-[var(--color-risk-low-bg)]' :
                        flag.status === 'flagged' ? 'bg-[var(--color-risk-high-bg)]' :
                        flag.status === 'active' ? 'bg-[var(--color-primary-bg)]' :
                        'bg-[var(--color-risk-medium-bg)]'
                      }`}>
                        <FlagIcon className={`w-4 h-4 ${
                          flag.status === 'clear' ? 'text-[var(--color-risk-low)]' :
                          flag.status === 'flagged' ? 'text-[var(--color-risk-high)]' :
                          flag.status === 'active' ? 'text-[var(--color-primary)]' :
                          'text-[var(--color-risk-medium)]'
                        }`} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--color-text)]">{flag.label}</p>
                        <p className="text-xs text-[var(--color-text-muted)]">{flag.description}</p>
                      </div>
                    </div>
                    <Badge variant={flag.status} size="md">{flag.status}</Badge>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Performance Chart */}
          <Card padding="lg">
            <h3 className="text-base font-semibold text-[var(--color-text)] mb-1">Asset Performance Context</h3>
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]" />
                {report.tokenSymbol}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-border)]" />
                Benchmark (BT)
              </span>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={performanceData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--color-text-muted)' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: 'var(--color-text-muted)' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    fontSize: '12px',
                  }}
                />
                <Bar dataKey="token" fill="var(--color-primary)" radius={[4, 4, 0, 0]} barSize={16} name={report.tokenSymbol} />
                <Bar dataKey="benchmark" fill="var(--color-border)" radius={[4, 4, 0, 0]} barSize={16} name="Benchmark" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Strategic Recommendation */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A1A2E] to-[#2D2B55] p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-primary-light)]">
                Final Recommendation
              </span>
            </div>
            <h3 className="text-lg font-bold mb-3">
              {report.riskLevel === 'low' ? 'Strategic Allocate' : report.riskLevel === 'medium' ? 'Monitor Closely' : 'Risk Alert'}
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-5">
              {report.riskLevel === 'low'
                ? `Asset meets all 12 institutional risk criteria for allocation within enterprise portfolios.`
                : report.riskLevel === 'medium'
                ? `Asset requires additional due diligence before portfolio inclusion. Monitor key risk indicators.`
                : `Asset exceeds acceptable risk thresholds. Not recommended for institutional portfolios.`
              }
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-gray-400">Risk Weighting</span>
              <span className="text-xs font-semibold text-white">{report.riskScore <= 30 ? '12.5%' : report.riskScore <= 60 ? '5.0%' : '0%'} Max</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 mb-5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]"
                style={{ width: `${100 - report.riskScore}%` }}
              />
            </div>
            <button
              onClick={() => setShowOnChainModal(true)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white text-sm font-semibold hover:bg-white/20 transition-colors border border-white/10"
            >
              Proceed to Allocation
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* On-Chain Button */}
          <Card padding="lg">
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-3">On-Chain Certification</h3>
            <p className="text-xs text-[var(--color-text-muted)] mb-4">
              Create an immutable record of this risk assessment on the blockchain.
            </p>
            <button
              onClick={() => setShowOnChainModal(true)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-hover)] transition-colors"
            >
              <Shield className="w-4 h-4" />
              Log to Blockchain
            </button>
          </Card>

          {/* Risk Breakdown Mini */}
          <Card padding="lg">
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4">Risk Category Breakdown</h3>
            <div className="space-y-3">
              {[
                { label: 'Contract Risk', value: report.riskBreakdown.contractRisk },
                { label: 'Liquidity Risk', value: report.riskBreakdown.liquidityRisk },
                { label: 'Ownership Risk', value: report.riskBreakdown.ownershipRisk },
                { label: 'Compliance Risk', value: report.riskBreakdown.complianceRisk },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-[var(--color-text-secondary)]">{item.label}</span>
                    <span className="text-xs font-semibold" style={{ color: getRiskColor(item.value) }}>
                      {item.value}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[var(--color-bg)]">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${item.value}%`,
                        backgroundColor: getRiskColor(item.value),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* On-Chain Modal */}
      <OnChainModal
        isOpen={showOnChainModal}
        onClose={() => setShowOnChainModal(false)}
        data={report.onChain}
        tokenName={report.tokenName}
        riskScore={report.riskScore}
      />
    </div>
  );
}
