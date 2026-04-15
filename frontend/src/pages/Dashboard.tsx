import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Shield,
  AlertTriangle,
  Activity,
  Eye,
  ChevronRight,
  Zap,
  DollarSign,
  Search,
  Download,
  Filter,
  Clock
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge, { RiskScoreBadge } from '../components/ui/Badge';
import {
  mockDashboardMetrics,
  usageOverTimeData,
  marketVolatilityData,
  mockActivities,
} from '../data/mockData';
import { useReports } from '../contexts/ReportContext';

export default function Dashboard() {
  const { history } = useReports();
  const metrics = mockDashboardMetrics;

  const [activeView, setActiveView] = useState<'realtime' | 'history'>('realtime');
  
  // Reports table generic state
  const [showFilter, setShowFilter] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredActivities = mockActivities.filter(a => 
    a.tokenName.toLowerCase().includes(filterText.toLowerCase()) || 
    a.address.toLowerCase().includes(filterText.toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(filteredActivities.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleActivities = filteredActivities.slice(startIndex, startIndex + itemsPerPage);

  const prevPage = () => setCurrentPage(p => Math.max(1, p - 1));
  const nextPage = () => setCurrentPage(p => Math.min(totalPages, p + 1));

  const handleExport = () => {
    const tableElement = document.getElementById('institutional-reports-table');
    if (!tableElement) return;

    if (!(window as any).html2pdf) {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
      script.onload = () => {
        (window as any).html2pdf().from(tableElement).save("institutional_reports.pdf");
      };
      document.head.appendChild(script);
    } else {
      (window as any).html2pdf().from(tableElement).save("institutional_reports.pdf");
    }
  };

  const metricCards = [
    {
      label: 'Total Analyses',
      value: metrics.totalAnalyses.toLocaleString(),
      change: '+12% ↑',
      icon: Activity,
      color: 'var(--color-risk-low)',
      bgColor: 'var(--color-risk-low-bg)',
    },
    {
      label: 'Average Risk Score',
      value: metrics.averageRiskScore.toString(),
      suffix: '/100',
      icon: Shield,
      color: 'var(--color-risk-medium)',
      bgColor: 'var(--color-risk-medium-bg)',
    },
    {
      label: 'Critical Alerts',
      value: '0' + metrics.criticalAlerts.toString(),
      icon: AlertTriangle,
      color: 'var(--color-risk-high)',
      bgColor: 'var(--color-risk-high-bg)',
    },
    {
      label: 'TVL Monitored',
      value: metrics.totalValueMonitored,
      icon: DollarSign,
      color: 'var(--color-risk-low)',
      bgColor: 'var(--color-risk-low-bg)',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text)]">Institutional Dashboard</h1>
          <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">
            Real-time risk assessment for Tokenized Real World Assets.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setActiveView('realtime')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${activeView === 'realtime' ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--color-bg)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:bg-[var(--color-border)]'}`}
          >
            Real-time
          </button>
          <button 
            onClick={() => setActiveView('history')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${activeView === 'history' ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--color-bg)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:bg-[var(--color-border)]'}`}
          >
            History
          </button>
        </div>
      </div>

      {activeView === 'history' ? (
        <Card padding="lg">
          <div className="flex items-center gap-2 mb-5">
            <Clock className="w-5 h-5 text-[var(--color-primary)]" />
            <h2 className="text-lg font-semibold text-[var(--color-text)]">Your Recent History</h2>
          </div>
          <div className="space-y-3">
            {history.slice(0, 5).map((entry, index) => (
              <div key={entry.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-[var(--color-border)]/50 hover:bg-[var(--color-bg)] transition-colors animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-bg)] flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-[var(--color-primary)]">
                      {entry.tokenName.split(' ').map(w => w[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-[var(--color-text)]">{entry.tokenName}</p>
                      {entry.cached && (
                        <Badge variant="cached">Cached</Badge>
                      )}
                    </div>
                    <p className="text-xs font-mono text-[var(--color-text-muted)] mt-0.5">
                      {entry.contractAddress.slice(0, 10)}...{entry.contractAddress.slice(-8)}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/report/${entry.reportId}`}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary-bg)] transition-colors whitespace-nowrap"
                >
                  <Eye className="w-3 h-3" />
                  View Tracked Details
                </Link>
              </div>
            ))}
            {history.length === 0 && (
              <p className="text-sm text-[var(--color-text-muted)] p-4 text-center">No tracked history yet.</p>
            )}
            <div className="pt-2">
              <Link to="/history" className="text-xs font-medium text-[var(--color-primary)] hover:underline inline-flex items-center gap-1">
                View All History <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </Card>
      ) : (
        <>
          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metricCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.label} hover>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] font-medium">
                        {card.label}
                      </p>
                      <p className="text-2xl font-bold text-[var(--color-text)] mt-2">
                        {card.value}
                        {card.suffix && (
                          <span className="text-sm text-[var(--color-text-muted)] ml-0.5">{card.suffix}</span>
                        )}
                      </p>
                      {card.change && (
                        <p className="text-xs text-[var(--color-risk-low)] font-medium mt-1">{card.change}</p>
                      )}
                    </div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: card.bgColor }}
                    >
                      <Icon className="w-5 h-5" style={{ color: card.color }} />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Reports Table */}
          <Card padding="lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-5 gap-3">
              <h2 className="text-base font-semibold text-[var(--color-text)]">Recent Institutional Reports</h2>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setShowFilter(!showFilter)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs transition-colors ${showFilter ? 'bg-[var(--color-primary-bg)] text-[var(--color-primary)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-border)]'}`}
                >
                  <Filter className="w-3.5 h-3.5" />
                  Filter
                </button>
                <button 
                  onClick={handleExport}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-border)] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Export
                </button>
              </div>
            </div>

            {showFilter && (
              <div className="mb-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
                <Search className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                <input
                  type="text"
                  placeholder="Filter by token name or address..."
                  value={filterText}
                  onChange={(e) => {
                    setFilterText(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="bg-transparent text-xs text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none w-full"
                />
              </div>
            )}

            {/* Table */}
            <div className="overflow-x-auto">
              <table id="institutional-reports-table" className="w-full">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="text-left py-3 px-3 text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">Asset Name</th>
                    <th className="text-left py-3 px-3 text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">Type</th>
                    <th className="text-left py-3 px-3 text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">Risk Score</th>
                    <th className="text-left py-3 px-3 text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">Status</th>
                    <th className="text-left py-3 px-3 text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">Last Updated</th>
                    <th className="text-left py-3 px-3 text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleActivities.map((item) => (
                    <tr key={item.id} className="border-b border-[var(--color-border)]/50 hover:bg-[var(--color-bg)] transition-colors">
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-bg)] flex items-center justify-center min-w-[32px]">
                            <span className="text-xs font-bold text-[var(--color-primary)]">
                              {item.tokenName.split(' ').map(w => w[0]).join('').slice(0, 2)}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-[var(--color-text)] truncate">{item.tokenName}</p>
                            <p className="text-[11px] text-[var(--color-text-muted)] truncate">{item.address}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-sm text-[var(--color-text-secondary)] whitespace-nowrap">
                        {item.riskLevel === 'low' ? 'Sovereign Debt' : item.riskLevel === 'medium' ? 'Real Estate' : 'Corporate Debt'}
                      </td>
                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <RiskScoreBadge score={item.riskScore} />
                      </td>
                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <Badge variant={item.status}>{item.status === 'verified' ? 'Verified' : item.status === 'under_review' ? 'Under Review' : 'Warning'}</Badge>
                      </td>
                      <td className="py-3.5 px-3 text-sm text-[var(--color-text-secondary)] whitespace-nowrap">
                        {item.date}
                      </td>
                      <td className="py-3.5 px-3">
                        <Link
                          to={`/report/rpt-00${mockActivities.indexOf(item) + 1}`}
                          className="p-1.5 rounded-lg hover:bg-[var(--color-border)] transition-colors inline-block"
                        >
                          <Eye className="w-4 h-4 text-[var(--color-text-muted)]" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                  {visibleActivities.length === 0 && (
                    <tr>
                      <td colSpan={6} className="text-center py-6 text-sm text-[var(--color-text-muted)]">
                        No reports match your filter criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--color-border)]">
              <p className="text-xs text-[var(--color-text-muted)]">
                Showing {filteredActivities.length > 0 ? startIndex + 1 : 0}-
                {Math.min(startIndex + itemsPerPage, filteredActivities.length)} of {filteredActivities.length} reports
              </p>
              <div className="flex items-center gap-1">
                <button 
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="px-2 py-1 text-xs text-[var(--color-text-muted)] hover:bg-[var(--color-border)] disabled:opacity-50 disabled:hover:bg-transparent rounded transition-colors"
                >‹</button>
                <button className="px-2.5 py-1 text-xs font-semibold text-white bg-[var(--color-primary)] rounded">
                  {currentPage}
                </button>
                <button 
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 text-xs text-[var(--color-text-muted)] hover:bg-[var(--color-border)] disabled:opacity-50 disabled:hover:bg-transparent rounded transition-colors"
                >›</button>
              </div>
            </div>
          </Card>

          {/* Bottom Section: Charts + AI Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Market Volatility Chart */}
            <Card padding="lg" className="lg:col-span-3">
              <div className="mb-4">
                <h3 className="text-base font-semibold text-[var(--color-text)]">Market Volatility Index</h3>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                  Global treasury yield fluctuations impacting RWA collateral efficiency.
                </p>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={marketVolatilityData} barSize={32}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis
                    dataKey="day"
                    tick={{ fontSize: 11, fill: 'var(--color-text-muted)' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: 'var(--color-text-muted)' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '12px',
                      fontSize: '12px',
                    }}
                  />
                  <Bar dataKey="index" fill="var(--color-primary)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* AI Insights Panel */}
            <Card padding="lg" className="lg:col-span-2 bg-gradient-to-br from-[#1A1A2E] to-[#2D2B55] border-0 !text-white">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-3.5 h-3.5 text-[var(--color-primary-light)]" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-primary-light)]">AI Insights</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Predictive Liquidity Model</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                Secondary markets for Real Estate tokens are showing increased depth. Re-evaluating risk weights for RE portfolio components.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Risk Weighting</span>
                  <span className="text-xs font-semibold text-white">12.5% Max</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]" style={{ width: '65%' }} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-gray-400">Model v4.2 Deployment</span>
                <button className="flex items-center gap-1 text-xs font-semibold text-white hover:text-[var(--color-primary-light)] transition-colors">
                  Full Analysis
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Card>
          </div>

          {/* Usage Over Time */}
          <Card padding="lg">
            <h3 className="text-base font-semibold text-[var(--color-text)] mb-4">Analysis Activity</h3>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={usageOverTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11, fill: 'var(--color-text-muted)' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: 'var(--color-text-muted)' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    fontSize: '12px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="analyses"
                  stroke="var(--color-primary)"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: 'var(--color-primary)', strokeWidth: 2, stroke: 'var(--color-surface)' }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </>
      )}
    </div>
  );
}
