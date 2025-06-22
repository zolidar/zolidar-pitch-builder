import React from 'react';
import { SlideProps } from '../types';
import { Target, Sprout, Building2 } from 'lucide-react';

const Slide38: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Redacted Version Label */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-yellow-200 border-r border-b border-yellow-300 px-4 py-2 rounded-md shadow-xl">
          <span className="text-yellow-950 text-xs font-medium">REDACTED VERSION</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-8 py-6">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header with improved typography and spacing */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-slate-800 leading-tight mb-2">
              Current focus on 10-100 employee businesses
            </h1>
            <p className="text-3xl text-slate-600 font-medium">
              Next expand to large & micro businesses
            </p>
          </div>

          {/* Three Columns with Enhanced Visual Design */}
          <div className="grid grid-cols-3 gap-8 w-full">
            
            {/* Micro Business */}
            <div className="group relative">
              <div className="bg-white rounded-xl p-6 h-full border border-slate-200 hover:border-slate-300 transition-all duration-200 shadow-sm hover:shadow-md">
                <div className="flex flex-col h-full">
                  {/* Header with icon */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mr-3">
                      <Sprout className="w-5 h-5 text-slate-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Micro</h2>
                  </div>
                  
                  {/* Employee count badge */}
                  <div className="text-center mb-4">
                    <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                      3-10 employees
                    </span>
                  </div>
                  
                  {/* Market description */}
                  <div className="text-center mb-6 flex-1 flex items-center justify-center">
                    <p className="text-lg text-slate-600 leading-relaxed">
                      2 million organizations<br />
                      currently <span className="italic">on nobody's radar</span>
                    </p>
                  </div>
                  
                  {/* Strategy */}
                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-center">
                      <h3 className="font-semibold text-slate-800 mb-2">Future Opportunity</h3>
                      <p className="text-base text-slate-600 bg-slate-600 leading-relaxed">
                        Lorem ipsum dolor sit amet<br />
                        consectetur adipiscing elit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small & Medium Business - Current Focus */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-sky-50 to-indigo-50 rounded-xl p-6 h-full border-2 border-sky-200 shadow-lg relative overflow-hidden">
                {/* Focus indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
                
                <div className="flex flex-col h-full relative z-10">
                  {/* Header with icon */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                      <Target className="w-5 h-5 text-sky-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Small & Medium</h2>
                  </div>
                  
                  {/* Employee count badge */}
                  <div className="text-center mb-4">
                    <span className="inline-block bg-blue-100 text-slate-800 px-3 py-1 rounded-full text-sm font-bold">
                      10-100 employees
                    </span>
                  </div>
                  
                  {/* Market description */}
                  <div className="text-center mb-6 pt-4 flex-1 flex items-start justify-center">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Low hanging fruit
                    </p>
                  </div>
                  
                  {/* Current focus indicator */}
                  <div className="pt-4 mb-10 border-t border-sky-200">
                    <div className="text-center">
                      <div className="inline-flex items-center text-sky-600 px-4 py-2 rounded-full font-semibold text-sm">
                        <Target className="w-4 h-4 mr-2" />
                        CURRENT FOCUS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Large Businesses */}
            <div className="group relative">
              <div className="bg-white rounded-xl p-6 h-full border border-slate-200 hover:border-slate-300 transition-all duration-200 shadow-sm hover:shadow-md">
                <div className="flex flex-col h-full">
                  {/* Header with icon */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mr-3">
                      <Building2 className="w-5 h-5 text-slate-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Large</h2>
                  </div>
                  
                  {/* Employee count badge */}
                  <div className="text-center mb-4">
                    <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                      100+ employees
                    </span>
                  </div>
                  
                  {/* Market description */}
                  <div className="text-center mb-6 flex-1 flex items-center justify-center">
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Organizations with<br /> spending capacity
                    </p>
                  </div>
                  
                  {/* Strategy */}
                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-center">
                      <h3 className="font-semibold text-slate-800 mb-2">Future Expansion</h3>
                      <p className="text-base text-slate-600 bg-slate-600 leading-relaxed">
                        Sed do eiusmod tempor<br />
                        ut labore et dolore magna
                      </p>
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

// Set background following the pattern for Solution Explanation slides
// (Slide38 as any).background = " #dbeafe";
(Slide38 as any).background = " #e0f2fe";

export default Slide38;