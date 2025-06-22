import React from 'react';
import { SlideProps, SlideComponentType } from '../types';
import { Landmark, Mountain, Map, Waves } from 'lucide-react';

const Slide25: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col relative px-8 py-2 pt-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
          <span className="text-emerald-600">15+ states</span> are backing EO with <span className="text-emerald-600">real programs</span>
        </h1>
        <p className="text-xl font-medium text-gray-700">
          Active <span className="text-emerald-700">federal bill</span> with bipartisan momentum from <span className="text-emerald-700">Senators Van Hollen, Moran, and Rubio</span>
        </p>
      </div>

      {/* Main content area */}
      <div className="flex-1 grid grid-cols-2 gap-4">
        {/* Left Column - Leading State Programs */}
        <div className="space-y-3">
          {/* Colorado Card - Now First */}
          <div className="bg-white/80  p-3 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <Mountain className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
              <h3 className="text-base font-bold text-orange-900">Colorado</h3>
            </div>
            <div className="text-sm text-gray-800 space-y-1 leading-relaxed">
            <div><strong className="text-gray-900">75% conversion costs covering</strong> up to $150K by EO type</div>
            <div><strong className="text-gray-900">Capital gains tax exemption</strong> for sellers upon 20%+ EO</div>
              <div><strong className="text-gray-900">$1M annual taxable income deduction</strong> for worker co-ops</div>
              <div><strong className="text-gray-900">Law signed until 2037</strong> for all EO types, even equity-comp EO</div>
            </div>
          </div>

          {/* New Jersey Card - Now Second */}
          <div className="bg-white/80 p-3 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <Waves className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
              <h3 className="text-base font-bold text-blue-900">New Jersey</h3>
            </div>
            <div className="text-sm text-gray-800 space-y-1 leading-relaxed">
              <div><strong className="text-gray-900">Up to 90% of feasibility study costs covered</strong></div>
              <div>Maximum $35,000 per business</div>
              <div>Covers valuation, legal, business analysis</div>
              <div>Active program with 50+ applications processed</div>
            </div>
          </div>
        </div>

        {/* Right Column - Federal & Broader Support */}
        <div className="space-y-3">
          {/* Federal Card */}
          <div className="bg-white/80 p-3 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <Landmark className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
              <h3 className="text-base font-bold text-teal-900">Federal: American Ownership Act 2025</h3>
            </div>
            <div className="text-sm text-gray-800 space-y-1 leading-relaxed">
              <div><strong className="text-gray-900">$5B annual loan guarantee facility</strong></div>
              <div><strong className="text-gray-900">Up to $500M</strong> per investment company</div>
              <div>Zero-subsidy cost to government</div>
              <div>20-year program duration • Bipartisan support</div>
            </div>
          </div>

          {/* Broader States Card */}
          <div className="bg-white/80 p-3 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <Map className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
              <h3 className="text-base font-bold text-emerald-900">States with Active Programs</h3>
            </div>
            <div className="text-sm text-gray-800 space-y-1 leading-relaxed">
              <div><strong className="text-gray-900">Tax Credits:</strong> IA (50% capital gains exemption), MO, NE</div>
              <div><strong className="text-gray-900">Resource Centers:</strong> MA, CA, WA, VT, OH (18 total)</div>
              <div><strong className="text-gray-900">Policy Support:</strong> NY, NE allow EO at Professional Corps</div>
              <div><strong className="text-gray-900">Contracting Preferences:</strong> ME, NC</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sources footer */}
      <div className="mt-3 pt-2 border-t border-gray-300">
        <div className="text-xs text-gray-600 leading-relaxed">
          <div><strong className="text-gray-700">Sources:</strong> 
            <a href="https://www.njeda.gov/esop-assistance-program/" className="text-blue-600 hover:text-blue-800 hover:underline ml-1 transition-colors">NJEDA ESOP Program</a> | 
            <a href="https://oedit.colorado.gov/employee-ownership-tax-credit" className="text-blue-600 hover:text-blue-800 hover:underline ml-1 transition-colors">Colorado OEDIT</a> | 
            <a href="https://www.nceo.org/article/state-legislation-employee-ownership-0" className="text-blue-600 hover:text-blue-800 hover:underline ml-1 transition-colors">NCEO State Legislation</a> | 
            <a href="https://www.vanhollen.senate.gov/news/press-releases/van-hollen-moran-moore-trahan-introduce-bipartisan-bill-to-boost-employee-ownership-of-businesses" className="text-blue-600 hover:text-blue-800 hover:underline ml-1 transition-colors">American Ownership Act 2025</a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Clean, professional gradient background with institutional feel
Slide25.background = " #dbeafe";
export default Slide25; 