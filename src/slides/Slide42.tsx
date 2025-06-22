import React from 'react';
import { SlideProps } from '../types';
import SlideTitle from '../components/SlideTitle';
import { Building2, Wallet2, Clock, TrendingUp, HeartHandshake, ExternalLink } from 'lucide-react';
import CompanyLogo from '../components/CompanyLogo';

// Logo imports based on grid positions (XY where X=column, Y=row)
import logo11 from '../assets/logos/11Recology.png';
import logo12 from '../assets/logos/12Publix.png';
import logo13 from '../assets/logos/13Winco.png';
import logo21 from '../assets/logos/21Optimax.png';
import logo22 from '../assets/logos/22BTI.png';
import logo23 from '../assets/logos/23Harpoon.webp';
import logo31 from '../assets/logos/31Obran.png';
import logo32 from '../assets/logos/32Teamshares.png';
import logo33 from '../assets/logos/33Empowered.png';
import logo41 from '../assets/logos/41Namaste.png';
import logo42 from '../assets/logos/42Asony.png';
import logo43 from '../assets/logos/43AT.png';

const impactStats = [
  {
    icon: <TrendingUp className="w-5 h-5 text-slate-500 opacity-70" />, bg: 'bg-teal-100', label: 'Sales Growth', value: '2% higher yoy',
  },
  {
    icon: <Wallet2 className="w-5 h-5 text-slate-500 opacity-70" />, bg: 'bg-amber-100', label: 'Profits', value: '14% higher',
  },
  {
    icon: <Clock className="w-5 h-5 text-slate-500 opacity-70" />, bg: 'bg-blue-100', label: 'Retention', value: '53% longer',
  },
  {
    icon: <Building2 className="w-5 h-5 text-slate-500 opacity-70" />, bg: 'bg-purple-100', label: 'Wages', value: '33% higher',
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-slate-500 opacity-70" />, bg: 'bg-rose-100', label: 'Social equity', value: '92% higher wealth',
  },
];

// Grid-based logos array organized by columns
const logoColumns = [
  {
    title: { line1: 'EO for', line2: '30+ yrs' },
    bgColor: 'bg-blue-50',
    titleBgColor: 'bg-blue-100',
    companies: [
      { logo: logo11, name: 'Recology', owners: '1K+ owners' },
      { logo: logo12, name: 'Publix', owners: '230K+ owners' },
      { logo: logo13, name: 'WinCo Foods', owners: '20K+ owners' },
    ]
  },
  {
    title: { line1: 'Recent', line2: 'Large EO' },
    bgColor: 'bg-green-50',
    titleBgColor: 'bg-green-100',
    companies: [
      { logo: logo21, name: 'Optimax', owners: '400 owners' },
      { logo: logo22, name: 'BTI', owners: '43 owners' },
      { logo: logo23, name: 'Harpoon', owners: '200 owners' },
    ]
  },
  {
    title: { line1: 'EO', line2: 'HoldCo' },
    bgColor: 'bg-purple-50',
    titleBgColor: 'bg-purple-100',
    companies: [
      { logo: logo31, name: 'Obran', owners: '200 owners' },
      { logo: logo32, name: 'Teamshares', owners: '70 businesses' },
      { logo: logo33, name: 'Empowered Ventures', owners: '3 businesses' },
    ]
  },
  {
    title: { line1: 'EO', line2: 'SMB' },
    bgColor: 'bg-amber-50',
    titleBgColor: 'bg-amber-100',
    companies: [
      { logo: logo41, name: 'Namaste Solar', owners: '120 owners' },
      { logo: logo42, name: 'Sony', owners: '20 owners' },
      { logo: logo43, name: 'Alternative Technologies', owners: '36 owners' },
    ]
  }
];

const Slide42: React.FC<SlideProps> = () => {
  return (
    <div
      className="flex flex-col h-full relative px-4 py-2"
    >
      <SlideTitle className="mb-4 text-center">EO is not theory - it is proven</SlideTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 h-full items-stretch">
        {/* Impact Card */}
        <div className="bg-indigo-200/70 rounded-2xl shadow-lg flex flex-col h-full p-6 flex-1">
          <h3 className="text-xl font-bold text-slate-800 text-center mb-0">EO performs better than non-EO</h3>
          <div className="flex flex-col h-full gap-y-4 justify-between flex-1">
            <div className="grid grid-cols-2 gap-4 flex-1">
              {impactStats.slice(0, 4).map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-4 rounded-xl p-4 shadow-sm min-h-[80px]">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center bg-indigo-100 shadow-md`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-lg">{stat.label}</div>
                    <div className="text-slate-600 text-base font-light">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 rounded-xl p-4 shadow-sm mx-auto max-w-lg w-full">
              <div className="w-9 h-9 rounded-full flex items-center justify-center bg-indigo-100 shadow-md">
                <HeartHandshake className="w-7 h-7 text-slate-500 opacity-70" />
              </div>
              <div>
                <div className="font-semibold text-slate-800 text-lg">Social equity</div>
                <div className="text-slate-600 text-base font-light">92% higher wealth</div>
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-xs text-slate-500">Source: </span>
              <a 
                href="https://www.nceo.org/research/research-findings-on-employee-ownership" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-slate-700 underline inline-flex items-center gap-1"
              >
                NCEO Study
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
        {/* Examples Card (Grid) */}
        <div className="flex flex-col flex-1 h-full rounded-2xl shadow-lg">
          <div className="grid grid-cols-4 gap-0 flex-1 h-full bg-transparent">
            {/* Titles row */}
            {logoColumns.map((column, colIndex) => (
              <div key={`title-${colIndex}`} className={`text-center py-2 ${column.titleBgColor} h-16 flex flex-col rounded-xl justify-center`}>
                <div className="leading-tight">
                  <div className="text-lg font-bold text-slate-800">{column.title.line1}</div>
                  <div className="text-sm font-semibold text-slate-800">{column.title.line2}</div>
                </div>
              </div>
            ))}
            {/* Company rows */}
            {Array.from({ length: Math.max(...logoColumns.map(col => col.companies.length)) }).map((_, rowIdx) => (
              logoColumns.map((column, colIdx) => {
                const company = column.companies[rowIdx];
                const isEvenRow = rowIdx % 2 === 1;
                // For the second row (rowIdx === 1), use a subtle variation of -50
                const isSecondRow = rowIdx === 1;
                return company ? (
                  <CompanyLogo
                    key={`cell-${rowIdx}-${colIdx}`}
                    logo={company.logo}
                    name={company.name}
                    owners={company.owners}
                    bgColor={isSecondRow ? column.bgColor.replace('-50', '-75') : column.bgColor}
                    isEvenRow={false}
                    className={company.logo === logo31 ? 'w-14 h-14' : 'w-18 h-18'}
                  />
                ) : (
                  <div key={`empty-${rowIdx}-${colIdx}`} className={`${isSecondRow ? column.bgColor.replace('-50', '-75') : column.bgColor} h-28`} />
                );
              })
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

//set a gradient background for this slide
// Slide42.background = "linear-gradient(to bottom, #fbfbfb 0%, #fbfbfb 50%, #ccecff 100%)";
(Slide42 as any).background = "linear-gradient(to bottom, #f8fafc, #e2e8f0)";

export default Slide42;
