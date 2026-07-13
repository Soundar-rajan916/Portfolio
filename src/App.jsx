import React, { useEffect } from 'react';
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

function App() {
  useEffect(() => {
    document.title = `Soundararajan | Portfolio`;
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-200 selection:text-slate-900 flex flex-col md:flex-row relative cursor-none">
      <SmoothCursor />
      {/* Global Background DotField */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
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

      <Sidebar />
      <div className="flex-1 md:ml-64 flex flex-col min-w-0 relative z-10">
        <main className="flex-grow">
          <section id="home"><Home /></section>
          <section id="projects"><Projects /></section>
          <section id="experience"><Experience /></section>
          <section id="about"><About /></section>
          <section id="tools"><Tools /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
