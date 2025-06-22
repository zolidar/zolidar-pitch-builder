import React from 'react';
import { SlideProps, SlideComponentType } from '../types';
import { ExternalLink } from 'lucide-react';

// OwnershipWorks Logo Component
const OwnershipWorksLogo = () => (
  <svg className="inline-block rounded-xl" width="100" height="130" viewBox="0 0 50 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.0238 30.6516C29.2249 30.6516 32.6306 27.2459 32.6306 23.0448C32.6306 18.8437 29.2249 15.438 25.0238 15.438C20.8227 15.438 17.417 18.8437 17.417 23.0448C17.417 27.2459 20.8227 30.6516 25.0238 30.6516Z" fill="#E10600"></path>
    <path d="M49.4149 0H0.585137C0.431498 0.0048811 0.285485 0.0680962 0.176791 0.176791C0.0680962 0.285485 0.0048811 0.431498 0 0.585137V62.678C0.0048811 62.8316 0.0680962 62.9776 0.176791 63.0863C0.285485 63.195 0.431498 63.2582 0.585137 63.2631H49.4149C49.5685 63.2582 49.7145 63.195 49.8232 63.0863C49.9319 62.9776 49.9951 62.8316 50 62.678V0.585137C49.9951 0.431498 49.9319 0.285485 49.8232 0.176791C49.7145 0.0680962 49.5685 0.0048811 49.4149 0ZM25.0341 11.4297C27.3487 11.4297 29.6113 12.116 31.5358 13.402C33.4603 14.6879 34.9603 16.5156 35.8461 18.654C36.7318 20.7924 36.9636 23.1454 36.512 25.4155C36.0605 27.6856 34.9459 29.7709 33.3092 31.4075C31.6726 33.0442 29.5873 34.1588 27.3172 34.6103C25.0471 35.0619 22.6941 34.8301 20.5557 33.9444C18.4173 33.0586 16.5896 31.5586 15.3037 29.6341C14.0177 27.7096 13.3314 25.447 13.3314 23.1324C13.3314 21.5948 13.6344 20.0722 14.2231 18.6517C14.8119 17.2313 15.6748 15.9407 16.7625 14.8539C17.8502 13.7671 19.1415 12.9052 20.5624 12.3177C21.9834 11.7302 23.5062 11.4284 25.0439 11.4297H25.0341ZM40.3647 42.9003L31.7827 51.4823C31.6818 51.5756 31.5495 51.6273 31.4121 51.6273C31.2748 51.6273 31.1424 51.5756 31.0415 51.4823L25.356 45.7773C25.2551 45.684 25.1227 45.6323 24.9854 45.6323C24.848 45.6323 24.7157 45.684 24.6148 45.7773L18.9194 51.4823C18.8185 51.5756 18.6862 51.6273 18.5489 51.6273C18.4115 51.6273 18.2792 51.5756 18.1783 51.4823L9.55725 42.9003C9.46403 42.7994 9.41227 42.6671 9.41227 42.5297C9.41227 42.3924 9.46403 42.2601 9.55725 42.1592L11.6637 40.0136C11.757 39.9207 11.8832 39.8686 12.0148 39.8686C12.1464 39.8686 12.2727 39.9207 12.3659 40.0136L18.0612 45.709C18.1545 45.8019 18.2807 45.8541 18.4123 45.8541C18.5439 45.8541 18.6702 45.8019 18.7634 45.709L24.5075 39.9941C24.6061 39.8965 24.7393 39.8417 24.8781 39.8417C25.0169 39.8417 25.1501 39.8965 25.2487 39.9941L31.0123 45.709C31.1055 45.8019 31.2318 45.8541 31.3634 45.8541C31.495 45.8541 31.6212 45.8019 31.7145 45.709L37.4098 40.0136C37.503 39.9207 37.6293 39.8686 37.7609 39.8686C37.8925 39.8686 38.0187 39.9207 38.112 40.0136L40.2575 42.1592C40.3246 42.1907 40.3829 42.2385 40.4271 42.2981C40.4713 42.3578 40.4999 42.4274 40.5106 42.5009C40.5212 42.5743 40.5134 42.6493 40.488 42.719C40.4625 42.7887 40.4202 42.851 40.3647 42.9003Z" fill="#E10600"></path>
  </svg>
);

const Slide39: SlideComponentType = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* Redacted Version Label */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-yellow-200 border-r border-b border-yellow-300 px-4 py-2 rounded-md shadow-xl">
          <span className="text-yellow-950 text-xs font-medium">REDACTED VERSION</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-6 py-3">
        <div className="w-full max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-4 mt-4 text-center">
            <div className="text-3xl font-extrabold text-slate-800 leading-tight">
              Even Private Equity firms want 
            exactly what we're building
            </div>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Left Column */}
            <div className="space-y-3">
              
              {/* Card 1: 250 PE firms on EO waitlist */}
              <div className="rounded-lg p-3 pb-1 border border-slate-400/30 relative bg-blue-50/50">
                {/* Card Number */}
                <div className="absolute top-2 left-2 bg-slate-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                  1
                </div>
                
                {/* Main Metric */}
                <div className="text-center mb-3">
                  <div className="text-xl font-bold text-slate-800">Demand Signal</div>
                </div>
                
                {/* Combined Context & Details */}
                <div className="rounded-md p-3 pt-3 border-t-2 border-slate-300 mb-0 flex justify-center">
                  
                  {/* Logo and Three Key Points Side by Side */}
                  <div className="flex items-start space-x-4">
                    {/* Logo */}
                    <div className="flex-shrink-0 pt-1 pr-1">
                      <OwnershipWorksLogo />
                    </div>
                    
                    {/* Three Key Points */}
                    <div className="flex-1 space-y-1">
                      <div className="text-xl font-bold text-slate-600  pb-1">Ownership Works</div>
                      <div className="text-base text-slate-500">Helps PE firms setup EO deals</div>
                      <div className="text-base text-slate-500">
                        250 PE firms on waitlist
                      </div>
                      <div className="text-base text-slate-500">
                        3 EO deals per firm per 18 months
                      </div>
                      <div className="text-sm text-slate-700"><a 
                        href="https://www.youtube.com/watch?v=hMgQ0-gsgOo&t=37s"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-700 flex items-center font-light"
                      >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      KKR's Pete Stavros, Founder of OW
                      </a></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: PE wants EO tools */}
              <div className="rounded-lg p-3 pb-0 border border-slate-400/30 relative bg-blue-50/50">
                {/* Card Number */}
                <div className="absolute top-2 left-2 bg-slate-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                  2
                </div>
                
                {/* Main Header */}
                <div className="text-center mb-3">
                  <div className="text-xl font-bold text-slate-800">Use Cases for EO tools</div>
                </div>
                
                {/* Tools List */}
                <div className="rounded-md p-3 border-t-2 border-slate-300">
                  <div className="space-y-2">
                  <div className="rounded-md p-0 border-b-2 border-slate-200 text-center">
                      <div className="text-base text-slate-700 bg-slate-700">Lorem ipsum dolor</div>
                    </div>

                    <div className="rounded-md p-0 border-b-2 border-slate-200 text-center">
                      <div className="text-base text-slate-700 bg-slate-700">Sit amet consectetur</div>
                    </div>
                    
                    <div className="rounded-md p-0 text-center">
                      <div className="text-base text-slate-700 bg-slate-700">Adipiscing elit sed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              
              {/* Card 3: Opportunity size */}
              <div className="rounded-lg p-3 border border-slate-400/30 relative bg-blue-50/50">
                {/* Card Number */}
                <div className="absolute top-2 left-2 bg-slate-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                  3
                </div>
                
                {/* Main Header */}
                <div className="text-center mb-3">
                  <div className="text-xl font-bold text-slate-800">Opportunity size</div>
                </div>
                
                {/* Opportunity Metric */}
                <div className="rounded-md p-1 border-t-2 border-slate-300">
                  <div className="rounded-lg p-3 border border-slate-200 text-center">
                    <div className="text-3xl font-bold text-slate-800">XX,XXX</div>
                    <div className="text-base text-slate-600 mt-2">PE-backed businesses in US</div>
                  </div>
                </div>
              </div>

              {/* Card 4: Sales led motion can work */}
              <div className="rounded-lg px-3 pt-3 pb-0 border border-slate-400/30  relative bg-blue-50/50">
                {/* Card Number */}
                <div className="absolute top-2 left-2 bg-slate-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                  4
                </div>
                
                {/* Main Header */}
                <div className="text-center mb-3">
                  <div className="text-xl font-bold text-slate-800">Sales led motion can work</div>
                </div>
                
                {/* Sales Motion Details */}
                <div className="rounded-md p-3 border-t-2 border-slate-300">
                  <div className="space-y-3">
                    <div className="rounded-lg p-3 border border-slate-200 text-center">
                      <div className="text-2xl font-bold text-slate-800 bg-slate-800">$X.XM</div>
                      <div className="text-sm text-slate-600 bg-slate-600 mt-1">Lorem ipsum dolor sit</div>
                    </div>
                    
                    <div className="rounded-lg p-3 pt-1 border border-slate-200">
                      <div className="text-center">
                        <div className="text-md font-normal text-slate-700 bg-slate-700 mb-1">Consectetur adipiscing elit tempor</div>
                        <div className="text-xs text-slate-600 bg-slate-600 leading-relaxed">
                          (XX lorem × XXX ipsum × $XXX dolor) + $XXK sit amet
                        </div>
                      </div>
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

// Set background to match market/business model slides
// Slide33.background = "#dbeafe";
(Slide39 as any).background = " #e0f2fe";

export default Slide39;