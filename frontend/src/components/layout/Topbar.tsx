import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../../contexts/SidebarContext';
import { useTheme } from '../../contexts/ThemeContext';
import {
  Menu,
  Search,
  Moon,
  Sun,
} from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const topNavItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/reports', label: 'Reports' },
  { path: '/analyze', label: 'Assets' },
  { path: '/settings', label: 'Settings' },
];

export default function Topbar() {
  const { toggle } = useSidebar();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-30 bg-[var(--color-surface)]/95 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="flex items-center justify-between px-4 md:px-6 h-[60px]">
        {/* Left: Hamburger + Desktop Nav */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-border)] transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-5 h-5 text-[var(--color-text)]" />
          </button>

          {/* Desktop top nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {topNavItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors duration-200
                    ${
                      isActive
                        ? 'text-[var(--color-primary)] bg-[var(--color-primary-bg)]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-border)]/50'
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: Search + Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] min-w-[200px]">
            <Search className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
            <input
              type="text"
              placeholder="Search risk engine..."
              className="bg-transparent text-xs text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none w-full"
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-[var(--color-border)] transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[var(--color-text-secondary)]" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--color-text-secondary)]" />
            )}
          </button>

          {/* Connect Wallet */}
          <div className="ml-2">
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
}
