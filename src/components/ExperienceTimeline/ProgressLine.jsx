import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProgressLine({ containerRef }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="absolute left-6 md:left-[220px] top-[42px] bottom-[42px] w-[2px] bg-slate-200 -translate-x-1/2 z-0">
      <div 
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
        style={{ height: "100%" }}
      />
      {/*
      <motion.div 
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
        style={{ height }}
      />
      */}
    </div>
  );
}
