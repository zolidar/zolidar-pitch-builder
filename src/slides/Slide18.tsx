import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide18: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center px-2">
      <div className="max-w-5xl text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-1 leading-tight tracking-tight">
          Yes, this isn't easy—that's exactly why we'll win
        </h1>
        
        <div className="mb-8">
          <p className="text-2xl text-slate-700 font-light leading-relaxed">
            We're solving each risk, which becomes our moat—and the rewards are massive
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 max-w-4xl mx-auto">
          {/* Risk 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-3 h-3 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-slate-800 leading-tight">Businesses Aren't Exit-Ready</h3>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-600 text-base font-medium leading-relaxed">
                Built products for helping more businesses get exit-ready. We monetize each step and create essential deal flow.
                </p>
              </div>
            </div>
          </div>

          {/* Risk 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-3 h-3 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-slate-800 leading-tight">Market is Fragmented</h3>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-600 text-base font-medium leading-relaxed">
                Signed partnerships for market access. EO unlocks unique partners with local reach that traditional exit solutions can't tap.
                </p>
              </div>
            </div>
          </div>

          {/* Risk 3 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-3 h-3 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-slate-800 leading-tight">Complex, Bespoke Deals</h3>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-600 text-base font-medium leading-relaxed">
                  Built top-of-funnel product. Rest productizable via AI + human-in-loop for deal specific needs.
                </p>
              </div>
            </div>
          </div>


          {/* Risk 4 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-3 h-3 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-slate-800 leading-tight">Disintermediation Risk</h3>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-600 text-base font-medium leading-relaxed">
                EO isn't a two-party transaction—multiple parties gradually work together. Disintermediation simply doesn't apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Slide18.background = " #cbd5e1";
export default Slide18; 