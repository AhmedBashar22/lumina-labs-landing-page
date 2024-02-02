import { motion, AnimatePresence } from "framer-motion";

const Drawer = ({
  children,
  isOpen,
  duration = 1,
  closeFunction,
}: {
  children?: React.ReactNode
  isOpen: boolean,
  duration?: number,
  closeFunction: () => void,
}) => {
  return (
    <AnimatePresence>
        {
          isOpen &&
          <motion.div
          className="absolute w-full h-full bg-black z-10"
          onClick={closeFunction}
          initial={{
            backgroundColor: "#0000",
            backdropFilter: "blur(0)",
          }}
          animate={{
            backgroundColor: "#000000aa",
            backdropFilter: "blur(0.5)",
          }}
          exit={{
            backgroundColor: "#0000",
            backdropFilter: "blur(0)",
          }}
          transition={{ duration }}
          >
            <motion.div
            className="absolute right-0 h-full w-full flex flex-row-reverse"
            initial={{ translateX: "100%" }}
            animate={{ translateX: 0 }}
            exit={{ translateX: "100%" }}
            transition={{ duration }}
            >
              {children}
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
  );
}
 
export default Drawer;