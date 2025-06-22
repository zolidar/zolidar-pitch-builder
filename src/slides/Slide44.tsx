import React from 'react';
import { SlideProps } from '../types';

const Slide44: React.FC<SlideProps> = () => {
  const stakeholders = [
    {
      number: '1',
      name: 'Employees',
      description: '',
      give: ['Fill owner void', 'Stay with business', 'Maintain Productivity'],
      get: ['Stability & wealth with', 'no cash out-of-pocket']
    },
    {
      number: '2', 
      name: 'Owners',
      description: '',
      give: ['Build ownership culture', 'At-risk seller financed capital'],
      get: ['Cash out', 'Tax breaks', 'Legacy']
    },
    {
      number: '3',
      name: 'Investors', 
      description: '',
      give: ['At-risk capital', 'Comfort with EO model'],
      get: ['Competitive Returns', 'Double Bottom Line']
    },
    {
      number: '4',
      name: 'Customers',
      description: '(Large corporates or consumers)',
      give: ['Prioritize vendors who are EO', 'Support EO transitions & operations'],
      get: ['Stability', 'Value aligned']
    },
    {
      number: '5',
      name: 'Governments',
      description: '(Bipartisan support)',
      give: ['Grants & loans', 'Tax breaks', 'Regulatory support'],
      get: ['Stable tax base', 'Resilient economy', 'Voter base']
    }
  ];

  return (
    <div className="h-full flex flex-col relative">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-4">
          
          {/* Main Headline */}
          <div className="text-center mb-2">
            <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-1">
              EO delivers{' '}
              <span className="text-blue-600">mutual value for all stakeholders</span>
            </h1>
            <p className="text-2xl text-slate-600">
            Zolidar is removing friction for mass adoption
            </p>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-12 bg-gradient-to-r from-blue-50 to-slate-100 border-b-2 border-slate-300">
              <div className="col-span-1 px-3 py-3 text-center">
                <div className="text-base font-bold text-slate-800">#</div>
              </div>
              <div className="col-span-3 px-3 py-3">
                <div className="text-base font-bold text-slate-800">Stakeholder</div>
              </div>
              <div className="col-span-4 px-3 py-3">
                <div className="text-base font-bold text-slate-800">Give</div>
              </div>
              <div className="col-span-4 px-3 py-3">
                <div className="text-base font-bold text-slate-800">Get</div>
              </div>
            </div>

            {/* Rows */}
            {stakeholders.map((stakeholder, index) => (
              <div key={stakeholder.number} className={`grid grid-cols-12 border-b border-slate-200 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                {/* Number */}
                <div className="col-span-1 px-3 py-3 text-center">
                  <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-sm font-bold text-blue-700">{stakeholder.number}</span>
                  </div>
                </div>
                
                {/* Stakeholder */}
                <div className="col-span-3 px-3 py-3">
                  <div className="text-base font-bold text-slate-800 mb-1">{stakeholder.name}</div>
                  {stakeholder.description && (
                    <div className="text-xs text-slate-600 font-medium">{stakeholder.description}</div>
                  )}
                </div>
                
                {/* Give */}
                <div className="col-span-4 px-3 py-3">
                  <div className="space-y-0.5">
                    {stakeholder.give.map((item, idx) => (
                      <div key={idx} className="text-sm text-slate-700 leading-snug">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Get */}
                <div className="col-span-4 px-3 py-3">
                  <div className="space-y-0.5">
                    {stakeholder.get.map((item, idx) => (
                      <div key={idx} className="text-sm text-slate-700 leading-snug font-semibold">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Set a subtle professional gradient background
// (Slide44 as any).background = `
//   linear-gradient(135deg, #f8fafc 0%, #e0f2fe 25%, #f1f5f9 50%, #e0f2fe 75%, #f8fafc 100%),
//   radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 35%),
//   radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.06) 0%, transparent 40%),
//   radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.04) 0%, transparent 45%)
// `;
(Slide44 as any).background = "linear-gradient(to bottom, #f8fafc, #e2e8f0)";
export default Slide44; 