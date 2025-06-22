import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const points = [
  {
    color: 'blue',
    title: 'Lorem Ipsum',
    desc: 'for business & advisor outreach',
    bg: 'from-blue-500/20 to-blue-600/30',
    border: 'border-blue-400/40',
    text: 'text-blue-100',
    accent: 'bg-blue-500/80',
    shadow: 'shadow-blue-500/20',
  },
  {
    color: 'teal',
    title: 'Adipiscing Elit',
    desc: 'for network & community trust',
    bg: 'from-teal-500/20 to-emerald-600/30',
    border: 'border-teal-400/40',
    text: 'text-teal-100',
    accent: 'bg-teal-500/80',
    shadow: 'shadow-teal-500/20',
  },
  {
    color: 'purple',
    title: 'Incididunt Ut',
    desc: 'for executing the programs',
    bg: 'from-purple-500/20 to-violet-600/30',
    border: 'border-purple-400/40',
    text: 'text-purple-100',
    accent: 'bg-purple-500/80',
    shadow: 'shadow-purple-500/20',
  },
];

const Slide15: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center relative">
      {/* Redacted Version Sticky */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-slate-600/90 backdrop-blur-sm shadow-xl drop-shadow-lg px-4 py-2 rounded-br-md border-r border-b border-slate-500/60 transform rotate-1 hover:rotate-0 transition-transform duration-200">
          <span className="text-white text-xs font-medium tracking-wide uppercase">Heavily Redacted Version</span>
        </div>
      </div>
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="w-full max-w-4xl flex flex-col items-center justify-center mx-auto relative z-10">
        <div className="mb-16 max-w-5xl">
          <p className="text-5xl leading-tight text-white font-extrabold text-left drop-shadow-lg mb-1">
            <span className="bg-white">Lorem ipsum</span> is our GTM secret
          </p>
          <p className="text-3xl text-blue-200/90 bg-blue-200 tracking-tight font-light">
            consectetur adipiscing elit sed do eiusmod tempor
          </p>
        </div>
        <div className="mb-4 rounded-3xl p-1 pr-8 text-center self-start text-blue-200/80 text-2xl font-normal">
          Additional partners in our pipeline with...
        </div>        
        <div className="grid grid-cols-3 gap-6 w-full">
          {points.map((pt, i) => (
            <div
              key={pt.title}
              className={`relative flex flex-col justify-start bg-gradient-to-br ${pt.bg} backdrop-blur-sm p-6 rounded-2xl border ${pt.border} ${pt.shadow} shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]`}
            >
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              <span className={`mb-4 px-3 py-1.5 rounded-full ${pt.accent} ${pt.text} text-sm font-bold shadow-lg w-auto inline-block self-start backdrop-blur-sm border border-white/20`}>{i + 1}</span>
              <div className={`text-white bg-white text-2xl font-bold mb-2 text-left drop-shadow-sm ${pt.text}`}>{pt.title}</div>
              <div className="text-white/80 text-base font-light text-left leading-relaxed">{pt.desc}</div>
              
              {/* Subtle bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${pt.accent} opacity-60 rounded-b-2xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Rich gradient background for this slide
Slide15.background = "linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #334155 75%, #1e293b 100%)";
export default Slide15;