import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useWorkData } from './hooks/useWorkData';
import GetInTouch from '../../shared/components/GetInTouch';
import type { Project } from '../../../domain/entities/Project';

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = cardRef.current;
    if (!el) return;
    gsap.fromTo(el, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
      delay: (index % 3) * 0.1,
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  }, { dependencies: [index] });

  return (
    <div ref={cardRef} className="group cursor-pointer rounded-2xl overflow-hidden border border-surface-hover hover:border-border-mid transition-all">
      <div className="h-56 relative overflow-hidden" style={{ backgroundColor: project.color }}>
        <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-20" style={{ backgroundColor: project.accentColor }} />
        <div className="absolute bottom-5 left-5">
          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold"
            style={{ backgroundColor: project.accentColor + '25', color: project.accentColor }}>
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-5 bg-white">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-primary tracking-tight">{project.title}</h3>
          <span className="text-xs text-muted ml-2 shrink-0">{project.year}</span>
        </div>
        <p className="text-sm text-secondary leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-surface-dim text-secondary">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WorkPage() {
  const { projects } = useWorkData();
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = headerRef.current;
    if (!el) return;
    gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' });
  });

  return (
    <>
      <div ref={contentRef}>
        <main className="min-h-screen pt-28 pb-0">
          <div className="max-w-6xl mx-auto px-8">
            <div ref={headerRef} className="mb-14">
              <p className="text-[10px] font-semibold text-muted tracking-[0.18em] uppercase mb-3">Portfolio</p>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">Selected Work</h1>
              <p className="text-secondary text-[17px] max-w-lg leading-relaxed">
                A collection of projects where design meets strategy — from 0→1 product work to large-scale system redesigns.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-24">
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </main>
      </div>
      <GetInTouch contentRef={contentRef} />
    </>
  );
}
