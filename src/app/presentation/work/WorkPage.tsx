import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useWorkData } from './hooks/useWorkData';
import GetInTouch from '../../shared/components/GetInTouch';
import { ProjectCardLink } from '../../shared/components/ProjectCard';
import type { Project } from '../../../domain/entities/Project';

gsap.registerPlugin(ScrollTrigger);

function WorkCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = cardRef.current;
    if (!el) return;
    gsap.fromTo(el, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
      delay: (index % 2) * 0.1,
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  }, { dependencies: [index] });

  return (
    <div ref={cardRef}>
      <ProjectCardLink project={project} />
    </div>
  );
}

export function WorkPage() {
  const { projects } = useWorkData();
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = headerRef.current;
    if (!el) return;
    gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' });
  });

  return (
    <>
      <div>
        <main className="min-h-screen pt-28 pb-0">
          <div className="max-w-6xl mx-auto px-8">
            <div ref={headerRef} className="mb-14">
              <p className="text-[10px] font-semibold text-muted tracking-[0.18em] uppercase mb-3">Portfolio</p>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">Selected Work</h1>
              <p className="text-secondary text-[17px] max-w-lg leading-relaxed">
                A collection of projects where design meets strategy — from 0→1 product work to large-scale system redesigns.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-5 pb-24">
              {projects.map((project, i) => (
                <WorkCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </main>
      </div>
      <GetInTouch />
    </>
  );
}
