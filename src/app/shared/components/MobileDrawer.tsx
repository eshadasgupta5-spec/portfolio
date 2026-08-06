import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { cn } from '../utils/cn';
import type { NavItem } from '../../../domain/entities/NavItem';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  userName: string;
}

export function MobileDrawer({ isOpen, onClose, navItems, userName }: MobileDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-[280px] bg-surface shadow-2xl transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <Link to="/" onClick={onClose} className="font-semibold text-primary text-sm tracking-tight">
              {userName}
            </Link>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
              aria-label="Close menu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" className="text-primary" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className="text-2xl font-medium text-primary hover:text-secondary transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="mt-auto">
            <p className="text-xs text-muted">Available for new projects</p>
            <a
              href="mailto:esha@example.com"
              className="text-sm font-medium text-primary mt-1 block hover:text-secondary transition-colors"
            >
              esha@example.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
