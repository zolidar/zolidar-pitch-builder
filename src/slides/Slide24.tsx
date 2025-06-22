import React from 'react';
import { SlideProps, SlideComponentType } from '../types';
import PMFImage from '../assets/logos/PMF.png';

const Slide24: SlideComponentType = () => {
  return (
    <div className="h-full w-full flex flex-row">
      {/* Left: Image, maximized for legibility, 60% width, minimal top padding, reduced saturation */}
      <div className="flex-[4_3_0%] flex flex-col items-center justify-start bg-white mt-[-24px] ml-[-24px] mb-[-48px] pt-1 pl-0 pr-0 pb-2">
        <img
          src={PMFImage}
          alt="Time to Live Product (triangle), First Customer (square), and PMF (circle) via Lenny Rachitsky."
          className="w-full h-auto object-contain rounded-lg shadow-md"
          style={{ maxHeight: '88vh', minHeight: 0, filter: 'saturate(0.4)' }}
        />
        <div className="text-sm text-slate-600 mt-4 text-center w-full">
          Time to live product (triangle), first customer (square),<br /> and PMF (circle) via Lenny Rachitsky.
        </div>
      </div>
      {/* Right: Heading and message, 40% width */}
      <div className="flex-[2_2_0%] flex flex-col justify-center items-start px-8">
        <div className="text-[1.99rem] text-slate-800 leading-[1.10] font-extrabold px-0">
          <div className="mb-1 mt-2">Heavy build-out</div>
          <div className="mb-14">startups</div>
          <div className="mb-14">take time</div>
          <div className="mb-1">but are</div>
          <div className="mb-14">extremely sticky</div>
          <div className="mb-1">We are building a</div>
          <a 
            href="https://www.youtube.com/watch?v=dJ3DT_7jzds&t=198s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 border-b-2 border-slate-400"
          >
            compound company
          </a>
        </div>
      </div>
    </div>
  );
};

// Set a strong, deep navy background for the slide using type assertion to avoid linter error
// (Slide24 as any).background = "linear-gradient(to bottom, #a7f3d0, #d1fae5)";
Slide24.background = " #dbeafe";

export default Slide24;