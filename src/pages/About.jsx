import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Meteors } from '../components/Meteors';

export default function About() {
  const skills = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'FastAPI', 'Java', 'LangChain', 'Gemini', 'ChromaDB', 'Docker'];

  return (
    <div className="relative min-h-screen w-full text-slate-900">
      {/* Meteors Background */}
      <div className="fixed inset-y-0 right-0 left-0 md:left-64 z-0 overflow-hidden pointer-events-none">
        <Meteors number={30} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 pointer-events-none">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center gap-6 pointer-events-auto">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 border-4 border-white shadow-sm">
            <img src="/dp.png" alt="Soundararajan" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Soundararajan RT</h1>
            <p className="text-slate-500 text-lg">MERN Stack Developer • AI Engineer • Prompt Engineering </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-12 pointer-events-auto interactive-hover">
          {skills.map((skill) => (
            <span key={skill} className="text-sm text-slate-600 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-md font-medium">
              {skill}
            </span>
          ))}
        </div>

        <div className="prose prose-slate max-w-none prose-headings:font-medium prose-headings:text-xl prose-p:text-slate-600 prose-p:leading-relaxed mb-16 space-y-8 pointer-events-auto">
          <section>
            <h2 className="text-slate-900 mb-4">Who I Am</h2>
            <p>
              Hello! I'm Soundararajan RT, currently pursuing my B.Tech in Artificial Intelligence and Data Science at Muthayammal Engineering College (2023 - 2027). I am passionate about building scalable web applications and integrating advanced AI capabilities.
            </p>
          </section>

          <section>
            <h2 className="text-slate-900 mb-4">What I Do</h2>
            <p>
              I specialize in the MERN stack (MongoDB, Express, React, Node.js) and build AI-powered solutions using Python, LangChain, and Large Language Models (LLMs). Whether it's crafting a responsive frontend, setting up a secure REST API, or integrating RAG (Retrieval-Augmented Generation) pipelines, I love solving complex technical problems.
            </p>
          </section>

          <section>
            <h2 className="text-slate-900 mb-4">My Journey</h2>
            <p>
              I interned as an AI Engineer at EchoDigitalWorks, where I designed intelligent applications using modern AI frameworks. I've also built products . Beyond developing software, I enjoy sharing knowledge, having conducted workshops on Git/GitHub and the MERN stack.
            </p>
          </section>

          <section>
            <h2 className="text-slate-900 mb-4">Tech Arsenal</h2>
            <p>
              My toolkit spans frontend (React, Tailwind), backend (Node.js, Fast API), databases (MongoDB, SQL), and AI workflows (LangChain, Prompt Engineering). I also leverage tools like Docker, AWS, and Git to ensure efficient and reliable software delivery.
            </p>
          </section>
        </div>

        <div className="pointer-events-auto inline-block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            <Mail size={18} /> Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
