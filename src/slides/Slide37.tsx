import React from 'react';
import { SlideProps } from '../types';

const Slide37: React.FC<SlideProps> = () => {
  // Color variables for consistent theming
  const esopColor = 'bg-blue-300';
  const coopColor = 'bg-purple-300';
  const esopLegendColor = 'bg-blue-300';
  const coopLegendColor = 'bg-purple-300';

  return (
    <div className="h-full flex flex-col justify-center relative px-6">
      {/* Title */}
      <div className="w-full flex flex-col items-center mb-4 mt-10">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-2 text-center leading-tight">
          8 sectors with <span className="text-blue-600">42 million</span> employees <br />at businesses suitable for EO
        </h1>
      </div>

      {/* Sector Breakdown - Visual Chart */}
      <div className="flex flex-col items-center justify-center mb-6 border border-slate-400/20 bg bg-sky-200/20 rounded-lg p-4">        
        <div className="flex flex-row items-end justify-center gap-8 mt-8 mb-4">
          {/* Retail Trade */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-1 mb-2">
              <div className={`w-14 ${esopColor} rounded-t`} style={{height: '70px'}} title="4.2M ESOP"></div>
              <div className={`w-14 ${coopColor} rounded-b`} style={{height: '60px'}} title="3.6M Coop"></div>
            </div>
            <span className="text-xs font-medium text-slate-700 text-center">Retail Trade</span>
            <span className="text-xs text-slate-500 font-semibold">7.8M</span>
          </div>

          {/* Manufacturing */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-1 mb-2">
              <div className={`w-14 ${esopColor} rounded-t`} style={{height: '80px'}} title="4.8M ESOP"></div>
              <div className={`w-14 ${coopColor} rounded-b`} style={{height: '26px'}} title="1.6M Coop"></div>
            </div>
            <span className="text-xs font-medium text-slate-700 text-center">Manufacturing</span>
            <span className="text-xs text-slate-500 font-semibold">6.4M</span>
          </div>

          {/* Health Care */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-1 mb-2">
              <div className={`w-14 ${esopColor} rounded-t`} style={{height: '37px'}} title="2.2M ESOP"></div>
              <div className={`w-14 ${coopColor} rounded-b`} style={{height: '67px'}} title="4.0M Coop"></div>
            </div>
            <span className="text-xs font-medium text-slate-700 text-center">Health Care</span>
            <span className="text-xs text-slate-500 font-semibold">6.2M</span>
          </div>

          {/* Administrative Support */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-1 mb-2">
              <div className={`w-14 ${esopColor} rounded-t`} style={{height: '33px'}} title="2.0M ESOP"></div>
              <div className={`w-14 ${coopColor} rounded-b`} style={{height: '47px'}} title="2.8M Coop"></div>
            </div>
            <span className="text-xs font-medium text-slate-700 text-center">Admin Support</span>
            <span className="text-xs text-slate-500 font-semibold">4.8M</span>
          </div>

          {/* Professional/Sci./Tech Services */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-1 mb-2">
              <div className={`w-14 ${esopColor} rounded-t`} style={{height: '42px'}} title="2.5M ESOP"></div>
              <div className={`w-14 ${coopColor} rounded-b`} style={{height: '35px'}} title="2.1M Coop"></div>
            </div>
            <span className="text-xs font-medium text-slate-700 text-center">Prof/Sci/Tech</span>
            <span className="text-xs text-slate-500 font-semibold">4.6M</span>
          </div>

          {/* Accommodation & Food */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-1 mb-2">
              <div className={`w-14 ${esopColor} rounded-t`} style={{height: '10px'}} title="0.6M ESOP"></div>
              <div className={`w-14 ${coopColor} rounded-b`} style={{height: '63px'}} title="3.8M Coop"></div>
            </div>
            <span className="text-xs font-medium text-slate-700 text-center">Food Service</span>
            <span className="text-xs text-slate-500 font-semibold">4.4M</span>
          </div>

          {/* Finance/Insurance/Real Estate */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-1 mb-2">
              <div className={`w-14 ${esopColor} rounded-t`} style={{height: '33px'}} title="2.0M ESOP"></div>
              <div className={`w-14 ${coopColor} rounded-b`} style={{height: '37px'}} title="2.2M Coop"></div>
            </div>
            <span className="text-xs font-medium text-slate-700 text-center">Finance/RE</span>
            <span className="text-xs text-slate-500 font-semibold">4.2M</span>
          </div>

          {/* Construction */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-1 mb-2">
              <div className={`w-14 ${esopColor} rounded-t`} style={{height: '25px'}} title="1.5M ESOP"></div>
              <div className={`w-14 ${coopColor} rounded-b`} style={{height: '27px'}} title="1.6M Coop"></div>
            </div>
            <span className="text-xs font-medium text-slate-700 text-center">Construction</span>
            <span className="text-xs text-slate-500 font-semibold">3.1M</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-row items-center justify-center gap-8 mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 ${esopLegendColor} rounded`}></div>
            <span className="text-sm text-slate-700 font-medium">ESOP</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 ${coopLegendColor} rounded`}></div>
            <span className="text-sm text-slate-700 font-medium">EOT or Worker Co-op</span>
          </div>
        </div>
      </div>

      {/* Source */}
      <div className="w-full flex justify-center">
        <div className="text-xs text-gray-500 max-w-xl text-center font-light">
          <a
            href="https://www.aspeninstitute.org/publications/how-many-firms-are-good-candidates-for-employee-ownership/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sm font-light text-slate-600 shadow-sm whitespace-nowrap align-middle"
            style={{ lineHeight: '1.2', verticalAlign: 'middle' }}
            title="View full research"
          >
            <span className="font-normal">Source:</span>&nbsp;US Census Bureau Analysis by Aspen Institute & Rutgers University&nbsp;
            <svg className="w-4 h-4 mr-1 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1-2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// Set a gradient background for this slide
(Slide37 as any).background = " #e0f2fe";
export default Slide37;