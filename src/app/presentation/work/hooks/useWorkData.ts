import { GetProjectsUseCase } from '../../../../domain/usecase/GetProjectsUseCase';
import type { Project } from '../../../../domain/entities/Project';

const projectsUseCase = new GetProjectsUseCase();

export function useWorkData(): { projects: Project[] } {
  return { projects: projectsUseCase.execute() };
}
