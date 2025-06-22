import React from 'react';
import { SlideProps } from '../types';

const Slide52: React.FC<SlideProps> = () => {
  return (
    <div className="p-6 h-full flex flex-col">
      {/* Header Section */}
      <div className="mb-4 -mt-5">
        <h1 className="text-3xl font-bold text-slate-800 mb-1">Building Business Pipeline & AI Agent Foundation</h1>
        <h2 className="text-lg font-medium text-sky-900">Products to guide EO transitions, enable expert assisted transitions, and create foundation for AI agents</h2>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-7 gap-4">
        
        {/* Left Column - Customer Journey */}
        <div className="col-span-4">
          <div className="bg-gradient-to-r from-blue-50/50 to-sky-50/50  border border-slate-300/70 rounded-lg p-4 h-full">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <span className="mr-2">⭐</span> Customer Journey
            </h3>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-x-3 gap-y-6">
                {/* Item 1 */}
                <div className="flex items-start space-x-2">
                  <div className="bg-slate-200 text-slate-700 text-xs font-bold rounded-full w-6 h-5 flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-semibold text-slate-800">Day Zero Guide</h4>
                      <a href="https://zolidar.com/exit-plan-guide" target="_blank" className="bg-orange-600 text-white px-2 py-0.5 rounded text-xs font-medium mr-4">
                        View
                      </a>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">Free assessment building exit conviction through 9-dimension analysis of all exit paths.</p>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="flex items-start space-x-2">
                  <div className="bg-slate-200 text-slate-700 text-xs font-bold rounded-full w-6 h-5 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-semibold text-slate-800">Aha Planner</h4>
                      <a href="https://zolidar.com/exit-financial-plan" target="_blank" className="bg-orange-600 text-white px-2 py-0.5 rounded text-xs font-medium mr-4">
                        View
                      </a>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">Financial analysis with 12+ valuation methods, KPI analysis, NPV across exit paths.</p>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="flex items-start space-x-2">
                  <div className="bg-slate-200 text-slate-700 text-xs font-bold rounded-full w-6 h-5 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-semibold text-slate-800">Zolid AI</h4>
                      <a href="https://zolidar.com/dashboard?zolidai=true" target="_blank" className="bg-orange-600 text-white px-2 py-0.5 rounded text-xs font-medium mr-4">
                        View
                      </a>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">24/7 AI copilot providing instant EO expertise powered by enterprise grade processing.</p>
                  </div>
                </div>
                
                {/* Item 4 */}
                <div className="flex items-start space-x-2">
                  <div className="bg-slate-200 text-slate-700 text-xs font-bold rounded-full w-6 h-5 flex items-center justify-center flex-shrink-0 mt-1">4</div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-semibold text-slate-800">The Grid</h4>
                      <a href="https://zolidar.com/grid" target="_blank" className="bg-orange-600 text-white px-2 py-0.5 rounded text-xs font-medium mr-4">
                        View
                      </a>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">Free community ecosystem connecting 35K+ professionals with expert directory and knowledge wiki.</p>
                  </div>
                </div>
              </div>
              
              {/* Item 5 - Integration spans full width */}
              <div className="flex items-start space-x-2 pt-1">
                <div className="bg-slate-200 text-slate-700 text-xs font-bold rounded-full w-6 h-5 flex items-center justify-center flex-shrink-0 mt-1">5</div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-slate-800 mb-1">Seamless Integration</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Products share data and insights—Grid content feeds Zolid AI, assessment guides planning, AI supports every interaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Value Propositions */}
        <div className="col-span-3 space-y-3">
          {/* For Business Owners */}
          <div className="bg-gradient-to-br from-blue-50 to-sky-50  border border-sky-200 rounded-lg p-3">
            <h3 className="text-base font-semibold text-slate-900 mb-2 flex items-center">
              <span className="mr-2">🎯</span> For Business Owners
            </h3>
            <div className="space-y-1">
              <p className="text-sm text-slate-700"><strong>Complete journey</strong> from initial exploration to expert connections</p>
              <p className="text-sm text-slate-700"><strong>Cost-effective method</strong> to begin planning</p>
              <p className="text-sm text-slate-700"><strong>Always-on support</strong> through AI and community</p>
            </div>
          </div>

          {/* For Advisors */}
          <div className="bg-gradient-to-br from-blue-50 to-sky-50 border border-sky-200 rounded-lg p-3">
            <h3 className="text-base font-semibold text-slate-900 mb-2 flex items-center">
              <span className="mr-2">🤝</span> For Advisors
            </h3>
            <div className="space-y-1">
              <p className="text-sm text-slate-700"><strong>Pre-qualified clients</strong> with exit preferences and data</p>
              <p className="text-sm text-slate-700"><strong>Professional toolkit</strong> for comprehensive EO guidance</p>
              <p className="text-sm text-slate-700"><strong>Network visibility</strong> in growing ecosystem platform</p>
            </div>
          </div>

          {/* For Zolidar */}
          <div className="bg-gradient-to-br from-blue-100/80 to-sky-100/80 border border-sky-300/70 rounded rounded-lg p-3">
            <h3 className="text-base font-semibold text-slate-800 mb-2 flex items-center">
              <span className="mr-2">♡</span> For&nbsp; <span className="font-ubuntu font-extrabold">zolidar</span>
            </h3>
            <p className="text-sm text-slate-800">Creates multiple revenue streams and network effects where each user interaction strengthens our AI and community - a flywheel that cannot be replicated.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Light solution/positive background from design guidelines
// (Slide52 as any).background = "linear-gradient(to bottom, #e0f2fe 0%, #bae6fd 100%)";
(Slide52 as any).background = "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)";

export default Slide52; 