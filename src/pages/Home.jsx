import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { socialLinks } from '../data/social';
import { ArrowRight, Download, BrainCircuit } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ShapeGrid from '../components/ShapeGrid';

const TITLES = [
  "AI Engineer",
  "MERN Stack Developer"
];

const SKILLS = ["AI", "LLMs", "RAG", "React", "Node.js", "MongoDB", "TypeScript", "Python", "LangChain", "FastAPI"];

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-64px)] flex flex-col justify-center items-center py-20 overflow-hidden">
      
      {/* Background ShapeGrid */}
      <div className="absolute inset-0 z-0">
        <ShapeGrid 
          speed={0.5} 
          squareSize={40}
          direction='diagonal'
          borderColor='#f1f5f9'
          hoverFillColor='#e2e8f0'
          shape='square'
          hoverTrailAmount={5}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pointer-events-none"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-full p-1.5 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
          >
            <img
              src="/dp.png"
              alt="Soundararajan"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Soundararajan&size=200&background=f1f5f9&color=0f172a' }}
            />
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="text-5xl sm:text-[64px] font-bold text-slate-900 leading-[1.1] tracking-tight font-syne">
            Hey, I'm Soundararajan
          </h1>
        </motion.div>

        {/* Rotating Subtitle */}
        <motion.div variants={itemVariants} className="mb-10 h-[32px] sm:h-[40px] relative w-full flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={titleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[20px] sm:text-[24px] font-medium text-slate-500 absolute"
            >
              {TITLES[titleIndex]}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* Skill Badges */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 max-w-[600px] pointer-events-auto">
          {SKILLS.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ y: -2 }}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-50 text-slate-700 text-[13px] sm:text-[14px] font-medium rounded-xl border border-gray-100 shadow-sm transition-colors hover:border-gray-200 hover:bg-white cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs and Socials */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-6 mb-20 w-full pointer-events-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#projects" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-xl font-medium text-[15px] hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md"
              >
                View Projects <ArrowRight size={18} />
              </motion.button>
            </a>

            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-3.5 rounded-xl font-medium text-[15px] border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md"
              >
                Download Resume <Download size={18} />
              </motion.button>
            </a>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: FaGithub, link: socialLinks.github, label: "GitHub" },
              { icon: FaLinkedin, link: socialLinks.linkedin, label: "LinkedIn" },
              { icon: FaEnvelope, link: socialLinks.email, label: "Email" }
            ].map((social, i) => (
              <a key={i} href={social.link} target="_blank" rel="noreferrer" aria-label={social.label}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-gray-300 shadow-sm transition-colors"
                >
                  <social.icon size={18} />
                </motion.div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div variants={itemVariants} className="text-[15.5px] sm:text-[17px] text-slate-600 leading-[1.8] space-y-6 max-w-[700px] mb-24 text-left sm:text-center mx-auto">
          <p>
            I build scalable web applications and integrate AI technologies like <strong className="font-semibold text-slate-900">LLMs</strong> and <strong className="font-semibold text-slate-900">RAG</strong> to create intelligent, context-aware user experiences.
          </p>
          <p>
            With a strong foundation in modern web development, I design custom AI pipelines, deploy generative models, and engineer full-stack applications using <strong className="font-semibold text-slate-900">React, Node.js, and MongoDB</strong>.
          </p>
          <p>
            Whether it's optimizing large-scale architectures or refining prompt engineering techniques, I am passionate about bridging the gap between sophisticated AI models and seamless user interfaces.
          </p>
        </motion.div>




      </motion.div>
    </div>
  );
}
