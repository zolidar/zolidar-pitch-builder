import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide04: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col relative">

      
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto px-16">
          <div className="mb-16">
            <p className="text-2xl tracking-wide font-light text-slate-600 leading-[1.2] mb-1">
              There's a better solution...
            </p>
            <h2 className="text-[3.9rem] leading-none font-bold tracking-tight">
              <span className="bg-gradient-to-r from-stone-950 to-slate-700 bg-clip-text text-transparent tracking-wide">Employee</span>
              <span className="tracking-wide bg-gradient-to-r from-teal-900 to-teal-700 bg-clip-text text-transparent">
                &nbsp;Ownership
              </span>
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 650 10"
              fill="none"
              className="mt-2 ml-2 mb-2 w-[600px] h-[10px]"
              style={{ display: 'block' }}
            >
            <path d="M604.759 12.1694C535.025 11.4984 465.33 10.5399 395.595 10.1976C294.199 9.70459 192.724 9.04732 91.6035 12.7035C71.1119 13.443 50.6203 14.1277 30.168 14.8945C14.1208 15.4833 4.13071 13.6073 0.708889 9.25278C-2.1623 5.5966 3.93389 2.36489 14.5534 3.06326C51.3281 5.45963 87.2378 1.9404 123.58 1.62545C191.741 1.02293 259.902 0.269738 328.103 0.0369475C377.896 -0.127375 427.768 0.283445 477.562 0.735333C518.742 1.11875 559.882 1.94033 601.062 2.58393C603.461 2.62501 606.018 2.65245 608.181 2.9811C616.677 4.28199 629.577 5.0214 626.549 9.18425C625.094 11.1698 613.53 12.279 606.529 13.7716C605.939 13.2376 605.388 12.7035 604.799 12.1694H604.759Z" fill="#F5631D"></path>
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-7 max-w-5xl mx-auto">
            {/* Point 1 */}
            <div className="p-6 border-l-4 bg-blue-200/60 border-blue-300 rounded-2xl flex flex-col items-center shadow-sm">
              <span className="mb-2 px-6 py-1 rounded-full border border-blue-300 text-slate-600 text-sm font-medium shadow-none">1</span>
              <p className="mt-3 text-2xl font-semibold text-slate-700 text-left">
                Owners exit <br /> at fair value
              </p>
            </div>
            
            {/* Point 2 */}
            <div className="p-6 border-l-4 border-blue-300 rounded-2xl bg-blue-200/60 flex flex-col items-center shadow-sm">
              <span className="mb-2 px-6 py-1 rounded-full border border-blue-300 text-slate-600 text-sm font-medium shadow-none">2</span>
              <p className="mt-3 text-2xl font-semibold text-slate-700 text-left">
                Employees benefit with no cash outlay
              </p>
            </div>
            
            {/* Point 3 */}
            <div className="p-6 border-l-4 border-blue-300 rounded-2xl bg-blue-200/60 flex flex-col items-center shadow-sm">
              <span className="mb-2 px-6 py-1 rounded-full border border-blue-300 text-slate-600 text-sm font-medium shadow-none">3</span>
              <p className="mt-3 text-2xl font-semibold text-slate-700 text-left">
                Outside buyer <br />not needed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// set a background for this slide blue-300
Slide04.background = "#93c5fd";
export default Slide04;
