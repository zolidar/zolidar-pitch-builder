import React from 'react';
import { SlideProps } from '../types';

const Slide32: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Redacted Version Sticky */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-sky-300/90 backdrop-blur-sm shadow-xl drop-shadow-lg px-4 py-2 rounded-br-md border-r border-b border-sky-300/60 transform rotate-1 hover:rotate-0 transition-transform duration-200">
          <span className="text-sky-950 text-xs font-medium tracking-wide uppercase">Heavily Redacted Version</span>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto px-8">
          
          {/* Main Headline */}
          <div className="text-center mb-6 mt-4">
            <h1 className="text-4xl font-bold text-slate-800 leading-tight mb-1">
              We can scale with {' '}
              <span className="text-blue-600">low CAC</span> through
            </h1>
            <p className="text-3xl font-light text-slate-700 leading-tight">
              partnerships, targeted marketing, & organic growth
            </p>
          </div>

          {/* Two main sections */}
          <div className="grid grid-cols-2 gap-8">
            
            {/* Left: Partnerships */}
            <div className="bg-slate-50 rounded-xl pl-6 pr-6 pb-4 pt-4 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-700 mb-5 text-center">Partnerships</h3>
              <div className="space-y-3">
                <div className="text-base font-medium text-slate-600 bg-slate-600 border-l-4 border-blue-300 pl-3 py-2 leading-relaxed">Lorem ipsum dolor sit amet</div>
                <div className="text-base font-medium text-slate-600 bg-slate-600 border-l-4 border-purple-300 pl-3 py-2 leading-relaxed">Consectetur adipiscing elit</div>
                <div className="text-base font-medium text-slate-600 bg-slate-600 border-l-4 border-green-300 pl-3 py-2 leading-relaxed">Sed do eiusmod tempor</div>
                <div className="text-base font-medium text-slate-600 bg-slate-600 border-l-4 border-teal-300 pl-3 py-2 leading-relaxed">Incididunt ut labore et dolore</div>
                <div className="text-base font-medium text-slate-600 bg-slate-600 border-l-4 border-amber-300 pl-3 py-2 leading-relaxed">Magna aliqua ut enim</div>
                <div className="text-base font-medium text-slate-600 bg-slate-600 border-l-4 border-rose-300 pl-3 py-2 leading-relaxed">Ad minim veniam quis</div>
              </div>
            </div>

            {/* Right: Marketing & Organic */}
            <div className="bg-slate-50 rounded-xl pl-6 pr-6 pb-4 pt-4 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-700 mb-5 text-center">Growth Marketing</h3>
              <div className="space-y-5">
              <div className="border-l-4 border-purple-300 pl-4 py-1">
                  <div className="text-base font-semibold text-slate-700 bg-slate-700 mb-1 leading-snug">Nostrud Exercitation Ullamco</div>
                  <div className="text-sm text-slate-600 bg-slate-600 leading-relaxed">Laboris nisi ut aliquip ex ea commodo consequat</div>
                </div>
                <div className="border-l-4 border-blue-300 pl-4 py-1">
                  <div className="text-base font-semibold text-slate-700 bg-slate-700 mb-1 leading-snug">Duis Aute Irure Dolor</div>
                  <div className="text-sm text-slate-600 bg-slate-600 leading-relaxed">In reprehenderit in voluptate velit esse</div>
                </div>
                <div className="border-l-4 border-green-300 pl-4 py-1">
                  <div className="text-base font-semibold text-slate-700 bg-slate-700 mb-1 leading-snug">Cillum Dolore Eu Fugiat</div>
                  <div className="text-sm text-slate-600 bg-slate-600 leading-relaxed">Nulla pariatur excepteur sint occaecat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Set background color consistent with other slides
// (Slide32 as any).background = "#cbd5e1";
(Slide32 as any).background = "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)";

export default Slide32;