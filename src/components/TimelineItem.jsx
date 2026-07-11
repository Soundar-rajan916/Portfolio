import React from 'react';

export default function TimelineItem({ experience }) {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Desktop Date */}
      <div className="hidden sm:flex flex-col items-start absolute left-0 w-28 top-6 text-sm text-slate-400">
        <span>{experience.period}</span>
      </div>

      {/* Timeline line & dot */}
      <div className="absolute left-0 sm:left-32 top-0 bottom-0 w-px bg-gray-100 group-last:bg-transparent -ml-px sm:-ml-4 flex flex-col items-center">
        <div className="absolute top-8 w-2 h-2 rounded-full bg-gray-300 ring-4 ring-white group-hover:bg-slate-400 transition-colors -translate-x-1/2"></div>
      </div>

      <div className="flex flex-col">
        {/* Mobile Date */}
        <span className="sm:hidden text-xs text-slate-400 mb-1">{experience.period}</span>

        <h3 className="text-lg font-medium text-slate-900 mb-1">
          {experience.role} <span className="text-slate-400 font-normal">· {experience.company}</span>
        </h3>
        <p className="text-slate-600 text-sm mb-3">
          {experience.summary}
        </p>

        {experience.bullets && experience.bullets.length > 0 && (
          <ul className="list-disc list-outside ml-4 text-sm text-slate-500 space-y-1.5 mb-4">
            {experience.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mt-2">
          {experience.tags.map((tag) => (
            <span key={tag} className="text-xs text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
