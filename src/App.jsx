import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import DotField from './components/DotField';
import { SmoothCursor } from './components/SmoothCursor';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import About from './pages/About';
import Tools from './pages/Tools';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let pageName = 'Home';

    if (path === '/projects') pageName = 'Projects';
    else if (path === '/experience') pageName = 'Experience';
    else if (path === '/about') pageName = 'About';
    else if (path === '/tools') pageName = 'Tools';
    else if (path === '/contact') pageName = 'Contact';

    document.title = `${pageName} | Soundararajan`;
  }, [location]);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-200 selection:text-slate-900 flex flex-col md:flex-row relative cursor-none">
      <SmoothCursor />
      {/* Global Background DotField */}
      {location.pathname !== '/' && location.pathname !== '/about' && location.pathname !== '/contact' && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <DotField
            dotRadius={2.5}
            dotSpacing={14}
            bulgeStrength={67}
            glowRadius={160}
            sparkle={false}
            waveAmplitude={0}
            gradientFrom="rgba(203, 213, 225, 0.7)"
            gradientTo="rgba(148, 163, 184, 0.5)"
            glowColor="rgba(219, 234, 254, 0.4)"
          />
        </div>
      )}

      <Sidebar />
      <div className="flex-1 md:ml-64 flex flex-col min-w-0 relative z-10">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
