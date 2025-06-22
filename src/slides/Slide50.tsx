import React from 'react';
import { SlideProps } from '../types';
import { CheckCircle } from 'lucide-react';

const Slide50: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Heavily Redacted Version Label */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-yellow-200 border-r border-b border-yellow-300 px-4 py-2 rounded-md shadow-xl">
          <span className="text-yellow-950 text-xs font-medium">HEAVILY REDACTED VERSION</span>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center px-6 py-4">
        <div className="w-full max-w-5xl mx-auto">
          
          {/* Main Headline */}
          <div className="text-left mb-6">
            <h1 className="text-3xl font-bold text-slate-800 bg-slate-800 leading-tight mb-0">
              Lorem ipsum dolor sit <span className="text-blue-600 bg-blue-600">amet consectetur adipiscing</span>
            </h1>
            <p className="text-2xl text-slate-600 bg-slate-600">
              elit sed do <span className="text-blue-600 bg-blue-600 font-semibold">eiusmod tempor incididunt</span> ut labore et dolore magna
            </p>
          </div>

          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-2 gap-5">
            
            {/* Top Left: Context */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-lg">1</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 bg-slate-800">Lorem Ipsum Dolor</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-slate-700 bg-slate-700">Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-slate-800 bg-slate-800">Aliqua Ut:</div>
                    <div className="text-xs text-slate-700 bg-slate-700 space-y-1">
                      <div>• Enim: XX hrs/year</div>
                      <div>• Ad Minim: XX hrs/X years</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-slate-800 bg-slate-800">Veniam Quis:</div>
                    <div className="text-xs text-slate-700 bg-slate-700 space-y-1">
                      <div>• Nostrud exercitation</div>
                      <div>• Ullamco laboris</div>
                      <div>• Nisi ut aliquip</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right: Our Solution */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-lg">2</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 bg-slate-800">Consectetur Adipiscing</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-slate-700 bg-slate-700"><span className="font-semibold">Elit sed do eiusmod tempor incididunt ut labore.</span> Et dolore magna aliqua ut enim ad minim veniam quis nostrud.</p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-slate-800 bg-slate-800">Exercitation Ullamco:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 bg-slate-700">
                    <div>• Laboris Nisi: Ut aliquip</div>
                    <div>• Ex Ea: Commodo consequat</div>
                    <div>• Duis Aute: Irure dolor</div>
                    <div>• In Reprehenderit: Voluptate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left: Economics */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-lg">3</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 bg-slate-800">Velit Esse Cillum</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-slate-800 bg-slate-800">Dolore Eu:</div>
                  <div className="text-xs text-slate-700 bg-slate-700 space-y-1">
                    <div>• Fugiat nulla pariatur</div>
                    <div>• Excepteur sint occaecat</div>
                    <div>• Cupidatat non proident</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-slate-800 bg-slate-800">Sunt In:</div>
                  <div className="text-xs text-slate-700 bg-slate-700 space-y-1">
                    <div>• Culpa qui officia</div>
                    <div>• Deserunt mollit anim</div>
                    <div>• Id est laborum</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right: Strategic Outcomes */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-lg">4</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 bg-slate-800">Sed Ut Perspiciatis</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-slate-800 bg-slate-800">Unde Omnis:</div>
                  <div className="text-xs text-slate-700 bg-slate-700 space-y-1">
                    <div>• Iste natus, error sit</div>
                    <div>• Voluptatem accusantium</div>
                    <div>• Doloremque laudantium</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-slate-800 bg-slate-800">Totam Rem:</div>
                  <div className="text-xs text-slate-700 bg-slate-700 space-y-1">
                    <div>• Aperiam eaque ipsa</div>
                    <div>• Quae ab illo inventore</div>
                    <div>• Veritatis et quasi</div>
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

// Set background color to match the deck's aesthetic
// (Slide50 as any).background = "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)";
(Slide50 as any).background = "#f0fdf4";

export default Slide50; 