import React from 'react';
import { SlideProps, SlideComponentType } from '../types';
import SlideLabel from './SlideLabel';

interface SlideContainerProps {
  slide: SlideComponentType;
  slideNumber: number;
  totalSlides: number;
  label?: string;
}

const SlideContainer: React.FC<SlideContainerProps> = ({ slide: SlideComponent, slideNumber, totalSlides, label }) => {
  // Support static background property on slide component
  const background = SlideComponent.background || '#fff';
  return (
    <div
      className="aspect-[16/9] w-full shadow-lg rounded-md overflow-hidden relative"
      style={{ background }}
      data-slide-container="true"
      data-slide-number={slideNumber}
    >
      {/* Label at top right of the white canvas */}
      {label && <SlideLabel label={label} />}
      <div className="absolute inset-0 p-6 flex flex-col">
        <div className="flex-1">
          <SlideComponent slideNumber={slideNumber} totalSlides={totalSlides} />
        </div>
        
        {slideNumber > 1 && (
          <div className="flex justify-end items-center pt-2 text-xs text-slate-400">
            <div className="pr-3">
              <a href="https://zolidar.com" target="_blank" className="text-slate-400 no-underline">
                zolidar.com
              </a>
            </div>
            <div>{slideNumber}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlideContainer;