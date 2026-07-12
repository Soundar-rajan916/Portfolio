import React from 'react';
import { motion } from 'framer-motion';

export default function TimelineNode({ inView }) {
  return (
    <div className="absolute left-6 md:left-[220px] top-[42px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
      <div 
        className="w-4 h-4 rounded-full border-[3px] border-white"
        style={{
          scale: 1.3,
          backgroundColor: "#3B82F6",
          boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)"
        }}
      />
      {/*
      <motion.div 
        initial={{ scale: 0.8, backgroundColor: "#E5E7EB" }}
        animate={{ 
          scale: inView ? 1.3 : 1,
          backgroundColor: inView ? "#3B82F6" : "#E5E7EB",
          boxShadow: inView ? "0 0 15px rgba(59, 130, 246, 0.4)" : "0 0 0px rgba(59, 130, 246, 0)"
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-4 h-4 rounded-full border-[3px] border-white"
      />
      */}
    </div>
  );
}
