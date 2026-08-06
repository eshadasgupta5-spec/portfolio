import { createRouter } from '@tanstack/react-router';
import { rootRoute } from './routes/__root';
import { indexRoute } from './routes/index.route';
import { workRoute } from './routes/work.route';
import { aboutRoute } from './routes/about.route';
import { productThinkingRoute } from './routes/product-thinking.route';
import { contactRoute } from './routes/contact.route';

const routeTree = rootRoute.addChildren([
  indexRoute,
  workRoute,
  aboutRoute,
  productThinkingRoute,
  contactRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
