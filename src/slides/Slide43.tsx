import React from 'react';
import { SlideProps } from '../types';

const Slide43: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col relative px-12 py-3">
      {/* Main headline following solution introduction pattern */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-slate-800 leading-tight mb-1">
          Varying economics & control across EO types
        </h1>
        <h2 className="text-2xl font-light text-slate-700">
          Yet share common attributes that <a href="https://zolidar.com" target="_blank" className="text-slate-700 no-underline">Zolidar</a> can productize
        </h2>
      </div>

      {/* Chart container */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-full max-w-5xl h-96">
          
          {/* Chart axes - L-shaped with correct positioning */}
          {/* Vertical axis (Control) */}
          <div className="absolute left-20 top-0 bottom-20 w-px bg-slate-600 opacity-80"></div>
          {/* Horizontal axis (Economics) */}
          <div className="absolute left-20 bottom-20 right-40 h-px bg-slate-600 opacity-80"></div>

          {/* Y-axis label - Employee Owners (positioned to the left of the Y-axis) */}
          <div className="absolute left-6 top-1 transform -rotate-90 origin-center text-sm font-medium text-slate-600 leading-tight">
            Employee<br />Owners
          </div>

          {/* Y-axis label - Control (positioned to the left of the Y-axis) */}
          <div className="absolute left-6 top-1/3 transform -rotate-90 origin-center text-xl font-medium text-slate-700 tracking-wide">
            Control
          </div>

          {/* X-axis label - Economics (bottom center) */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-xl font-medium text-slate-700 tracking-wide">
            Economics
          </div>

          {/* Corner labels positioned correctly relative to axes */}
          {/* Financiers - right below the X-axis at the intersection point */}
          <div className="absolute left-20 bottom-12 transform -translate-x-1/2 text-sm font-medium text-slate-600 text-center">
            Financiers
          </div>

          {/* Bottom-right: Employee Owners */}
          <div className="absolute bottom-8 right-36 text-sm font-medium text-slate-600 text-right leading-tight">
            Employee<br />Owners
          </div>

          {/* Elegant curved arrow line - starting from ~1 unit x, 0 unit y */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Main curved path - starts from bottom at ~1 unit right, curves to top-right */}
            <path
              d="M 200 305 Q 200 305 370 270 Q 520 250 700 10"
              stroke="#64748b"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead)"
              className="drop-shadow-sm"
            />
            {/* Arrow marker definition */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="12"
                markerHeight="8"
                refX="11"
                refY="4"
                orient="auto"
              >
                <polygon
                  points="0 0, 12 4, 0 8"
                  fill="#64748b"
                  className="drop-shadow-sm"
                />
              </marker>
            </defs>
          </svg>

          {/* EO Forms positioned along the corrected curve */}
          
          {/* Profit Sharing - start of curve (~1 unit x, 0 unit y) */}
          <div className="absolute" style={{ left: '125px', bottom: '90px' }}>
            <div className="bg-slate-50 rounded-full px-6 py-2 shadow-lg border border-slate-200 text-center">
              <div className="text-lg font-semibold text-slate-800 leading-tight">Profit</div>
              <div className="text-lg font-semibold text-slate-800 leading-tight">Sharing</div>
            </div>
          </div>

          {/* EOT - along the curve */}
          <div className="absolute" style={{ left: '310px', bottom: '125px' }}>
            <div className="bg-slate-50 rounded-full px-6 py-2 shadow-lg border border-slate-200 text-center">
              <div className="text-xl font-semibold text-slate-800">EOT</div>
            </div>
          </div>

          {/* ESOP - further along the curve */}
          <div className="absolute" style={{ left: '430px', bottom: '190px' }}>
            <div className="bg-slate-50 rounded-full px-6 py-2 shadow-lg border border-slate-200 text-center">
              <div className="text-xl font-semibold text-slate-800">ESOP</div>
            </div>
          </div>

          {/* Worker Co-op - end of curve (high x, high y) */}
          <div className="absolute" style={{ left: '535px', bottom: '300px' }}>
            <div className="bg-slate-50 rounded-full px-6 py-2 shadow-lg border border-slate-200 text-center">
              <div className="text-lg font-semibold text-slate-800 leading-tight">Worker</div>
              <div className="text-lg font-semibold text-slate-800 leading-tight">Co-op</div>
            </div>
          </div>

          {/* Small connecting dots for visual elegance - positioned along corrected curve */}
          <div className="absolute w-2 h-2 bg-slate-600 rounded-full" style={{ left: '200px', bottom: '76px' }}></div>
          <div className="absolute w-2 h-2 bg-slate-600 rounded-full" style={{ left: '370px', bottom: '111px' }}></div>
          <div className="absolute w-2 h-2 bg-slate-600 rounded-full" style={{ left: '520px', bottom: '183px' }}></div>
          <div className="absolute w-2 h-2 bg-slate-600 rounded-full" style={{ left: '650px', bottom: '312px' }}></div>

        </div>
      </div>
    </div>
  );
};

// Set background consistent with solution explanation slides
(Slide43 as any).background = "linear-gradient(to bottom, #f8fafc, #e2e8f0)";

export default Slide43; 