import React from 'react';
import { SlideProps } from '../types';

const Slide20: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Redacted Version Sticky */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-indigo-300/90 backdrop-blur-sm shadow-xl drop-shadow-lg px-4 py-2 rounded-br-md border-r border-b border-indigo-300/60 transform rotate-1 hover:rotate-0 transition-transform duration-200">
          <span className="text-indigo-950 text-xs font-medium tracking-wide uppercase">Heavily Redacted Version</span>
        </div>
      </div>
      {/* Clean, elegant background for funding slide */}
      <div className="absolute inset-0 opacity-[1]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)
          `,
          backgroundSize: '100% 100%'
        }}></div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 py-4 relative z-10">
        <div className="w-full max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="mb-6 text-center">
            <div className="text-4xl font-extrabold text-slate-800 bg-slate-800 tracking-tight">
            Lorem ipsum dolor sit amet consectetur
            </div>
            <div className="text-xl text-slate-600 mt-1">
            Foundation built, partnerships signed — now accelerate GTM
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-12 gap-8">
            
            {/* Left: Column 1 */}
            <div className="col-span-3 bg-slate-100 rounded-lg border border-slate-300 p-5">
              <div className="mb-4">
                <div className="text-base font-semibold text-slate-700 text-center pb-2 border-b border-slate-300">
                Previous Funding
                </div>
              </div>
              
              <div className="space-y-4 text-center">
                <div>
                  <div className="text-lg font-semibold text-slate-800"><span className="bg-slate-800">$X</span> raised</div>
                  <div className="text-sm text-slate-600 mt-1">Runway until <span className="bg-slate-600">dit sim</span></div>
                  <div className="mt-3">
                    <a href="https://zolidar.com/about-us#investors" target="_blank"  className="inline-flex items-center text-sm text-slate-600 bg-slate-200 rounded-xl px-4 py-1.5">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Our investors
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Column 2 - FOCAL POINT with highest visual weight */}
            <div className="col-span-4 bg-blue-50 rounded-xl border-2 border-blue-300 shadow-xl p-5 transform scale-105">
              <div className="mb-4">
                <div className="text-xl font-bold text-blue-900 text-center pb-2 border-b-2 border-blue-400">
                Use of new funding
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-1">
                    <div className="text-base font-semibold text-slate-900 bg-slate-900">Lorem Ipsum</div>
                    <div className="text-sm text-slate-500 bg-slate-500 mt-0.5">dolor sit amet consectetur</div>
                  </div>
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">A</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-1">
                    <div className="text-base font-semibold text-slate-900 bg-slate-900">Adipiscing Elit</div>
                    <div className="text-sm text-slate-500 bg-slate-500 mt-0.5">sed do eiusmod tempor</div>
                  </div>
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">B</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-1">
                    <div className="text-base font-semibold text-slate-900 bg-slate-900">Ut Labore</div>
                    <div className="text-sm text-slate-500 bg-slate-500 mt-0.5">et dolore magna aliqua</div>
                  </div>
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">C</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-1">
                    <div className="text-base font-semibold text-slate-900 bg-slate-900">Enim Ad</div>
                    <div className="text-sm text-slate-500 bg-slate-500 mt-0.5">minim veniam quis</div>
                  </div>
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">D</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-1">
                    <div className="text-base font-semibold text-slate-900 bg-slate-900">Nostrud</div>
                    <div className="text-sm text-slate-500 bg-slate-500 mt-0.5">exercitation ullamco</div>
                  </div>
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">E</span>
                </div>
              </div>
            </div>

            {/* Right: Column 3 - Smaller visual weight */}
            <div className="col-span-5 bg-slate-100 rounded-lg border border-slate-300 p-5">
              <div className="mb-4">
                <div className="text-base font-semibold text-slate-700 text-center pb-2 border-b border-slate-300 whitespace-nowrap">
                Focus: Distribution & High-margin Revenue
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-base font-semibold text-slate-800 mb-1">Growth & Distribution Hacks</div>
                  <div className="text-sm text-slate-500 bg-slate-500 leading-relaxed">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
                </div>
                
                <div>
                  <div className="text-base font-semibold text-slate-800 mb-1">AI Content Generation</div>
                  <div className="text-sm text-slate-500 bg-slate-500 leading-relaxed">Nulla pariatur excepteur sint occaecat cupidatat non proident</div>
                </div>
                
                <div>
                  <div className="text-base font-semibold text-slate-800 mb-1">Agentic AI Workflows</div>
                  <div className="text-sm text-slate-500 bg-slate-500 leading-relaxed">Qui officia deserunt mollit anim id est laborum</div>
                </div>
                
                <div>
                  <div className="text-base font-semibold text-slate-800 mb-1">Market Expansion</div>
                  <div className="text-sm text-slate-500 bg-slate-500 leading-relaxed">Unde omnis iste natus error sit voluptatem accusantium</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Match other slides' background approach
(Slide20 as any).background = "#e0e7ff";

export default Slide20;