import React from 'react';
import { SlideProps } from '../types';
import SlideTitle from '../components/SlideTitle';

const Slide09: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col relative">
      <div className="h-full flex flex-col">
        
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="max-w-4xl">
              <h1 className="text-center font-ubuntu text-5xl font-bold bg-gradient-to-r from-blue-950 via-blue-600 to-blue-950 bg-clip-text text-transparent mt-12 mb-4">
              <a href="https://zolidar.com" target="_blank" className="font-ubuntu text-5xl font-bold bg-gradient-to-r from-blue-950 via-blue-600 to-blue-950 bg-clip-text text-transparent no-underline">
                zolidar
              </a>
            </h1>
            <p className="text-4xl font-bold text-center leading-[1.2] tracking-wide text-slate-800">
              Software platform & agentic AI<br />  for every stage of EO
            </p>
            <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 10"
          fill="none"
          className="mb-12 text-right items-right justify-end ml-60 w-[480px] h-[10px]"
          style={{ display: 'block' }}
        >
        <path d="M277.784 12.1694C245.753 11.4984 213.74 10.5399 181.709 10.1976C135.135 9.70459 88.5241 9.04732 42.0763 12.7035C32.6638 13.443 23.2514 14.1277 13.8571 14.8945C6.48612 15.4833 1.89736 13.6073 0.325614 9.25278C-0.993208 5.5966 1.80696 2.36489 6.68479 3.06326C23.5766 5.45963 40.0709 1.9404 56.764 1.62545C88.0725 1.02293 119.381 0.269738 150.708 0.0369475C173.579 -0.127375 196.487 0.283445 219.359 0.735333C238.274 1.11875 257.171 1.94033 276.086 2.58393C277.188 2.62501 278.362 2.65245 279.356 2.9811C283.258 4.28199 289.184 5.0214 287.793 9.18425C287.124 11.1698 281.813 12.279 278.597 13.7716C278.326 13.2376 278.073 12.7035 277.802 12.1694H277.784Z" fill="#F5631D"></path>
            </svg>

            <div className="flex flex-col items-center mb-4 w-full">
              <div className="relative w-full flex flex-col items-center">
                {/* Timeline line */}
                <div className="absolute -left-48 -right-48 top-1/2 h-1 bg-gradient-to-r from-blue-400/50 via-blue-400 to-blue-600 rounded-full z-0" style={{transform: 'translateY(-50%)'}}></div>
                {/* Timeline nodes and labels */}
                <div className="relative flex flex-row justify-between items-center w-full z-10 pt-8 pb-6">
                  {/* Node 1 */}
                  <div className="flex flex-col items-center w-1/3">
                    <span className="mb-1 text-xl text-slate-800 font-normal">Prepare for EO</span>
                    <span className="text-sm text-slate-600 mb-2">6 months-2 years</span>
                    <span className="relative flex h-6 w-6 mb-16">
                      <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-6 w-6 bg-blue-500 border-4 border-slate-300 shadow-lg"></span>
                    </span>
                  </div>
                  {/* Node 2 */}
                  <div className="flex flex-col items-center w-1/3">
                    <span className="mb-1 text-xl text-slate-800 font-normal">Transition to EO</span>
                    <span className="text-sm text-slate-600 mb-2">6 months–7 years</span>
                    <span className="relative flex h-6 w-6 mb-16">
                      <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-6 w-6 bg-blue-500 border-4 border-slate-300 shadow-lg"></span>
                    </span>
                  </div>
                  {/* Node 3 */}
                  <div className="flex flex-col items-center w-1/3">
                    <span className="mb-1 text-xl text-slate-800 font-normal">Operate as EO</span>
                    <span className="text-sm text-slate-600 mb-2">Continues indefinitely</span>
                    <span className="relative flex h-6 w-6 mb-16">
                      <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-6 w-6 bg-blue-500 border-4 border-slate-300 shadow-lg"></span>
                    </span>
                  </div>
                </div>
                {/* Timeline arrow for continuation */}
                <svg className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6" width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="arrow-gradient" x1="0" y1="12" x2="36" y2="12" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#60a5fa" />
                      <stop offset="1" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                  <path d="M0 12h28m0 0l-6-6m6 6l-6 6" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//set a gradient background for this slide
(Slide09 as any).background = "linear-gradient(to bottom right, #c4b5fd, #a5f3fc)";
export default Slide09;