import React from 'react';
import { SlideProps } from '../types';
import SlideTitle from '../components/SlideTitle';
import { Download, Mic, FileText, Users, Building, Brain, Database, Search, Settings, Shield } from 'lucide-react';

const functionCategories = [
  {
    category: 'Content Ingestion',
    icon: <Download className="w-4 h-4 text-blue-600" />,
    color: 'bg-blue-50 border-blue-200',
    functions: []
  },
  {
    category: 'Media Processing',
    icon: <Mic className="w-4 h-4 text-emerald-600" />,
    color: 'bg-emerald-50 border-emerald-200',
    functions: []
  },
  {
    category: 'Entity Extraction',
    icon: <Users className="w-4 h-4 text-purple-600" />,
    color: 'bg-purple-50 border-purple-200',
    functions: []
  },
  {
    category: 'AI Enhancement',
    icon: <Brain className="w-4 h-4 text-amber-600" />,
    color: 'bg-amber-50 border-amber-200',
    functions: []
  },
  {
    category: 'Data Storage',
    icon: <Database className="w-4 h-4 text-indigo-600" />,
    color: 'bg-indigo-50 border-indigo-200',
    functions: []
  },
  {
    category: 'Search & Retrieval',
    icon: <Search className="w-4 h-4 text-rose-600" />,
    color: 'bg-rose-50 border-rose-200',
    functions: []
  },
  {
    category: 'Workflow Control',
    icon: <Settings className="w-4 h-4 text-teal-600" />,
    color: 'bg-teal-50 border-teal-200',
    functions: []
  },
  {
    category: 'Quality & Monitoring',
    icon: <Shield className="w-4 h-4 text-gray-600" />,
    color: 'bg-gray-50 border-gray-200',
    functions: []
  }
];

const serviceCapabilities = [
  { name: 'Authentication', description: 'API key validation' },
  { name: 'Streaming', description: 'Real-time responses' },
  { name: 'Error Handling', description: 'Structured error responses' },
  { name: 'Request Validation', description: 'Pydantic models' },
  { name: 'Async Processing', description: 'Non-blocking I/O' },
  { name: 'CORS Support', description: 'Cross-origin requests' }
];

const Slide59: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col relative px-6 py-4">
      {/* Redacted Version Label */}
      <div className="absolute -top-6 -left-6 z-20">
        <div className="bg-yellow-200 border-r border-b border-yellow-300 px-4 py-2 rounded-md shadow-xl">
          <span className="text-yellow-950 text-xs font-medium">REDACTED VERSION</span>
        </div>
      </div>
      <SlideTitle className="mb-6 text-left">
        <span className="text-slate-800 text-2xl font-extrabold">Technical differentiation — </span>
        <span className="text-indigo-700 font-extrabold text-2xl">unmatched processing depth</span>
      </SlideTitle>
      
      <div className="flex-1 space-y-6">
        
        {/* Function Categories Grid */}
        <div>
          <h2 className="text-lg font-bold text-slate-800 mb-2 text-center">
            Pipeline Function Categories
          </h2>
          
          <div className="grid grid-cols-4 gap-3">
            {functionCategories.map((category, index) => (
              <div key={index} className={`rounded-lg p-3 border ${category.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  {category.icon}
                  <h3 className="font-bold text-slate-800 text-sm">{category.category}</h3>
                </div>
                <div className="space-y-0.5">
                  {category.functions.map((func, idx) => (
                    <div key={idx} className="text-xs text-slate-700 font-mono bg-white px-1 py-0.5 rounded">
                      {func}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Layer Capabilities */}
        <div>
          <h2 className="text-lg font-bold text-slate-800 mb-2 text-center">
            AI Service Layer Capabilities
          </h2>
          
          <div className="grid grid-cols-6 gap-3">
            {serviceCapabilities.map((capability, index) => (
              <div key={index} className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-3 border border-slate-200 text-center">
                <h4 className="font-bold text-slate-800 text-sm mb-1">{capability.name}</h4>
                <p className="text-xs text-slate-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Impact Summary */}
        <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-lg p-4 border border-indigo-200">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Building className="w-5 h-5 text-indigo-600" />
                <h3 className="font-bold text-slate-800 text-sm">Modular Architecture</h3>
              </div>
              <p className="text-sm text-slate-700">Functions organized by domain with clear separation of concerns</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-slate-800 text-sm">Network Effects</h3>
              </div>
              <p className="text-sm text-slate-700">More content improves AI, attracting more experts and better content</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold text-slate-800 text-sm">Defensible Moat</h3>
              </div>
              <p className="text-sm text-slate-700">Proprietary content + community data = sustainable competitive advantage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Set a technical, comprehensive background
//(Slide59 as any).background = "linear-gradient(to bottom, #fefefe 0%, #f8fafc 100%)";
(Slide59 as any).background = "linear-gradient(to bottom, #f0f9ff 0%, #e0f2fe 100%)";

export default Slide59; 