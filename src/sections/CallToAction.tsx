"use client";

import { Button } from "@/components/button";
import StartsBg from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  return (
    <motion.section
      ref={sectionRef}
      className="relative h-[492px] md:h-[800px] flex items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_90%,transparent)]"
      style={{
        position: "relative", // Ensure the section has a non-static position
        backgroundImage: `url(${StartsBg.src})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: StartsBg.width,
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 110,
      }}
    >
      <div className="contianer">
        <h2>AI-driven SEO for everyone.</h2>
        <p>Acheive clear, impactful results without the complexity.</p>
      </div>
      <div className="flex gap-4 items-center">
        <Button>Join waitlist</Button>
      </div>
    </motion.section>
  );
};
