import React from 'react';
import { SlideProps, SlideComponentType } from '../types';
import { Globe, ExternalLink, TrendingUp, Building2 } from 'lucide-react';

const Slide40: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col relative">
      <div className="flex-1 flex flex-col justify-center px-6 py-2">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header - Improved Typography and Spacing */}
          <div className="mb-3 mt-1 text-center">
            <div className="text-3xl font-extrabold text-slate-800 leading-tight mb-1">
              The succession crisis spans continents
            </div>
            <div className="text-xl text-slate-600">
            Our solution will scale globally
            </div>
          </div>

          {/* Five Market Cards - Enhanced Design */}
          <div className="space-y-3">
            
            {/* Top Row - 3 Cards with Better Spacing */}
            <div className="grid grid-cols-3 gap-3">
              
              {/* Canada Card */}
              <div className="rounded-xl px-6 py-2 border border-slate-400/30 bg-blue-50/50  shadow-sm relative">
                <div className="absolute top-2 right-2 text-base">🇨🇦</div>
                <div className="text-lg font-bold text-slate-800 mb-2 pr-6">Canada</div>
                <div className="space-y-2">
                  <div className="bg-blue-200/50 rounded-lg px-3 py-2 text-left">
                    <div className="text-3xl font-bold text-slate-800">550K</div>
                    <div className="text-sm text-slate-700 font-medium">owners retiring</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-slate-800">$2T business assets</div>
                    <div className="text-sm text-slate-600">Only 9% have plans</div>
                  </div>
                  <div className="pt-0">
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <a 
                        href="https://www.cfib-fcei.ca/en/media/over-2-trillion-in-business-assets-are-at-stake-as-majority-of-small-business-owners-plan-to-exit-their-business-over-the-next-decade"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 flex items-center hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-2 h-2 mr-1" />
                        CFIB Research
                      </a>
                      <a 
                        href="https://www.cbc.ca/news/business/baby-boomer-retirement-glut-poses-risk-cibc-says-1.1298898"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 flex items-center hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-2 h-2 mr-1" />
                        CBC News
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* EU Card */}
              <div className="rounded-xl px-6 py-2 border border-slate-400/30 bg-blue-50/50  shadow-sm relative">
                <div className="absolute top-2 right-2 text-base">🇪🇺</div>
                <div className="text-lg font-bold text-slate-800 mb-2 pr-6">European Union</div>
                <div className="space-y-2">
                  <div className="bg-blue-200/50 rounded-lg px-3 py-2 text-left">
                    <div className="text-3xl font-bold text-slate-800">400K</div>
                    <div className="text-sm text-slate-700 font-medium">businesses need acquirers</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-slate-800">€2-10M turnover</div>
                    <div className="text-sm text-slate-600">Succession crisis widespread</div>
                  </div>
                  <div className="pt-0">
                    <a 
                      href="https://www.linkedin.com/posts/andyfarquharson_the-silver-tsunami-is-coming-heres-activity-7327601649030414337-qVBs/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 flex items-center hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink className="w-2 h-2 mr-1" />
                      Industry Analysis
                    </a>
                  </div>
                </div>
              </div>

              {/* UK Card */}
              <div className="rounded-xl px-6 py-2 border border-slate-400/30 bg-blue-50/50  shadow-sm relative">
                <div className="absolute top-2 right-2 text-base">🇬🇧</div>
                <div className="text-lg font-bold text-slate-800 mb-2 pr-6">United Kingdom</div>
                <div className="space-y-2">
                  <div className="bg-blue-200/50 rounded-lg px-3 py-2 text-left">
                    <div className="text-3xl font-bold text-slate-800">360K</div>
                    <div className="text-sm text-slate-700 font-medium">companies at risk</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-slate-800">Only 2K sell annually</div>
                    <div className="text-sm text-slate-600">69% lack succession plan</div>
                  </div>
                  <div className="pt-0">
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <a 
                        href="https://biz4biz.org/economic-uncertainty-as-an-entire-generation-gets-set-to-quit/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 flex items-center hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-2 h-2 mr-1" />
                        BizCrunch
                      </a>
                      <a 
                        href="https://www.thincats.com/insights/business-owners-underprepared-succession"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 flex items-center hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-2 h-2 mr-1" />
                        Ownership at Work
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - 2 Cards Centered with Better Design */}
            <div className="grid grid-cols-3 gap-3">
              
              {/* Australia Card */}
              <div className="rounded-xl px-6 py-2 border border-slate-400/30 bg-blue-50/50  shadow-sm relative">
                <div className="absolute top-2 right-2 text-base">🇦🇺</div>
                <div className="text-lg font-bold text-slate-800 mb-2 pr-6">Australia</div>
                <div className="space-y-2">
                  <div className="bg-blue-200/50 rounded-lg px-3 py-2 text-left">
                    <div className="text-3xl font-bold text-slate-800">420K</div>
                    <div className="text-sm text-slate-700 font-medium">baby boomer-owned businesses</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-slate-800">$3.5T worth businesses</div>
                    <div className="text-sm text-slate-600">40% of all small businesses</div>
                  </div>
                  <div className="pt-0">
                    <a 
                      href="https://www.ascern.com.au/post/the-silver-tsunami-a-wave-of-baby-boomer-owned-business-sales"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 flex items-center"
                    >
                      <ExternalLink className="w-2 h-2 mr-1" />
                      KPMG via Ascern
                    </a>
                  </div>
                </div>
              </div>

              {/* Japan Card */}
              <div className="rounded-xl px-6 py-2 border border-slate-400/30 bg-blue-50/50  shadow-sm relative">
                <div className="absolute top-2 right-2 text-base">🇯🇵</div>
                <div className="text-lg font-bold text-slate-800 mb-2 pr-6">Japan</div>
                <div className="space-y-2">
                  <div className="bg-blue-200/50 rounded-lg px-3 py-2 text-left">
                    <div className="text-3xl font-bold text-slate-800">1.2M</div>
                    <div className="text-sm text-slate-700 font-medium">heirless businesses at risk</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-slate-800">98% of adoptions are of adult-men</div>
                    <div className="text-sm text-slate-600">solely for business succession</div>
                  </div>
                  <div className="pt-0">
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <a 
                        href="https://asia.nikkei.com/Economy/Japan-s-1.2-million-heirless-businesses-at-risk-of-closure2"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 flex items-center hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-2 h-2 mr-1" />
                        Nikkei Asia
                      </a>
                      <a 
                        href="https://www.the-independent.com/life-style/japanese-adoption-rates-majority-adult-men-a7524301.html"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 flex items-center hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-2 h-2 mr-1" />
                        The Independent
                      </a>
                    </div>
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

// Set background to match other global market slides
// Slide40.background = "#cbd5e1";
(Slide40 as any).background = " #e0f2fe";

export default Slide40;