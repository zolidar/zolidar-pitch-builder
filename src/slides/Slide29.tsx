import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide29: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Redacted Version Sticky */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-slate-400/90 backdrop-blur-sm shadow-xl drop-shadow-lg px-4 py-2 rounded-br-md border-r border-b border-slate-400/60 transform rotate-1 hover:rotate-0 transition-transform duration-200">
          <span className="text-slate-950 text-xs font-medium tracking-wide uppercase">Heavily Redacted Version</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-6 py-2">
        <div className="w-full max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-4 text-left mt-2">
            <h1 className="text-[2.1rem] font-bold text-slate-800 ml-2 leading-tight">
              Each use-case becomes an <span className="text-sky-700">entry point into our ecosystem</span>
            </h1>
          </div>

          {/* Main Layout */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg shadow-md overflow-hidden">
            {/* Top Header Row - Three Categories */}
            <div className="grid grid-cols-4 bg-slate-100 border-b border-slate-300">
              <div className="p-2"></div> {/* Empty top-left cell */}
              <div className="p-2 text-center border-l border-slate-300">
                <h3 className="text-base font-bold text-slate-700">Learning & Assessment</h3>
              </div>
              <div className="p-2 text-center border-l border-slate-300">
                <h3 className="text-base font-bold text-slate-700">Directory & Wiki</h3>
              </div>
              <div className="p-2 text-center border-l border-slate-300">
                <h3 className="text-base font-bold text-slate-700">Workflow & Agentic AI</h3>
              </div>
            </div>

            {/* Prepare Section */}
            <div className="border-b border-slate-300">
              <div className="grid grid-cols-4">
                <div className="bg-gradient-to-r from-sky-100 to-sky-50 p-3 flex items-center justify-center border-r border-slate-300">
                  <h4 className="font-bold text-lg text-amber-800">Prepare</h4>
                </div>
                <div className="col-span-3 p-4 bg-sky-50/40">
                  <div className="text-center text-slate-500 bg-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                  </div>
                </div>
              </div>
            </div>

            {/* Transition Section */}
            <div className="border-b border-slate-300">
              <div className="grid grid-cols-4">
                <div className="bg-gradient-to-r from-sky-100 to-sky-50 p-3 flex items-center justify-center border-r border-slate-300">
                  <h4 className="font-bold text-lg text-emerald-800">Transition</h4>
                </div>
                <div className="col-span-3 p-4 bg-sky-50/40">
                  <div className="text-center text-slate-500 bg-slate-500">
                    Sed do eiusmod tempor incididunt ut labore et dolore
                  </div>
                </div>
              </div>
            </div>

            {/* Operate Section */}
            <div>
              <div className="grid grid-cols-4">
                <div className="bg-gradient-to-r from-sky-100 to-sky-50 p-3 flex items-center justify-center border-r border-slate-300">
                  <h4 className="font-bold text-lg text-sky-800">Operate</h4>
                </div>
                <div className="col-span-3 p-4 bg-sky-50/40">
                  <div className="text-center text-slate-500 bg-slate-500">
                    Magna aliqua ut enim ad minim veniam quis nostrud
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

// Set background to match the deck's clean aesthetic
(Slide29 as any).background = " #cbd5e1";

export default Slide29;