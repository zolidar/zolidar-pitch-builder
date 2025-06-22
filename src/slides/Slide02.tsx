import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide02: SlideComponentType = () => {
  return (
    <div className="h-full flex items-center justify-center relative">
      <div className="max-w-4xl">
          <p className="text-[2rem] font-extrabold text-zinc-200 leading-tight tracking-wide mb-12 whitespace-nowrap">
            Millions of businesses will shut down by 2030 <br /> eroding $8 trillion in business wealth
          </p>
          <p className="text-[1.7rem] max-w-3xl leading-tight font-light text-slate-300 mb-12 border-l-4 border-slate-400 pl-4 p-1 rounded">
            Not because they are bad businesses... <br />
            ...but because their owners will retire
          </p>
          <p className="text-[1.4rem] max-w-3xl font-light text-slate-400 border-l-2 border-slate-500 pl-4 rounded ">
          Each shutdown destroys...<br />1 owner's life's work&nbsp;&nbsp;•&nbsp;&nbsp;1 community's business&nbsp;&nbsp;•&nbsp;&nbsp;Many livelihoods
          </p>
      </div>
    </div>
  );
};

// set a background for this slide
Slide02.background = "#0f172a";
export default Slide02;