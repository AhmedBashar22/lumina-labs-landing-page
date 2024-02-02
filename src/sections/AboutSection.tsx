import TitledSection from "../components/TitledSection";
import FadeInWrapper from "../components/FadeInWrapper";
import { fadeDuration } from "../globals";

const AboutSection = () => {
  return (
    <TitledSection
    title="Our Mission"
    >
      <FadeInWrapper
      duration={fadeDuration}
      >
        <p className="text-center text-sm md:text-xl p-6 md:p-12 border-l-2 border-r-2 border-secondary-15">
          At Lumina Labs, we're on a mission to rewrite the story of fashion. We believe clothing shouldn't cost the Earth, and that style can be sustainable. That's why we're harnessing the power of biofabrication - growing high-performance textiles from nature's own blueprint. With every thread, we're cultivating a future where fashion flourishes in harmony with the planet.
        </p>
      </FadeInWrapper>
    </TitledSection>
  );
}
 
export default AboutSection;