import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { ProjectPage } from '../presentation/work/ProjectPage';

export const projectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects/$slug',
  component: ProjectPage,
});
