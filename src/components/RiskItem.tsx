import React from 'react';

interface RiskItemProps {
  title: string;
  children?: React.ReactNode;
}

const RiskItem: React.FC<RiskItemProps> = ({ title, children }) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold text-slate-700">{title}</h3>
      {children && <p className="text-slate-600">{children}</p>}
    </div>
  );
};

export default RiskItem;