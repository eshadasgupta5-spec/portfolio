import { GetProjectsUseCase } from '../../../../domain/usecase/GetProjectsUseCase';
import { GetRecommendationsUseCase } from '../../../../domain/usecase/GetRecommendationsUseCase';
import type { Project } from '../../../../domain/entities/Project';
import type { Recommendation } from '../../../../domain/entities/Recommendation';

const projectsUseCase = new GetProjectsUseCase();
const recommendationsUseCase = new GetRecommendationsUseCase();

interface HomeData {
  featuredProjects: Project[];
  recommendations: Recommendation[];
}

export function useHomeData(): HomeData {
  return {
    featuredProjects: projectsUseCase.getFeatured(),
    recommendations: recommendationsUseCase.execute(),
  };
}
