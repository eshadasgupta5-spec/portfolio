import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { ContactPage } from '../presentation/contact/ContactPage';

export const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});
