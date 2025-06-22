import React from 'react';
import { SlideProps } from '../types';

const goals = [
  {
    number: 1,
    title: 'Own the Pipeline',
    statusItems: [
      { item: 'MVP for owners', status: 'launched' },
      { item: 'MVP for advisors', status: 'progress' }
    ]
  },
  {
    number: 2,
    title: 'Fill the Pipeline',
    statusItems: [
      { item: 'Tentpole partner', status: 'signed' },
      { item: 'Additional partners', status: 'progress' }
    ]
  },
  {
    number: 3,
    title: 'Close the Loop',
    statusItems: [
      { item: 'Ecosystem MVP', status: 'launched' },
      { item: 'Lorem ipsum dolor', status: 'planned' },
      { item: 'Digital & Agentic AI', status: 'next' }
    ]
  },
];

const getStatusStyling = (status: string) => {
  switch (status) {
    case 'launched':
      return {
        bg: 'bg-emerald-50',
        text: 'text-slate-600',
        border: 'border-emerald-200',
        label: 'Launched'
      };
    case 'signed':
      return {
        bg: 'bg-emerald-50',
        text: 'text-slate-600',
        border: 'border-emerald-200',
        label: 'Signed'
      };
    case 'progress':
      return {
        bg: 'bg-amber-50',
        text: 'text-slate-600',
        border: 'border-amber-200',
        label: 'In Progress'
      };
    case 'next':
      return {
        bg: 'bg-slate-50',
        text: 'text-slate-600',
        border: 'border-slate-200',
        label: 'Next Phase'
      };
    case 'planned':
      return {
        bg: 'bg-purple-50',
        text: 'text-slate-600',
        border: 'border-purple-200',
        label: 'Planned'
      };
    default:
      return {
        bg: 'bg-slate-50',
        text: 'text-slate-600',
        border: 'border-slate-200',
        label: 'Planned'
      };
  }
};

const Slide30: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Redacted Version Sticky */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-slate-400/90 backdrop-blur-sm shadow-xl drop-shadow-lg px-4 py-2 rounded-br-md border-r border-b border-slate-400/60 transform rotate-1 hover:rotate-0 transition-transform duration-200">
          <span className="text-slate-950 text-xs font-medium tracking-wide uppercase">Redacted Version</span>
        </div>
      </div>
      <div className="mb-12 mt-8 ml-12">
        <div className="text-lg font-medium text-slate-600 mb-3 block">
          Next 6-month goals
        </div>
        <h1 className="text-4xl font-bold text-slate-800 leading-tight">
          Build MVP for Advisors and Scale Partnerships
        </h1>
      </div>
      
      <div className="flex justify-center items-start flex-1 px-8">
        <div className="grid grid-cols-3 gap-8 w-full max-w-5xl">
          {goals.map((goal) => (
            <div
              key={goal.title}
              className="bg-white rounded-2xl px-0 py-0 flex flex-col h-[280px] shadow-sm relative overflow-hidden border border-slate-200"
            >
              {/* Unified header section for elevated title hierarchy */}
              <div className="bg-sky-50/40 border-b border-sky-100 px-6 py-4 relative">
                {/* Number indicator repositioned to header */}
                <div className="absolute top-3 left-4 w-6 h-6 rounded-full bg-white/80 flex items-center justify-center border border-sky-200">
                  <span className="text-slate-700 font-medium text-xs">{goal.number}</span>
                </div>
                
                {/* Title in header for better hierarchy */}
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-slate-800 text-center leading-tight">
                    {goal.title}
                  </h3>
                </div>
              </div>
              
              {/* Content area */}
              <div className="flex-1 px-6 py-6 bg-slate-50">
                {/* Status area - positioned naturally without excessive spacing */}
                <div className="space-y-4">
                  {goal.statusItems.map((statusItem, idx) => {
                    const styling = getStatusStyling(statusItem.status);
                    return (
                      <div key={idx} className="flex items-start justify-between gap-3">
                        <span className={`text-sm font-medium flex-1 leading-relaxed ${
                          statusItem.item === 'Lorem ipsum dolor' 
                            ? 'text-slate-700 bg-slate-700' 
                            : 'text-slate-700'
                        }`}>
                          {statusItem.item}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styling.bg} ${styling.text} ${styling.border} flex-shrink-0`}>
                          {styling.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// set a gradient background for this slide
// (Slide30 as any).background = "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)";
(Slide30 as any).background = " #cbd5e1";

export default Slide30;