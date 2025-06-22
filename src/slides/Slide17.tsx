import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide17: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8 py-6 relative">
      {/* Redacted Version Sticky */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-sky-300/90 backdrop-blur-sm shadow-xl drop-shadow-lg px-4 py-2 rounded-br-md border-r border-b border-sky-400/60 transform rotate-1 hover:rotate-0 transition-transform duration-200">
          <span className="text-sky-900 text-xs font-medium tracking-wide uppercase">Heavily Redacted Version</span>
        </div>
      </div>
      <div className="max-w-5xl w-full">
        {/* Header Section */}
        <div className="text-left mb-8">
          <h1 className="text-4xl ml-2 font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">
          Our EO approach builds <span className="text-blue-700">structural advantages</span> that traditional M&A and other EO players cannot match
          </h1>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Advantage 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-left shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-600 rounded-xl flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-sm">
                1
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">Organic Network Effects</h3>
                <p className="text-slate-800 bg-slate-800 text-base leading-relaxed font-medium">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                </p>
              </div>
            </div>
          </div>

          {/* Advantage 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-left shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-600 rounded-xl flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-sm">
                2
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">High Switching Costs</h3>
                <p className="text-slate-800 bg-slate-800 text-base leading-relaxed font-medium">
                  Aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
                </p>
              </div>
            </div>
          </div>

          {/* Advantage 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-left shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-600 rounded-xl flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-sm">
                3
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">Data Advantage for AI</h3>
                <p className="text-slate-800 bg-slate-800 text-base leading-relaxed font-medium">
                  Ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
              </div>
            </div>
          </div>

          {/* Advantage 4 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-left shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-600 rounded-xl flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-sm">
                4
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">Our Innovation Stack</h3>
                <p className="text-slate-800 bg-slate-800 text-base leading-relaxed font-medium">
                  Nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

Slide17.background = "linear-gradient(to bottom right, #dbeafe, #e0f2fe)";
export default Slide17; 