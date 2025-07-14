import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide12: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Redacted Version Sticky */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-indigo-200/90 backdrop-blur-sm shadow-xl drop-shadow-lg px-4 py-2 rounded-br-md border-r border-b border-indigo-300/60 transform rotate-1 hover:rotate-0 transition-transform duration-200">
          <span className="text-indigo-800 text-xs font-medium tracking-wide uppercase">Redacted Version</span>
        </div>
      </div>

      {/* Subtle background pattern like Slide13 */}
      <div className="absolute inset-0 opacity-[1]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            radial-gradient(circle at 25% 75%, rgba(255, 255, 255, 0.3) 0%, transparent 35%),
            radial-gradient(circle at 75% 25%, rgba(251, 146, 60, 0.15) 0%, transparent 25%)
          `,
          backgroundSize: '80px 80px, 80px 80px, 500px 500px, 300px 300px',
          backgroundPosition: '0 0, 0 0, 0 0, 100% 100%'
        }}></div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-10 py-6 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="mb-5 text-left ml-2">
            <div className="text-4xl font-extrabold text-slate-800">
              We first built the foundation that matters most
            </div>
            <div className="text-2xl font-normal text-slate-600 tracking-normal mt-1">
              <span className="font-semibold text-slate-700">Products + Data + Partnerships</span> that prove our approach
            </div>
          </div>

          {/* Main Content - Three Strategic Areas */}
          <div className="grid grid-cols-3 gap-6">
            
            {/* Products for Pipeline */}
            <div className="bg-indigo-50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 p-6 flex flex-col">
              <div className="mb-12">
                <div className="text-lg font-medium text-slate-700 leading-snug text-center border-b-2 border-slate-200 pb-4">
                  <span className="font-extrabold text-slate-900">Products</span> for owner pipeline and ecosystem engagement
                </div>
              </div>

              {/* Day Zero Guide */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-slate-800">Day Zero Guide</h3>
                  <a href="https://zolidar.com/exit-plan-guide" target="_blank" className="bg-orange-600 text-white px-2 py-0.5 rounded text-xs font-medium">
                    View
                  </a>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-medium text-slate-700">Free assessment</span> of exit options → pipeline entry point
                </p>
              </div>

              {/* Aha Planner */}
              <div className="mb-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-slate-800">Aha Planner</h3>
                  <a href="https://zolidar.com/exit-financial-plan" target="_blank" className="bg-orange-600 text-white px-2 py-0.5 rounded text-xs font-medium">
                    View
                  </a>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-medium text-slate-700">Deep financial analysis</span> → relevant whether months or years from exit
                </p>
              </div>
            </div>

            {/* Data & AI Foundation */}
            <div className="bg-indigo-50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 p-6 flex flex-col">
              <div className="mb-12">
                <div className="text-lg font-medium text-slate-700 leading-snug text-left border-b-2 border-slate-200 pb-4">
                  <span className="font-extrabold text-slate-900">Data </span>curation & ingestion to power our AI roadmap
                </div>
              </div>

              {/* Zolid AI */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-slate-800">Zolid AI</h3>
                  <a href="https://zolidar.com/dashboard?zolidai=true" target="_blank" className="bg-orange-600 text-white px-2 py-0.5 rounded text-xs font-medium">
                    View
                  </a>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-medium text-slate-700">AI copilot</span>  → product surface for additional AI solutions on roadmap
                </p>
              </div>

              {/* The Grid */}
              <div className="mb-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-slate-800">The Grid</h3>
                  <a href="https://zolidar.com/grid" target="_blank" className="bg-orange-600 text-white px-2 py-0.5 rounded text-xs font-medium">
                    View
                  </a>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-medium text-slate-700">Directory, wiki & forum</span> → retains experts and ensures fresh data
                </p>
              </div>
            </div>

            {/* Partnership Success */}
            <div className="bg-indigo-50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 p-6 flex flex-col">
              <div className="mb-12">
                <div className="text-lg font-medium text-slate-700 leading-snug text-left border-b-2 border-slate-200 pb-4">
                  <span className="font-extrabold text-slate-900">Partnership</span> and product tiers for generating revenue
                </div>
              </div>

              {/* Project Equity */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-slate-800">Project Equity</h3>
                  <span className="text-sm font-medium bg-green-200/70 px-3 py-0.5 text-slate-600 rounded">Signed</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-medium text-slate-700">Esteemed Partnership</span> → GTM wedge with reach and credibility  
                </p>
              </div>

              {/* Advisor Tier */}
              <div className="mb-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-slate-800">Advisor Platform</h3>
                  <a href="https://zolidar.com/advisors" target="_blank" className="bg-orange-600 text-white px-2 py-0.5 rounded text-xs font-medium">
                    View
                  </a>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-medium text-slate-700">Multi-client center</span> → GTM multiplier to reach many businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Match Slide13's background approach
Slide12.background = "#e0e7ff";

export default Slide12; 