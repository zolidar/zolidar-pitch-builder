import React from 'react';
import { SlideProps } from '../types';
import { DoorOpen, Search, Puzzle, Settings } from 'lucide-react';
import SlideTitle from '../components/SlideTitle';

const funnelStages = [
  {
    title: 'Starting Point',
    description: 'EO is not in the room where it happens',
    icon: <DoorOpen className="w-8 h-8 text-amber-500/50 mb-3" />,
    border: 'border-t-4 border-amber-400',
    bg: 'bg-gradient-to-br from-amber-50 to-amber-100/20',
  },
  {
    title: 'Passive Looking',
    description: 'No way for owners to fully understand EO',
    icon: <Search className="w-8 h-8 text-sky-500/50 mb-3" />,
    border: 'border-t-4 border-sky-400',
    bg: 'bg-gradient-to-br from-sky-50 to-sky-100/50',
  },
  {
    title: 'Consideration',
    description: 'Hard to prepare, plan, and transition to EO',
    icon: <Puzzle className="w-8 h-8 text-emerald-500/50 mb-3" />,
    border: 'border-t-4 border-emerald-400',
    bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100/20',
  },
  {
    title: 'Functional',
    description: 'Expensive to operate as EO',
    icon: <Settings className="w-8 h-8 text-rose-500/40 mb-3" />,
    border: 'border-t-4 border-rose-400',
    bg: 'bg-gradient-to-br from-rose-50 to-rose-100/50',
  },
];

const Slide27: React.FC<SlideProps> = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6">
      <div className="w-full flex flex-col items-center mb-4 mt-4">
        <SlideTitle className="mb-2 text-center text-5xl">
          High friction is limiting the adoption of EO
        </SlideTitle>
      </div>
      <div className="w-full max-w-6xl flex flex-row gap-8 justify-center items-stretch">
        {funnelStages.map((stage) => (
          <div
            key={stage.title}
            className={`flex-1 flex flex-col items-center justify-start rounded-2xl px-6 py-8 shadow-xl ${stage.bg} ${stage.border} transition-transform duration-200 hover:scale-[1.03]`}
            style={{ minWidth: 0 }}
          >
            {stage.icon}
            <div className="text-xl font-bold text-slate-800 mb-2 text-center leading-tight">
              {stage.title}
            </div>
            <div className="text-base font-normal text-slate-600 text-center leading-snug">
              {stage.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//set a gradient background for this slide
(Slide27 as any).background = " #cbd5e1";
export default Slide27;