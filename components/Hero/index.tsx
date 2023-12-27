"use client";

import { motion } from "framer-motion";
import { useSpring } from 'react-spring';
import "./style.css"

const Hero = () => {
  const styles = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(20px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
  });

  return (
    <>
















    </>
  );
};

export default Hero;
