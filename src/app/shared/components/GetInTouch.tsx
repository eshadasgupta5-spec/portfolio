import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {
  const panelRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panel = panelRef.current;
    const spacer = spacerRef.current;
    if (!panel || !spacer) return;

    // Reveal the fixed panel by scrubbing it up over one extra viewport of
    // scroll (the spacer). No `pin` — pinning reparents a DOM node into a
    // ScrollTrigger-generated pin-spacer, which React doesn't track and which
    // leaks across route changes, trapping scroll on the next page.
    gsap.fromTo(
      panel,
      { yPercent: 100 },
      {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: spacer,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    );
  }, { dependencies: [] });

  return (
    <>
      {/* Owned-by-this-component spacer that supplies the scroll distance for
          the reveal. The rising panel covers it exactly as it enters view. */}
      <div ref={spacerRef} aria-hidden className="h-screen w-full pointer-events-none" />

      <div
        ref={panelRef}
        className="fixed bottom-0 left-0 right-0 h-screen w-full bg-white flex flex-col justify-between z-20 px-8 md:px-16 py-12 md:py-16"
      >
      {/* Top section: label + heading + CTA */}
      <div className="flex flex-col justify-center flex-1">
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-muted mb-8">
          Get In Touch
        </p>

        <h2 className="text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-none text-primary mb-10">
          Let&apos;s make the<br />
          <span className="text-subtle">product</span>{' '}understood.
        </h2>

        <div>
          <a
            href="mailto:dasguptasia@gmail.com"
            className="inline-flex items-center gap-3 bg-primary text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-primary-hover transition-colors"
          >
            Say hello
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <div className="border-t border-border-default mb-8" />

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-0">
          <div className="sm:w-56">
            <p className="text-[11px] text-muted uppercase tracking-widest mb-1.5">Email</p>
            <a
              href="mailto:dasguptasia@gmail.com"
              className="text-sm text-primary font-medium hover:text-secondary transition-colors"
            >
              dasguptasia@gmail.com
            </a>
          </div>

          <div className="sm:w-56">
            <p className="text-[11px] text-muted uppercase tracking-widest mb-1.5">LinkedIn</p>
            <a
              href="https://linkedin.com/in/esha_dasgupta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary font-medium hover:text-secondary transition-colors"
            >
              esha_dasgupta
            </a>
          </div>

          <div>
            <p className="text-[11px] text-muted uppercase tracking-widest mb-1.5">Based in</p>
            <p className="text-sm text-primary font-medium">
              Hyderabad, India · Open to remote
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default GetInTouch;
