import React from 'react';
import { SlideProps } from '../types';
import SlideTitle from '../components/SlideTitle';

const Slide60: React.FC<SlideProps> = () => {
  return (
    <div className="h-full relative max-w-4xl ml-10 mr-10">
      {/* Redacted Version Label */}
      <div className="absolute -top-8 -left-16 z-20">
        <div className="bg-yellow-200 border-r border-b border-yellow-300 px-4 py-2 rounded-md shadow-xl">
          <span className="text-yellow-950 text-xs font-medium">HEAVILY REDACTED VERSION</span>
        </div>
      </div>
      <div className="text-[2.5rem] leading-[1.1] text-slate-800 font-extrabold mt-2 mb-12 text-left">          
        Timeline
      </div>
      <div className="mt-0">
        <div className="relative mx-auto" style={{ maxWidth: '900px', minHeight: 320 }}>
          {/* Horizontal timeline line - positioned within safe margins */}
          <div className="absolute h-1 bg-blue-400 z-0" style={{ 
            left: '60px', 
            right: '60px', 
            top: '50%', 
            transform: 'translateY(-50%)' 
          }}></div>
          
          {/* Timeline milestones - circles equidistant within timeline bounds */}
          <div className="relative w-full h-full" style={{ minHeight: 320 }}>
            
            {/* 2023 - above, circle at position 60px from left, card width: 205px */}
            <div className="absolute" style={{ left: '0px', width: '205px', height: '100%' }}>
              <div className="flex flex-col h-full">
                <div className="flex-1 flex items-end justify-center pb-10">
                  <div className="timeline-card timeline-card-minheight w-full">
                    <div className="text-slate-500 font-bold text-lg mb-1">2023</div>
                    <div className="text-xs text-left text-slate-600 bg-slate-600">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</div>
                  </div>
                </div>
                {/* Circle positioned exactly on timeline */}
                <div className="absolute w-5 h-5 bg-slate-400 rounded-full border-4 border-blue-100 z-10" style={{ 
                  left: '60px', 
                  top: '50%', 
                  transform: 'translate(-50%, -50%)' 
                }}></div>
                <div className="flex-1"></div>
              </div>
            </div>

            {/* 2024 - below, circle at position 228px from left, card width: 150px */}
            <div className="absolute" style={{ left: '142px', width: '150px', height: '100%' }}>
              <div className="flex flex-col h-full">
                <div className="flex-1"></div>
                {/* Circle positioned exactly on timeline */}
                <div className="absolute w-5 h-5 bg-slate-400 rounded-full border-4 border-blue-100 z-10" style={{ 
                  left: '75px', 
                  top: '50%', 
                  transform: 'translate(-50%, -50%)' 
                }}></div>
                <div className="flex-1 flex items-start justify-center pt-10">
                  <div className="timeline-card timeline-card-minheight w-full">
                    <div className="text-slate-500 font-bold text-lg mb-1">2024</div>
                    <div className="text-xs text-slate-600 text-left bg-slate-600">Incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2025 Q1 - above, circle at position 396px from left, card width: 160px */}
            <div className="absolute" style={{ left: '284px', width: '190px', height: '100%' }}>
              <div className="flex flex-col h-full">
                <div className="flex-1 flex items-end justify-center pb-12">
                  <div className="timeline-card timeline-card-minheight w-full">
                    <div className="text-slate-500 font-bold text-lg mb-1">2025 Q1</div>
                    <div className="text-xs text-slate-600 text-left bg-slate-600">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</div>
                  </div>
                </div>
                {/* Circle positioned exactly on timeline */}
                <div className="absolute w-5 h-5 bg-slate-400 rounded-full border-4 border-blue-100 z-10" style={{ 
                  left: '80px', 
                  top: '50%', 
                  transform: 'translate(-50%, -50%)' 
                }}></div>
                <div className="flex-1"></div>
              </div>
            </div>

            {/* 2025 Q2 - below, circle at position 564px from left, card width: 180px */}
            <div className="absolute" style={{ left: '426px', width: '180px', height: '100%' }}>
              <div className="flex flex-col h-full">
                <div className="flex-1"></div>
                {/* Circle positioned exactly on timeline */}
                <div className="absolute w-5 h-5 bg-blue-500 rounded-full border-4 border-blue-100 z-10" style={{ 
                  left: '90px', 
                  top: '50%', 
                  transform: 'translate(-50%, -50%)' 
                }}></div>
                <div className="flex-1 flex items-start justify-center pt-10">
                  <div className="timeline-card timeline-card-minheight w-full">
                    <div className="text-blue-600 font-bold text-lg mb-1">2025 Q2</div>
                    <div className="text-xs text-slate-600 text-left bg-slate-600">Consequat duis aute irure dolor in reprehenderit voluptate velit esse</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2025 H2 - above, circle at position 732px from left, card width: 220px */}
            <div className="absolute" style={{ left: '568px', width: '180px', height: '100%' }}>
              <div className="flex flex-col h-full">
                <div className="flex-1 flex items-end justify-center pb-10">
                  <div className="timeline-card timeline-card-minheight w-full">
                    <div className="text-green-700 font-bold text-lg mb-1">2025 H2</div>
                    <div className="text-xs text-slate-600 text-left bg-slate-600">Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat</div>
                  </div>
                </div>
                {/* Circle positioned exactly on timeline */}
                <div className="absolute w-5 h-5 bg-green-600 rounded-full border-4 border-blue-100 z-10" style={{ 
                  left: '110px', 
                  top: '50%', 
                  transform: 'translate(-50%, -50%)' 
                }}></div>
                <div className="flex-1"></div>
              </div>
            </div>

            {/* 2026 - below, circle at position 840px from left (60px from right), card width: 190px */}
            <div className="absolute" style={{ left: '710px', width: '190px', height: '100%' }}>
              <div className="flex flex-col h-full">
                <div className="flex-1"></div>
                {/* Circle positioned exactly on timeline */}
                <div className="absolute w-5 h-5 bg-green-600 rounded-full border-4 border-blue-100 z-10" style={{ 
                  left: '130px', 
                  top: '50%', 
                  transform: 'translate(-50%, -50%)' 
                }}></div>
                <div className="flex-1 flex items-start justify-center pt-10">
                  <div className="timeline-card timeline-card-minheight w-full">
                    <div className="text-green-700 font-bold text-lg mb-1">2026</div>
                    <div className="text-xs text-slate-600 text-left bg-slate-600">Non proident sunt in culpa qui officia deserunt mollit anim</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// TypeScript-compatible way to add background property
(Slide60 as any).background = "linear-gradient(to top, #93c5fd, #dbeafe)";
export default Slide60;