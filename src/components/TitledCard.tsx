import Image from "../types/Image";
import ImageCard from "./ImageCard";

const TitledCard = ({
  image,
  title,
  content,
  className,
  hoverOverlay,
}: {
  image: Image,
  title: string,
  content: string,
  className?: string,
  hoverOverlay?: React.ReactNode
}) => {
  return (
    <ImageCard
    className={className}
    image={image}
    hoverOverlay={hoverOverlay}
    >
      <div className="p-5 gap-5 flex flex-col">
        <h3 className="font-bold">{title}</h3>
        <p>{content}</p>
      </div>
    </ImageCard>
  );
}
 
export default TitledCard;