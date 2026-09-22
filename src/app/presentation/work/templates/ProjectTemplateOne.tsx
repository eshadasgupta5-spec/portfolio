import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from '@tanstack/react-router';
import GetInTouch from '../../../shared/components/GetInTouch';
import type {
  ProjectCaseStudy,
  ProjectSection,
} from '../../../../domain/entities/ProjectCaseStudy';

gsap.registerPlugin(ScrollTrigger);

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-[10px] font-semibold text-muted tracking-[0.18em] uppercase mb-4">
      {children}
    </p>
  );
}

function Section({ section }: { section: ProjectSection }) {
  return (
    <section data-reveal className="mb-24 md:mb-32">
      <div className="max-w-3xl mx-auto">
        {section.eyebrow && <Eyebrow>{section.eyebrow}</Eyebrow>}
        {section.heading && (
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15] mb-7">
            {section.heading}
          </h2>
        )}
        {section.body?.map((paragraph, i) => (
          <p
            key={i}
            className="text-secondary text-[17px] leading-[1.75] mb-5 last:mb-0"
          >
            {paragraph}
          </p>
        ))}

        {section.stats && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 mt-12">
            {section.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-muted mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {section.image && (
        <figure className="max-w-5xl mx-auto mt-14">
          <img
            src={section.image.src}
            alt={section.image.alt}
            loading="lazy"
            className="w-auto max-w-full max-h-[85vh] mx-auto rounded-2xl border border-border-default"
          />
        </figure>
      )}
    </section>
  );
}

export function ProjectTemplateOne({ caseStudy }: { caseStudy: ProjectCaseStudy }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>('[data-reveal]');
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });
    },
    { scope: rootRef }
  );

  return (
    <>
      <div ref={rootRef}>
        <main className="min-h-screen pt-28">
          <div className="max-w-5xl mx-auto px-6">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-14"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M13 7H1M7 1L1 7L7 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to work
            </Link>

            <header data-reveal className="max-w-3xl mx-auto mb-16 md:mb-24">
              <p className="text-[10px] font-semibold text-muted tracking-[0.18em] uppercase mb-5">
                Case study
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.12] mb-8">
                {caseStudy.title}
              </h1>
              <p className="text-secondary text-lg md:text-xl leading-[1.7]">
                {caseStudy.intro}
              </p>

              <dl className="grid sm:grid-cols-3 gap-8 mt-14 pt-10 border-t border-border-default">
                {caseStudy.meta.map((meta) => (
                  <div key={meta.label}>
                    <dt className="text-[10px] font-semibold text-muted tracking-[0.18em] uppercase mb-2">
                      {meta.label}
                    </dt>
                    <dd className="text-sm text-primary leading-relaxed">
                      {meta.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </header>

            {caseStudy.sections.map((section, i) => (
              <Section key={i} section={section} />
            ))}
          </div>
        </main>
      </div>

      <GetInTouch />
    </>
  );
}
