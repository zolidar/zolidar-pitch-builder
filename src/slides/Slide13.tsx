import React from 'react';
import { SlideProps, SlideComponentType } from '../types';
import { Users, Star, BadgeCheck, DollarSign, ExternalLink } from 'lucide-react';
import B11PE from '../assets/logos/B11PE.png';

const Slide13: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Heavily Redacted Version Sticky */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-indigo-400/70 backdrop-blur-sm shadow-xl drop-shadow-lg px-4 py-2 rounded-br-md border-r border-b border-indigo-400/60 transform rotate-1 hover:rotate-0 transition-transform duration-200">
          <span className="text-indigo-950 text-xs font-medium tracking-wide uppercase">Heavily Redacted Version</span>
        </div>
      </div>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.7]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 0.5px),
            linear-gradient(180deg, rgba(255, 255, 255, 0.4) 1px, transparent 0.5px),
            radial-gradient(circle at 25% 75%, rgba(255, 255, 255, 0.3) 0%, transparent 35%),
            radial-gradient(circle at 75% 25%, rgba(99, 102, 241, 0.15) 0%, transparent 25%)
          `,
          backgroundSize: '80px 80px, 80px 80px, 500px 500px, 300px 300px',
          backgroundPosition: '0 0, 0 0, 0 0, 100% 100%'
        }}></div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-12 py-8 relative z-10">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-12">
            <div className="text-[2.6rem] font-extrabold text-slate-800 leading-tight tracking-tight mb-2">
              Lorem ipsum dolor sit amet consectetur
            </div>
            <div className="text-[2.2rem] font-medium text-slate-800 leading-[1.2] tracking-normal">
              adipiscing <span className="text-indigo-800 font-bold">elit sed do</span>
              <span className="mx-2 underline">eiusmod</span>
              <span className="text-indigo-800 font-bold">tempor incididunt</span>
            </div>
          </div>

          {/* Main Content - Four Boxes */}
          <div className="grid grid-cols-4 gap-4">
            {/* Column 1 */}
            <div className="relative flex flex-col items-center bg-white/95 backdrop-blur-sm p-5 rounded-xl border border-slate-200/60 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/60 to-transparent rounded-xl"></div>
              <div className="flex flex-col items-center relative z-10">
                {/* Label */}
                <div className="text-lg font-medium text-slate-500 mt-2 mb-2">
                  Lorem Ipsum
                </div>

                {/* Content */}
                <div className="flex items-center justify-center h-9 mt-2 mb-6">
                  <div className="px-4 py-2 bg-slate-100 rounded text-sm text-slate-600">
                    Dolor Sit
                  </div>
                  <div className="h-6 w-px border border-slate-200/60"></div>
                  <div className="px-2 font-ubuntu text-[1.4rem] font-bold bg-gradient-to-r from-slate-900 via-slate-600 to-slate-950 bg-clip-text text-transparent">
                    amet
                  </div>
                </div>
                
                {/* Button */}
                <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-slate-50/90 border border-slate-200/50 text-xs font-medium text-slate-600">
                  Consectetur
                  <ExternalLink className="w-3 h-3 ml-1.5 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="relative flex flex-col items-center bg-white/95 backdrop-blur-sm p-5 rounded-xl border border-slate-200/80 shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 to-transparent rounded-xl"></div>
              <div className="flex flex-col items-center relative z-10">
                <Users className="w-7 h-7 text-slate-400 mb-4 mt-2" />
                <div className="text-xl font-semibold text-slate-800 mb-8">Lorem ipsum</div>
                <div className="text-md text-slate-600 text-center">dolor sit amet</div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="relative flex flex-col items-center bg-white/95 backdrop-blur-sm py-5 px-3 rounded-xl border border-slate-200/80 shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/60 to-transparent rounded-xl"></div>
              <div className="flex flex-col items-center relative z-10">
                <Star className="w-7 h-7 text-slate-400 mb-4 mt-2" />
                <div className="text-xl font-semibold text-slate-800 mb-8">Consectetur</div>
                <div className="text-md text-slate-600 text-center">adipiscing elit</div>
              </div>
            </div>

            {/* Column 4 */}
            <div className="relative flex flex-col items-center bg-white/95 backdrop-blur-sm p-5 rounded-xl border border-slate-200/80 shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/60 to-transparent rounded-xl"></div>
              <div className="flex flex-col items-center relative z-10">
                <DollarSign className="w-7 h-7 text-slate-400 mb-4 mt-2" />
                <div className="text-xl font-semibold text-slate-800 mb-8">Tempor</div>
                <div className="text-md text-slate-600 text-center">incididunt ut</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Clean, professional background
Slide13.background = "#c7d2fe";

export default Slide13;