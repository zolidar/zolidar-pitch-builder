import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide22: SlideComponentType = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-7xl font-bold text-slate-800">
        Appendix
      </div>
    </div>
  );
};

//set a gradient background for this slide
Slide22.background = " #e7e5e4";
export default Slide22;
//#e7e5e4