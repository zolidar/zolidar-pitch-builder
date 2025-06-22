import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide35: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-3 mt-4 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2 leading-tight tracking-tight">
          Our Strategies for Risk Mitigation
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        {/* Column 1 */}
        <div className="space-y-3">
          {/* Risk 1 - Aligned with Slide18 */}
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center">
              <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
              Businesses aren't exit-ready
            </h3>
            <div className="text-sm text-slate-700 space-y-1">
              <p>🎯 Built products to help businesses get exit-ready. We monetize each step and create essential deal flow for our platform.</p>
            </div>
          </div>

          {/* Risk 2 - Aligned with Slide18 */}
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center">
              <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
              Market is fragmented
            </h3>
            <div className="text-sm text-slate-700 space-y-1">
              <p>🗺️ Signed partnerships for market access. EO unlocks unique partners with local reach that traditional exit solutions can't tap.</p>
            </div>
          </div>

          {/* Risk 3 - Aligned with Slide18 */}
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center">
              <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
              Deals are complex & bespoke
            </h3>
            <div className="text-sm text-slate-700 space-y-1">
              <p>🧩 Already built a product for top-of-funnel. Rest productizable via AI + human-in-loop for deal-specific needs.</p>
            </div>
          </div>

          {/* Risk 4 - Aligned with Slide18 */}
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center">
              <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
              Is there risk of disintermediation?
            </h3>
            <div className="text-sm text-slate-700 space-y-1">
              <p>🔄 EO isn't a two-party transaction—multiple parties gradually work together. Disintermediation simply doesn't apply.</p>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-3">
          {/* Risk 5 - Additional comprehensive coverage */}
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center">
              <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
              Insufficient number of experts
            </h3>
            <div className="text-sm text-slate-700 space-y-1">
              <p>💼 Short-term: Existing pool of experts are sufficient. Long-term: AI increases throughput while The Grid connects supply and demand.</p>
            </div>
          </div>

          {/* Risk 6 - Additional comprehensive coverage */}
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center">
              <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
              Is enough capital available?
            </h3>
            <div className="text-sm text-slate-700 space-y-1">
              <p>💰 $1.1 trillion aligned capital pool exists. Deal pipeline efficiency unlocks more capital, supported by government EO programs.</p>
            </div>
          </div>

          {/* Risk 7 - Additional comprehensive coverage */}
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center">
              <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
              Can business survive without owner?
            </h3>
            <div className="text-sm text-slate-700 space-y-1">
              <p>🏢 Large TAM of 10+ employee businesses with profitability and second-in-command. Expand to other businesses after PMF.</p>
            </div>
          </div>

          {/* Risk 8 - Additional comprehensive coverage */}
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center">
              <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
              Can we internationalize?
            </h3>
            <div className="text-sm text-slate-700 space-y-1">
              <p>🌍 Top-of-funnel products only need language I18n. Other solutions thru professionals on The Grid, followed by gradual productization.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide35.background = "linear-gradient(to bottom right, #dbeafe, #e0f2fe)";
(Slide35 as any).background = "#e0e7ff";

export default Slide35; 