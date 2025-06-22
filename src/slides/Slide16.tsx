import React from 'react';
import { SlideProps, SlideComponentType } from '../types';
import { Users, DollarSign, Shield, ArrowRight } from 'lucide-react';

const Slide16: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Redacted Version Sticky */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-slate-600/90 backdrop-blur-sm shadow-xl drop-shadow-lg px-4 py-2 rounded-br-md border-r border-b border-slate-600/60 transform rotate-1 hover:rotate-0 transition-transform duration-200">
          <span className="text-white text-xs font-medium tracking-wide uppercase">Heavily Redacted Version</span>
        </div>
      </div>
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(45deg, white 1px, transparent 1px),
                           linear-gradient(-45deg, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-8 py-4 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="mb-16 max-w-5xl">
            <p className="text-[2.6rem] leading-tight text-white font-extrabold text-left drop-shadow-lg mb-1">
             Building our GTM Multiplier: <span className="bg-white">consectetur</span>
            </p>
            <p className="text-3xl text-blue-200/90 tracking-tight font-light">
              Network of <span className="bg-blue-200">sed do eiusmod tempor incididunt ut labore</span>
            </p>
          </div>

          {/* Main Content - Three Key Aspects */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Column 1 */}
            <div className="relative flex flex-col justify-start bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 backdrop-blur-sm p-6 rounded-2xl border border-indigo-400/40 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              <div className="flex items-center mb-4">
                <DollarSign className="w-8 h-8 text-indigo-100 pr-1 drop-shadow-sm relative z-10" />
                <h3 className="text-2xl font-bold text-white text-left drop-shadow-sm">Revenue Streams</h3>
              </div>
              <div className="space-y-3">
                <div className="text-white/80 bg-white text-base font-light text-left leading-relaxed">
                  <span className="font-medium text-white bg-white">Dolor sit amet</span> consectetur adipiscing elit
                </div>
                <div className="text-white/80 bg-white text-base font-light text-left leading-relaxed">
                  <span className="font-medium text-white bg-white">Sed do eiusmod</span> tempor incididunt ut labore
                </div>
              </div>
              
              {/* Subtle bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-60 rounded-b-2xl"></div>
            </div>

            {/* Column 2 */}
            <div className="relative flex flex-col justify-start bg-gradient-to-br from-sky-500/20 to-sky-600/30 backdrop-blur-sm p-6 rounded-2xl border border-sky-400/40 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-sky-100 pr-1 drop-shadow-sm relative z-10" />
                <h3 className="text-2xl font-bold text-white text-left drop-shadow-sm">Value Proposition</h3>
              </div>
              <div className="space-y-3">
                <div className="text-white/80 bg-white text-base font-light text-left leading-relaxed">
                  <span className="font-medium text-white bg-white">Et dolore</span> magna aliqua ut enim ad minim
                </div>
                <div className="text-white/80 bg-white text-base font-light text-left leading-relaxed">
                  <span className="font-medium text-white bg-white">Veniam quis</span> nostrud exercitation
                </div>
                <div className="text-white/80 bg-white text-base font-light text-left leading-relaxed">
                  <span className="font-medium text-white bg-white">Ullamco laboris</span> nisi ut aliquip ex ea
                </div>
                <div className="text-white/80 bg-white text-base font-light text-left leading-relaxed">
                  <span className="font-medium text-white bg-white">Commodo consequat</span> duis aute irure dolor
                </div>
              </div>
              
              {/* Subtle bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 to-sky-600 opacity-60 rounded-b-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Rich gradient background for this slide
Slide16.background = "linear-gradient(135deg, #1e293b 0%, #2d3748 25%, #4a5568 50%, #2d3748 75%, #1e293b 100%)";

export default Slide16; 