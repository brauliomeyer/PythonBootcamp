import { FeaturesSection } from './sections/FeaturesSection';
import { FooterSection } from './sections/FooterSection';
import { HeaderSection } from './sections/HeaderSection';
import { HeroSection } from './sections/HeroSection';
import { PricingSection } from './sections/PricingSection';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <HeaderSection />
      <main id="top">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
      </main>
      <FooterSection />
    </div>
  );
}
