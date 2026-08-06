import { useState, useEffect, useRef } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { cn } from '../utils/cn';
import { MobileDrawer } from './MobileDrawer';
import { NAV_ITEMS } from '../../../domain/entities/NavItem';

const USER_NAME = 'Esha Dasgupta';

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isAtTop, setIsAtTop]       = useState(true);
  const [scrollDir, setScrollDir]   = useState<'up' | 'down'>('up');
  const [hovered, setHovered]       = useState(false);
  const lastScrollY                 = useRef(0);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsAtTop(y <= 20);
      if (Math.abs(y - lastScrollY.current) > 4) {
        setScrollDir(y > lastScrollY.current ? 'down' : 'up');
        lastScrollY.current = y;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const expanded = isAtTop || scrollDir === 'up' || hovered;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 flex justify-center pt-5 px-4">
        <nav
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={cn(
            'flex items-center gap-1 px-3 py-1 rounded-full transition-all duration-500',
            'bg-white/82 backdrop-blur-2xl border border-white/60',
          )}
        >
          {/* Avatar + name — always visible */}
          <Link
            to="/"
            className="flex items-center gap-2.5 py-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors tracking-tight shrink-0"
          >
            <img
              src="/profile_picture.jpeg"
              alt="Logo"
              className="w-8 h-8 rounded-full object-cover rotate-y-180"
            />
            {USER_NAME}
          </Link>

          <div
            className={cn(
              'hidden md:block w-px h-4 bg-border-mid mx-2 shrink-0 transition-all duration-500',
              !expanded && 'opacity-0'
            )}
          />

          <div
            className={cn(
              'hidden md:flex items-center gap-0.5 overflow-hidden transition-all duration-500',
              expanded ? 'max-w-sm opacity-100' : 'max-w-0 opacity-0 pointer-events-none'
            )}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'px-3 py-1.5 text-sm transition-all duration-200 whitespace-nowrap',
                    isActive
                      ? 'font-semibold text-primary'
                      : 'font-medium text-secondary hover:text-primary hover:bg-black/5 rounded-full'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div
            className={cn(
              'hidden md:flex items-center gap-1 overflow-hidden transition-all duration-500 shrink-0',
              !expanded ? 'max-w-11 opacity-100 pr-2' : 'max-w-0 opacity-0 pointer-events-none pr-0'
            )}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-muted" />
            <span className="w-1.5 h-1.5 rounded-full bg-muted" />
            <span className="w-1.5 h-1.5 rounded-full bg-muted" />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-1 mr-1 p-2 rounded-full hover:bg-black/5 transition-colors"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M0 1H16M0 6H16M0 11H16" stroke="currentColor" className="text-primary" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </header>

      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navItems={NAV_ITEMS}
        userName={USER_NAME}
      />
    </>
  );
}
