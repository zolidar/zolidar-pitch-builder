import React from 'react';
import { SlideProps } from '../types';
import { Building2, Users, Briefcase, Network, MapPin, DollarSign } from 'lucide-react';

const Slide49: React.FC<SlideProps> = () => {
  const partnerTypes = [
    {
      icon: <Users className="w-4 h-4" />,
      type: "Lorem Ipsum",
      activeConversations: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      pipelineTargets: "Sed do eiusmod tempor incididunt ut labore et dolore",
      exampleAttribute: "Lorem ipsum: ~X.XK dolor sit amet",
    },
    {
      icon: <Building2 className="w-4 h-4" />,
      type: "Consectetur Adipiscing", 
      activeConversations: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      pipelineTargets: "Duis aute irure",
      exampleAttribute: "Ut enim: XX+ dolor sit amet ~XXX consectetur",
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      type: "Sed Do Eiusmod",
      activeConversations: "Tempor incididunt ut labore",
      pipelineTargets: "Et dolore magna aliqua, Ut enim ad minim, Veniam quis, Nostrud exercitation, Ullamco laboris nisi",
      exampleAttribute: "Tempor incididunt: ~X.XK ut labore et dolore",
    },
    {
      icon: <Network className="w-4 h-4" />,
      type: "Magna Aliqua",
      activeConversations: "Ut enim ad minim veniam",
      pipelineTargets: "Quis nostrud exercitation (ullamco laboris), Nisi ut aliquip, Ex ea commodo",
      exampleAttribute: "Ut enim: X.XK-X.XK consequat",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      type: "Duis Aute Irure",
      activeConversations: "Dolor in reprehenderit, Voluptate velit esse, Cillum dolore eu",
      pipelineTargets: "Fugiat nulla, Pariatur excepteur sint (occaecat cupidatat), Fugiat nulla, Pariatur excepteur",
      exampleAttribute: "Dolor in reprehenderit: XX+ non proident, ~XX.XK sunt",
    },
    {
      icon: <DollarSign className="w-4 h-4" />,
      type: "Culpa Qui Officia",
      activeConversations: "Deserunt mollit anim, Id est laborum sed",
      pipelineTargets: "Ut perspiciatis unde (omnis iste), Natus error, Sit voluptatem accusantium",
      exampleAttribute: "Deserunt mollit: $XXM+ doloremque laudantium",
    }
  ];

  return (
    <div className="h-full flex flex-col relative">
      {/* Redacted Version Label */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-yellow-200 border-r border-b border-yellow-300 px-4 py-2 rounded-md shadow-xl">
          <span className="text-yellow-950 text-xs font-medium">HEAVILY REDACTED VERSION</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-3 py-1">
        <div className="w-full max-w-5xl mx-auto">
          
          {/* Clean Headline */}
          <div className="text-left ml-2 mb-2">
            <h1 className="text-2xl font-bold text-slate-800 leading-tight">
              Active Conversations across our BD Pipeline with <span className="text-blue-600">Massive Reach</span>
            </h1>
          </div>

          {/* Partners Grid - Clean 2x3 Layout */}
          <div className="grid grid-cols-2 gap-2">
            {partnerTypes.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-2.5 border border-slate-200 shadow-sm">
                
                {/* Header */}
                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 bg-slate-600 rounded flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-xs">{index + 1}</span>
                  </div>
                  <div className="flex items-center text-slate-600 mr-1.5">
                    {partner.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 bg-slate-800">{partner.type}</h3>
                </div>

                {/* Content with inline labels - no bullets */}
                <div className="space-y-3 pl-1">
                  
                  {/* Active */}
                  <div className="text-sm leading-snug">
                    <span className="font-bold text-slate-800">Active: </span>
                    <span className="text-slate-700 bg-slate-700">{partner.activeConversations}</span>
                  </div>

                  {/* Pipeline */}
                  <div className="text-sm leading-snug">
                    <span className="font-bold text-slate-800">Pipeline: </span>
                    <span className="text-slate-600 bg-slate-600">{partner.pipelineTargets}</span>
                  </div>

                  {/* Scale */}
                  <div className="text-sm leading-snug">
                    <span className="font-bold text-slate-800">Example: </span>
                    <span className="text-slate-600 bg-slate-600 italic">{partner.exampleAttribute}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Set background color to match the deck's aesthetic
// (Slide49 as any).background = "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)";
(Slide49 as any).background = "#f0fdf4";

export default Slide49; 