import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide21: SlideComponentType = () => {
  return (
    <div className="h-full flex relative overflow-hidden">
      {/* Left side - Journey with curved arrow and flag posts */}
      <div className="flex-1 relative flex items-center justify-center">
        <svg 
          className="absolute w-full h-full"
          viewBox="0 0 400 350" 
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Main curved arrow path - specific to image */}
          <path
            d="M 40 50 
           Q 240 160, 70 214
           Q 0 260, 295 350"
            stroke="#60a5fa" // blue-900
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
          <defs>
            <marker
              id="arrowhead"
              markerWidth="8"
              markerHeight="4"
              refX="0"
              refY="2"
              orient="auto-start-reverse" // Ensures arrowhead orients along the path
            >
              <polygon points="0 0, 8 2, 0 4" fill="#60a5fa" />
            </marker>
          </defs>

          {/* Flag 1 Elements (Top-left) */}
          <g>
            <ellipse cx="40" cy="50" rx="6" ry="2" stroke="#94A3B8" strokeWidth="2" /> {/* slate-300 base */}
            <line x1="40" y1="50" x2="40" y2="20" stroke="#94A3B8" strokeWidth="2" /> {/* slate-400 pole */}
            <polygon points="40,20 60,27.5 40,35" fill="#CBD5E1" /> {/* slate-300 flag */}
          </g>

          {/* Flag 2 Elements (Middle - Highlighted) */}
          <g>
            <ellipse cx="148" cy="160" rx="10" ry="4" fill="#334155" /> {/* slate-700 base */}
            <line x1="148" y1="160" x2="148" y2="100" stroke="#1E293B" strokeWidth="3" /> {/* slate-800 pole */}
            <polygon points="148,100 188,110 148,120" fill="#334155" /> {/* slate-700 flag */}
          </g>

          {/* Flag 3 Elements (Lower-mid) */}
          <g>
            <ellipse cx="200" cy="320" rx="8" ry="3" stroke="#94A3B8" strokeWidth="2" /> {/* slate-300 base */}
            <line x1="200" y1="320" x2="200" y2="290" stroke="#94A3B8" strokeWidth="3" /> {/* slate-400 pole */}
            <polygon points="200,290 220,297.5 200,305" fill="#CBD5E1" /> {/* slate-300 flag */}
          </g>
        </svg>

        {/* Text labels positioned carefully relative to the SVG visual */}
        <div style={{ position: 'absolute', top: 'calc(55/350*100%)', left: 'calc(70/400*100%)' }} className="transform -translate-y-1/2">
          <div className="text-sm font-normal text-slate-700">
            Employees vs. Owners
          </div>
        </div>

        <div style={{ position: 'absolute', top: 'calc(130/350*100%)', left: 'calc(195/400*100%)' }} className="transform -translate-y-1/2">
          <div className="text-lg font-bold text-slate-700">
            Employees <br />are Owners
          </div>
        </div>

        <div style={{ position: 'absolute', top: 'calc(275/350*100%)', left: 'calc(225/400*100%)' }} className="transform -translate-y-1/2">
          <div className="text-sm font-normal text-slate-700 leading-tight">
            Everyone's an<br />owner (DAO)
          </div>
        </div>
      </div>

      {/* Right side - Contact section - Lighter Tan Background */}
      <div className="flex-1 h-full flex items-center justify-center p-6">
        <div className="bg-gradient-to-b from-sky-300 to-blue-400 rounded-3xl p-10 w-full h-auto min-h-[400px] max-h-[90%] flex flex-col justify-center shadow-xl">
          <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-8">
            Contact
          </h2>
          
          <div className="grid grid-cols-2 gap-x-10 text-center">
            <div>
              <h3 className="text-2xl font-medium text-slate-800 mb-1">
                Ashish Agrawal
              </h3>
              <p className="text-base text-slate-700 mb-2">
                Founder
              </p>
              <div className="text-base text-slate-800 break-all">
                <a href="mailto:aa@zolidar.io" className="text-slate-800 no-underline">aa@zolidar.io</a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-slate-800 mb-1">
                Sonali Kothari
              </h3>
              <p className="text-base text-slate-700 mb-2">
                Founder
              </p>
              <div className="text-base text-slate-800 break-all">
                <a href="mailto:sk@zolidar.io" className="text-slate-800 no-underline">sk@zolidar.io</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//set a gradient background for this slide
Slide21.background = " #dbeafe";
export default Slide21;