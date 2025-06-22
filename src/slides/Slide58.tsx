import React from 'react';
import { SlideProps } from '../types';
import SlideTitle from '../components/SlideTitle';
import { FileText, Mic, Globe, Users, Database, Zap, RefreshCw, Shield } from 'lucide-react';

const contentFlows = [
  {
    title: 'Audio & Video Processing',
    description: 'Speech transcription, speaker identification, timestamps',
    icon: <Mic className="w-5 h-5 text-blue-600" />,
    color: 'bg-blue-50 border-blue-200'
  },
  {
    title: 'Document Processing',
    description: 'PDF extraction, table parsing, metadata enrichment',
    icon: <FileText className="w-5 h-5 text-blue-600" />,
    color: 'bg-blue-50 border-blue-200'
  },
  {
    title: 'Web Content Processing',
    description: 'RSS monitoring, content scraping, duplicate detection',
    icon: <Globe className="w-5 h-5 text-blue-600" />,
    color: 'bg-blue-50 border-blue-200'
  },
  {
    title: 'Expert Network Processing',
    description: 'Profile mapping, relationship analysis, expertise tagging',
    icon: <Users className="w-5 h-5 text-blue-600" />,
    color: 'bg-blue-50 border-blue-200'
  }
];

const systemCapabilities = [
  {
    title: 'Batch Operations',
    description: 'Large files, bulk updates',
    icon: <Database className="w-4 h-4 text-slate-600" />
  },
  {
    title: 'Real-time Processing',
    description: 'Content ingestion and indexing',
    icon: <Zap className="w-4 h-4 text-slate-600" />
  },
  {
    title: 'Error Recovery',
    description: 'Automatic retry & fallback',
    icon: <RefreshCw className="w-4 h-4 text-slate-600" />
  },
  {
    title: 'Quality Control',
    description: 'Content validation & scoring',
    icon: <Shield className="w-4 h-4 text-slate-600" />
  }
];

const Slide58: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col relative px-3 py-2">
      <SlideTitle className="mb-0 text-left">
        <span className="text-slate-800 text-3xl font-extrabold">Technical flows — </span>
        <span className="text-indigo-700 font-extrabold text-3xl">processing diverse content types</span>
      </SlideTitle>
      
      <div className="flex-1 space-y-4">
        
        {/* Content Processing Flows */}
        <div className="px-4 py-2">
          <h2 className="text-lg font-bold text-slate-800 mb-2 text-center border-b border-slate-100 pb-1 flex items-center justify-start">
            <span className="text-white font-bold text-xs w-5 h-5 bg-slate-600 rounded inline-flex items-center justify-center mr-2">1</span>
            We process any content type automatically
          </h2>
          
          <div className="grid grid-cols-4 gap-3">
            {contentFlows.map((flow, index) => (
              <div key={index} className="text-left p-2 bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg shadow-sm">
                <h3 className="font-semibold text-slate-800 text-sm mb-2">{flow.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{flow.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Assembly */}
        <div className="px-4 py-2">
                     <h2 className="text-lg font-bold text-slate-800 mb-2 text-center border-b border-slate-100 pb-1 flex items-center justify-start">
             <span className="text-white font-bold text-xs w-5 h-5 bg-slate-600 rounded inline-flex items-center justify-center mr-2">2</span>
             Everything becomes a searchable graph of humans and knowledge
           </h2>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-left bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg shadow-sm p-2">
              <h4 className="font-semibold text-slate-800 text-sm mb-2">Entity Recognition</h4>
              <p className="text-sm text-slate-600 leading-relaxed">People, orgs, terminology, answers</p>
            </div>
            <div className="text-left bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg shadow-sm p-2">
              <h4 className="font-semibold text-slate-800 text-sm mb-2">Relationship Mapping</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Cross-references, citations</p>
            </div>
            <div className="text-left bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg shadow-sm p-2">
              <h4 className="font-semibold text-slate-800 text-sm mb-2">Semantic Analysis</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Vector embeddings, concept clustering</p>
            </div>
          </div>
        </div>

        {/* System Capabilities */}
        <div className="px-4 py-2">
          <h2 className="text-lg font-bold text-slate-800 mb-2 text-center border-b border-slate-100 pb-1 flex items-center justify-start">
            <span className="text-white font-bold text-xs w-5 h-5 bg-slate-600 rounded inline-flex items-center justify-center mr-2">3</span>
            Built for reliability at enterprise scale
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {systemCapabilities.map((capability, index) => (
              <div key={index} className="text-left bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg shadow-sm p-2">
                <h4 className="font-semibold text-slate-800 text-sm mb-2">{capability.title}</h4>
                <p className="text-sm text-slate-700 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Set a clean, workflow-focused background
(Slide58 as any).background = "linear-gradient(to bottom, #f0f9ff 0%, #e0f2fe 100%)";

// (Slide58 as any).background = "linear-gradient(to bottom, #fefefe 0%, #f8fafc 100%)";

export default Slide58; 