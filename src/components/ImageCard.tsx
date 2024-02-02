import { useState } from "react";
import Image from "../types/Image";

const ImageCard = ({
  children,
  image,
  className,
  hoverOverlay,
}: {
  children?: React.ReactNode,
  className?: string,
  hoverOverlay?: React.ReactNode
  image: Image,
}) => {
  const [hover, setHover] = useState(false)

  return (
    <div
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    className={`flex flex-col text-secondary-15 bg-secondary-70 rounded-md overflow-clip shadow-md ${className}`}
    >
      <div className="relative w-full h-full">
        <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
        <div className={`transition duration-200 ${hover ? ' opacity-100' : ' opacity-0'} absolute top-0 left-0 w-full h-full`}>
          {hoverOverlay}
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
 
export default ImageCard;