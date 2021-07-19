import React from "react";
// Animate section scrolling
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
   // Animate scrolling
   const controls = useAnimation();
   const [element, view] = useInView({ threshold: 0.5 });
   console.log(view); //True or False depending on if the seciton is in the window view
   if (view) {
      controls.start("show");
   } else {
      controls.start("hidden");
   }
   return [element, controls];
};
