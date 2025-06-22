import React from 'react';

interface CompanyLogoProps {
  logo: string; // path to logo image
  name: string;
  owners?: string;
  className?: string;
  bgColor?: string;
  isEvenRow?: boolean;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ logo, name, owners, className, bgColor = 'bg-slate-50', isEvenRow = false }) => {
  // Use className for sizing, default to w-16 h-16 if not provided
  const sizeClass = className || 'w-16 h-16';
  
  // Apply darker shade for even rows to create alternating pattern
  const rowBgColor = isEvenRow ? bgColor.replace('-50', '-100') : bgColor;
  
  return (
    <div className={`${rowBgColor} rounded-2xl relative flex flex-col items-center justify-center p-3 h-28`}>
      {/* Logo vertically centered */}
      <div className="flex-1 flex items-center justify-center w-full">
        <img src={logo} alt={name} className={`object-contain mx-auto ${sizeClass}`} />
      </div>
      {/* Subtext absolutely anchored at the bottom */}
      {owners && (
        <div className="absolute bottom-2 left-0 w-full flex items-end justify-center pointer-events-none">
          <div className="text-xs text-slate-700 font-medium leading-tight text-center w-full">
            {owners}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyLogo; 