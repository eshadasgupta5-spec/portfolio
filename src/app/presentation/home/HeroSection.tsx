import { Link } from '@tanstack/react-router';
import { useHomeData } from './hooks/useHomeData';
import { useHeroAnimation } from './hooks/useHeroAnimation';
import { ProjectCard, ProjectCardLink } from '../../shared/components/ProjectCard';

export function HeroSection() {
  const { featuredProjects } = useHomeData();
  const { wrapperRef, heroRef, fanAnchorRef, gridSlotRefs, cardRefs, seeAllRef } =
    useHeroAnimation();

  const projects = featuredProjects.slice(0, 4);

  return (
    <div ref={wrapperRef} className="relative">

      <div ref={heroRef} className="pt-44 pb-30">
        <div className="max-w-7xl mx-auto px-8">
          {/* Two-column row: tagline + CTAs | fan anchor */}
          <div className="grid grid-cols-2 gap-2 items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2.5 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-secondary tracking-wide">
                  Open to product marketing roles
                </span>
              </div>
              <h1 className="text-[60px] xl:text-[62px] font-semibold tracking-tight leading-[1.1] mb-4">
                <span className="text-subtle">Positioning is a product's </span>
                <span className="text-subtle">first impression. </span>
                <br/>
                <span className="text-primary">I make it land. </span>
              </h1>
              <p className="text-secondary text-[17px] leading-relaxed">
                5 years shaping how B2B, B2C, and D2C products go to market. Looking for the right product team to do it inside.
              </p>
              <div className="flex items-center gap-3">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-hover transition-colors group"
                >
                  View Work
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a
                  href="mailto:esha@example.com"
                  className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold border border-border-default text-primary hover:border-primary transition-colors"
                >
                  Say Hello
                </a>
              </div>
            </div>

            {/* Fan anchor — GSAP reads its center to place the initial card stack */}
            <div ref={fanAnchorRef} className="h-72" />
          </div>
        </div>
      </div>

      {/* Projects grid section — constrained width + fixed aspect-ratio slots */}
      <div className="bg-black min-h-dvh flex flex-col justify-center py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-none text-surface mb-3">
            Projects
          </h2>

          <div className="grid grid-cols-2 gap-4 md:gap-5 mt-10">
            {projects.map((project, i) => (
              <div
                key={project.id}
                ref={(el) => { gridSlotRefs.current[i] = el; }}
                className="w-full invisible"
                aria-hidden
              >
                <ProjectCard project={project} tone="light" />
              </div>
            ))}
          </div>

          {/* See all — fades in after cards settle */}
          <div ref={seeAllRef} className="mt-20 flex justify-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-lg font-medium text-surface hover:text-secondary transition-colors group"
            >
              View all projects
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {projects.map((project, i) => (
        <div
          key={project.id}
          ref={(el) => { cardRefs.current[i] = el; }}
          className="absolute select-none"
          style={{
            left: 0,
            top: 0,
            width: 100,
            height: 100,
            opacity: 0,
          }}
        >
          <ProjectCardLink project={project} tone="light" />
        </div>
      ))}
    </div>
  );
}
