import { Variants } from "framer-motion";

export const fade: Variants = {
  out: {
    opacity: 0,
    translateY:'50%',
  },
  in: {
    opacity: 1,
    translateY: 0,
  },
}