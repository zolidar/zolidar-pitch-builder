import React from 'react';
import { SlideProps } from '../types';

const Slide57: React.FC<SlideProps> = () => {
  return (
    <div className="p-6 h-full flex flex-col relative">
      {/* Heavily Redacted Version Label */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-yellow-200 border-r border-b border-yellow-300 px-4 py-2 rounded-md shadow-xl">
          <span className="text-yellow-950 text-xs font-medium">HEAVILY REDACTED VERSION</span>
        </div>
      </div>
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-1">AI Infrastructure: Always Learning, Always Current</h1>
        <h2 className="text-lg font-medium text-sky-800">EO expertise requires specialized processing — generic AI wrappers can't handle this complexity</h2>
      </div>

            {/* Main Content - Single Column */}
      <div className="flex-1">
        <div className="bg-gradient-to-r from-blue-50 to-sky-50 border border-slate-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center flex items-center justify-center">
            <span className="mr-2">🔄</span> How It Works
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              {/* Item 1 */}
              <div className="flex items-start space-x-3">
                <div className="bg-slate-200 text-slate-700 text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Content Discovery</h4>
                  <p className="text-base text-slate-600 bg-slate-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex items-start space-x-3">
                <div className="bg-slate-200 text-slate-700 text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Smart Processing</h4>
                  <p className="text-base text-slate-600 bg-slate-600 leading-relaxed">Incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis.</p>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="flex items-start space-x-3">
                <div className="bg-slate-200 text-slate-700 text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Knowledge Assembly</h4>
                  <p className="text-base text-slate-600 bg-slate-600 leading-relaxed">Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
              
              {/* Item 4 - Enterprise Grade */}
              <div className="flex items-start space-x-3">
                <div className="bg-slate-200 text-slate-700 text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Enterprise Grade</h4>
                  <p className="text-base text-slate-600 leading-relaxed">40+ step workflow functions with automatic retry, error recovery, and parallel processing for reliable operation at scale.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Light solution/positive background from design guidelines
(Slide57 as any).background = "linear-gradient(to bottom, #f0f9ff 0%, #e0f2fe 100%)";

export default Slide57; 