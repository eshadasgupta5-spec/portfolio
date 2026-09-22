import { Link } from '@tanstack/react-router';
import type { Project } from '../../../domain/entities/Project';

type Tone = 'light' | 'dark';

export function ProjectCard({ project, tone = 'dark' }: { project: Project; tone?: Tone }) {
  const titleColor = tone === 'light' ? 'text-white' : 'text-primary';
  const metaColor = tone === 'light' ? 'text-white/50' : 'text-muted';

  return (
    <div className="group h-full flex flex-col">
      <div
        className="aspect-16/10 overflow-hidden rounded-2xl relative shrink-0 shadow-xl shadow-black/10"
        style={!project.image ? { backgroundColor: project.color } : undefined}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            draggable={false}
            className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div
            className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-20"
            style={{ backgroundColor: project.accentColor }}
          />
        )}
      </div>

      <div data-card-info className="flex items-baseline justify-between gap-3 mt-4 px-1">
        <h3 className={`font-semibold tracking-tight ${titleColor}`}>{project.title}</h3>
        <span className={`text-xs shrink-0 ${metaColor}`}>{project.category}</span>
      </div>
    </div>
  );
}

export function ProjectCardLink({ project, tone = 'dark' }: { project: Project; tone?: Tone }) {
  if (!project.slug) {
    return (
      <div className="block h-full">
        <ProjectCard project={project} tone={tone} />
      </div>
    );
  }

  return (
    <Link to="/projects/$slug" params={{ slug: project.slug }} className="block h-full">
      <ProjectCard project={project} tone={tone} />
    </Link>
  );
}
