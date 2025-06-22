import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide31: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Redacted Version Sticky */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-green-300/90 backdrop-blur-sm shadow-xl drop-shadow-lg px-4 py-2 rounded-br-md border-r border-b border-green-300/60 transform rotate-1 hover:rotate-0 transition-transform duration-200">
          <span className="text-green-950 text-xs font-medium tracking-wide uppercase">Redacted Version</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-8 py-2">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-6 text-center mt-[-10px]">
            <h1 className="text-3xl font-bold text-slate-900 leading-tight mb-2">
              Pricing designed to maximize pipeline building
            </h1>
          </div>

          {/* Main Pricing Grid */}
          <div className="grid grid-cols-3 gap-6">
            
            {/* Column 1 */}
            <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
                <h2 className="text-2xl font-semibold text-slate-700 text-center">For Owners</h2>
              </div>
              <div className="p-4 space-y-14">
                
                {/* Plan 1 */}
                <div className="h-20 bg-slate-50/30 rounded-lg flex flex-col justify-center py-3 px-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold text-slate-800">Mini</h3>
                    <div className="text-right">
                      <span className="text-lg font-bold text-slate-800">XXX</span>
                      <span className="text-xs text-slate-500 ml-1">/year</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Basic valuation tools, Day Zero Guide, and Zolid AI
                  </p>
                </div>

                {/* Plan 2 */}
                <div className="h-20 bg-slate-50/30 rounded-lg flex flex-col justify-center py-3 px-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold text-slate-800">Max</h3>
                    <div className="text-right">
                      <span className="text-lg font-bold text-slate-800">XXX</span>
                      <span className="text-xs text-slate-500 ml-1">/year</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                  Full financial & KPI analysis, simulation tools, and advisor intro call
                  </p>
                </div>

                {/* Plan 3 */}
                <div className="h-20 bg-slate-50/30 rounded-lg flex flex-col justify-center py-3 px-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold text-slate-800 bg-slate-800">Aliqua</h3>
                    <div className="text-right">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">TBD</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 bg-slate-600 leading-relaxed">
                    Ut enim ad minim veniam quis nostrud exercitation
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
                <h2 className="text-2xl font-semibold text-slate-700 text-center">For Advisors</h2>
              </div>
              <div className="p-4 space-y-14">
                
                {/* Plan 1 */}
                <div className="h-20 bg-slate-50/30 rounded-lg flex flex-col justify-center py-3 px-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold text-slate-800">Basic</h3>
                    <div className="text-right">
                      <span className="text-lg font-bold text-slate-800">XXX</span>
                      <span className="text-xs text-slate-500 ml-1">/year</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Exit planning tools <span className="bg-slate-600">aliquip ex ea commodo consequat</span>
                  </p>
                </div>

                {/* Plan 2 */}
                <div className="h-20 bg-slate-50/30 rounded-lg flex flex-col justify-center py-3 px-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold text-slate-800">Full</h3>
                    <div className="text-right">
                      <span className="text-lg font-bold text-slate-800">XXX</span>
                      <span className="text-xs text-slate-500 ml-1">/year</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Unlimited "Mini" accounts <span className="bg-slate-600">reprehenderit in voluptate velit</span>
                  </p>
                </div>

                {/* Plan 3 */}
                <div className="h-20 bg-slate-50/30 rounded-lg flex flex-col justify-center py-3 px-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold text-slate-800 bg-slate-800">Esse Cillum</h3>
                    <div className="text-right">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">TBD</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 bg-slate-600 leading-relaxed">
                    Dolore eu fugiat nulla pariatur excepteur sint
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
                <h2 className="text-2xl font-semibold text-slate-700 bg-slate-700 text-center">Adipiscing Elit</h2>
              </div>
              <div className="p-4 space-y-14">
                
                {/* Plan 1 - positioned to align with first tier */}
                <div className="h-20 bg-slate-50/30 rounded-lg flex flex-col justify-center py-3 px-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold text-slate-800 bg-slate-800">Occaecat</h3>
                    <div className="text-right">
                      <span className="text-lg font-bold text-slate-800">XXX</span>
                      <span className="text-xs text-slate-500 ml-1">/year</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 bg-slate-600 leading-relaxed">
                    Cupidatat non proident sunt in culpa qui officia
                  </p>
                </div>

                {/* Empty space to maintain alignment */}
                <div className="h-20"></div>

                {/* Empty space to maintain alignment */}
                <div className="h-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Set background to match the deck's clean aesthetic
Slide31.background = "#f0fdf4";
export default Slide31;