import { Link } from '@tanstack/react-router';

const SOCIAL_LINKS = [
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'GitHub', href: '#' },
];

export function ContactFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        {/* Main CTA */}
        <div className="mb-20">
          <p className="text-sm text-secondary mb-4 tracking-wide uppercase font-medium">
            Get in touch
          </p>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-none mb-10">
            Let&apos;s build<br />
            something<br />
            <span className="text-dark-subtle">great together.</span>
          </h2>
          <a
            href="mailto:esha@example.com"
            className="inline-flex items-center gap-3 bg-white text-primary px-7 py-4 rounded-full text-sm font-semibold hover:bg-surface-hover transition-colors group"
          >
            Say Hello
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <Link to="/" className="text-sm font-semibold text-white hover:text-secondary transition-colors">
              Esha Dasgupta
            </Link>
            <p className="text-xs text-dark-muted mt-1">© {new Date().getFullYear()} — Product Designer</p>
          </div>

          <nav className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-secondary hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
