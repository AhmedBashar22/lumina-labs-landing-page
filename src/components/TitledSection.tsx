import { fadeDuration } from "../globals";
import FadeInWrapper from "./FadeInWrapper";

const TitledSection = ({
  children = undefined,
  title,
  className = '',
  root,
}: {
  children?: React.ReactNode,
  title: string,
  className?: string,
  root?: React.MutableRefObject<any>
}) => {
  return (
    <section ref={root} className={`flex flex-col items-center ${className}`}>
      <FadeInWrapper
      duration={fadeDuration}
      >
        <h2 className="mb-6 md:mb-12">{title}</h2>
      </FadeInWrapper>
      {children}
    </section> 
  );
}
 
export default TitledSection;