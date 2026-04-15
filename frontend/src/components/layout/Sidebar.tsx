import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../../contexts/SidebarContext';
import {
  LayoutDashboard,
  Search,
  FileText,
  Clock,
  Settings,
  Shield,
  X,
} from 'lucide-react';

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/analyze', label: 'Assets', icon: Search },
  { path: '/reports', label: 'Reports', icon: FileText },
  { path: '/history', label: 'History', icon: Clock },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  const { isOpen, close } = useSidebar();
  const location = useLocation();

  return (
    <>
      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300"
          onClick={close}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-50
          w-[260px] bg-[var(--color-sidebar-bg)] border-r border-[var(--color-border)]
          flex flex-col
          transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:z-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-[var(--color-border)]">
          <Link to="/" onClick={close} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[var(--color-primary)] flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-[15px] font-bold text-[var(--color-text)] leading-tight">
                RWA Risk Analyzer
              </h1>
            </div>
          </Link>
          <button
            onClick={close}
            className="lg:hidden p-1.5 rounded-lg hover:bg-[var(--color-border)] transition-colors"
          >
            <X className="w-5 h-5 text-[var(--color-text-secondary)]" />
          </button>
        </div>

        {/* Risk Engine Badge */}
        <div className="px-5 py-4">
          <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[var(--color-primary-bg)] border border-[var(--color-primary)]/20">
            <div className="w-7 h-7 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <Shield className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--color-primary)]">Risk Engine</p>
              <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">Enterprise Tier</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 pb-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={close}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? 'bg-[var(--color-sidebar-active)] text-[var(--color-primary)] border-l-3 border-[var(--color-primary)]'
                      : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]/50 hover:text-[var(--color-text)]'
                  }
                `}
              >
                <Icon className={`w-[18px] h-[18px] ${isActive ? 'text-[var(--color-primary)]' : ''}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Analyze Asset CTA */}
        <div className="px-4 pb-5">
          <Link
            to="/analyze"
            onClick={close}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-hover)] transition-colors shadow-md"
          >
            <Search className="w-4 h-4" />
            Analyze Asset
          </Link>
        </div>
      </aside>
    </>
  );
}
