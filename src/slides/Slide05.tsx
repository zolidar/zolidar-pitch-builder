import React from 'react';
import { SlideProps, SlideComponentType } from '../types';
import { PercentCircle, ShieldCheck, Clock } from 'lucide-react';

const group1 = [
  'Sellers lead the deal, so they remain rational & committed to closing',
  'Outside buyers not needed, but can be accommodated',
  'Zero cash or liability from employees'
];

const group2 = [
  'Lower cost-of-capital vs. IRR goals of an outside buyer',
  'Transition over multiple years, rather than a single transaction',
  'Tax benefits enhance deal economics'
];


const Slide05: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center px-0 relative">      
      <div className="w-full max-w-4xl flex flex-col gap-6 justify-center mx-auto flex-1">
        {/* Main Callout */}
        <div className="rounded-2xl ml-10 mt-6 shadow-lg border-l-4 border-orange-200 py-4 px-6 max-w-[815px] flex items-center justify-start bg-white/90 backdrop-blur-sm">
          <div className="text-left">
            <div className="text-3xl font-semibold text-slate-700 leading-relaxed mb-0.5">
              EO uses <span className="italic">LBO financing</span> without a buyer
            </div>
            <div className="text-3xl font-semibold text-slate-700 leading-tight">
            <span className="text-orange-600 font-extrabold">making 5x more exits viable</span> than today's M&A market
            </div>
          </div>
        </div>
        {/* Grouped Detail Cards */}
        <div className="flex flex-row gap-16 w-full max-w-3xl mx-auto transform translate-y-2">
          {/* Group 1 */}
          <div className="flex-1 rounded-xl shadow-sm border border-slate-300/40 py-4 px-8">
            <h3 className="flex items-center gap-2 text-slate-700 text-xl font-medium mb-3">
              <ShieldCheck className="w-5 h-5" /> Why Deals Actually Close
            </h3>
            <ul className="space-y-3">
              {group1.map((text, idx) => (
                <li
                  key={idx}
                  className={`text-lg font-light text-slate-600/90 ${idx !== group1.length - 1 ? 'border-b border-slate-300/70' : ''} pb-3`}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
          {/* Group 2 */}
          <div className="flex-1 rounded-xl shadow-sm border border-slate-300/40 py-4 px-8">
            <h3 className="flex items-center gap-2 text-slate-700 text-xl font-medium mb-3">
              <PercentCircle className="w-5 h-5" /> Why the Math Works
            </h3>
            <ul className="space-y-3">
              {group2.map((text, idx) => (
                <li
                  key={idx}
                  className={`text-lg font-light text-slate-600/90 ${idx !== group2.length - 1 ? 'border-b border-slate-300/70' : ''} pb-3`}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

//set a gradient background for this slide
//(Slide05 as any).background = "linear-gradient(to bottom, #fbfbfb 0%, #fbfbfb 24%, #ccecff 100%)";
Slide05.background = "#dbeafe";

export default Slide05;