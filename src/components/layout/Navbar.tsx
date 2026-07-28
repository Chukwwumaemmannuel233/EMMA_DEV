import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { site, navLinks } from '@/data/portfolio';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { Menu, X } from 'lucide-react';

/**
 * Shared top navigation, reused across every route. Built from Design 1's
 * header — Design 2's duplicate header is intentionally not used, per the
 * "one reusable Navbar" instruction.
 */
export default function Navbar() {
  const location = useLocation();
  const scrollToSection = useScrollToSection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.href.replace('#', '')));

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 h-16">
      <nav className="flex justify-between items-center max-w-[1200px] mx-auto px-margin-mobile md:px-gutter h-full">
        <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
          <span
            className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-headline-md font-bold"
            aria-hidden="true"
          >
            {site.logoInitial}
          </span>
          <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
            {site.name}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = isHome && activeId === id;
            return (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={
                  isActive
                    ? 'font-label-md text-label-md text-primary font-bold border-b border-primary pb-1 transition-all'
                    : 'font-label-md text-label-md text-on-surface-variant font-medium hover:text-primary transition-colors duration-300'
                }
                aria-current={isActive ? 'true' : undefined}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={site.resumeHref}
            download
            className="hidden sm:inline-flex bg-primary text-on-primary-fixed px-6 py-2 rounded-lg font-label-md font-bold hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
          <button
            className="md:hidden text-on-surface p-2 -mr-2"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-white/10">
          <div className="flex flex-col px-margin-mobile py-6 gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left font-label-md text-label-md text-on-surface-variant font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={site.resumeHref}
              download
              className="bg-primary text-on-primary-fixed px-6 py-3 rounded-lg font-label-md font-bold text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
