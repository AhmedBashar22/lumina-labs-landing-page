import TitledSection from "../components/TitledSection";
import ProductCard from "../components/ProductCard";
import Image from "../types/Image";
import FadeInWrapper from "../components/FadeInWrapper";
import { fadeDuration } from "../globals";

const products: {
  title: string,
  price: number,
  image: Image,
  href: string,
}[] = [
  {
    title: "Lumina Labs T-shirt - Light",
    price: 25,
    image: { src: "/products/1.jpg" },
    href: "#",
  },
  {
    title: "Lumina Labs T-shirt - Dark",
    price: 25,
    image: { src: "/products/2.jpg" },
    href: "#",
  },
  {
    title: "Lumina Labs Sweatshirt - Light",
    price: 35,
    image: { src: "/products/3.jpg" },
    href: "#",
  }
]

const ProductsSection = () => {
  return (
    <TitledSection title="Our Products">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col md:grid grid-cols-3 gap-5 md:gap-24 md:px-24">
          {
            products.map(
              product =>
              <FadeInWrapper
              duration={fadeDuration}
              >
                <ProductCard
                href={product.href}
                title={product.title}
                image={product.image}
                price={product.price}
                />
              </FadeInWrapper>
            )
          }
        </div>
        <FadeInWrapper
        duration={fadeDuration}
        >
          <a href="#" className="cta btn">
            SHOP NOW
          </a>
        </FadeInWrapper>
      </div>
    </TitledSection>
  );
}
 
export default ProductsSection;