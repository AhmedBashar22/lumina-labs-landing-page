import TitledCard from "../components/TitledCard";
import TitledSection from "../components/TitledSection";
import Image from "../types/Image";
import impact1 from '../assets/impact/1.jpg'
import impact2 from '../assets/impact/2.jpeg'
import impact3 from '../assets/impact/3.jpg'
import impact4 from '../assets/impact/4.jpg'
import FadeInWrapper from "../components/FadeInWrapper";
import { fadeDuration } from "../globals";

const impacts: {
  image: Image,
  content: string,
  title: string,
}[] = [
  {
    image: { src: impact1 },
    content: "We harness the power of microbes to create biofabrics that are as beautiful as they are sustainable. Say goodbye to polluting dyes and endless resource extraction; our natural materials bloom from renewable sources.",
    title: "Growing Fashion, Not Footprint",
  },
  {
    image: { src: impact2 },
    content: "Every Lumina Labs creation is crafted with conscious intention. We prioritize ethical practices, fair wages, and minimal environmental impact throughout our chain of production. Look good, feel good, do good.",
    title: "Threads From Nature, Woven with Care",
  },
  {
    image: { src: impact3 },
    content: "We're not just making clothes, we're making waves. Our biofabrication platform empowers local communities, reduces water consumption, and biodegrades naturally. Wear the future, plant the seeds of a greener tomorrow.",
    title: "Beyond Fabric, Cultivating Change",
  },
  {
    image: { src: impact4 },
    content: "Our designs aren't just sustainable, they're stunning. Vibrant natural dyes, innovative textures, and playful silhouettes – express your unique style while leaving a lighter footprint on the planet. Be the change, wear the revolution.",
    title: "Fashion With a Flourish",
  },
]

const ImpactSection = () => {
  return (
    <TitledSection title="Impact">
      <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-24">
        {
          impacts.map(impact => (
            <FadeInWrapper
            duration={fadeDuration}
            >
              <TitledCard
              content={impact.content}
              image={impact.image}
              title={impact.title}
              />
            </FadeInWrapper>
          ))
        }
      </div>
    </TitledSection>
  );
}
 
export default ImpactSection;