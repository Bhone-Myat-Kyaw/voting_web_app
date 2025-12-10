import type { Variants } from "framer-motion"

export const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.05,
      }
    }
  }

export const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.98,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  }