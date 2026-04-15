import type { RiskLevel, ReportStatus, FlagStatus } from '../../types';

interface BadgeProps {
  variant: RiskLevel | ReportStatus | FlagStatus | 'cached' | 'new';
  children: React.ReactNode;
  size?: 'sm' | 'md';
}

const variantStyles: Record<string, string> = {
  low: 'bg-[var(--color-risk-low-bg)] text-[var(--color-risk-low)] border-[var(--color-risk-low)]/20',
  medium: 'bg-[var(--color-risk-medium-bg)] text-[#B8860B] border-[var(--color-risk-medium)]/30',
  high: 'bg-[var(--color-risk-high-bg)] text-[var(--color-risk-high)] border-[var(--color-risk-high)]/20',
  verified: 'bg-[var(--color-risk-low-bg)] text-[var(--color-risk-low)] border-[var(--color-risk-low)]/20',
  under_review: 'bg-[var(--color-risk-medium-bg)] text-[#B8860B] border-[var(--color-risk-medium)]/30',
  warning: 'bg-[var(--color-risk-high-bg)] text-[var(--color-risk-high)] border-[var(--color-risk-high)]/20',
  pending: 'bg-[var(--color-risk-medium-bg)] text-[#B8860B] border-[var(--color-risk-medium)]/30',
  clear: 'bg-[var(--color-risk-low-bg)] text-[var(--color-risk-low)] border-[var(--color-risk-low)]/20',
  active: 'bg-[var(--color-primary-bg)] text-[var(--color-primary)] border-[var(--color-primary)]/20',
  flagged: 'bg-[var(--color-risk-high-bg)] text-[var(--color-risk-high)] border-[var(--color-risk-high)]/20',
  cached: 'bg-[var(--color-primary-bg)] text-[var(--color-primary)] border-[var(--color-primary)]/20',
  new: 'bg-[var(--color-risk-low-bg)] text-[var(--color-risk-low)] border-[var(--color-risk-low)]/20',
};

const labelMap: Record<string, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
  verified: 'Verified',
  under_review: 'Under Review',
  warning: 'Warning',
  pending: 'Pending',
  clear: 'Clear',
  active: 'Active',
  flagged: 'Flagged',
  cached: 'Cached',
  new: 'New',
};

export default function Badge({ variant, children, size = 'sm' }: BadgeProps) {
  const sizeStyles = size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs';

  return (
    <span
      className={`
        inline-flex items-center gap-1 rounded-full font-semibold uppercase tracking-wider border
        ${sizeStyles}
        ${variantStyles[variant] || variantStyles.pending}
      `}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${
        variant === 'low' || variant === 'verified' || variant === 'clear' ? 'bg-[var(--color-risk-low)]' :
        variant === 'high' || variant === 'warning' || variant === 'flagged' ? 'bg-[var(--color-risk-high)]' :
        variant === 'cached' || variant === 'active' ? 'bg-[var(--color-primary)]' :
        'bg-[var(--color-risk-medium)]'
      }`} />
      {children || labelMap[variant]}
    </span>
  );
}

export function RiskScoreBadge({ score }: { score: number }) {
  const level: RiskLevel = score <= 30 ? 'low' : score <= 60 ? 'medium' : 'high';
  const color = level === 'low' ? 'var(--color-risk-low)' : level === 'medium' ? 'var(--color-risk-medium)' : 'var(--color-risk-high)';

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border"
      style={{
        backgroundColor: `${color}15`,
        color: level === 'medium' ? '#B8860B' : color,
        borderColor: `${color}30`,
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
      {score} {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  );
}
