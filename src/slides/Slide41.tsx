import React from 'react';
import { SlideProps } from '../types';

const Slide41: React.FC<SlideProps> = () => {
  const entityTypes = [
    {
      name: 'Employee Stock Ownership Plans',
      description: 'Retirement plans that own all or part of a company on behalf of its employees',
      category: 'entity'
    },
    {
      name: 'Employee Ownership Trusts',
      description: 'Customizable form of EO with democratic principles and profit sharing',
      category: 'entity'
    },
    {
      name: 'Worker Cooperatives',
      description: 'Wholly owned by employee-owners who share profits and elect board',
      category: 'entity'
    }
  ];

  const frameworks = [
    {
      name: 'Broad Based Profit Sharing',
      description: 'Incentive plans providing payments beyond regular salary & bonuses',
      category: 'framework'
    },
    {
      name: 'Open Book Management',
      description: 'Financial transparency linking individual tasks to company finances',
      category: 'framework'
    },
    {
      name: 'Steward Ownership',
      description: 'Self-governance principles where profits serve purpose',
      category: 'framework'
    }
  ];

  return (
    <div className="h-full flex flex-col relative px-8 py-4">
      {/* Market Validation headline pattern */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-slate-800 leading-tight">
          The comprehensive EO landscape
        </h1>
        <h2 className="text-xl font-light text-slate-700 mt-2">
          All entity types & frameworks that define employee ownership
        </h2>
      </div>

      {/* Clean two-row layout */}
      <div className="flex-1 flex flex-col space-y-6">
        
        {/* Entity Types Section */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 text-center mb-4 border-b-2 border-blue-200 pb-2">
            Entity Types
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {entityTypes.map((entity, index) => (
              <div 
                key={index}
                className="bg-slate-50 border border-blue-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-base font-semibold text-slate-800 mb-2 leading-tight">
                  {entity.name}
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {entity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks Section */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 text-center mb-4 border-b-2 border-slate-200 pb-2">
            Supporting Frameworks
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {frameworks.map((framework, index) => (
              <div 
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-base font-semibold text-slate-800 mb-2 leading-tight">
                  {framework.name}
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {framework.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

// Set background consistent with credibility/knowledge slides
(Slide41 as any).background = "linear-gradient(to bottom, #f8fafc, #e2e8f0)";

export default Slide41; 