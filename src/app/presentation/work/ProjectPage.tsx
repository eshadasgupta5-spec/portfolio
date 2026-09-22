import { Link } from '@tanstack/react-router';
import { projectRoute } from '../../routes/project.route';
import { useProjectData } from './hooks/useProjectData';
import { ProjectTemplateOne } from './templates/ProjectTemplateOne';
import { ProjectTemplate } from '../../../domain/entities/ProjectCaseStudy';

function ProjectNotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[10px] font-semibold text-muted tracking-[0.18em] uppercase mb-4">
        Not found
      </p>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
        This case study doesn&apos;t exist yet.
      </h1>
      <Link
        to="/work"
        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-hover transition-colors"
      >
        Back to work
      </Link>
    </main>
  );
}

export function ProjectPage() {
  const { slug } = projectRoute.useParams();
  const { caseStudy } = useProjectData(slug);

  if (!caseStudy) return <ProjectNotFound />;

  switch (caseStudy.template) {
    case ProjectTemplate.TemplateOne:
    default:
      return <ProjectTemplateOne caseStudy={caseStudy} />;
  }
}
