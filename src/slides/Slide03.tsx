import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide03: SlideComponentType = () => {
  return (
    <div className="h-full flex items-center justify-center relative">
      {/* Lucide Icons Pattern - Tessellated */}
      <div className="absolute inset-0 opacity-[0.28] pointer-events-none">
        <div className="w-full h-full" style={{ 
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
              <g fill="rgb(71, 85, 105)" opacity="0.6">
                <!-- AlertTriangle icon (scaled to 2.5x) - Top Left -->
                <g transform="scale(2.5) translate(12, 7)">
                  <path d="M5 12 L9 4 L13 12 Z" stroke="rgb(71, 85, 105)" stroke-width="0.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="9" cy="9" r="0.4" fill="rgb(71, 85, 105)"/>
                  <path d="M9 6 L9 8" stroke="rgb(71, 85, 105)" stroke-width="0.7" stroke-linecap="round"/>
                </g>
                
                <!-- Ban icon (scaled to 2.5x) - Top Right -->
                <g transform="scale(2.5) translate(52, 7)">
                  <circle cx="8" cy="8" r="6" stroke="rgb(71, 85, 105)" stroke-width="0.8" fill="none"/>
                  <path d="M4.5 4.5 L11.5 11.5" stroke="rgb(71, 85, 105)" stroke-width="0.8" stroke-linecap="round"/>
                </g>
                
                <!-- OctagonX icon (scaled to 2.5x) - Bottom Left -->
                <g transform="scale(2.5) translate(12, 32)">
                  <path d="M5.5 2 L10.5 2 L14 5.5 L14 10.5 L10.5 14 L5.5 14 L2 10.5 L2 5.5 Z" stroke="rgb(71, 85, 105)" stroke-width="0.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.5 5.5 L10.5 10.5 M10.5 5.5 L5.5 10.5" stroke="rgb(71, 85, 105)" stroke-width="0.8" stroke-linecap="round"/>
                </g>
                
                <!-- BookmarkX icon (scaled to 2.5x) - Bottom Right -->
                <g transform="scale(2.5) translate(52, 32)">
                  <path d="M4 2 L12 2 L12 14 L8 11 L4 14 Z" stroke="rgb(71, 85, 105)" stroke-width="0.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.5 5.5 L9.5 8.5 M9.5 5.5 L6.5 8.5" stroke="rgb(71, 85, 105)" stroke-width="0.8" stroke-linecap="round"/>
                </g>
              </g>
            </svg>
          `)}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 150px'
        }} />
      </div>
      
      <div className="max-w-4xl relative z-10">
          <p className="text-slate-400 text-2xl font-light mb-5">
            In the US, each year...
          </p>
          <p className="text-slate-200 text-4xl font-bold mb-4">
            120,000 are listed for-sale
          </p>
          <p className="text-fuchsia-400 text-4xl font-bold mb-16">
            100,000 fail to find a buyer
          </p>
          <p className="text-2xl mt-4 border-l-2 border-slate-600 rounded text-slate-400 font-light p-2 pl-3 pr-3">
          Good businesses, but can't deliver 20%+ returns buyers demand
          </p>
      </div>
    </div>
  );
};

// set a background for this slide
Slide03.background = "#1e293b";
export default Slide03;