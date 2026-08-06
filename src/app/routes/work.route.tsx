import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { WorkPage } from '../presentation/work/WorkPage';

export const workRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/work',
  component: WorkPage,
});
