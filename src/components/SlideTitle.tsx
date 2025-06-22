import React from 'react';

interface SlideTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SlideTitle: React.FC<SlideTitleProps> = ({ children, className = '' }) => {
  return (
    <h1 className={`text-4xl font-bold text-slate-800 mb-6 ${className}`}>
      {children}
    </h1>
  );
};

export default SlideTitle;