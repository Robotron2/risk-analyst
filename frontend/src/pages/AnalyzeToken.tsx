import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shield,
  FileText,
  Search,
  CheckCircle,
  Database,
  Scale,
  Loader2,
  AlertTriangle,
  RefreshCw,
  ArrowRight,
  Zap,
  Lock,
  Activity,
} from 'lucide-react';
import Card from '../components/ui/Card';
import { useReports } from '../contexts/ReportContext';
import { useAnalysis } from '../contexts/AnalysisContext';
import { supportedNetworks } from '../data/mockData';

const analysisSteps = [
  { label: 'Scanning smart contract', icon: Lock },
  { label: 'Evaluating liquidity depth', icon: Activity },
  { label: 'Running compliance checks', icon: Shield },
  { label: 'Generating AI risk summary', icon: Zap },
];

export default function AnalyzeToken() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [tokenName, setTokenName] = useState('');
  const [notes, setNotes] = useState('');
  const [network, setNetwork] = useState('hashkey');
  const [formError, setFormError] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const { addHistoryEntry } = useReports();
  const {
    status,
    currentToken,
    analysisData,
    error: analysisError,
    startAnalysis,
    resetAnalysis,
    fetchFallbackReport,
  } = useAnalysis();

  const isValidAddress = (addr: string) => /^0x[a-fA-F0-9]{40}$/.test(addr);

  // Animate processing steps
  useEffect(() => {
    if (status !== 'processing') {
      setActiveStep(0);
      return;
    }
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < analysisSteps.length - 1 ? prev + 1 : prev));
    }, 2500);
    return () => clearInterval(interval);
  }, [status]);

  // REST fallback on page load if we have a token in processing
  useEffect(() => {
    if (currentToken && status === 'processing') {
      const timer = setTimeout(() => {
        fetchFallbackReport(currentToken);
      }, 15000); // fallback after 15s
      return () => clearTimeout(timer);
    }
  }, [currentToken, status, fetchFallbackReport]);

  // When analysis completes, add to history
  useEffect(() => {
    if (status === 'completed' && currentToken && analysisData) {
      addHistoryEntry({
        id: `hist-${Date.now()}`,
        contractAddress: currentToken,
        tokenName: tokenName || `Token ${currentToken.slice(0, 8)}`,
        network,
        timestamp: new Date().toISOString(),
        cached: false,
        reportId: currentToken,
      });
    }
  }, [status]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!tokenAddress) {
      setFormError('Contract address is required');
      return;
    }

    if (!isValidAddress(tokenAddress)) {
      setFormError('Invalid contract address format. Must be 0x followed by 40 hex characters.');
      return;
    }

    await startAnalysis(tokenAddress, network);
  };

  const handleRetry = () => {
    if (currentToken) {
      startAnalysis(currentToken, network);
    }
  };

  const handleNewAnalysis = () => {
    resetAnalysis();
    setTokenAddress('');
    setTokenName('');
    setNotes('');
  };

  const getRiskColor = (level: string) => {
    if (level === 'Low') return 'var(--color-risk-low)';
    if (level === 'Medium') return 'var(--color-risk-medium)';
    return 'var(--color-risk-high)';
  };

  // ---- PROCESSING STATE ----
  if (status === 'processing') {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-3 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-primary-bg)] border border-[var(--color-primary)]/20">
            <Loader2 className="w-3 h-3 animate-spin text-[var(--color-primary)]" />
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-primary)]">
              Analysis In Progress
            </span>
          </div>
          <h1 className="text-3xl font-bold text-[var(--color-text)]">Analyzing Token</h1>
          <p className="text-sm text-[var(--color-text-secondary)] max-w-md mx-auto">
            Our AI engine is performing a comprehensive institutional-grade risk assessment.
          </p>
        </div>

        <Card padding="lg">
          <div className="space-y-4">
            {/* Token info */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-bg)] flex items-center justify-center">
                <Shield className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--color-text)] truncate">
                  {tokenName || `Token ${tokenAddress.slice(0, 8)}...`}
                </p>
                <p className="text-[11px] font-mono text-[var(--color-text-muted)] truncate">
                  {tokenAddress}
                </p>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-3 py-2">
              {analysisSteps.map((step, i) => {
                const StepIcon = step.icon;
                const isActive = i === activeStep;
                const isComplete = i < activeStep;
                return (
                  <div
                    key={step.label}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-500 ${
                      isActive
                        ? 'bg-[var(--color-primary-bg)] border border-[var(--color-primary)]/30'
                        : isComplete
                        ? 'bg-[var(--color-risk-low-bg)] border border-transparent'
                        : 'bg-[var(--color-bg)] border border-transparent opacity-40'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[var(--color-primary)]'
                          : isComplete
                          ? 'bg-[var(--color-risk-low)]'
                          : 'bg-[var(--color-border)]'
                      }`}
                    >
                      {isActive ? (
                        <Loader2 className="w-4 h-4 text-white animate-spin" />
                      ) : isComplete ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : (
                        <StepIcon className="w-4 h-4 text-[var(--color-text-muted)]" />
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        isActive
                          ? 'text-[var(--color-primary)]'
                          : isComplete
                          ? 'text-[var(--color-risk-low)]'
                          : 'text-[var(--color-text-muted)]'
                      }`}
                    >
                      {step.label}
                      {isActive && '...'}
                      {isComplete && ' ✓'}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="w-full h-1.5 rounded-full bg-[var(--color-border)]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] transition-all duration-1000 ease-out"
                style={{ width: `${((activeStep + 1) / analysisSteps.length) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-center text-[var(--color-text-muted)]">
              Step {activeStep + 1} of {analysisSteps.length} — Results will appear automatically
            </p>
          </div>
        </Card>
      </div>
    );
  }

  // ---- COMPLETED STATE ----
  if (status === 'completed' && analysisData) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-3 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-risk-low-bg)] border border-[var(--color-risk-low)]/20">
            <CheckCircle className="w-3 h-3 text-[var(--color-risk-low)]" />
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-risk-low)]">
              Analysis Complete
            </span>
          </div>
          <h1 className="text-3xl font-bold text-[var(--color-text)]">Risk Assessment Ready</h1>
        </div>

        {/* Risk Score Card */}
        <Card padding="lg">
          <div className="flex flex-col items-center py-4">
            <div className="relative w-32 h-32 mb-4">
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" fill="none" stroke="var(--color-border)" strokeWidth="8" />
                <circle
                  cx="60" cy="60" r="52"
                  fill="none"
                  stroke={getRiskColor(analysisData.risk_level)}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${(analysisData.risk_score / 100) * 327} 327`}
                  transform="rotate(-90 60 60)"
                  className="transition-all duration-1000 ease-out"
                />
                <text x="60" y="55" textAnchor="middle" className="text-3xl font-bold" fill="var(--color-text)">
                  {analysisData.risk_score}
                </text>
                <text x="60" y="72" textAnchor="middle" className="text-xs" fill={getRiskColor(analysisData.risk_level)}>
                  {analysisData.risk_level}
                </text>
                <text x="60" y="85" textAnchor="middle" className="text-[9px]" fill="var(--color-text-muted)">
                  Risk
                </text>
              </svg>
            </div>
          </div>
        </Card>

        {/* Summary */}
        <Card padding="lg">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-[var(--color-primary)]" />
            <h3 className="text-sm font-semibold text-[var(--color-text)]">AI Risk Summary</h3>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            {analysisData.summary}
          </p>
        </Card>

        {/* Compliance Flags */}
        {analysisData.compliance_flags.length > 0 && (
          <Card padding="lg">
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-3">Compliance Flags</h3>
            <div className="flex flex-col gap-2">
              {analysisData.compliance_flags.map((flag, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-[var(--color-risk-medium)] flex-shrink-0" />
                  <span className="text-xs text-[var(--color-text-secondary)]">{flag}</span>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Institutional Recommendation */}
        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A1A2E] to-[#2D2B55] p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-primary-light)]">
              Institutional Recommendation
            </span>
          </div>
          <p className="text-sm text-gray-200 leading-relaxed">
            {analysisData.institutional_recommendation}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate(`/report/${currentToken}`)}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            View Full Report
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={handleNewAnalysis}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] font-semibold text-sm hover:bg-[var(--color-border)] transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Analyze Another
          </button>
        </div>
      </div>
    );
  }

  // ---- FAILED STATE ----
  if (status === 'failed') {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-3 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-risk-high-bg)] border border-[var(--color-risk-high)]/20">
            <AlertTriangle className="w-3 h-3 text-[var(--color-risk-high)]" />
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-risk-high)]">
              Analysis Failed
            </span>
          </div>
          <h1 className="text-3xl font-bold text-[var(--color-text)]">Something Went Wrong</h1>
          <p className="text-sm text-[var(--color-text-secondary)] max-w-md mx-auto">
            {analysisError || 'The analysis could not be completed. This may be a temporary issue.'}
          </p>
        </div>

        <Card padding="lg">
          <div className="flex flex-col items-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-risk-high-bg)] flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-[var(--color-risk-high)]" />
            </div>
            <p className="text-sm text-[var(--color-text-muted)] mb-6 text-center max-w-sm">
              The backend service may be temporarily unavailable. You can retry the analysis or start a new one.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleRetry}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-hover)] transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Retry Analysis
              </button>
              <button
                onClick={handleNewAnalysis}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] text-sm font-semibold hover:bg-[var(--color-border)] transition-colors"
              >
                New Analysis
              </button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // ---- IDLE STATE (Default Form) ----
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-3 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-risk-low-bg)] border border-[var(--color-risk-low)]/20">
          <span className="w-2 h-2 rounded-full bg-[var(--color-risk-low)]" />
          <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-risk-low)]">
            Institutional Analysis Protocol
          </span>
        </div>
        <h1 className="text-3xl font-bold text-[var(--color-text)]">Analyze Token</h1>
        <p className="text-sm text-[var(--color-text-secondary)] max-w-md mx-auto leading-relaxed">
          Initiate a comprehensive risk audit for Real World Assets.
          Our engine performs smart contract validation and liquidity depth assessment.
        </p>
      </div>

      {/* Form */}
      <Card padding="lg">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Contract Address Field */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">
                Token Contract Address
              </label>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-risk-high)]">
                Required
              </span>
            </div>
            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors ${
              formError ? 'border-[var(--color-risk-high)] bg-[var(--color-risk-high-bg)]' : 'border-[var(--color-border)] bg-[var(--color-bg)] focus-within:border-[var(--color-primary)]'
            }`}>
              <Shield className="w-4 h-4 text-[var(--color-text-muted)] flex-shrink-0" />
              <input
                type="text"
                placeholder="0x..."
                value={tokenAddress }
                onChange={(e) => {
                  setTokenAddress(e.target.value);
                  setFormError('');
                }}
                className="w-full bg-transparent text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none"
              />
            </div>
            {formError && (
              <p className="text-xs text-[var(--color-risk-high)] mt-1.5">{formError}</p>
            )}
          </div>

          {/* Token Name */}
          <div>
            <label className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2 block">
              Token Name <span className="text-[var(--color-text-muted)] normal-case">(Optional)</span>
            </label>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] focus-within:border-[var(--color-primary)] transition-colors">
              <FileText className="w-4 h-4 text-[var(--color-text-muted)] flex-shrink-0" />
              <input
                type="text"
                placeholder="e.g. RealEstate-A1"
                value={tokenName}
                onChange={(e) => setTokenName(e.target.value)}
                className="w-full bg-transparent text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none"
              />
            </div>
          </div>

          {/* Network Selector */}
          <div>
            <label className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2 block">
              Network
            </label>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] focus-within:border-[var(--color-primary)] transition-colors">
              <Search className="w-4 h-4 text-[var(--color-text-muted)] flex-shrink-0" />
              <select
                value={network}
                onChange={(e) => setNetwork(e.target.value)}
                className="w-full bg-transparent text-sm text-[var(--color-text)] outline-none cursor-pointer appearance-none"
              >
                {supportedNetworks.map((net) => (
                  <option key={net.id} value={net.id}>
                    {net.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Analysis Notes */}
          <div>
            <label className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-2 block">
              Analysis Notes <span className="text-[var(--color-text-muted)] normal-case">(Optional)</span>
            </label>
            <div className="flex items-start gap-3 px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] focus-within:border-[var(--color-primary)] transition-colors">
              <FileText className="w-4 h-4 text-[var(--color-text-muted)] flex-shrink-0 mt-0.5" />
              <textarea
                placeholder="Context for this audit..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full bg-transparent text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] hover:shadow-lg"
          >
            <Shield className="w-4 h-4" />
            Run Risk Analysis
          </button>
        </form>
      </Card>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: CheckCircle, label: 'Secure Protocol', desc: 'End-to-end encryption' },
          { icon: Database, label: 'Synced Data', desc: 'Real-time ledger access' },
          { icon: Scale, label: 'Compliance Ready', desc: 'Regulatory frameworks' },
        ].map((badge) => {
          const Icon = badge.icon;
          return (
            <div key={badge.label} className="flex items-center gap-2 py-2">
              <Icon className="w-4 h-4 text-[var(--color-risk-low)] flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[var(--color-text)]">{badge.label}</p>
                <p className="text-[10px] text-[var(--color-text-muted)]">{badge.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
