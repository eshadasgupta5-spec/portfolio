import { useEffect, useRef } from 'react';
import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router';
import { Navbar } from '../shared/components/Navbar';
import { Cursor } from '../shared/components/Cursor';

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip initial mount — useGSAP handles its own cleanup on unmount
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Cursor />
      <Navbar />
      <Outlet />
    </>
  );
}

export const rootRoute = createRootRoute({
  component: RootComponent,
});
