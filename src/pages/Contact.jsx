import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail, FiFileText } from 'react-icons/fi';
import { socialLinks } from '../data/social';
import { AnimatedGridPattern } from '../components/AnimatedGridPattern';

const contactMethods = [
  {
    name: 'LinkedIn',
    description: "Let's connect professionally",
    icon: FiLinkedin,
    href: socialLinks.linkedin,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    name: 'GitHub',
    description: "Explore my projects",
    icon: FiGithub,
    href: socialLinks.github,
    color: 'text-slate-800',
    bg: 'bg-slate-100'
  },
  {
    name: 'Email',
    description: "Let's discuss opportunities",
    icon: FiMail,
    href: socialLinks.email,
    color: 'text-slate-800',
    bg: 'bg-slate-100'
  },
  {
    name: 'Resume',
    description: "Download my resume",
    icon: FiFileText,
    href: '/resume.pdf',
    color: 'text-slate-800',
    bg: 'bg-slate-100'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Contact() {
  return (
    <div className="relative min-h-[calc(100vh-140px)] flex flex-col items-center justify-center px-4 sm:px-6 py-6 overflow-hidden">
      
      {/* Background Enhancements */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
        <AnimatedGridPattern 
          className="absolute inset-0 h-full w-full opacity-60"
          width={40}
          height={40}
          numSquares={150}
          maxOpacity={0.15}
          duration={3}
        />
        {/* Subtle blurred blue/purple glow behind cards */}
        <div className="absolute w-[600px] h-[400px] bg-gradient-to-tr from-blue-100/50 to-purple-100/50 blur-[100px] rounded-full mix-blend-multiply opacity-60 translate-y-10 pointer-events-none" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-2xl mx-auto flex flex-col items-center text-center relative z-10"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4"
        >
          Let's Connect
        </motion.h1>

        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium mb-4 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for AI Engineer Opportunities
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-base text-slate-600 mb-6 max-w-lg leading-relaxed px-2"
        >
          I'm always open to discussing AI, full-stack development,
          internships, freelance work, or collaborating on exciting projects.
          Feel free to reach out through any of the platforms below.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-6"
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.name}
                href={method.href}
                target={method.name !== 'Email' ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex flex-col items-start p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 hover:border-opacity-100 transition-colors h-full text-left"
              >
                <div className={`p-2.5 rounded-xl mb-3 transition-transform duration-300 group-hover:scale-[1.08] ${method.bg} ${method.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-0.5">{method.name}</h3>
                <p className="text-slate-500 text-xs sm:text-sm">{method.description}</p>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-xs sm:text-sm text-slate-400 font-medium"
        >
          Typically replies within 24 hours.
        </motion.p>
      </motion.div>
    </div>
  );
}
