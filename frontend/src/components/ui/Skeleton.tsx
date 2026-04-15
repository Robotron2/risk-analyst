interface SkeletonProps {
  className?: string;
  count?: number;
}

export function SkeletonLine({ className = '' }: SkeletonProps) {
  return <div className={`skeleton h-4 rounded ${className}`} />;
}

export function SkeletonCard() {
  return (
    <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-5 space-y-3">
      <div className="skeleton h-8 w-20 rounded-lg" />
      <div className="skeleton h-5 w-32 rounded" />
      <div className="skeleton h-3 w-24 rounded" />
    </div>
  );
}

export function SkeletonTable({ rows = 4 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      <div className="flex gap-4 px-4 py-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="skeleton h-4 flex-1 rounded" />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-4 px-4 py-4 border-t border-[var(--color-border)]">
          {[1, 2, 3, 4, 5].map((j) => (
            <div key={j} className="skeleton h-4 flex-1 rounded" />
          ))}
        </div>
      ))}
    </div>
  );
}

export function SkeletonChart() {
  return (
    <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-5">
      <div className="skeleton h-5 w-40 rounded mb-4" />
      <div className="skeleton h-48 w-full rounded-lg" />
    </div>
  );
}
