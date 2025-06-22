import React from 'react';
import { SlideProps } from '../types';

const Slide54: React.FC<SlideProps> = () => {
  return (
    <div className="p-6 h-full flex flex-col">
      {/* Header Section */}
      <div className="mb-4 -mt-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-1">Aha Planner: From Planning to Action</h1>
        <h2 className="text-lg font-medium text-sky-800">Comprehensive analysis at $1K in under 30 minutes - others charge $5K+ and take 2+ weeks</h2>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-7 gap-4">
        
        {/* Left Column - How It Works */}
        <div className="col-span-4">
          <div className="bg-gradient-to-r from-blue-50 to-sky-50 border border-slate-200 rounded-lg p-4 h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                <span className="mr-2">⚙️</span> How It Works
              </h3>
              <div className="flex flex-col items-end pr-8">
                <a href="https://zolidar.com/exit-financial-plan" target="_blank" className="text-slate-700 px-3 py-1 rounded text-sm font-semibold">
                  View Live Product
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 10"
                  fill="none"
                  className="w-[120px] h-[10px] -mt-1.5"
                  style={{ display: 'block' }}
                >
                  <path d="M138.892 6.08471C122.877 5.74921 106.87 5.26995 90.8545 5.09881C67.5675 4.85229 44.2621 4.52366 21.0381 6.35175C16.3319 6.7215 11.6257 7.06365 6.92855 7.44725C3.24306 7.74165 0.948681 6.80365 0.162807 4.62639C-0.496604 2.79815 0.903481 1.18244 3.34239 1.53163C11.7883 2.72982 20.0354 0.97019 28.382 0.812725C44.0363 0.511465 59.6905 0.134869 75.354 0.018474C86.7895 -0.063688 98.2436 0.141723 109.679 0.367667C119.137 0.559375 128.586 0.970165 138.043 1.29197C138.594 1.31251 139.181 1.33069 139.678 1.49055C141.629 2.14099 144.592 2.5107 143.897 4.59213C143.562 5.58491 140.907 6.1395 139.299 6.88579C139.163 6.61879 139.037 6.35175 138.901 6.08471H138.892Z" fill="url(#orangeGradient)"></path>
                  <defs>
                    <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="50%" stopColor="#ea580c" />
                      <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {/* Item 1 */}
                <div className="flex items-start space-x-3">
                  <div className="bg-slate-200 text-slate-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-800 mb-1">Multi-Method Valuation</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">12+ valuation methods from DCF to debt capacity providing indicative, enterprise, and EO-viable valuations.</p>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="flex items-start space-x-3">
                  <div className="bg-slate-200 text-slate-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-800 mb-1">KPI Assessment</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Analyze 21 KPIs across profitability, asset efficiency, debt management, and liquidity with recommendations.</p>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="flex items-start space-x-3">
                  <div className="bg-slate-200 text-slate-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-800 mb-1">Scenario Modeling</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">What-if tools test market conditions, interest rates, industry risk, and business performance impacts.</p>
                  </div>
                </div>
                
                {/* Item 4 */}
                <div className="flex items-start space-x-3">
                  <div className="bg-slate-200 text-slate-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-800 mb-1">NPV Exit Comparison</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Side-by-side NPV analysis of Employee Ownership vs Third Party Sale with long-term wealth projections.</p>
                  </div>
                </div>
              </div>
              
              {/* Item 5 - AI Support spans full width */}
              <div className="flex items-start space-x-3 pt-1">
                <div className="bg-slate-200 text-slate-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">5</div>
                <div>
                  <h4 className="text-base font-semibold text-slate-800 mb-1">Interactive Financial Reports</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Complete financial statements with 15-year projections, recasted historicals, and AI-powered insights for every analysis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Impact */}
        <div className="col-span-3 space-y-3">
          {/* For Business Owners */}
          <div className="bg-gradient-to-br from-sky-100 to-blue-100 border border-sky-200 rounded-lg p-3">
            <h3 className="text-base font-semibold text-slate-900 mb-2 flex items-center">
              <span className="mr-2">🎯</span> For Business Owners
            </h3>
            <div className="space-y-1">
              <p className="text-sm text-slate-800"><strong>Comprehensive analysis</strong> at fraction of traditional cost</p>
              <p className="text-sm text-slate-800"><strong>Actionable insights</strong> for improving business value</p>
              <p className="text-sm text-slate-800"><strong>Ongoing strategic reference</strong> for years</p>
            </div>
          </div>

          {/* For Advisors */}
          <div className="bg-gradient-to-br from-sky-100 to-blue-100 border border-sky-200 rounded-lg p-3">
            <h3 className="text-base font-semibold text-slate-800 mb-2 flex items-center">
              <span className="mr-2">🤝</span> For Advisors
            </h3>
            <div className="space-y-1">
              <p className="text-sm text-slate-700"><strong>Professional reports</strong> with specific valuations and KPIs</p>
              <p className="text-sm text-slate-700"><strong>Data-driven conversations</strong> with prepared clients</p>
              <p className="text-sm text-slate-700"><strong>EO expertise</strong> without years of specialization</p>
            </div>
          </div>

          {/* For Zolidar */}
          <div className="bg-gradient-to-br from-blue-200 to-sky-200 border border-sky-200 rounded-lg p-3 pb-9">
            <h3 className="text-base font-semibold text-slate-900 mb-2 flex items-center">
              <span className="mr-2">♡</span> For&nbsp; <span className="font-ubuntu font-extrabold">zolidar</span>
            </h3>
            <p className="text-sm text-slate-800">Deep financial analysis platform demonstrating EO viability with concrete data, building client conviction for EO transitions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Light solution/positive background from design guidelines
(Slide54 as any).background = "linear-gradient(to bottom, #f0f9ff 0%, #e0f2fe 100%)";

export default Slide54; 