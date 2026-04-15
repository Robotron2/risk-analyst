import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export default function Card({ children, className = '', padding = 'md', hover = false }: CardProps) {
  const paddingMap = {
    sm: 'p-4',
    md: 'p-5',
    lg: 'p-6',
  };

  return (
    <div
      className={`
        bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)]
        shadow-[var(--shadow-sm)]
        ${hover ? 'hover:shadow-[var(--shadow-md)] hover:border-[var(--color-primary)]/20 transition-all duration-200 cursor-pointer' : ''}
        ${paddingMap[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
