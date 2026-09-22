import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import GetInTouch from '../../shared/components/GetInTouch';

const SKILLS = [
  { category: 'Design', items: ['Product Design', 'UX Research', 'Interaction Design', 'Design Systems', 'Prototyping'] },
  { category: 'Tools', items: ['Figma', 'Framer', 'Principle', 'Maze', 'Notion'] },
  { category: 'Process', items: ['Jobs-to-be-Done', 'Design Sprints', 'Usability Testing', 'A/B Testing', 'OKR Frameworks'] },
];

export function AboutPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const els = [headerRef.current, contentRef.current].filter(Boolean);
    gsap.fromTo(els, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.15 });
  });

  return (
    <>
      <div>
      <main className="min-h-screen pt-28">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div ref={headerRef} className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <p className="text-xs font-medium text-muted tracking-widest uppercase mb-4">About</p>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
                Designing with intention.
              </h1>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-secondary text-lg leading-relaxed mb-4">
                I&apos;m Alex Bub, a product designer with 6+ years of experience crafting digital products for startups and scale-ups across fintech, health, and consumer tech.
              </p>
              <p className="text-secondary text-lg leading-relaxed">
                My work lives at the intersection of user empathy and business strategy. I believe good design solves real problems — not just makes things look pretty.
              </p>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="rounded-3xl overflow-hidden mb-20 h-80 md:h-120 bg-surface-muted flex items-center justify-center">
            <p className="text-muted text-sm">Photo — Alex Bub</p>
          </div>

          {/* Skills */}
          <div ref={contentRef} className="mb-24">
            <p className="text-xs font-medium text-muted tracking-widest uppercase mb-10">Skills &amp; Tools</p>
            <div className="grid md:grid-cols-3 gap-8">
              {SKILLS.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h3 className="font-semibold text-primary mb-4">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-secondary">
                        <span className="w-1 h-1 rounded-full bg-border-mid" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      </div>
      <GetInTouch />
    </>
  );
}
