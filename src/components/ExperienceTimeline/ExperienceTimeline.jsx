import React, { useRef } from 'react';
import { experience } from '../../data/experience';
import ProgressLine from './ProgressLine';
import TimelineItem from './TimelineItem';

export default function ExperienceTimeline() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-10">
      <ProgressLine containerRef={containerRef} />
      
      <div className="relative z-10">
        {experience.map((item, index) => (
          <TimelineItem key={item.id} experience={item} index={index} />
        ))}
      </div>
    </div>
  );
}
