import { GetProjectCaseStudiesUseCase } from '../../../../domain/usecase/GetProjectCaseStudiesUseCase';
import type { ProjectCaseStudy } from '../../../../domain/entities/ProjectCaseStudy';

const caseStudiesUseCase = new GetProjectCaseStudiesUseCase();

export function useProjectData(slug: string): { caseStudy: ProjectCaseStudy | undefined } {
  return { caseStudy: caseStudiesUseCase.getBySlug(slug) };
}
