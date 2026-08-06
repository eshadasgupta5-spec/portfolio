import { useRef } from 'react';
import { HeroSection } from './HeroSection';
import { RecommendationsSection } from './RecommendationsSection';
import GetInTouch from '../../shared/components/GetInTouch';

export function HomePage() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <div ref={contentRef}>
        <HeroSection />
        <div className="pt-6 pb-32 bg-black" />
        <RecommendationsSection />
      </div>
      <GetInTouch contentRef={contentRef} />
    </main>
  );
}
