import TitledSection from "../components/TitledSection";
import TitledCard from "../components/TitledCard";
import Image from "../types/Image";
import HoverMessage from "../components/HoverMessage";
import FadeInWrapper from "../components/FadeInWrapper";
import { fadeDuration } from "../globals";

type Post = {
  image: Image,
  title: string,
  snippet: string,
  href: string,
  date: Date,
}

const heroPost: Post = {
  image: { src: "/blog/1.webp" },
  snippet: " Forget cotton and polyester! Meet mycelium, nature's wonder material that's growing into the future of sustainable fashion. Discover how Lumina Labs is harnessing the power of mushrooms to create eco-friendly textiles that are as soft as silk, strong as leather, and kind to the planet.",
  title: "From Mushrooms to Jackets: The Magic of Mycelium Biofabrication",
  href: "#",
  date: new Date("2024-1-25"),
}

const posts: Post[] = [
  {
    image: { src: "/blog/2.png" },
    snippet: "Ditch the harsh chemicals and embrace the beauty of nature's palette! Lumina Labs reveals the secrets of extracting vibrant, long-lasting dyes from plants and even food waste. Learn how beetroot becomes a fiery red, avocado pits transform into earthy brown, and turmeric paints the town yellow – all without harming the environment.",
    title: "Wear the Rainbow, Naturally: Vibrant Dyes from Plants and Food Waste",
    href: "#",
    date: new Date("2024-1-17"),
  },
  {
    image: { src: "/blog/3.png" },
    snippet: "Sustainability isn't just a buzzword at Lumina Labs, it's woven into the very fabric of our company. Dive deep into our eco-friendly practices, from sourcing renewable materials to reducing waste and minimizing our carbon footprint. We're proving that looking good and feeling good about the planet go hand in hand.",
    title: "Fashion with a Footprint? Not on Our Threads! The Eco-Conscious Choices Behind Lumina Labs",
    href: "#",
    date: new Date("2024-1-10"),
  },
]

const BlogSection = () => {
  return (
    <TitledSection title="Check out our blog" className="w-full">
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col sm:grid grid-cols-2 gap-5 sm:gap-12">
          <FadeInWrapper
          duration={fadeDuration}
          className="col-span-2"
          >
            <a href={heroPost.href}>
              <article>
                <TitledCard
                title={heroPost.title}
                content={`${heroPost.date.toDateString()} - ${heroPost.snippet}`}
                image={heroPost.image}
                hoverOverlay={<HoverMessage message="View more" />}
                />
              </article>
            </a>
          </FadeInWrapper>
          {
            posts.map(post => (
              <FadeInWrapper
              duration={fadeDuration}
              >
                <a href={post.href}>
                  <article>
                    <TitledCard
                    title={post.title}
                    content={`${post.date.toDateString()} - ${post.snippet}`}
                    image={post.image}
                    hoverOverlay={<HoverMessage message="View more" />}
                    />
                  </article>
                </a>
              </FadeInWrapper>
            ))
          }
        </div>
        <a href="#" className="btn border-2 border-secondary-15 font-bold">View more</a>
      </div>
    </TitledSection>
  );
}
 
export default BlogSection;