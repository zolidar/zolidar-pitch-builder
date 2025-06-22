import React from 'react';
import { ChevronRight, DollarSign} from 'lucide-react';
import { SlideProps, SlideComponentType } from '../types';

const data = [
  { proxy: 'carta', companies: '28K', owners: '2M', valuation: '$7.4B', font: 'helvetica' },
  { proxy: 'AngelList', companies: '7K', owners: '0.038M', valuation: '$4B', font: 'sans' },
  { proxy: 'zolidar', companies: '1,240K', owners: '58M', valuation: '', highlight: true },
];

const Slide23: SlideComponentType = () => {
  return (
    <div className="h-full w-full flex flex-col px-6 pt-12">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 ml-4 mb-8 leading-tight">
          <div>Our huge SOM makes unicorn valuation</div>
          <div className="text-emerald-600">highly achievable</div>
        </h1>
        <div className="flex-1 flex items-center justify-center">
          <table className="border-separate border-spacing-y-2 mx-auto min-w-[600px]">
            <thead>
              <tr className="bg-slate-100 text-slate-700 text-lg">
                <th className="py-2 px-6 rounded-l-lg font-semibold w-40 text-left">Company</th>
                <th className="py-2 px-6 font-semibold w-32 text-center"><ChevronRight className="w-6 h-6 text-slate-300" /></th>
                <th className="py-2 px-6 font-semibold w-32 border-slate-200 border-r-2">Valuation</th>
                <th className="py-2 px-6 font-semibold w-32">Businesses</th>
                <th className="py-2 px-6 rounded-r-lg font-semibold w-32">Owners</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr
                  key={row.proxy}
                  className={
                    row.highlight
                      ? 'bg-emerald-50 text-slate-900 text-lg'
                      : 'bg-white text-slate-800'
                  }
                >
                  <td
                    className={
                      `py-2 px-6 rounded-l-lg text-xl w-40` +
                      (row.font === 'helvetica' ? ' font-[Helvetica,Arial,sans-serif]' : '') +
                      (row.font === 'sans' ? ' font-sans' : '')
                    }
                    style={
                      row.font === 'helvetica'
                        ? { fontFamily: 'Helvetica, Arial, sans-serif' }
                        : row.font === 'sans'
                        ? { fontFamily: 'sans-serif' }
                        : { fontFamily: 'Ubuntu' }
                    }
                  >
                    {row.proxy === 'zolidar' ? (
                      <a href="https://zolidar.com" target="_blank" className="text-slate-900 font-extrabold no-underline" style={{ fontFamily: 'Ubuntu' }}>
                        {row.proxy}
                      </a>
                    ) : (
                      row.proxy
                    )}
                  </td>
                  <td className="py-2 px-6 text-center w-32"><ChevronRight className="w-6 h-6 text-slate-300" /></td>
                  <td className="py-2 px-12 border-slate-200 border-r-2 text-center w-48">
                    {row.valuation || (row.highlight && 
                      <div className="flex items-center justify-center gap-0 text-slate-800">
                        <DollarSign className="w-5 h-5" />
                        <DollarSign className="w-5 h-5" />
                        <DollarSign className="w-5 h-5" />
                      </div>
                    )}
                  </td>
                  <td className="py-2 px-12 text-center w-48">{row.companies}</td>
                  <td className="py-2 px-12 rounded-r-lg text-center w-48">{row.owners}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

//set a gradient background for this slide
Slide23.background = " #dbeafe";
export default Slide23;