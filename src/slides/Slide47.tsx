import React from 'react';
import { SlideProps, SlideComponentType } from '../types';

const Slide47: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col justify-center relative">
      
      {/* Title */}
      <div className="w-full flex flex-col items-center mb-8 mt-2">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2 text-center leading-tight">
          <span className="text-blue-800">$1.1 trillion</span> in latent financing capacity<br/>
          aligned with EO risk-return profiles
        </h1>
      </div>

      {/* Four clean, consistent cards */}
      <div className="flex justify-center gap-6 mb-8">
        
        {/* EO Sources */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-lg min-w-[160px]">
          <div className="text-center border-b border-slate-100 pb-3 mb-4">
            <div className="text-sm font-medium text-slate-600 mb-1">Typical EO Sources</div>
            <div className="text-3xl font-bold text-blue-800">$493B</div>
          </div>
          <div className="space-y-2.5">
            <div className="bg-slate-50 rounded-lg px-3 py-2.5 flex justify-between items-center">
              <span className="text-sm text-slate-700 flex-1 pr-3">Term loans**</span>
              <span className="text-sm font-bold text-slate-800 flex-shrink-0">$420B</span>
            </div>
            <div className="bg-slate-50 rounded-lg px-3 py-2.5 flex justify-between items-center">
              <span className="text-sm text-slate-700 flex-1 pr-3">CDFI, SBA, SBIC</span>
              <span className="text-sm font-bold text-slate-800 flex-shrink-0">$72B</span>
            </div>
            <div className="bg-slate-50 rounded-lg px-3 py-2.5 flex justify-between items-center">
              <span className="text-sm text-slate-700 flex-1 pr-3">EO funds*</span>
              <span className="text-sm font-bold text-slate-800 flex-shrink-0">$1B</span>
            </div>
          </div>
        </div>

        {/* M&A Sources */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-lg min-w-[160px]">
          <div className="text-center border-b border-slate-100 pb-3 mb-4">
            <div className="text-sm font-medium text-slate-600 mb-1">M&A Sources</div>
            <div className="text-3xl font-bold text-blue-800">$412B</div>
          </div>
          <div className="space-y-2.5">
            <div className="bg-slate-50 rounded-lg px-3 py-2.5 flex justify-between items-center">
              <span className="text-sm text-slate-700 flex-1 pr-3">Private Equity</span>
              <span className="text-sm font-bold text-slate-800 flex-shrink-0">$400B</span>
            </div>
            <div className="bg-slate-50 rounded-lg px-3 py-2.5 flex justify-between items-center">
              <span className="text-sm text-slate-700 flex-1 pr-3">Search Funds</span>
              <span className="text-sm font-bold text-slate-800 flex-shrink-0">$12B</span>
            </div>
            {/* Empty space for visual balance */}
            <div className="h-10"></div>
          </div>
        </div>

        {/* Emerging Sources */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-lg min-w-[160px]">
          <div className="text-center border-b border-slate-100 pb-3 mb-4">
            <div className="text-sm font-medium text-slate-600 mb-1">Emerging Sources</div>
            <div className="text-3xl font-bold text-blue-800">$180B</div>
          </div>
          <div className="space-y-2.5">
            <div className="bg-slate-50 rounded-lg px-3 py-2.5 flex justify-between items-center">
              <span className="text-sm text-slate-700 flex-1 pr-3">Family Offices**</span>
              <span className="text-sm font-bold text-slate-800 flex-shrink-0">$110B</span>
            </div>
            <div className="bg-slate-50 rounded-lg px-3 py-2.5 flex justify-between items-center">
              <span className="text-sm text-slate-700 flex-1 pr-3">Impact Funds</span>
              <span className="text-sm font-bold text-slate-800 flex-shrink-0">$53B</span>
            </div>
            <div className="bg-slate-50 rounded-lg px-3 py-2.5 flex justify-between items-center">
              <span className="text-sm text-slate-700 flex-1 pr-3">Crowdfunding</span>
              <span className="text-sm font-bold text-slate-800 flex-shrink-0">$17B</span>
            </div>
          </div>
        </div>

        {/* Zolidar Unlock - New distinctive styling */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border-2 border-emerald-400 shadow-lg min-w-[160px]">
          <div className="text-center border-b border-emerald-200 pb-3 mb-4">
            <div className="text-sm font-medium text-slate-700 mb-1">
              <a href="https://zolidar.com" target="_blank" className="text-slate-700 no-underline">Zolidar</a> Unlock
            </div>
            <div className="text-3xl font-bold text-emerald-800">$12B</div>
          </div>
          <div className="text-center">
            <div className="bg-emerald-100/80 rounded-lg px-3 py-3">
              <div className="text-sm font-semibold text-slate-800">Confidential</div>
              <div className="text-xs text-slate-700 mt-1">Low-cost capital source***</div>
            </div>
          </div>
        </div>

      </div>

      {/* Professional footer with sources */}
      <div className="w-full flex justify-center">
        <div className="text-xs text-slate-500 max-w-5xl text-center space-y-2">
          <div className="mb-1">
            <span className="font-medium">*</span>&nbsp; 
            <a href="https://drive.google.com/file/d/1B9RvoT_AYhX7mktwYeA23SDCBAVI_Svf/view" 
               target="_blank" rel="noopener noreferrer" 
               className="underline hover:text-blue-600">Ownership Capital Lab and Transform Finance</a>
            &nbsp;&nbsp;
            <span className="font-medium">**</span> <a href="https://zolidar.com" target="_blank" className="text-slate-500 no-underline">Zolidar</a> Analysis
            &nbsp;&nbsp;
            <span className="font-medium">***</span> <a href="https://zolidar.com" target="_blank" className="text-slate-500 no-underline">Zolidar</a> identified unique opportunity to unlock low-cost capital
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="font-medium">Sources:</span>
            <a href="https://www.cdfifund.gov/sites/cdfi/files/2021-10/ACR_Public_Report_Final_10062021_508Compliant_v2.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="underline hover:text-blue-600">Certified CDFI</a>
            <span>|</span>
            <a href="https://docsend.com/view/f7x2bi3ep53badh9" 
               target="_blank" rel="noopener noreferrer" 
               className="underline hover:text-blue-600">SBA Report</a>
            <span>|</span>
            <a href="https://sgp.fas.org/crs/misc/R41456.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="underline hover:text-blue-600">CRS for Congress</a>
            <span>|</span>
            <span>PitchBook</span>
          </div>
        </div>
      </div>

    </div>
  );
};

// Elegant gradient background matching the deck style
Slide47.background = "linear-gradient(to bottom, #f0f9ff 0%, #e0f2fe 100%)";
export default Slide47; 