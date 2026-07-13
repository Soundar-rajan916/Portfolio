import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Navigation, Building2, User, Wrench, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { socialLinks } from '../data/social';
import { motion, AnimatePresence } from 'framer-motion';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const toggle = () => setIsOpen(!isOpen);

  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["MERN Stack Developer", "AI Engineer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'about', 'tools', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const navs = [
    { name: 'Home', path: '#home', id: 'home', icon: Home },
    { name: 'Projects', path: '#projects', id: 'projects', icon: Navigation },
    { name: 'Experience', path: '#experience', id: 'experience', icon: Building2 },
    { name: 'About', path: '#about', id: 'about', icon: User },
    { name: 'Tools', path: '#tools', id: 'tools', icon: Wrench },
    { name: 'Contact', path: '#contact', id: 'contact', icon: Mail },
  ];

  const getLinkClasses = (id) => {
    const isActive = activeSection === id;
    return `flex items-center gap-3 px-4 py-3 rounded-xl text-base md:text-[15px] font-medium transition-all border ${
      isActive 
        ? 'bg-[#1a1a1a] text-white border-transparent hover:bg-transparent hover:text-slate-900 hover:border-slate-900' 
        : 'border-transparent text-slate-900 hover:bg-slate-200'
    }`;
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between px-4 h-16 border-b border-gray-100 bg-[#f8f9fa] sticky top-0 z-50">
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
            <img src="/dp.png" alt="Soundararajan" className="w-full h-full object-cover" />
          </div>
          <span className="font-semibold text-slate-900">Soundararajan</span>
        </a>
        <button onClick={toggle} className="text-slate-500 hover:text-slate-900">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#f8f9fa] pt-16 border-t border-gray-100 mt-16">
          <div className="flex flex-col px-4 py-6 space-y-1 h-full overflow-y-auto">
            {navs.map((nav) => {
              const Icon = nav.icon;
              return (
                <a
                  key={nav.name}
                  href={nav.path}
                  onClick={() => setIsOpen(false)}
                  className={getLinkClasses(nav.id)}
                >
                  <Icon size={18} />
                  <span>{nav.name}</span>
                </a>
              );
            })}

            <div className="flex space-x-6 px-4 pt-8 mt-auto mb-8 text-slate-500">
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900"><FaLinkedin size={24} /></a>
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-slate-900"><FaGithub size={24} /></a>
              <a href={socialLinks.email} className="hover:text-slate-900"><FaEnvelope size={24} /></a>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 border-r border-gray-100 bg-[#f8f9fa] py-8 px-6 z-40">
        <a href="#home" className="flex items-center space-x-3 mb-10 group">
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 flex items-center justify-center">
            <img src="/dp.png" alt="Soundararajan" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="font-semibold text-lg text-slate-900 group-hover:text-gray-600 transition-colors leading-tight">Soundararajan</span>
            <div className="relative h-[20px] mt-0.5 overflow-hidden w-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-0 text-[13px] font-medium text-slate-500 whitespace-nowrap"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </a>

        <nav className="flex flex-col space-y-1 flex-grow">
          {navs.map((nav) => {
            const Icon = nav.icon;
            return (
              <a
                key={nav.name}
                href={nav.path}
                className={getLinkClasses(nav.id)}
              >
                <Icon size={18} strokeWidth={2} />
                <span>{nav.name}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center space-x-4 px-4 text-slate-400 mt-auto pt-8 border-t border-gray-100">
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors"><FaLinkedin size={18} /></a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors"><FaGithub size={18} /></a>
          <a href={socialLinks.email} className="hover:text-slate-900 transition-colors"><FaEnvelope size={18} /></a>
        </div>
      </aside>
    </>
  );
}
