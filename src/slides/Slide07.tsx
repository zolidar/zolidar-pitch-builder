import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide07: SlideComponentType = () => {
  return (
    <div className="h-full flex items-center justify-center relative">
      {/* Positive Icons Pattern - Tessellated */}
      <div className="absolute inset-0 opacity-[0.9] pointer-events-none">
        <div className="w-full h-full" style={{ 
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg width="120" height="60" xmlns="http://www.w3.org/2000/svg">
              <g fill="rgb(71,85,105)" opacity="0.25">
                <!-- Heart icon (scaled to 2.0x) - Left -->
                <g transform="scale(2.0) translate(8, 15)">
                  <path d="M20.84 4.61C19.32 3.1 17.32 2.5 15.5 3.4C14.6 3.9 13.8 4.7 13.2 5.6C12.6 4.7 11.8 3.9 10.9 3.4C9.08 2.5 7.08 3.1 5.56 4.61C3.25 6.92 3.25 10.68 5.56 13L12 19.44L18.44 13C20.75 10.68 20.75 6.92 18.84 4.61H20.84Z" stroke="rgb(71,85,105)" stroke-width="1.0" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="translate(-7, -2) scale(0.7)"/>
                </g>
                
                <!-- Star icon (scaled to 2.0x) - Right -->
                <g transform="scale(2.0) translate(38, 15)">
                  <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 L12 2 Z" stroke="rgb(71,85,105)" stroke-width="1.0" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="translate(-4, -1) scale(0.7)"/>
                </g>
              </g>
            </svg>
          `)}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '120px 60px'
        }} />
      </div>
      <div className="max-w-2xl mx-auto">
        <p className="text-left text-2xl leading-[1.3] font-light text-slate-400 mb-10">
          Despite the huge market and a stellar record,<br /> EO hasn't scaled yet.
        </p>
        <p className="text-left text-[2.1rem] leading-[1.3] font-normal text-orange-500 mb-10">
          Zolidar is making EO so easy that it becomes...
        </p>
        <p className="text-left border-l-4 border-orange-600 pl-4 rounded max-w-3xl text-5xl leading-[1.15]  font-extrabold text-zinc-50">
         The most obvious ownership structure for any business
        </p>
      </div>
    </div>
  );
};

// set a background for this slide slate-700
Slide07.background = "#334155";
export default Slide07;