import { HeroSection } from './HeroSection';
import { RecommendationsSection } from './RecommendationsSection';
import GetInTouch from '../../shared/components/GetInTouch';

export function HomePage() {
  return (
    <main>
      <div>
        <HeroSection />
        <div className="pt-6 pb-32 bg-black" />
        <RecommendationsSection />
      </div>
      <GetInTouch />
    </main>
  );
}
