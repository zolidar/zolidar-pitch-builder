import React from 'react';

interface SlideLabelProps {
  label: string;
  className?: string;
}

const SlideLabel: React.FC<SlideLabelProps> = ({ label, className = '' }) => {
  return (
    <span
      className={`inline-block uppercase tracking-wide font-semibold text-xs px-3 py-1 rounded-full bg-slate-800 border border-slate-400 text-slate-100 shadow-sm absolute right-6 top-4 z-20 ${className}`}
      style={{ letterSpacing: '0.08em' }}
      aria-label={`Slide label: ${label}`}
    >
      {label}
    </span>
  );
};

export default SlideLabel; 