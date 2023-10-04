import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
