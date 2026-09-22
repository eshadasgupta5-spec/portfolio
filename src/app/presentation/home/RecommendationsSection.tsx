import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useHomeData } from './hooks/useHomeData';
import type { Recommendation } from '../../../domain/entities/Recommendation';

gsap.registerPlugin(ScrollTrigger);

function RecommendationCard({ rec, index }: { rec: Recommendation; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = cardRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: index * 0.1,
        scrollTrigger: { trigger: el, start: 'top 88%' },
      }
    );
  }, { dependencies: [index] });

  return (
    <div
      ref={cardRef}
      className="w-125 h-120 shrink-0 bg-surface-dark rounded-2xl p-7 border border-white/10
                 hover:border-white/20 transition-colors duration-300
                 flex flex-col justify-between overflow-hidden"
    >
      <div className="flex flex-col gap-4 overflow-hidden">
        <svg
          width="28" height="22" viewBox="0 0 28 22"
          fill="currentColor"
          className="text-white/20 shrink-0"
          aria-hidden="true"
        >
          <path d="M0 22V13.75C0 6.05 4.4 1.65 13.2 0L14.85 2.75C10.45 3.85 8.25 6.6 7.7 9.9H13.2V22H0ZM14.8 22V13.75C14.8 6.05 19.2 1.65 28 0L29.65 2.75C25.25 3.85 23.05 6.6 22.5 9.9H28V22H14.8Z" />
        </svg>

        <p className="text-white/70 text-sm leading-[1.8] line-clamp-7 overflow-hidden">
          {rec.text}
        </p>
      </div>

      <div className="flex items-center gap-3.5 pt-4">
        {rec.avatarImage ? (
          <img
            src={rec.avatarImage}
            alt={rec.author}
            className="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-white/10"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 ring-1 ring-white/10">
            <span className="text-white text-[11px] font-semibold">{rec.avatar}</span>
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-white leading-tight">{rec.author}</p>
          <p className="text-[12px] text-white/40 mt-0.5">{rec.role} · {rec.company}</p>
        </div>
      </div>
    </div>
  );
}

export function RecommendationsSection() {
  const { recommendations } = useHomeData();
  const headingRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!rootRef.current || !containerRef.current || !headingRef.current) return;

    gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: rootRef.current, start: 'top 82%' },
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: `+=${containerRef.current.scrollWidth}`,
        scrub: true,
        pin: true,
        pinReparent: true,
      },
    });

    timeline.to(containerRef.current, {
      x: -(containerRef.current.scrollWidth - window.innerWidth),
      ease: 'none',
    });
  });

  return (
    <div ref={rootRef} className="relative h-screen w-full bg-black overflow-hidden">
      <div className="max-w-6xl w-full mx-auto px-8 pt-32">
        <div ref={headingRef}>
          <h2 className="text-6xl font-semibold tracking-tight text-white leading-none mb-8">
            Don&apos;t take my{' '}
            <span className="relative inline-block">
              word
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
                aria-hidden="true"
              >
                <path
                  d="M-3,68 C15,62 35,70 55,60 C72,52 88,50 104,44"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <span
                style={{
                  fontFamily: "'Kalam', cursive",
                  fontSize: '1.5em',
                  fontWeight: 300,
                  lineHeight: 1,
                  position: 'absolute',
                  left: '70%',
                  bottom: '70%',
                  transform: 'translateX(-50%) rotate(-5deg)',
                  transformOrigin: 'center bottom',
                  whiteSpace: 'nowrap',
                }}
              >
                work
              </span>
            </span>{' '}
            for it.
          </h2>
        </div>
      </div>

      <div
        ref={containerRef}
        className="absolute top-0 h-screen overflow-y-hidden will-change-transform"
      >
        <div className="flex flex-row items-center gap-8 h-full pt-30" style={{ paddingLeft: 'max(2rem, calc((100vw - 80rem) / 2 + 2rem))' }}>
          {recommendations.map((rec, i) => (
            <RecommendationCard key={rec.id} rec={rec} index={i} />
          ))}
        </div>
      </div>

      {/* Left fade */}
      <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-black to-transparent pointer-events-none z-10" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-black to-transparent pointer-events-none z-10" />
    </div>
  );
}
