import React from 'react';
import { SlideProps, SlideComponentType } from '../types';
import SlideTitle from '../components/SlideTitle';
import { Store, Key, Wallet, UserCog } from 'lucide-react';

const boxData = [
  {
    icon: Store,
    title: 'Business',
    text: 'Raises cash-flow & asset-based financing',
  },
  {
    icon: Key,
    title: 'Owners',
    text: 'Bought-out using raised cash',
  },
  {
    icon: Wallet,
    title: 'Financiers',
    text: 'Repaid using future cash-flows',
  },
  {
    icon: UserCog,
    title: 'Employees',
    text: 'Vest ownership with no cash out-of-pocket',
  },
];

const Slide45: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col relative">
      <SlideTitle className="mt-12 justify-center text-center">
      How an Exit thru Employee Ownership Works
      </SlideTitle>
      

      {/* Spacer for visual balance */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 mb-16 mt-4 gap-8 w-full max-w-[1400px]">
          {boxData.map((box, idx) => {
            const Icon = box.icon;
            return (
              <div
                key={box.title}
                className="bg-slate-50 rounded-2xl px-6 py-8 flex flex-col items-center min-h-[220px] max-w-[320px] mx-auto shadow relative"
              >
                {/* Number badge centered above icon */}
                <div className="flex flex-col items-center w-full mb-2">
                  <Icon className="w-10 h-10 text-slate-600/80 mt-4 mb-4" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-3 text-center leading-tight">
                  {box.title}
                </h3>
                <p className="text-base text-slate-800 text-center leading-snug">
                  {box.text}
                </p>
                {/* Spacer to push content to bottom if needed */}
                <div className="flex-1" />
              </div>
            );
          })}
        </div>
      </div>
      {/* Callout for tax benefits */}
      <div className=" flex justify-center">
        <div className="bg-slate-100 border-l-4 border-slate-400 px-6 py-2 rounded-md shadow-sm text-xl font-light text-slate-700 max-w-4xl whitespace-nowrap w-auto text-center mx-auto">
          Tax benefits for sellers, employee-owners, and EO business <span className="font-semibold">improves deal math</span>
        </div>
      </div>
    </div>
  );
};

//set a gradient background for this slide
//Slide45.background = "linear-gradient(to bottom, #fbfbfb, #ccecff)";
(Slide45 as any).background = "linear-gradient(to bottom, #f8fafc, #e2e8f0)";

export default Slide45;