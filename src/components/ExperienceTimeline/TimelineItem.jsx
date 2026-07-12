import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCalendar, FiBriefcase } from 'react-icons/fi';
import TimelineNode from './TimelineNode';

export default function TimelineItem({ experience, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-30% 0px -30% 0px", once: false });

  return (
    <div ref={ref} className="relative w-full mb-12 md:mb-16 last:mb-0 pt-0">
      {/* <TimelineNode inView={inView} /> */}
      
      {/* Desktop Connector */}
      {/* <div 
        className="hidden md:block absolute top-[42px] left-[220px] h-[2px] z-10 -translate-y-1/2"
        style={{ width: "60px", backgroundColor: "#3B82F6" }}
      /> */}
      {/*
      <motion.div 
        className="hidden md:block absolute top-[42px] left-[220px] h-[2px] z-10 -translate-y-1/2"
        initial={{ width: 0, backgroundColor: "#e2e8f0" }}
        animate={{ 
          width: inView ? "60px" : "0px",
          backgroundColor: inView ? "#3B82F6" : "#e2e8f0"
        }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
      */}
      {/* Mobile Connector */}
      {/* <div 
        className="md:hidden absolute top-[42px] left-6 h-[2px] z-10 -translate-y-1/2"
        style={{ width: "24px", backgroundColor: "#3B82F6" }}
      /> */}
      {/*
      <motion.div 
        className="md:hidden absolute top-[42px] left-6 h-[2px] z-10 -translate-y-1/2"
        initial={{ width: 0, backgroundColor: "#e2e8f0" }}
        animate={{ 
          width: inView ? "24px" : "0px",
          backgroundColor: inView ? "#3B82F6" : "#e2e8f0"
        }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
      */}

      <div className="flex flex-col w-full items-start">
        
        {/* Left Side: Rich Date Info (Desktop) */}
        <div className="hidden md:flex flex-col items-end absolute left-0 top-[42px] -translate-y-1/2 w-[190px] pr-6 text-right z-20">
          <div>
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          > */}
            <div className="flex items-center justify-end gap-2 text-slate-800 font-semibold mb-1">
              <span>{experience.period}</span>
              <FiCalendar className="text-slate-400" />
            </div>
            <div className="flex items-center justify-end gap-2 text-slate-500 text-sm font-medium">
              <span>{experience.company}</span>
            </div>
          {/* </motion.div> */}
          </div>
        </div>

        {/* Right Side: Card & Mobile Date */}
        <div className="w-full pl-12 md:pl-[280px]">
          {/* Mobile Date/Company */}
          <div className="md:hidden mb-4 pt-1">
            <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm mb-1">
              <FiCalendar className="text-slate-400" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <FiBriefcase className="text-slate-400" />
              <span>{experience.company}</span>
            </div>
          </div>

          <div className="bg-white p-7 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 group relative z-20">
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white p-7 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 group relative z-20"
          > */}
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-none">{experience.role}</h3>
            
            <p className="text-slate-600 mb-6 leading-relaxed text-[15px] mt-4">
              {experience.summary}
            </p>

            {experience.bullets && experience.bullets.length > 0 && (
              <ul className="list-disc list-outside ml-4 mb-8 text-slate-600 space-y-2.5 text-[15px]">
                {experience.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3.5 py-1.5 bg-slate-50 text-slate-600 text-[13px] font-medium rounded-full border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          {/* </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
