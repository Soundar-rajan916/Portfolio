import React from 'react';
import ExperienceTimeline from '../components/ExperienceTimeline/ExperienceTimeline';

export default function Experience() {
  return (
    <div className="w-full bg-transparent min-h-screen pt-16 pb-12 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left md:pl-[280px]">
          {/* <h1 className="text-3xl font-bold text-slate-900 mb-2">Changelog from my journey</h1> */}
          {/* <p className="text-slate-500">Here's a timeline of my journey.</p> */}
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Work Experience</h1>
        </div>

        <ExperienceTimeline />

        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-6 py-2.5 rounded-full font-medium transition-colors"
          >
            View Full Resume
          </a>
        </div>
      </div>
    </div>
  );
}
