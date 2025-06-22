import React from 'react';
import { SlideProps } from '../types';
import teamSharesLogo from '../assets/logos/32Teamshares.png';

const Slide48: React.FC<SlideProps> = () => {
  return (
    <div className="h-full w-full flex flex-col px-6 pt-6">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-slate-800 leading-tight mb-2">
            Teamshares: <span className="text-slate-600 font-light">The Marriott to our Airbnb</span>
          </h1>
          <h2 className="text-xl font-medium text-slate-700 leading-tight">
            They own 70 businesses. We can serve <span className="text-emerald-600">1.24 million</span>
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="flex-1 flex items-start justify-center">
          <table className="border-separate border-spacing-y-2 mx-auto w-full max-w-4xl">
            <thead>
              <tr className="bg-slate-100 text-slate-700 text-lg">
                <th className="py-3 px-6 rounded-l-lg font-semibold text-left w-32"></th>
                <th className="py-3 px-6 font-semibold text-center w-80">
                  <div className="flex items-center justify-center gap-3">
                    <img src={teamSharesLogo} alt="Teamshares" className="w-28 h-6" />
                  </div>
                </th>
                <th className="py-3 px-6 rounded-r-lg font-semibold text-center w-80">
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-ubuntu text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      <a href="https://zolidar.com" target="_blank" className="font-ubuntu text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent no-underline">
                        zolidar
                      </a>
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-slate-800">
                <td className="py-4 px-6 rounded-l-lg font-semibold text-slate-700 text-base">Model</td>
                <td className="py-4 px-6 text-base font-light">PE-style buyer: Purchases businesses, hands-on operations, gradual employee sale</td>
                <td className="py-4 px-6 rounded-r-lg text-base font-light bg-emerald-50">Software platform: No business ownership, asset-light, enables all EO types</td>
              </tr>
              <tr className="bg-white text-slate-800">
                <td className="py-4 px-6 rounded-l-lg font-semibold text-slate-700 text-base">Scale</td>
                <td className="py-4 px-6 text-base font-light">70 deals/year from 72K leads. Each deal requires significant capital deployment</td>
                <td className="py-4 px-6 rounded-r-lg text-base font-light bg-emerald-50">1.24M addressable businesses. Software scales without per-deal capital</td>
              </tr>
              <tr className="bg-white text-slate-800">
                <td className="py-4 px-6 rounded-l-lg font-semibold text-slate-700 text-base">Returns</td>
                <td className="py-4 px-6 text-base font-light">VC capital → Brick-and-mortar performance → VC IRR expectations</td>
                <td className="py-4 px-6 rounded-r-lg text-base font-light bg-emerald-50">VC capital → Software margins → Scalable returns while value accretive</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

(Slide48 as any).background = "#dbeafe";
export default Slide48; 