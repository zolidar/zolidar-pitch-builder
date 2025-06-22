import React from 'react';
import { SlideProps } from '../types';

const Slide51: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Heavily Redacted Version Label */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-yellow-200 border-r border-b border-yellow-300 px-4 py-2 rounded-md shadow-xl">
          <span className="text-yellow-950 text-xs font-medium">HEAVILY REDACTED VERSION</span>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center px-6 py-3">
        <div className="w-full max-w-5xl mx-auto">
          
          {/* Main Headline - Left Aligned */}
          <div className="mb-4">
            <h1 className="text-[1.65rem] font-bold text-slate-800 leading-tight mb-0">
              Unlock <span className="text-blue-600">$5B+ in patient capital annually</span> for EO transitions
            </h1>
            <p className="text-xl text-slate-600 bg-slate-600">
              lorem ipsum dolor <span className="text-blue-600 bg-blue-600 font-semibold">sit amet consectetur</span> adipiscing elit sed do eiusmod
            </p>
          </div>

          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Top Left: EB-5 Program Context */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-lg">1</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 bg-slate-800">Lorem Ipsum Dolor</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-slate-700 bg-slate-700">Sit amet consectetur adipiscing elit $XXXk-$X.XM sed do eiusmod tempor XX+ incididunt ut labore et dolore magna.</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-slate-800 bg-slate-800">Aliqua Ut:</div>
                    <div className="text-xs text-slate-700 bg-slate-700 space-y-1">
                      <div>• ~XX,XXX enim ad minim</div>
                      <div>• $XB-$XXB veniam quis</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-slate-800 bg-slate-800">Nostrud Exercitation:</div>
                    <div className="text-xs text-slate-700 bg-slate-700 space-y-1">
                      <div>• Ullamco laboris nisi</div>
                      <div>• Ut aliquip ex ea</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right: Our Innovation */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-lg">2</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 bg-slate-800">Commodo Consequat</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-slate-700 bg-slate-700"><span className="font-semibold">Duis aute "irure dolor" in reprehenderit voluptate.</span> Velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-slate-800 bg-slate-800">Non Proident:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 bg-slate-700">
                    <div>• Sunt in culpa qui</div>
                    <div>• X-X year officia deserunt</div>
                    <div>• Mollit anim id est</div>
                    <div>• Laborum sed ut</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left: Capital Economics */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-lg">3</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 bg-slate-800">Perspiciatis Unde</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-slate-800 bg-slate-800">Omnis Iste:</div>
                  <div className="text-xs text-slate-700 bg-slate-700 space-y-1">
                    <div>• Natus error sit</div>
                    <div>• Voluptatem accusantium</div>
                    <div>• Doloremque laudantium</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-slate-800 bg-slate-800">Totam Rem:</div>
                  <div className="text-xs text-slate-700 bg-slate-700 space-y-1">
                    <div>• Aperiam eaque ipsa</div>
                    <div>• Quae ab illo</div>
                    <div>• Inventore veritatis</div>
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
                <h3 className="text-lg font-semibold text-slate-800 bg-slate-800">Et Quasi Architecto</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-slate-800 bg-slate-800">Beatae Vitae:</div>
                  <div className="text-xs text-slate-700 bg-slate-700 space-y-1">
                    <div>• Dicta sunt explicabo</div>
                    <div>• Nemo enim ipsam</div>
                    <div>• Voluptatem quia</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-slate-800 bg-slate-800">Voluptas Sit:</div>
                  <div className="text-xs text-slate-700 bg-slate-700 space-y-1">
                    <div>• $XXK aspernatur aut</div>
                    <div>• $XXXK odit aut fugit</div>
                    <div>• $XXXK sed quia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footnote */}
          <div className="mt-1">
            <p className="text-sm text-slate-800 bg-slate-800">
              <span className="font-semibold">Note:</span> Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt; neque porro quisquam est qui dolorem ipsum quia dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Set background color to match the deck's aesthetic
// (Slide51 as any).background = "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)";
(Slide51 as any).background = "#f0fdf4";
export default Slide51; 