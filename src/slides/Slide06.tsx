import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide06: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center relative">
      {/* Title and underline SVG */}
      <div className="w-full flex flex-col items-center mt-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-0 text-center leading-tight"><span className="text-blue-800">1.24 million businesses</span> are suitable for EO</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 10"
          fill="none"
          className="self-start mb-8 ml-40 w-[400px] h-[10px]"
          style={{ display: 'block' }}
        >
        <path d="M277.784 12.1694C245.753 11.4984 213.74 10.5399 181.709 10.1976C135.135 9.70459 88.5241 9.04732 42.0763 12.7035C32.6638 13.443 23.2514 14.1277 13.8571 14.8945C6.48612 15.4833 1.89736 13.6073 0.325614 9.25278C-0.993208 5.5966 1.80696 2.36489 6.68479 3.06326C23.5766 5.45963 40.0709 1.9404 56.764 1.62545C88.0725 1.02293 119.381 0.269738 150.708 0.0369475C173.579 -0.127375 196.487 0.283445 219.359 0.735333C238.274 1.11875 257.171 1.94033 276.086 2.58393C277.188 2.62501 278.362 2.65245 279.356 2.9811C283.258 4.28199 289.184 5.0214 287.793 9.18425C287.124 11.1698 281.813 12.279 278.597 13.7716C278.326 13.2376 278.073 12.7035 277.802 12.1694H277.784Z" fill="#F5631D"></path>
        </svg>
      </div>

      {/* Market Segments with plus signs */}
      <div className="flex flex-row items-center justify-center gap-8 mt-2 mb-16">
        <div className="flex flex-col items-center px-7 py-4 bg-blue-50 rounded-lg border-l-4 border-orange-300 min-w-[130px] shadow-lg">
          <span className="text-3xl font-bold text-blue-900">1.1 million</span>
          <span className="text-base font-light text-slate-600 mt-1">Businesses with 5-50 employees</span>
        </div>
        <span className="text-2xl font-bold text-slate-700 select-none mx-2 align-middle">+</span>
        <div className="flex flex-col items-center px-7 py-4 bg-blue-50 rounded-lg border-l-4 border-orange-300 min-w-[130px] shadow-lg">
          <span className="text-3xl font-bold text-blue-900">140 thousand</span>
          <span className="text-base font-light text-slate-600 mt-1">Businesses with 50+ employees</span>
        </div>
      </div>
      {/* Attributes Row */}
      <div className="flex flex-row items-center justify-center gap-28 mb-8">
        <div className="flex flex-col items-center px-6 py-3 rounded-lg border border-slate-300/30 min-w-[120px]">
          <span className="text-xl font-bold text-slate-700">$25T</span>
          <span className="text-s font-medium text-slate-600 mt-1">revenue</span>
        </div>
        <div className="flex flex-col items-center px-6 py-3 rounded-lg border border-slate-300/30 min-w-[120px]">
          <span className="text-xl font-bold text-slate-700">$4T</span>
          <span className="text-s font-medium text-slate-600 mt-1">payroll</span>
        </div>
        <div className="flex flex-col items-center px-6 py-3 rounded-lg border border-slate-300/30 min-w-[120px]">
          <span className="text-xl font-bold text-slate-700">58M</span>
          <span className="text-s font-medium text-slate-600 mt-1">workers</span>
        </div>
      </div>
      {/* Source - directly below title */}
      <div className="w-full flex justify-center mb-10">
        <div className="text-xs text-gray-500 max-w-xl text-center font-light">
          <a
              href="https://www.aspeninstitute.org/publications/how-many-firms-are-good-candidates-for-employee-ownership/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-1.5 rounded-full bg-slate-50/60 border border-slate-300/60 text-sm font-light text-slate-600 shadow-sm whitespace-nowrap align-middle"
              style={{ lineHeight: '1.2', verticalAlign: 'middle' }}
              title="View full research"
            >
            <span className="font-normal">Source:</span>&nbsp;Aspen Institute & Rutgers University&nbsp;
            <svg className="w-4 h-4 mr-1 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
        </div>
      </div>
    </div>
  );
};

//set a gradient background for this slide
Slide06.background = "linear-gradient(to bottom, #f0f9ff 0%, #e0f2fe 100%)";
export default Slide06;