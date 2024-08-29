"use client";

import { Button } from "@/components/button";
import StartsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const CallToAction = () => {
  const setionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: setionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  return (
    <section className="py-20 md:py-24" ref={setionRef}>
      <div className="container">
        <motion.div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{
            backgroundPositionY,
            backgroundImage: `url(${StartsBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] "
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-center text-lg text-white/70 px-4 mt-5">
              Acheive clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
