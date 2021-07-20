import { useSpring } from "framer-motion";

export const pageAnimation = {
   hidden: {
      opacity: 0,
      y: 500,
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.75,
         when: "beforeChildren",
         staggerChildren: 0.25,
      },
   },
   exit: {
      opacity: 0,
      y: 500,
      transition: {
         duration: 0.8,
      },
   },
};

export const movieDetailAnimation = {
   hidden: {
      opacity: 0,
   },
   show: {
      opacity: 1,
      rotate: 360,
      transition: {
         duration: 1,
         from: 320,
      },
   },
   exit: {
      opacity: 0,
      y: 500,
      transition: {
         duration: 1,
      },
   },
};

export const titleAnim = {
   hidden: {
      y: 200,
   },
   show: {
      y: 0,
      transition: {
         duration: 0.75,
         ease: "easeOut",
      },
   },
};

export const fade = {
   hidden: {
      opacity: 0,
   },
   show: {
      opacity: 1,
      transition: {
         ease: "easeOut",
         duration: 0.75,
      },
   },
};

export const photoAnim = {
   hidden: {
      scale: 1.25,
      opacity: 0,
   },
   show: {
      scale: 1,
      opacity: 1,
      transition: {
         ease: "easeOut",
         duration: 0.75,
      },
   },
};

export const lineAnim = {
   hidden: {
      width: "0%",
   },
   show: {
      width: "100%",
      transition: { duration: 1 },
   },
};

export const colorSlider = {
   hidden: {
      x: "-130%",
      skew: "45deg",
   },
   show: {
      x: "100%",
      skew: "0deg",
      transition: {
         ease: "easeOut",
         duration: 1,
      },
   },
};

export const scrollReveal = {
   hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
   show: {
      opacity: 1,
      scale: 1,
      transition: {
         duration: 0.5,
      },
   },
};

export const contactBlocks = {
   hidden: {
      y: 500,
      scale: 1.3,
   },
   show: {
      y: 0,
      scale: 1,
      transition: {
         duration: 1,
         ease: "easeOut",
      },
   },
};

export const iconAnim = {
   hidden: {
      scale: 0,
      rotate: 180,
   },
   show: {
      rotate: 0,
      scale: 1,
      transition: {
         type: "spring",
         duration: 1,
      },
   },
};
