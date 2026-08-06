import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { ProductThinkingPage } from '../presentation/product-thinking/ProductThinkingPage';

export const productThinkingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product-thinking',
  component: ProductThinkingPage,
});
