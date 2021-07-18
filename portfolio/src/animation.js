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
         duration: 1,
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
      scale: 1.5,
      opacity: 0,
   },
   show: {
      scale: 1,
      opacity: 1,
      transition: {
         ease: "easeOut",
         duration: 0.6,
      },
   },
};
