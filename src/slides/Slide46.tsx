import React from 'react';
import { SlideProps, SlideComponentType } from '../types';
import { ArrowDown, ArrowUp, ArrowUpDown, DollarSign } from 'lucide-react';

const Slide46: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col px-6 py-4">
      {/* Header */}
      <div className="mb-3">
        <h1 className="text-3xl font-extrabold text-slate-800 mb-1">
          How the EO LBO is structured
        </h1>
      </div>

      {/* Main content in two columns */}
      <div className="flex-1 flex gap-6">
        
        {/* Left Column: Stakeholder Flow */}
        <div className="flex-1">
          
          {/* Section 1: Stakeholder Flow */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-slate-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <h2 className="text-base font-bold text-slate-700">Flow of capital and ownership benefits</h2>
            </div>
            
            {/* Top Row: Owners and Investors */}
            <div className="grid grid-cols-2 gap-4 mb-3">
              {/* Owners */}
              <div className="bg-blue-50 rounded-lg p-3 pt-2 pr-1 border border-slate-200">
                <h3 className="font-semibold text-slate-800 text-center text-lg mb-1">Owners</h3>
                <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs text-slate-600">
                  <p className="leading-relaxed">Divest 30% to 100% of their ownership</p>
                  <p className="leading-relaxed">Define their role & defer tax on capital gains</p>
                </div>
              </div>

              {/* Investors */}
              <div className="bg-blue-50 rounded-lg p-3 pt-2 pr-1 border border-slate-200">
                <h3 className="font-semibold text-slate-800 text-center text-lg mb-1">Investors</h3>
                <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs text-slate-600">
                  <p className="leading-relaxed">Provide capital to buyout owners</p>
                  <p className="leading-relaxed">Risk adjusted returns thru equity or debt</p>
                </div>
              </div>
            </div>

            {/* Arrows from Owners and Investors */}
            <div className="flex justify-center items-center mb-1">
              <div className="grid grid-cols-2 gap-4 w-full">
                {/* Owners ↔ Business */}
                <div className="flex justify-center items-center">
                  <div className="flex items-center gap-6">
                    {/* Ownership arrow down */}
                    <div className="flex flex-col items-center relative">
                      <span className="text-xs text-orange-600 font-medium absolute -left-20 top-2">Ownership</span>
                      <div className="h-6 border-l-2 border-orange-500 relative">
                        <ArrowDown className="w-3 h-3 text-orange-500 absolute -bottom-1 left-1/2 transform -translate-x-1/2" />
                      </div>
                    </div>
                    {/* Money arrow up */}
                    <div className="flex flex-col items-center relative">
                      <div className="h-6 border-l-2 border-green-600 relative">
                        <ArrowUp className="w-3 h-3 text-green-600 absolute -top-1 left-1/2 transform -translate-x-1/2" />
                      </div>
                      <span className="text-xs text-green-600 font-medium absolute -right-4 top-2">$</span>
                    </div>
                  </div>
                </div>
                
                {/* Investors ↔ Business */}
                <div className="flex justify-center items-center mb-3 mt-3">
                  <div className="flex items-center gap-6">
                    {/* Debt/Equity arrow down */}
                    <div className="flex flex-col items-center relative">
                      <span className="text-xs text-green-600 font-medium absolute -left-36 top-2">Debt, Equity, Warrants</span>
                      <div className="h-6 border-l-2 border-green-600 relative">
                        <ArrowDown className="w-3 h-3 text-green-600 absolute -bottom-1 transform -translate-x-1/2" />
                      </div>
                    </div>
                    {/* Returns arrow up */}
                    <div className="flex flex-col items-center relative">
                      <div className="h-6 border-l-2 border-red-600 relative">
                        <ArrowUp className="w-3 h-3 text-red-600 absolute -top-1  transform -translate-x-1/2" />
                      </div>
                      <span className="text-xs text-red-600 font-medium absolute -right-14 top-2">Returns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business (Full Width) */}
            <div className="bg-blue-50 rounded-lg p-4 pt-2 pr-1 mb-1 border border-slate-200">
              <h3 className="font-semibold text-slate-800 text-center text-lg mb-1">Business</h3>
              <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs text-slate-600">
                <div className="space-y-1">
                  <p className="leading-relaxed">Profitable for 3+ yrs pre-LBO. Has cash-flow for LBO. Future profits buyback shares or retire debt</p>
                </div>
                <div className="space-y-1">
                  <p className="leading-relaxed">30%+ company owned by 50%+ employee base. Acquisition cost & profit share tax deduction</p>
                </div>
              </div>
            </div>

            {/* Arrows between Business and Employees */}
            <div className="flex justify-center items-center mb-3 mt-3">
              <div className="flex items-center gap-6">
                {/* Ownership arrow down */}
                <div className="flex flex-col items-center relative">
                  <span className="text-xs text-orange-600 font-medium absolute -left-20 top-2">Ownership</span>
                  <div className="h-6 border-l-2 border-orange-500 relative">
                    <ArrowDown className="w-3 h-3 text-orange-500 absolute -bottom-1 left-1/2 transform -translate-x-1/2" />
                  </div>
                </div>
                {/* Performance arrow up */}
                <div className="flex flex-col items-center relative">
                  <div className="h-6 border-l-2 border-purple-600 relative">
                    <ArrowUp className="w-3 h-3 text-purple-600 absolute -top-1 left-1/2 transform -translate-x-1/2" />
                  </div>
                  <span className="text-xs text-purple-600 font-medium absolute -right-36 top-2">Performance & Tenure</span>
                </div>
              </div>
            </div>

            {/* Employees (Full Width) */}
            <div className="bg-blue-50 rounded-lg p-3 pt-2 pr-1 border border-slate-200">
              <h3 className="font-semibold text-slate-800 text-center text-lg mb-1">Employees</h3>
              <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs text-slate-600">
                <p className="leading-relaxed">Vest ownership through tenure & performance on top of existing cash compensation</p>
                <p className="leading-relaxed">Ownership gained in 5 yrs is worth ~1 yr of cash comp. Ownership value can compound over time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Financing Blend */}
        <div className="w-72">
          {/* Section 2: Financing Blend */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-slate-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <h2 className="text-base font-bold text-slate-700">Blend of capital on cap table</h2>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-3 border">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-700">Seller Note w/ Warrants</span>
                  <span className="text-slate-500 font-mono">x%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">Govt Agency Loan</span>
                  <span className="text-slate-500 font-mono">y%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">Commercial Loan</span>
                  <span className="text-slate-500 font-mono">z%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">CDFI Loan or Grant</span>
                  <span className="text-slate-500 font-mono">a%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">Crowdfunding</span>
                  <span className="text-slate-500 font-mono">b%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">Preferred Equity</span>
                  <span className="text-slate-500 font-mono">c%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">Large Customers</span>
                  <span className="text-slate-500 font-mono">d%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Set background to match other slides in the deck
Slide46.background = "linear-gradient(to bottom, #f8fafc, #e2e8f0)";

export default Slide46; 