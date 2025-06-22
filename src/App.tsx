import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, X, Loader2, Mail, Github } from 'lucide-react';
import SlideContainer from './components/SlideContainer';
import AllSlidesView from './components/AllSlidesView';
import { slides } from './slides';
import { Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom';
import { pdfGenerator } from './utils/pdfGenerator';
import LI from './assets/logos/LI.png';

function SlidePage() {
  const navigate = useNavigate();
  const { slideNumber } = useParams();
  const slideIdx = Math.max(0, Math.min(slides.length - 1, (slideNumber ? parseInt(slideNumber, 10) - 1 : 0)));
  
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [pdfProgress, setPdfProgress] = useState(0);
  const [currentProcessingSlide, setCurrentProcessingSlide] = useState(0);
  const [isPDFCancelled, setIsPDFCancelled] = useState(false);

  const goToNextSlide = () => {
    if (slideIdx < slides.length - 1) {
      navigate(`/${slideIdx + 2}`);
    }
  };

  const goToPrevSlide = () => {
    if (slideIdx > 0) {
      navigate(`/${slideIdx}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isGeneratingPDF) return; // Disable keyboard navigation during PDF generation
    
    if (e.key === 'ArrowRight') {
      goToNextSlide();
    } else if (e.key === 'ArrowLeft') {
      goToPrevSlide();
    }
  };

  const cancelPDFGeneration = () => {
    setIsPDFCancelled(true);
    setIsGeneratingPDF(false);
    setPdfProgress(0);
    setCurrentProcessingSlide(0);
  };

  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    setIsPDFCancelled(false);
    setPdfProgress(0);
    setCurrentProcessingSlide(1);

    try {
      await pdfGenerator.generatePDF({
        slides,
        navigate,
        onProgress: (slideNumber: number, progress: number) => {
          setCurrentProcessingSlide(slideNumber);
          setPdfProgress(progress);
        },
        onCancel: () => isPDFCancelled // Check if cancelled
      });
      
    } catch (error) {
      console.error('❌ PDF Generation Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      alert(`Error generating PDF: ${errorMessage}\n\nPlease check the browser console for more details and try again.`);
    } finally {
      // Force a page refresh to ensure clean state
      setTimeout(() => {
        if (window.location.pathname !== '/1') {
          navigate('/1', { replace: true });
        }
      }, 1000);
      
      setIsGeneratingPDF(false);
      setIsPDFCancelled(false);
      setPdfProgress(0);
      setCurrentProcessingSlide(0);
    }
  };

  React.useEffect(() => {
    // Focus for keyboard navigation
    if (!isGeneratingPDF) {
      document.getElementById('slide-root')?.focus();
    }
  }, [slideIdx, isGeneratingPDF]);

  const current = slides[slideIdx];

  return (
    <div 
      id="slide-root"
      className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4 relative"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* PDF Generation Overlay */}
      {isGeneratingPDF && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Generating PDF...</h3>
              </div>
              
              <p className="text-gray-600 text-center">
                {currentProcessingSlide === 0 
                  ? `Assembling PDF... ${pdfProgress}% complete`
                  : `Processing slide ${currentProcessingSlide} of ${slides.length}`
                }
              </p>
              
              <div className="w-full">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{pdfProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${pdfProgress}%` }}
                  />
                </div>
              </div>

              <p className="text-sm text-gray-500 text-center">
                Please wait while we capture each slide...
                <br />
                <span className="text-blue-600">For PDFs with perfect links, use: npm run generate-pdf</span>
              </p>

              <button
                onClick={cancelPDFGeneration}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-5xl">
        <SlideContainer 
          slide={current.component}
          slideNumber={slideIdx + 1}
          totalSlides={slides.length}
          label={current.label}
        />
        
        <div className="flex justify-between items-center mt-4">
          <button 
            onClick={goToPrevSlide}
            disabled={slideIdx === 0 || isGeneratingPDF}
            className={`p-2 rounded-full bg-white shadow hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-white transition-colors ${isGeneratingPDF ? 'cursor-not-allowed' : ''}`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>
          <div className="flex items-center gap-4">
            <div className="text-slate-600 font-medium">
              {slideIdx + 1} / {slides.length}
            </div>
            <button
              onClick={generatePDF}
              disabled={isGeneratingPDF}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                isGeneratingPDF 
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              title="Generate quick PDF (for perfect links use: npm run generate-pdf)"
            >
              {isGeneratingPDF ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  PDF
                </>
              )}
            </button>
          </div>
          <button 
            onClick={goToNextSlide}
            disabled={slideIdx === slides.length - 1 || isGeneratingPDF}
            className={`p-2 rounded-full bg-white shadow hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-white transition-colors ${isGeneratingPDF ? 'cursor-not-allowed' : ''}`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>
        </div>
        
        {/* Contact and GitHub Info */}
        <div className="flex justify-center items-center mt-4 mb-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200/50 px-6 py-3">
            <div className="flex items-center gap-6 text-sm">
              {/* Email Contact */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">Contact:</span>
                </div>
                <a 
                  href="mailto:ashish@zolidar.com" 
                  className="text-blue-600 hover:text-blue-700 transition-colors font-medium hover:underline"
                >
                  ashish@zolidar.com
                </a>
              </div>
              
              {/* Divider */}
              <div className="w-px h-5 bg-slate-300"></div>
              
              {/* LinkedIn */}
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-medium">Connect:</span>
                <a 
                  href="https://www.linkedin.com/in/ashish-r-agrawal/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity p-1 rounded-md hover:bg-slate-100"
                  title="Connect on LinkedIn"
                >
                  <img 
                    src={LI} 
                    alt="LinkedIn" 
                    className="w-5 h-5"
                  />
                </a>
              </div>
              
              {/* Divider */}
              <div className="w-px h-5 bg-slate-300"></div>
              
              {/* GitHub Setup Guide */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Github className="w-4 h-4" />
                  <span className="font-medium">Setup:</span>
                </div>
                <a 
                  href="https://github.com/zolidar/zolidar-pitch-builder#readme" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors font-medium hover:underline"
                  title="View setup instructions on GitHub"
                >
                  GitHub README
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/print" element={<AllSlidesView />} />
      <Route path="/:slideNumber" element={<SlidePage />} />
      <Route path="*" element={<Navigate to="/1" replace />} />
    </Routes>
  );
}

export default App;