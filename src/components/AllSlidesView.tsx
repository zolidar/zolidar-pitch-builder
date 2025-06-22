import React from 'react';
import SlideContainer from './SlideContainer';
import { slides } from '../slides';

const AllSlidesView: React.FC = () => {
  return (
    <div className="print-slides-container">
      {slides.map((slide, index) => (
        <div key={index} className="print-slide-page">
          <SlideContainer 
            slide={slide.component}
            slideNumber={index + 1}
            totalSlides={slides.length}
            label={slide.label}
          />
        </div>
      ))}
    </div>
  );
};

export default AllSlidesView; 