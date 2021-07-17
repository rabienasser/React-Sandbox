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
         type: "spring",
         stiffness: 40,
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
