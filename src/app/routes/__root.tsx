import { useEffect, useRef } from 'react';
import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router';
import { useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '../shared/components/Navbar';
import { Cursor } from '../shared/components/Cursor';

gsap.registerPlugin(ScrollTrigger);

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lenis = useLenis();
  const isFirstRender = useRef(true);

  // Drive Lenis from GSAP's ticker and keep ScrollTrigger in sync with the
  // smooth scroll position. Without this, pinned/scrub ScrollTriggers read the
  // native scroll while Lenis controls the actual scroll — they desync and can
  // trap scrolling.
  useEffect(() => {
    if (!lenis) return;
    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove(raf);
    };
  }, [lenis]);

  // On route change, reset scroll to the top and recompute pin/scrub
  // measurements for the newly mounted page.
  useEffect(() => {
    // Skip initial mount — useGSAP handles its own cleanup on unmount
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // window.scrollTo does NOT reset Lenis' internal target/animated scroll,
    // which leaves the new page stuck at the previous page's scroll offset.
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo(0, 0);
    }

    // The old page's pinned ScrollTriggers were just killed and the new page's
    // created — refresh so pin-spacers/scrub bounds match the new layout.
    ScrollTrigger.refresh();
  }, [pathname, lenis]);

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
