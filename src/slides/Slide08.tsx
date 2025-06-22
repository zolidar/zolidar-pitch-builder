import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

// Subtle highlight for key phrases
const highlight = (text: string) => (
  <span className="bg-gradient-to-r from-amber-200/80 to-orange-200/70 px-1 py-0.5 rounded font-normal text-slate-800">{text}</span>
);

const quotes = [
  {
    text: (
      <>
        Need intelligence or {highlight('tech enabled system for EO formation')} similar to LegalZoom
      </>
    ),
    author: (
      <div className="text-right">
        <div className="text-sm text-slate-500 font-light mt-0">Employee ownership attorney and state policy leader</div>
      </div>
    ),
  },
  {
    text: (
      <>
        Fund managers are not investing in worker ownership because of the {highlight('lack of deal pipeline')}
      </>
    ),
    author: (
      <a
        href="https://project-equity.org/wp-content/uploads/2023/06/Addressing-the-Risk-Capital-Gap-for-Worker-Coop-Conversions_Strategies-for-the-Field_Project-Equity.pdf"
        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Project Equity Report
      </a>
    ),
  },
  {
    text: (
      <>
        We need an {highlight('equivalent of the common college application')} form for raising blended financing & {highlight('an easy button for employee ownership')}
      </>
    ),
    author: (
      <div className="text-right">
        <div className="text-sm text-slate-500 font-light mt-0">Colorado Employee Ownership Commission</div>
      </div>
    ),
  },
  {
    text: (
      <>
        Deployments in employee-ownership is a strong fit with capital preservation strategy of UHNI, who currently mostly invest in municipal bonds & treasuries. Securitization, less underwriting, {highlight('better tech, less friction, less fees will increase volume, make it profitable for intermediaries and grow the size of this domain')}
      </>
    ),
    author: <span className="text-slate-700">Capital Allocator</span>,
  },
];

// Split quotes: last one is the longest
const shortQuotes = quotes.slice(0, 3);
const longQuote = quotes[3];

const Slide08: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center relative px-4 py-6">
      <div className="max-w-5xl w-full">
        {/* Custom grid: left column for heading + long quote, right column for 3 short quotes */}
        <div className="grid grid-cols-2 gap-8 items-start">

          {/* Left column: stack 3 short quotes */}
          <div className="flex flex-col gap-3 justify-center">
            {shortQuotes.map((q, i) => (
              <div key={i} className="bg-white rounded-2xl shadow border border-slate-200 px-7 py-3">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="text-3xl text-orange-200 mb-0 font-serif leading-none">"</div>
                    <p className="text-slate-500 text-lg leading-relaxed font-light mt-[-5px] mb-1">
                      {q.text}
                    </p>
                  </div>
                  <div className="flex justify-end pt-1 border-t border-slate-100">
                    <span className="text-sm font-medium text-slate-600">{q.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* Right column: heading + long quote */}
          <div className="flex flex-col gap-6 justify-start">
            <div className="mb-2">
              <h1 className="text-[2.1rem] font-extrabold text-slate-800 leading-tight mt-6 ml-2 mb-3 mr-1">
              We're building exactly what industry experts demand
              </h1>
            </div>
            <div className="bg-white rounded-2xl shadow border border-slate-200 px-7 py-3 pb-2">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="text-3xl text-orange-200 mb-0 font-serif">"</div>
                  <p className="text-slate-500 text-lg leading-relaxed font-light mb-6">
                    {longQuote.text}
                  </p>
                </div>
                <div className="flex justify-end border-t border-slate-100 pb-1 pt-1">
                  <span className="text-sm font-medium text-slate-600">{longQuote.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Set a gradient background for this slide
Slide08.background = "#e2e8f0";
export default Slide08;