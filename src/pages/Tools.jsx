import React from 'react';
import ToolCard from '../components/ToolCard';
import { tools } from '../data/tools';

export default function Tools() {
  return (
    <div className="w-full bg-transparent pt-12 pb-8 flex flex-col justify-center items-center h-full">
      <div className="w-full max-w-[750px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="mb-8 text-center">
          <h1 className="text-4xl sm:text-[48px] font-bold text-slate-900 mb-3 tracking-tight">Shovels</h1>
          <p className="text-[14px] sm:text-[15px] text-slate-500 font-medium">Tools I frequently use to make life easier.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full place-items-center">
          {tools.map((tool, idx) => (
            <ToolCard key={idx} tool={tool} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
