import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Eye, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge, { RiskScoreBadge } from '../components/ui/Badge';
import { useReports } from '../contexts/ReportContext';
import type { RiskLevel } from '../types';

export default function RiskReports() {
  const { reports } = useReports();
  const [searchQuery, setSearchQuery] = useState('');
  const [riskFilter, setRiskFilter] = useState<RiskLevel | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  const filtered = useMemo(() => {
    return reports.filter((r) => {
      const matchesSearch =
        r.tokenName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.contractAddress.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRisk = riskFilter === 'all' || r.riskLevel === riskFilter;
      return matchesSearch && matchesRisk;
    });
  }, [reports, searchQuery, riskFilter]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text)]">Risk Reports</h1>
          <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">
            All analyzed tokens and their risk assessments
          </p>
        </div>
        <Link
          to="/analyze"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          + New Analysis
        </Link>
      </div>

      {/* Filters */}
      <Card padding="md">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search */}
          <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
            <Search className="w-4 h-4 text-[var(--color-text-muted)]" />
            <input
              type="text"
              placeholder="Search by token name or address..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-transparent text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none"
            />
          </div>

          {/* Risk Filter */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[var(--color-text-muted)]" />
            {(['all', 'low', 'medium', 'high'] as const).map((level) => (
              <button
                key={level}
                onClick={() => {
                  setRiskFilter(level);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  riskFilter === level
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Table */}
      <Card padding="sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">Token</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">Address</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">Network</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">Risk Score</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">Status</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">Date</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((report) => (
                <tr key={report.id} className="border-b border-[var(--color-border)]/50 hover:bg-[var(--color-bg)] transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-bg)] flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-[var(--color-primary)]">
                          {report.tokenSymbol.slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--color-text)]">{report.tokenName}</p>
                        <p className="text-[11px] text-[var(--color-text-muted)]">{report.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-xs font-mono text-[var(--color-text-secondary)]">
                      {report.contractAddress.slice(0, 6)}...{report.contractAddress.slice(-4)}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-sm text-[var(--color-text-secondary)]">
                    {report.network}
                  </td>
                  <td className="py-3.5 px-4">
                    <RiskScoreBadge score={report.riskScore} />
                  </td>
                  <td className="py-3.5 px-4">
                    <Badge variant={report.status}>{report.status}</Badge>
                  </td>
                  <td className="py-3.5 px-4 text-sm text-[var(--color-text-secondary)]">
                    {new Date(report.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </td>
                  <td className="py-3.5 px-4">
                    <Link
                      to={`/report/${report.id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary-bg)] transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View
                    </Link>
                  </td>
                </tr>
              ))}
              {paginated.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-sm text-[var(--color-text-muted)]">
                    No reports found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-[var(--color-border)]">
            <p className="text-xs text-[var(--color-text-muted)]">
              Showing {((currentPage - 1) * perPage) + 1}-{Math.min(currentPage * perPage, filtered.length)} of {filtered.length}
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-1.5 rounded-lg hover:bg-[var(--color-border)] transition-colors disabled:opacity-30"
              >
                <ChevronLeft className="w-4 h-4 text-[var(--color-text-muted)]" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                    page === currentPage
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'text-[var(--color-text-muted)] hover:bg-[var(--color-border)]'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-1.5 rounded-lg hover:bg-[var(--color-border)] transition-colors disabled:opacity-30"
              >
                <ChevronRight className="w-4 h-4 text-[var(--color-text-muted)]" />
              </button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
