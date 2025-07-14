import React from 'react';
import { SlideProps } from '../types';
import SlideTitle from '../components/SlideTitle';
import { DoorOpen, Search, Puzzle, Settings } from 'lucide-react';

const phases = [
  {
    title: 'Starting Point',
    icon: <DoorOpen className="w-6 h-6 text-amber-600/50" />,
    border: 'border-t-4 border-amber-400',
    bgColor: 'bg-gradient-to-br from-amber-50 to-amber-100/20',
    modules: [
      {
        name: 'GTM Wedge',
        description: 'Distribution Partnerships',
        status: 'signed'
      },
      {
        name: 'Advisors',
        description: 'Product for Advisors',
        status: 'launched'
      }
    ]
  },
  {
    title: 'Passive Looking',
    icon: <Search className="w-6 h-6 text-sky-600/50" />,
    border: 'border-t-4 border-sky-400',
    bgColor: 'bg-gradient-to-br from-sky-50 to-sky-100/50',
    modules: [
      {
        name: 'Prepare',
        description: 'Day Zero, Aha Planner, Zolid AI',
        status: 'launched'
      },
      {
        name: 'Ecosystem',
        description: 'Forum, Wiki, Directory',
        status: 'launched'
      }
    ]
  },
  {
    title: 'Consideration',
    icon: <Puzzle className="w-6 h-6 text-emerald-600/50" />,
    border: 'border-t-4 border-emerald-400',
    bgColor: 'bg-gradient-to-br from-emerald-50 to-emerald-100/20',
    modules: [
      {
        name: 'Transition',
        description: 'quis nostrud exercitation',
        status: 'planned'
      },
      {
        name: 'Expand',
        description: 'nisi ut aliquip ex ea',
        status: 'future'
      }
    ]
  },
  {
    title: 'Functional',
    icon: <Settings className="w-6 h-6 text-rose-600/40" />,
    border: 'border-t-4 border-rose-400',
    bgColor: 'bg-gradient-to-br from-rose-50 to-rose-100/50',
    modules: [
      {
        name: 'Commodo',
        description: 'consequat duis aute irure',
        status: 'next phase'
      },
      {
        name: 'Operate',
        description: 'reprehenderit in voluptate',
        status: 'next phase'
      },
      {
        name: 'Velit',
        description: 'esse cillum dolore eu fugiat',
        status: 'future'
      }
    ]
  }
];

const bottomModule = {
  name: 'Nulla Pariatur',
  description: 'Low Cost EO Financing',
  status: 'future'
};

const getStatusStyling = (status: string) => {
  switch (status) {
    case 'launched':
      return {
        bg: 'bg-emerald-50',
        text: 'text-slate-700',
        border: 'border-slate-200',
        label: 'Launched'
      };
    case 'signed':
      return {
        bg: 'bg-emerald-50',
        text: 'text-slate-700',
        border: 'border-slate-200',
        label: 'Signed'
      };
    case 'planned':
      return {
        bg: 'bg-amber-50',
        text: 'text-slate-700',
        border: 'border-slate-200',
        label: 'Planned'
      };
    case 'next phase':
      return {
        bg: 'bg-slate-50',
        text: 'text-slate-600',
        border: 'border-slate-200',
        label: 'Next Phase'
      };
    case 'future':
      return {
        bg: 'bg-pink-50',
        text: 'text-slate-700',
        border: 'border-slate-200',
        label: 'Future'
      };
      case 'progress':
        return {
          bg: 'bg-amber-50',
          text: 'text-slate-700',
          border: 'border-slate-200',
          label: 'In Progress'
        };
      default:
      return {
        bg: 'bg-slate-50',
        text: 'text-slate-600',
        border: 'border-slate-200',
        label: 'TBD'
      };
  }
};

const Slide28: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Redacted Version Sticky */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-slate-400/90 backdrop-blur-sm shadow-xl drop-shadow-lg px-4 py-2 rounded-br-md border-r border-b border-slate-400/60 transform rotate-1 hover:rotate-0 transition-transform duration-200">
          <span className="text-slate-950 text-xs font-medium tracking-wide uppercase">Heavily Redacted Version</span>
        </div>
      </div>
      <div className="mb-3 ml-8 mt-4">
        <h1 className="text-4xl font-bold text-slate-800 leading-tight">
          Our roadmap to <span className="text-sky-700">eliminate friction</span> and&nbsp;
        <span className="text-sky-700 font-semibold">become mission critical</span> for a business's lifetime
        </h1>
      </div>
      
      {/* Top flow with phase titles, icons and colors from Slide22 */}
      <div className="mx-8 mb-2">
        <div className="grid grid-cols-4 gap-4">
          {phases.map((phase) => (
            <div
              key={phase.title}
              className={`${phase.bgColor} ${phase.border} rounded-xl p-4 shadow-md`}
            >
              <div className="flex items-center justify-center mb-2">
                {phase.icon}
              </div>
              <h3 className="text-base font-bold text-slate-800 text-center">
                {phase.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Product modules grid */}
      <div className="flex-1 px-8">
        <div className="grid grid-cols-4 gap-4 h-full max-h-[280px]">
          {phases.map((phase, phaseIndex) => (
            <div key={phase.title} className="flex flex-col space-y-2 relative">
              {phase.modules.map((module, moduleIndex) => {
                const styling = getStatusStyling(module.status);
                return (
                  <div
                    key={`${phaseIndex}-${moduleIndex}`}
                    className="bg-white rounded-xl px-4 py-2 shadow-sm border border-slate-200 h-24 flex flex-col"
                  >
                    <h4 className={`text-sm font-bold mb-2 leading-tight ${
                      ['Commodo', 'Velit'].includes(module.name) 
                        ? 'text-slate-800 bg-slate-800' 
                        : 'text-slate-800'
                    }`}>
                      {module.name}
                    </h4>
                    <p className={`text-xs mb-2 flex-1 leading-relaxed ${
                      ['quis nostrud exercitation', 'nisi ut aliquip ex ea', 'consequat duis aute irure', 'reprehenderit in voluptate', 'esse cillum dolore eu fugiat'].includes(module.description) 
                        ? 'text-slate-600 bg-slate-600' 
                        : 'text-slate-600'
                    }`}>
                      {module.description}
                    </p>
                    <div className="mt-0">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${styling.bg} ${styling.text} ${styling.border}`}>
                        {styling.label}
                      </span>
                    </div>
                  </div>
                );
              })}
              
              {/* EO Fund positioned under Consideration phase (index 2) */}
              {phaseIndex === 2 && (
                <div className="mt-4">
                  <div className="bg-white rounded-xl px-4 py-2 shadow-sm border border-slate-200 h-24 flex flex-col">
                    <h4 className="text-sm font-bold text-slate-800 bg-slate-800 mb-2 leading-tight">
                      {bottomModule.name}
                    </h4>
                    <p className="text-xs text-slate-600 mb-3 flex-1 leading-relaxed">
                      {bottomModule.description}
                    </p>
                    <div className="mt-auto">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusStyling(bottomModule.status).bg} ${getStatusStyling(bottomModule.status).text} ${getStatusStyling(bottomModule.status).border}`}>
                        {getStatusStyling(bottomModule.status).label}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// set a gradient background for this slide
// (Slide28 as any).background = "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)";
(Slide28 as any).background = " #cbd5e1";

export default Slide28;