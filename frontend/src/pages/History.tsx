import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Search, Database, ExternalLink, Zap } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { useReports } from '../contexts/ReportContext';

export default function History() {
  const { history } = useReports();
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = history.filter(
    (h) =>
      h.tokenName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.contractAddress.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text)]">Search History</h1>
          <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">
            Your recent queries and cached analysis results
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
          <Database className="w-3.5 h-3.5" />
          <span>{history.filter((h) => h.cached).length} cached results available</span>
        </div>
      </div>

      {/* Search */}
      <Card padding="md">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
          <Search className="w-4 h-4 text-[var(--color-text-muted)]" />
          <input
            type="text"
            placeholder="Search history by name or address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none"
          />
        </div>
      </Card>

      {/* Smart Cache Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-[var(--color-primary-bg)] to-[var(--color-surface)] border border-[var(--color-primary)]/20">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">Smart Cache Active</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
              Previously analyzed contracts are instantly available. Cached results are served from our database for faster access and reduced compute costs.
            </p>
          </div>
        </div>
      </div>

      {/* History List */}
      <div className="space-y-3">
        {filtered.map((entry, index) => (
          <div key={entry.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
            <Card hover padding="md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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
                    {!entry.cached && (
                      <Badge variant="new">New</Badge>
                    )}
                  </div>
                  <p className="text-xs font-mono text-[var(--color-text-muted)] mt-0.5">
                    {entry.contractAddress.slice(0, 10)}...{entry.contractAddress.slice(-8)}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[11px] text-[var(--color-text-muted)]">{entry.network}</span>
                    <span className="text-[11px] text-[var(--color-text-muted)]">•</span>
                    <span className="flex items-center gap-1 text-[11px] text-[var(--color-text-muted)]">
                      <Clock className="w-3 h-3" />
                      {formatDate(entry.timestamp)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:flex-shrink-0">
                {entry.cached && (
                  <span className="text-[10px] text-[var(--color-risk-low)] font-medium">
                    ⚡ Instant Fetch
                  </span>
                )}
                <Link
                  to={`/report/${entry.reportId}`}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary-bg)] transition-colors"
                >
                  View Report
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
              </div>
            </Card>
          </div>
        ))}

        {filtered.length === 0 && (
          <Card padding="lg" className="text-center">
            <div className="py-8">
              <Clock className="w-10 h-10 text-[var(--color-text-muted)] mx-auto mb-3" />
              <p className="text-sm text-[var(--color-text-muted)]">No history found</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Start by analyzing a token</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
