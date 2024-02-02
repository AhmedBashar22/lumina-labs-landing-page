import { motion } from 'framer-motion'
import { fade } from '../animate';

const FadeInWrapper = ({
  children,
  index = 0,
  duration = 1,
  className,
  root,
  amount,
  margin,
}: {
  children: React.ReactNode,
  index?: number,
  duration?: number,
  className?: string,
  root?: React.MutableRefObject<any>,
  amount?: "some" | "all" | number,
  margin?: string,
}) => {
  return (
    <motion.div
      variants={fade}
      initial="out"
      whileInView="in"
      transition={{
        duration: duration,
        delay: index * duration,
      }}
      viewport={{ once: true, root: root, amount: amount, margin: margin }}
      className={className}
      >
      {children}
    </motion.div>
  );
}
 
export default FadeInWrapper;