import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './app/router';
import './index.css';
import ReactLenis from 'lenis/react';

const rootElement = document.getElementById('root')!;
createRoot(rootElement).render(
  <StrictMode>
     <ReactLenis root options={{ lerp: 0.05 }}>
      <RouterProvider router={router} />
     </ReactLenis>
  </StrictMode>
);
