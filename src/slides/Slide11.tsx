import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide11: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col relative mx-10">
      {/* Redacted Version Sticky */}
      <div className="absolute -top-6 -left-16 z-20">
        <div className="bg-green-200/90 backdrop-blur-sm shadow-xl drop-shadow-lg px-4 py-2 rounded-br-md border-r border-b border-green-300/60 transform rotate-1 hover:rotate-0 transition-transform duration-200">
          <span className="text-green-800 text-xs font-medium tracking-wide uppercase">Redacted Version</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center py-4">
        <div className="w-full max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="mb-5 mt-2 text-left">
            <h1 className="text-[2rem] font-extrabold text-slate-800 leading-tight">
            Multiple revenue streams scale LTV with business size
            </h1>
            <p className="text-xl font-normal text-slate-600 bg-slate-600 mt-1">
              Sed do eiusmod tempor incididunt ut labore
            </p>
          </div>

          {/* Three Revenue Streams */}
          <div className="grid grid-cols-3 gap-5 mb-8">
            {/* Stream 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200 shadow-sm">
              <div className="flex items-center mb-2">
                <div className="w-7 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-2">
                  1
                </div>
                <h3 className="text-lg font-semibold text-slate-700 bg-slate-700">Lorem Ipsum</h3>
              </div>
              <p className="text-slate-600 bg-slate-600 text-sm leading-relaxed pl-8">
                Dolor sit amet consectetur
              </p>
            </div>

            {/* Stream 2 */}
            <div className="bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 rounded-lg p-3 border border-fuchsia-200 shadow-sm">
              <div className="flex items-center mb-2">
                <div className="w-7 h-5 bg-fuchsia-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-2">
                  2
                </div>
                <h3 className="text-lg font-semibold text-slate-700 bg-slate-700">Adipiscing Elit</h3>
              </div>
              <p className="text-slate-600 bg-slate-600 text-sm leading-relaxed pl-8">
                Sed do eiusmod tempor
              </p>
            </div>

            {/* Stream 3 */}
            <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg p-3 border border-violet-200 shadow-sm">
              <div className="flex items-center mb-2">
                <div className="w-7 h-5 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-2">
                  3
                </div>
                <h3 className="text-lg font-semibold text-slate-700 bg-slate-700">Incididunt Ut</h3>
              </div>
              <p className="text-slate-600 bg-slate-600 text-sm leading-relaxed pl-8">
                Labore et dolore magna
              </p>
            </div>
          </div>

          {/* Business Lifetime Timeline */}
          <div className="rounded-lg p-4 border border-slate-200 shadow-sm bg-gradient-to-t from-green-50/80 to-green-100/80">
            {/* Revenue Visualization */}
            <div className="relative">
              {/* Chart Area */}
              <div className="h-44 flex items-end justify-between px-8 mb-0">
                
                {/* Prepare Phase - Only SaaS (Blue bars) */}
                <div className="flex items-end space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-10 bg-blue-200 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-10 bg-blue-200 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-10 bg-blue-200 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                  </div>
                </div>

                {/* Transact Phase - SaaS + Take Rate stacked */}
                <div className="flex items-end space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="relative w-8">
                      <div className="w-8 h-20 bg-fuchsia-200/70 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                      <div className="w-8 h-20 bg-blue-200 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-20 bg-blue-200 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative w-8">
                      <div className="w-8 h-20 bg-blue-200 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                  <div className="relative w-8">
                      <div className="w-8 h-20 bg-fuchsia-200/70 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                      <div className="w-8 h-20 bg-blue-200 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                    </div>
                  </div>
                </div>

                {/* Operate Phase - SaaS continuing */}
                <div className="flex items-end space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="relative w-8">
                      <div className="w-8 h-28 bg-blue-200 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-28 bg-blue-200 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative w-8">
                      <div className="w-8 h-28 bg-blue-200 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                    </div>
                  </div>
                </div>

                {/* Future Use Cases Phase - All three revenue streams stacked */}
                <div className="flex items-end space-x-3">
                  <div className="flex flex-col items-center">
                    <div className="relative w-8">
                      <div className="w-8 h-16 bg-violet-300 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                      <div className="w-8 h-28 bg-blue-200 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative w-8">
                      <div className="w-8 h-16 bg-violet-300 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                      <div className="w-8 h-28 bg-blue-200 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative w-8">
                      <div className="w-8 h-16 bg-violet-300 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                      <div className="w-8 h-28 bg-blue-200 rounded-sm text-sm justify-center flex items-center text-slate-500">$</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Baseline */}
              <div className="w-full h-0.5 bg-slate-300 mb-1"></div>

              {/* Phase Labels */}
              <div className="flex justify-between items-center px-8">
                <div className="text-center">
                  <h4 className="text-sm font-medium text-slate-500 pl-10">Prepare</h4>
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-medium text-slate-500 pl-10">Transition</h4>
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-medium text-slate-500 pl-10">Operate</h4>
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-medium text-slate-500">Continues Indefinitely</h4>
                </div>
              </div>

              {/* Timeline Arrow and Label */}
              <div className="relative mt-3">
                <div className="text-center mt-1">
                  <span className="text-lg font-medium text-slate-700">Revenue compounds over business lifetime</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Set background to match the deck's clean aesthetic
Slide11.background = "linear-gradient(to bottom, #f0fdf4,#dcfce7)";
export default Slide11;