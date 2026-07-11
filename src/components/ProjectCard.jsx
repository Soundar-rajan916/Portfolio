import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

export default function ProjectCard({ project }) {
  const isActive = project.status === 'active';
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    return () => {
      document.body.classList.remove('hide-smooth-cursor');
    };
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    document.body.classList.add('hide-smooth-cursor');
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    document.body.classList.remove('hide-smooth-cursor');
  };

  const bgToHex = {
    'bg-blue-500': '#3b82f6',
    'bg-orange-500': '#f97316',
    'bg-emerald-500': '#10b981',
    'bg-red-400': '#f87171'
  };
  const arrowColor = bgToHex[project.cursorColor] || '#f87171';

  return (
    <>
      <div 
        className="group rounded-[16px] p-2.5 transition-all duration-300 bg-[#ebebeb] hover:bg-white hover:-translate-y-1.5 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:border-gray-200 border border-transparent flex flex-col relative cursor-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Image Container */}
        <div className="w-full aspect-[2/1] bg-white rounded-xl mb-2 overflow-hidden border border-gray-200 flex items-center justify-center relative">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-white flex flex-col items-center justify-center p-4">
              <div className="w-full h-full bg-[#f8f9fa] rounded-lg shadow-sm border border-gray-100 flex flex-col pt-3 px-3 overflow-hidden">
                 <div className="h-3 w-2/3 bg-gray-200 rounded mb-3 mx-auto"></div>
                 <div className="h-1.5 w-1/3 bg-gray-100 rounded mb-2 mx-auto"></div>
                 <div className="h-2 w-full bg-gray-100 rounded mt-4"></div>
                 <div className="h-2 w-5/6 bg-gray-100 rounded mt-1.5"></div>
              </div>
            </div>
          )}
        </div>

        <div className="px-1 flex flex-col flex-grow">
          {/* Title & Star */}
          <div className="flex justify-between items-start mb-0.5">
            <h3 className="font-semibold text-slate-900 text-[15px]">
              {project.title}
            </h3>
            <button className="text-slate-400 hover:text-slate-700 transition-colors">
              <Star size={14} strokeWidth={2} />
            </button>
          </div>

          {/* Subtitle */}
          {project.subtitle && (
            <p className="text-[11px] text-slate-500 mb-1.5 font-medium">
              {project.subtitle}
            </p>
          )}
          
          {/* Description */}
          <p className="text-slate-600 text-[12px] mb-2.5 leading-snug flex-grow line-clamp-2">
            {project.description}
          </p>

          {/* Buttons and Status */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-1.5">
              {project.link && project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white text-[11px] font-semibold px-3 py-1 rounded hover:bg-slate-800 transition-colors">
                  Visit
                </a>
              )}
              {project.github && project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white text-[11px] font-semibold px-3 py-1 rounded hover:bg-slate-800 transition-colors">
                  GitHub
                </a>
              )}
            </div>
            {isActive && (
              <span className="text-[10px] px-2 py-0.5 rounded font-medium bg-[#dcfce7] text-green-700">
                {project.status}
              </span>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-medium text-slate-600 bg-white border border-gray-200 px-2 py-0.5 rounded-full shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Pointer Portal/Fixed Div */}
      {isHovering && (
        <div 
          className="fixed pointer-events-none z-50 flex flex-col items-start"
          style={{ 
            left: mousePos.x, 
            top: mousePos.y,
            transform: 'translate(-2px, -2px)'
          }}
        >
          <svg width="28" height="28" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.15))' }}>
            <path d="M1 1L5.8 14.6L8.5 9.5L14.4 7L1 1Z" fill={arrowColor} stroke="white" strokeWidth="1.2" strokeLinejoin="round"/>
          </svg>
          <div className={`ml-5 mt-0 text-white px-3 py-1 rounded-full text-[13px] font-medium shadow-md whitespace-nowrap ${project.cursorColor || 'bg-red-400'}`}>
            {project.title}
          </div>
        </div>
      )}
    </>
  );
}
