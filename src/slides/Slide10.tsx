import React from 'react';
import { SlideProps, SlideComponentType } from '../types';
import { Users, DollarSign, Network, TrendingUp, Heart } from 'lucide-react';

const Slide10: SlideComponentType = () => {
  // Tessellated icon background pattern for platform strategy
  const BackgroundPattern = () => {
    const icons = [Users, Network, DollarSign, TrendingUp, Heart];
    const iconSize = 24;
    const spacing = 60;
    const rows = 10;
    const cols = 12;

    return (
      <div className="absolute inset-0 overflow-hidden opacity-60">
        {Array.from({ length: rows }, (_, rowIndex) => (
          <div
            key={rowIndex}
            className="absolute flex"
            style={{
              top: rowIndex * spacing,
              left: rowIndex % 2 === 1 ? spacing / 2 : 0, // Stagger every other row
              width: '120%',
            }}
          >
            {Array.from({ length: cols }, (_, colIndex) => {
              const IconComponent = icons[(rowIndex + colIndex) % icons.length];
              const colorClasses = [
                'text-blue-500',
                'text-indigo-500', 
                'text-slate-500',
                'text-blue-400',
                'text-indigo-400',
                'text-slate-400',
                'text-blue-300',
                'text-indigo-300'
              ];
              const colorClass = colorClasses[(rowIndex + colIndex) % colorClasses.length];
              
              return (
                <div
                  key={colIndex}
                  className={`${colorClass} opacity-30`}
                  style={{ marginRight: spacing }}
                >
                  <IconComponent size={iconSize} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-full relative flex flex-col items-center justify-center">
      <BackgroundPattern />
      
      <div className="relative w-full max-w-5xl mx-auto">
        {/* DOMINANT HEADLINE - Properly centered */}
        <div className="text-left center mb-16 ml-12">
          <h1 className="text-[2.6rem] leading-tight text-slate-800 font-extrabold drop-shadow-sm">
           Our strategy: create value for all stakeholders<br /> <span className="text-blue-800">and capture revenue at every stage</span>
          </h1>
        </div>
        
        {/* SUPPORTING EVIDENCE - Properly spaced and aligned */}
        <div className="grid grid-cols-3 gap-10 w-full max-w-4xl mx-auto">
          <div className="flex flex-col items-center bg-gradient-to-br from-blue-50/70 to-indigo-100/70 backdrop-blur-sm px-7 py-8 rounded-xl border border-blue-200/30 shadow-md">
            <span className="inline-block mb-8 px-4 py-1 rounded-full bg-gradient-to-r from-blue-300 to-blue-300 text-slate-600 text-sm font-medium">Prepare</span>
            <div className="text-center">
              <div className="text-slate-700 text-xl font-semibold mb-2 leading-tight">Build the deal pipeline</div>
              <div className="text-slate-600 text-md font-light leading-relaxed">by preparing advisors & owners for EO</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center bg-gradient-to-br from-blue-50/70 to-indigo-100/70 backdrop-blur-sm px-7 py-8 rounded-xl border border-blue-200/30 shadow-md">
            <span className="inline-block mb-8 px-4 py-1 rounded-full bg-gradient-to-r from-blue-300 to-blue-300 text-slate-600 text-sm font-medium">Transition</span>
            <div className="text-center">
              <div className="text-slate-700 text-xl font-semibold mb-2 leading-tight">Enable all transitions</div>
              <div className="text-slate-600 text-md font-light leading-relaxed">via workflow, financing & deal teams on our platform</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center bg-gradient-to-br from-blue-50/70 to-indigo-100/70 backdrop-blur-sm px-5 py-8 rounded-xl border border-blue-200/30 shadow-md">
            <span className="inline-block mb-8 px-4 py-1 rounded-full bg-gradient-to-r from-blue-300 to-blue-300 text-slate-600 text-sm font-medium">Operate</span>
            <div className="text-center">
              <div className="text-slate-700 text-xl font-semibold mb-2 leading-tight">Power recurring success</div>
              <div className="text-slate-600 text-md font-light leading-relaxed">via first & third-party apps for the lifetime of EO business</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Rich gradient background for this slide
Slide10.background = "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #e2e8f0 75%, #f8fafc 100%)";
export default Slide10;