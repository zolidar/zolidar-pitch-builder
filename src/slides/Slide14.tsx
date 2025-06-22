import React from 'react';
import { SlideProps, SlideComponentType } from '../types';
import { ExternalLink, Building2, Users, DollarSign, Shield, TrendingUp, Briefcase } from 'lucide-react';

// Import company logos
import JPMChase from '../assets/logos/B12JPMChase.webp';
import Prudential from '../assets/logos/B13Prudential.png';
import Kaiser from '../assets/logos/B15Kaiser.png';

const Slide14: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Redacted Version Sticky */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-indigo-400/70 backdrop-blur-sm shadow-xl drop-shadow-lg px-4 py-2 rounded-br-md border-r border-b border-indigo-300/60 transform rotate-1 hover:rotate-0 transition-transform duration-200">
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

      <div className="flex-1 flex flex-col justify-center px-8 py-4 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="mb-5 text-left">
            <div className="text-[2.4rem] font-black bg-slate-800 text-slate-800 leading-[1.05] mb-2 tracking-tight">
              Lorem ipsum dolor sit amet consectetur
            </div>
            <div className="text-[1.7rem] font-semibold text-indigo-700 mb-4 leading-[1.2] tracking-normal">
              and our products naturally complement their programs
            </div>
            <div className="inline-flex items-center bg-gradient-to-l from-indigo-50/90 to-orange-50/60 border border-indigo-200/70 rounded-xl px-6 py-3 shadow-sm backdrop-blur-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
              <div className="text-lg font-semibold text-slate-800 leading-relaxed">
              Notably, major corporations are actively investing in scaling employee ownership
              </div>
            </div>
          </div>

          {/* Main Content - Three Corporate Examples */}
          <div className="grid grid-cols-3 gap-3">
            
            {/* Company 1 */}
            <div className="bg-indigo-50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 p-3 flex flex-col h-80">
              {/* Top Section - Prominent */}
              <div className="flex-shrink-0">
                {/* Header with Logo */}
                <div className="mb-2 mt-2">
                  <div className="h-6 bg-slate-200 rounded mx-auto max-w-[120px] flex items-center justify-center">
                    <span className="text-xs text-slate-500">Company A</span>
                  </div>
                </div>
                <div className="mb-5 mt-3">
                  <div className="text-md font-normal text-slate-800 bg-slate-800 leading-snug text-left px-3">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                  </div>
                </div>    

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className="bg-indigo-100/50 rounded-lg p-2 text-center border border-indigo-200">
                    <div className="text-base font-bold text-slate-800">Lorem</div>
                    <div className="text-xs text-slate-600">ipsum</div>
                  </div>
                  <div className="bg-indigo-100/50 rounded-lg p-2 text-center border border-indigo-200">
                    <div className="text-base font-bold text-slate-800">Dolor</div>
                    <div className="text-xs text-slate-600">sit amet</div>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Less Prominent */}
              <div className="flex-grow flex flex-col justify-end">
                {/* Description */}
                <div className="mb-3">
                  <div className="text-xs text-slate-500 space-y-1 leading-relaxed pl-2">
                    <div><span className="font-medium text-sm text-slate-600 underline decoration-orange-600 decoration-2">Consectetur adipiscing</span></div>
                    <div>Sed do eiusmod tempor incididunt</div>
                    <div>Ut labore et dolore magna aliqua</div>
                  </div>
                </div>

                {/* Sources - Bottom Aligned */}
                <div className="text-center border-t border-slate-100 pt-2">
                  <div className="inline-flex items-center text-slate-500 text-xs font-medium">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Lorem Ipsum
                  </div>
                </div>
              </div>
            </div>

            {/* Company 2 */}
            <div className="bg-indigo-50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 p-3 flex flex-col h-80">
              {/* Top Section - Prominent */}
              <div className="flex-shrink-0">
                {/* Header with Logo */}
                <div className="mb-2 mt-2">
                  <div className="h-6 bg-slate-200 rounded mx-auto max-w-[120px] flex items-center justify-center">
                    <span className="text-xs text-slate-500">Company B</span>
                  </div>
                </div>
                <div className="mb-5 mt-3">
                  <div className="text-md font-normal text-slate-800 bg-slate-800  leading-snug text-left px-4">
                    Sed do eiusmod tempor incididunt ut labore
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className="bg-indigo-100/50 rounded-lg p-2 text-center border border-indigo-200">
                    <div className="text-base font-bold text-slate-800">Lorem</div>
                    <div className="text-xs text-slate-600">ipsum</div>
                  </div>
                  <div className="bg-indigo-100/50 rounded-lg p-2 text-center border border-indigo-200">
                    <div className="text-base font-bold text-slate-800">Dolor</div>
                    <div className="text-xs text-slate-600">sit amet</div>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Less Prominent */}
              <div className="flex-grow flex flex-col justify-end">
                {/* Description */}
                <div className="mb-3">
                  <div className="text-xs text-slate-500 space-y-1 leading-relaxed pl-1">
                    <div><span className="font-medium text-sm text-slate-600 underline decoration-orange-600 decoration-2">Et dolore magna aliqua</span></div>
                    <div>Ut enim ad minim veniam quis</div>
                    <div>Nostrud exercitation ullamco</div>
                  </div>
                </div>

                {/* Sources - Bottom Aligned */}
                <div className="text-center border-t border-slate-100 pt-2">
                  <div className="flex items-center justify-center space-x-1 text-xs">
                    <div className="inline-flex items-center text-slate-500 font-medium">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Consectetur
                    </div>
                    <span className="text-slate-400">•</span>
                    <div className="inline-flex items-center text-slate-500 font-medium">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Adipiscing
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company 3 */}
            <div className="bg-indigo-50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 p-3 flex flex-col h-80">
              {/* Top Section - Prominent */}
              <div className="flex-shrink-0">
                {/* Header with Logo */}
                <div className="mb-2 mt-2">
                  <div className="h-6 bg-slate-200 rounded mx-auto max-w-[120px] flex items-center justify-center">
                    <span className="text-xs text-slate-500">Company C</span>
                  </div>
                </div>
                <div className="mb-5 mt-3">
                  <div className="text-md font-normal text-slate-800 bg-slate-800  leading-snug text-left px-4">
                    Laboris nisi ut aliquip ex ea commodo
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className="bg-indigo-100/50 rounded-lg p-2 text-center border border-indigo-200">
                    <div className="text-base font-bold text-slate-800">Lorem</div>
                    <div className="text-xs text-slate-600">ipsum</div>
                  </div>
                  <div className="bg-indigo-100/50 rounded-lg p-2 text-center border border-indigo-200">
                    <div className="text-base font-bold text-slate-800">Dolor</div>
                    <div className="text-xs text-slate-600">sit amet</div>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Less Prominent */}
              <div className="flex-grow flex flex-col justify-end">
                {/* Description */}
                <div className="mb-3">
                  <div className="text-xs text-slate-500 space-y-1 leading-relaxed pl-2">
                    <div><span className="font-medium text-sm text-slate-600 underline decoration-orange-600 decoration-2">Consequat duis aute irure</span></div>
                    <div>Reprehenderit in voluptate velit esse cillum</div>
                  </div>
                </div>

                {/* Sources - Bottom Aligned */}
                <div className="text-center border-t border-slate-100 pt-2">
                  <div className="flex items-center justify-center space-x-1 text-xs">
                    <div className="inline-flex items-center text-slate-500 font-medium">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Elit
                    </div>
                    <span className="text-slate-400">•</span>
                    <div className="inline-flex items-center text-slate-500 font-medium">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Tempor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Subtle, sophisticated background that enhances without overwhelming
Slide14.background = "#e0e7ff";

export default Slide14; 