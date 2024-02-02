import Image from "../types/Image";
import HoverMessage from "./HoverMessage";
import ImageCard from "./ImageCard";

const ProductCard = ({
  title,
  price,
  image,
  href,
}: {
  title: string,
  price: number,
  image: Image,
  href: string,
}) => {
  return (
    <a href={href}>
      <ImageCard
      image={image}
      hoverOverlay={<HoverMessage message="View details" />}
      className="w-full h-full"
      >
        <div className="flex items-center justify-between py-2 px-3 gap-4">
          <p className="font-semibold">{title}</p>
          <p className="whitespace-nowrap">{price.toFixed(2)} $</p>
        </div>
      </ImageCard>
    </a>
  );
}
 
export default ProductCard;