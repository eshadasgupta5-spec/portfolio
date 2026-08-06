import { Link } from '@tanstack/react-router';
import { useHomeData } from './hooks/useHomeData';
import { useHeroAnimation } from './hooks/useHeroAnimation';

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

          {/* Grid slots — cards are sized to match these */}
          <div className="grid grid-cols-2 gap-4 md:gap-5 mt-10">
            {projects.map((_, i) => (
              <div
                key={i}
                ref={(el) => { gridSlotRefs.current[i] = el; }}
                className="w-full aspect-16/10"
              />
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

      {/* Floating cards — GSAP positions these absolutely */}
      {projects.map((project, i) => (
        <div
          key={project.id}
          ref={(el) => { cardRefs.current[i] = el; }}
          className="absolute rounded-2xl overflow-hidden select-none group cursor-pointer"
          style={{
            left: 0,
            top: 0,
            width: 100,
            height: 100,
            opacity: 0,
          }}
        >
          <img
            src={project.image ?? `https://picsum.photos/seed/${project.id}/900/675`}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            draggable={false}
          />

          {/* Dark gradient scrim — fades in on hover */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Category badge — always visible, top-left */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide backdrop-blur-sm bg-white/15 text-white border border-white/20">
              {project.category}
            </span>
          </div>

          {/* Hover info row */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <div>
              <p className="text-[10px] text-white/50 font-medium tracking-widest uppercase mb-0.5">
                {project.year}
              </p>
              <h3 className="text-base font-semibold text-white tracking-tight leading-tight">
                {project.title}
              </h3>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 bg-white text-primary px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap tracking-wide">
                View
                <svg className="w-2.5 h-2.5" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
