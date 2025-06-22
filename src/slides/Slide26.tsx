import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide26: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col relative">
      
      <div className="flex-1 flex flex-col justify-center px-6 py-2">
        <div className="w-full max-w-5xl mx-auto">
          
          {/* Main Headline */}
          <div className="mb-2">
            <h1 className="text-[1.7rem] font-bold text-slate-800 leading-tight mt-2">
              <a href="https://zolidar.com" target="_blank" className="text-slate-800 no-underline">Zolidar's</a> mission aligns with <span className="text-blue-600">UN Sustainable Development Goals</span>
            </h1>
            <p className="text-[1.3rem] text-slate-600">
              Employee Ownership democratizes wealth creation and strengthens local economies
            </p>
          </div>

          {/* Goals Layout - Two Flex Columns */}
          <div className="flex gap-3">
            
            {/* Left Column: Goals 1 and 9 */}
            <div className="flex-1 flex flex-col gap-3">
              
              {/* Goal 1: No Poverty */}
              <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-200">
                <div className="flex items-center mb-1">
                  <div className="w-7 h-5 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-800">No Poverty</h3>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold">Target 1.4:</span> By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance
                  </div>
                </div>
              </div>

              {/* Goal 9: Industry, Innovation & Infrastructure */}
              <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-200">
                <div className="flex items-center mb-1">
                  <div className="w-7 h-5 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-sm">9</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-800">Industry, Innovation & Infrastructure</h3>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold">Target 9.2:</span> Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry's share of employment and gross domestic product, in line with national circumstances, and double its share in least developed countries
                  </div>
                  <div className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold">Target 9.3:</span> Increase the access of small-scale industrial and other enterprises, in particular in developing countries, to financial services, including affordable credit, and their integration into value chains and markets
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Goals 8 and 10 */}
            <div className="flex-1 flex flex-col gap-3">
              
              {/* Goal 8: Decent Work & Economic Growth */}
              <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-200">
                <div className="flex items-center mb-1">
                  <div className="w-7 h-5 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-sm">8</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-800">Decent Work & Economic Growth</h3>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold">Target 8.2:</span> Achieve higher levels of economic productivity through diversification, technological upgrading and innovation, including through a focus on high-value added and labour-intensive sectors
                  </div>
                  <div className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold">Target 8.3:</span> Promote development-oriented policies that support productive activities, decent job creation, entrepreneurship, creativity and innovation, and encourage the formalization and growth of micro-, small- and medium-sized enterprises, including through access to financial services
                  </div>
                  <div className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold">Target 8.10:</span> Strengthen the capacity of domestic financial institutions to encourage and expand access to banking, insurance and financial services for all
                  </div>
                </div>
              </div>

              {/* Goal 10: Reduced Inequalities */}
              <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-200">
                <div className="flex items-center mb-1">
                  <div className="w-7 h-5 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-sm">10</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-800">Reduced Inequalities</h3>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold">Target 10.1:</span> By 2030, progressively achieve and sustain income growth of the bottom 40 percent of the population at a rate higher than the national average
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
Slide26.background = "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 20%, #e2e8f0 50%, #f1f5f9 80%, #f8fafc 100%)";
export default Slide26; 