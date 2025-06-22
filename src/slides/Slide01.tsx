import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide01: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center relative">
      <div className="text-center max-w-4xl">
        <h1 className="font-ubuntu text-7xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent mb-12">
          <a href="https://zolidar.com" target="_blank" className="font-ubuntu text-7xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent no-underline">
            zolidar
          </a>
        </h1>
        
        <div className="mb-12">
          <p className="text-2xl font-normal tracking-wide text-slate-800">
            Increasing the wealth of everyday<br />Americans with employee-ownership
          </p>
        </div>
        <div className="flex gap-12 justify-center mb-12">
          <span className="text-2xl font-normal text-violet-800">#saas</span>
          <span className="text-2xl font-normal text-violet-800">#ai-agent</span>
          <span className="text-2xl font-normal text-violet-800">#wealth-transfer</span>
        </div>
        
        
        <p className="text-xl font-light tracking-wider text-slate-500">
          <a href="https://zolidar.com" target="_blank" className="text-xl font-light tracking-wider text-slate-500 no-underline">
            zolidar.com
          </a>
        </p>
      </div>
    </div>
  );
};

//set a gradient background for this slide
Slide01.background = "linear-gradient(to bottom right, #c4b5fd, #a5f3fc)";
export default Slide01;