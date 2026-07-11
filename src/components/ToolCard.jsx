import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Terminal, Code, Bot, Cloud, Book, MessageSquare, PenTool, LayoutTemplate } from 'lucide-react';

const iconMap = {
  claude: <Terminal size={24} />,
  code: <Code size={24} />,
  bot: <Bot size={24} />,
  cloud: <Cloud size={24} />,
  book: <Book size={24} />,
  message: <MessageSquare size={24} />,
  pen: <PenTool size={24} />,
  default: <LayoutTemplate size={24} />
};

export default function ToolCard({ tool, index = 0 }) {
  const Icon = iconMap[tool.icon] || iconMap.default;
  const cardRef = useRef(null);

  // Parallax motion values (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for premium feel
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse position to slight 3D rotation (-3 to 3 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-4, 4]);

  // Map mouse position to slight translation (moves towards mouse)
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [-6, 6]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
      className="w-full sm:w-[310px] h-[92px]"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3 + (index % 3) * 0.5, // slightly offset float speeds
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2 // offset starting phase
        }}
        className="w-full h-full"
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          whileHover="hover"
          initial="idle"
          variants={{
            idle: { y: 0, scale: 1 },
            hover: {
              y: -8,
              scale: 1.03,
              transition: {
                y: { duration: 0.25, ease: "easeOut" },
                scale: { duration: 0.25, ease: "easeOut" }
              }
            }
          }}
          className="group flex items-center p-4 rounded-[20px] bg-white/95 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:bg-white hover:border-gray-200 hover:shadow-[0_16px_40px_rgb(0,0,0,0.08)] cursor-pointer w-full h-full transition-colors transition-shadow duration-300 overflow-hidden"
        >
          <motion.div
            style={{ x: translateX, y: translateY }}
            className="flex items-center gap-4 w-full h-full"
          >
            <motion.div
              variants={{
                idle: { scale: 1, rotate: 0 },
                hover: { scale: 1.08, rotate: 4, transition: { duration: 0.25, ease: "easeOut" } }
              }}
              className="w-11 h-11 rounded-[14px] bg-slate-50 text-slate-600 flex items-center justify-center shrink-0 border border-gray-100/50 transition-colors duration-300 group-hover:bg-slate-100 group-hover:text-slate-900"
            >
              {Icon}
            </motion.div>
            <div>
              <h4 className="font-semibold text-slate-900 text-[15px] mb-1">{tool.name}</h4>
              <p className="text-[13px] text-slate-500 font-medium">{tool.category}</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
