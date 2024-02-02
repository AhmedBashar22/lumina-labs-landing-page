import { useRef } from "react";
import { fadeDuration } from "../globals";
import FadeInWrapper from "../components/FadeInWrapper";

const HeroSection = () => {
  const root = useRef(null)

  return (
    <section ref={root} className="flex flex-col lg:grid grid-cols-2 gap-10 lg:gap-24 w-full items-center">
      <FadeInWrapper
      className="h-min w-min flex flex-col gap-4 pl-6 pt-6 border-l-2 border-t-2 border-secondary-15 rounded-tl-[50px]"
      duration={fadeDuration}
      root={root}
      >
        <FadeInWrapper
        duration={fadeDuration}
        index={1}
        root={root}
        >
          <h1 className="whitespace-nowrap">
            Cultivating the future of fashion,<br />
            one thread at a time.
          </h1>
        </FadeInWrapper>
        <FadeInWrapper
        duration={fadeDuration}
        index={2}
        root={root}
        >
          <p className="md:text-lg">
            Lumina Labs is changing the way we make clothes, using revolutionary biofabrication to create sustainable and stylish textiles.
          </p>
        </FadeInWrapper>
      </FadeInWrapper>
      <div className="from-primary-75 to-70% bg-gradient-to-b w-full aspect-video rounded-[100%] flex justify-center">
        <iframe
        className="shadow-lg w-full h-full bg-white scale-75 rounded-md"
        src="https://www.youtube.com/embed/RzVvThhjAKw?autoplay=1&mute=1"
        >
        </iframe>
      </div>
    </section>
  );
}
 
export default HeroSection;