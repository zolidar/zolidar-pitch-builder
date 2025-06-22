import React from 'react';

interface StatProps {
  value: string;
  label?: string;
  className?: string;
}

const Stat: React.FC<StatProps> = ({ value, label, className = '' }) => {
  return (
    <div className={`${className}`}>
      <div className="text-4xl font-bold text-teal-600">{value}</div>
      {label && <div className="text-lg text-slate-600">{label}</div>}
    </div>
  );
};

export default Stat;