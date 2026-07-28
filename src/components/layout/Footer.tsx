import { site, footerLinks } from '@/data/portfolio';

/**
 * Shared footer, reused across every route (from Design 1). Design 2's
 * duplicate footer is intentionally not used.
 */
export default function Footer() {
  return (
    <footer className="w-full py-section-gap-md border-t border-white/5 bg-surface">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between items-center gap-element-gap">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span
            className="h-6 w-6 rounded bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-xs font-headline-md font-bold opacity-60"
            aria-hidden="true"
          >
            {site.logoInitial}
          </span>
          <span className="font-headline-md text-headline-md text-on-surface opacity-60">{site.name}</span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant opacity-60">
          © {new Date().getFullYear()} Built with Technical Elegance
        </p>
        <div className="flex gap-8">
          {footerLinks.map((label) => (
            <a
              key={label}
              href="#"
              className="text-on-surface-variant font-body-md hover:text-on-surface transition-colors hover:opacity-80"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
