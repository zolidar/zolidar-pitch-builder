import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide33: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Redacted Version Sticky */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-sky-300/90 backdrop-blur-sm shadow-xl drop-shadow-lg px-4 py-2 rounded-br-md border-r border-b border-sky-300/60 transform rotate-1 hover:rotate-0 transition-transform duration-200">
          <span className="text-sky-950 text-xs font-medium tracking-wide uppercase">Heavily Redacted Version</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-6 py-6">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-6 flex justify-center">
            <div>
              <div className="text-lg font-medium text-slate-600 mb-3 block">
                Next 6-month goals
              </div>
              <h1 className="text-4xl font-bold text-slate-800 text-left leading-[1.3] mb-2">
              Become default <span className="text-blue-600">call to action</span> for EO by<br /> 
              reaching users through <span className="text-blue-600">trusted channels</span>
              </h1>
            </div>
          </div>

          {/* Three channel boxes */}
          <div className="grid grid-cols-3 gap-6">
            {/* Channel 1: Owners' Advisors */}
            <div className="bg-slate-50 rounded-xl p-6  border-t-4 border-blue-500 shadow-lg">
              <div className="flex items-center mb-5">
                <div className="w-8 h-6 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-3">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-slate-700">Owners' Advisors</h3>
              </div>
              <div className="space-y-8">
                <p className="text-lg font-medium text-slate-700 bg-slate-700">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                </p>
                <p className="text-base text-slate-600 bg-slate-600 leading-relaxed">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>

            {/* Channel 2: Partnerships */}
            <div className="bg-slate-50 rounded-xl p-6  border-t-4 border-blue-500  shadow-lg">
              <div className="flex items-center mb-5">
                <div className="w-8 h-6 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-3">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-slate-700">Aligned Orgs</h3>
              </div>
              <div className="space-y-8">
                <p className="text-lg font-medium text-slate-700 bg-slate-700">
                  Ut enim ad minim veniam quis nostrud exercitation
                </p>
                <p className="text-base text-slate-600 bg-slate-600 leading-relaxed">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit
                </p>
              </div>
            </div>

            {/* Channel 3: 3P Websites */}
            <div className="bg-slate-50 rounded-xl p-6 border-t-4 border-blue-500 shadow-lg">
              <div className="flex items-center mb-5">
                <div className="w-8 h-6 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-3">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-slate-700">3P Websites</h3>
              </div>
              <div className="space-y-8">
                <p className="text-lg font-medium text-slate-700 bg-slate-700">
                  In voluptate velit esse cillum dolore eu fugiat
                </p>
                <p className="text-base text-slate-600 bg-slate-600 leading-relaxed">
                  Nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Set background for this slide
// Slide33.background = " #cbd5e1";
(Slide33 as any).background = "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)";

export default Slide33;