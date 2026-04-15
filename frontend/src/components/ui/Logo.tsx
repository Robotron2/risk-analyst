interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const dimensions = {
    sm: { icon: 28, text: 'text-[13px]' },
    md: { icon: 34, text: 'text-[15px]' },
    lg: { icon: 44, text: 'text-xl' },
  };

  const { icon, text } = dimensions[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bar chart bars */}
        <rect x="20" y="120" width="30" height="60" rx="6" fill="#2563EB" />
        <rect x="60" y="85" width="30" height="95" rx="6" fill="#4F46E5" />
        <rect x="100" y="55" width="30" height="125" rx="6" fill="#2563EB" />
        <rect x="140" y="95" width="30" height="85" rx="6" fill="#06B6D4" />

        {/* Line graph */}
        <polyline
          points="35,105 75,70 115,40 155,55"
          stroke="#0F172A"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="dark:stroke-[#E8E8F0]"
        />

        {/* Data points */}
        <circle cx="35" cy="105" r="8" fill="#4F46E5" />
        <circle cx="75" cy="70" r="8" fill="#2563EB" />
        <circle cx="115" cy="40" r="8" fill="#06B6D4" />
        <circle cx="155" cy="55" r="8" fill="#06B6D4" />
      </svg>

      {showText && (
        <div className="leading-tight">
          <h1 className={`font-bold text-[var(--color-text)] ${text}`}>
            <span className="text-[#0F172A] dark:text-[#E8E8F0]">Risk </span>
            <span className="text-[#2563EB]">Analyst</span>
          </h1>
        </div>
      )}
    </div>
  );
}
