import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface LinkData {
  url: string;
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
}

interface SlideData {
  data: string;
  width: number;
  height: number;
  links: LinkData[];
}

interface PDFGenerationOptions {
  slides: any[];
  navigate: (path: string, options?: any) => void;
  onProgress: (slideNumber: number, progress: number) => void;
  onCancel?: () => boolean;
}

export class PDFGenerator {
  private tempElements: HTMLElement[] = [];

  // Helper function to extract links from an element
  private extractLinksFromElement(element: HTMLElement, slideContainer: HTMLElement): LinkData[] {
    const links: LinkData[] = [];
    const slideRect = slideContainer.getBoundingClientRect();
    const linkElements = element.querySelectorAll('a[href]');

    linkElements.forEach(link => {
      const href = link.getAttribute('href');
      const rect = link.getBoundingClientRect();

      if (href && rect.width > 0 && rect.height > 0) {
        // Calculate relative position within slide (as percentage)
        const relativeX = Math.max(0, (rect.left - slideRect.left) / slideRect.width);
        const relativeY = Math.max(0, (rect.top - slideRect.top) / slideRect.height);
        const relativeWidth = Math.min(1 - relativeX, rect.width / slideRect.width);
        const relativeHeight = Math.min(1 - relativeY, rect.height / slideRect.height);

        // Only add links that are within the slide bounds
        if (relativeX < 1 && relativeY < 1 && relativeWidth > 0 && relativeHeight > 0) {
          links.push({
            url: href.startsWith('http') ? href : `https://${href}`,
            x: relativeX,
            y: relativeY,
            width: relativeWidth,
            height: relativeHeight,
            text: link.textContent?.trim() || ''
          });
          
          console.log(`📍 Found link: "${link.textContent?.trim()}" at relative (${relativeX.toFixed(3)}, ${relativeY.toFixed(3)}) size ${relativeWidth.toFixed(3)}x${relativeHeight.toFixed(3)}`);
        }
      }
    });

    return links;
  }

  // Helper function to convert images to base64 for embedding
  private async convertImagesToBase64(container: HTMLElement): Promise<void> {
    const images = container.querySelectorAll('img');
    
    for (const img of Array.from(images)) {
      try {
        // Skip if already base64
        if (img.src.startsWith('data:')) continue;

        // Create a canvas to convert the image
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) continue;

        // Wait for image to load if not already loaded
        if (!img.complete) {
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            setTimeout(reject, 5000); // 5 second timeout
          });
        }

        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        
        ctx.drawImage(img, 0, 0);
        
        const base64 = canvas.toDataURL('image/png', 1.0);
        img.src = base64;
        
        console.log(`✅ Converted image to base64: ${img.alt || 'unnamed'}`);
      } catch (error) {
        console.warn(`⚠️ Failed to convert image to base64: ${img.src}`, error);
      }
    }
  }

  private async captureSlide(slideNum: number, slideContainer: HTMLElement): Promise<SlideData | null> {
    try {
      console.log(`🔍 Starting capture for slide ${slideNum}...`);

      // Wait for all images to load before capturing
      const images = slideContainer.querySelectorAll('img');
      console.log(`🖼️ Found ${images.length} images in slide ${slideNum}`);
      
      const imagePromises = Array.from(images).map((img, index) => {
        if (img.complete) {
          console.log(`✅ Image ${index + 1} already loaded: ${img.src}`);
          return Promise.resolve();
        }
        console.log(`⏳ Waiting for image ${index + 1}: ${img.src}`);
        return new Promise<void>((resolve) => {
          img.onload = () => {
            console.log(`✅ Image ${index + 1} loaded: ${img.src}`);
            resolve();
          };
          img.onerror = () => {
            console.warn(`❌ Image ${index + 1} failed to load: ${img.src}`);
            resolve();
          };
          // Timeout after 5 seconds
          setTimeout(() => {
            console.warn(`⏰ Image ${index + 1} timeout: ${img.src}`);
            resolve();
          }, 5000);
        });
      });

      if (images.length > 0) {
        await Promise.all(imagePromises);
        console.log(`✅ All images processed for slide ${slideNum}`);
      }

      // Additional wait for any CSS animations or transitions to complete
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log(`🎨 Starting html2canvas for slide ${slideNum}...`);

      // Create temporary container off-screen
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'fixed';
      tempContainer.style.top = '-10000px';
      tempContainer.style.left = '-10000px';
      tempContainer.style.width = '1024px';
      tempContainer.style.height = '576px';
      tempContainer.style.zIndex = '-1';
      tempContainer.style.backgroundColor = 'white';
      tempContainer.style.overflow = 'hidden';
      tempContainer.style.pointerEvents = 'none';
      
      // Clone the slide container
      const slideClone = slideContainer.cloneNode(true) as HTMLElement;
      
      // Set dimensions but preserve all other styles
      slideClone.style.width = '1024px';
      slideClone.style.height = '576px';
      slideClone.style.position = 'relative';
      slideClone.style.margin = '0';
      slideClone.style.padding = '0';
      slideClone.style.transform = 'none';
      slideClone.style.transformOrigin = 'top left';
      
      tempContainer.appendChild(slideClone);
      document.body.appendChild(tempContainer);
      
      // Track this element for cleanup
      this.tempElements.push(tempContainer);

      // Wait for the clone to be fully rendered
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Convert all images to base64 in the clone
      await this.convertImagesToBase64(slideClone);
      
      // Extract links from the clone
      const links = this.extractLinksFromElement(slideClone, slideClone);
      console.log(`🔗 Found ${links.length} links in slide ${slideNum}`);
      
      // Wait for images to be converted
      await new Promise(resolve => setTimeout(resolve, 300));

      let canvas;
      try {
        // Move container on screen temporarily for capture
        tempContainer.style.top = '0';
        tempContainer.style.left = '0';
        tempContainer.style.zIndex = '10000';
        
        canvas = await html2canvas(tempContainer, {
          width: 1024,
          height: 576,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          logging: false,
          foreignObjectRendering: true,
          imageTimeout: 10000,
          scale: 1
        });
        
      } catch (error) {
        console.error(`❌ html2canvas error for slide ${slideNum}:`, error);
        throw error;
      } finally {
        // Always remove the temporary container immediately
        if (document.body.contains(tempContainer)) {
          document.body.removeChild(tempContainer);
          const index = this.tempElements.indexOf(tempContainer);
          if (index > -1) {
            this.tempElements.splice(index, 1);
          }
        }
      }

      console.log(`📊 Canvas created for slide ${slideNum}: ${canvas.width}x${canvas.height}`);

      // Convert canvas to image
      const imgData = canvas.toDataURL('image/jpeg', 0.9);
      
      if (imgData === 'data:,' || imgData.length < 1000) {
        console.error(`❌ Invalid canvas data for slide ${slideNum}`);
        throw new Error(`Failed to capture slide ${slideNum} - empty or invalid canvas`);
      }
      
      console.log(`✅ Successfully captured slide ${slideNum} (${Math.round(imgData.length / 1024)}KB, ${links.length} links)`);

      return {
        data: imgData,
        width: canvas.width,
        height: canvas.height,
        links
      };

    } catch (error) {
      console.error(`❌ Error capturing slide ${slideNum}:`, error);
      return null;
    }
  }

  async generatePDF(options: PDFGenerationOptions): Promise<void> {
    const { slides, navigate, onProgress, onCancel } = options;
    
    // Note: Only generates PDF format - no other export formats supported
    console.log(`🚀 Starting PDF generation for ${slides.length} slides...`);

    try {
      // Create PDF with high resolution 16:9 aspect ratio
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: [1152, 648] // 16:9 ratio in points (16*72 x 9*72)
      });

      let isFirstSlide = true;
      const capturedSlides: SlideData[] = [];

      // Capture all slides
      for (let slideNum = 1; slideNum <= slides.length; slideNum++) {
        // Check for cancellation
        if (onCancel?.()) {
          console.log('📋 PDF generation cancelled by user');
          return;
        }

        onProgress(slideNum, Math.round(((slideNum - 1) / slides.length) * 100));

        // Navigate to the slide
        navigate(`/${slideNum}`, { replace: true });
        
        // Wait for navigation and rendering
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Find the slide container
        let slideContainer = document.querySelector('[data-slide-container="true"]') as HTMLElement;
        
        if (!slideContainer) {
          slideContainer = document.querySelector('div[class*="aspect-[16/9]"]') as HTMLElement;
        }
        
        if (!slideContainer) {
          slideContainer = document.querySelector('.shadow-lg') as HTMLElement;
        }
        
        if (!slideContainer) {
          console.error(`❌ No container found for slide ${slideNum}`);
          continue;
        }

        const slideData = await this.captureSlide(slideNum, slideContainer);
        if (slideData) {
          capturedSlides.push(slideData);
        }
      }

      console.log(`📄 Assembling PDF with ${capturedSlides.length} slides...`);

      if (capturedSlides.length === 0) {
        throw new Error('No slides were successfully captured');
      }

      // Add all captured slides to PDF with clickable links
      for (let i = 0; i < capturedSlides.length; i++) {
        const assemblyProgress = Math.round(((i + 1) / capturedSlides.length) * 100);
        onProgress(0, assemblyProgress); // 0 indicates assembly phase
        
        if (!isFirstSlide) {
          pdf.addPage();
        }
        isFirstSlide = false;

        try {
          const slide = capturedSlides[i];
          
          // PDF dimensions
          const pdfWidth = 1152;
          const pdfHeight = 648;
          
          // Use actual captured dimensions
          const captureWidth = slide.width;
          const captureHeight = slide.height;
          
          // Calculate scaling to fit perfectly
          const scaleX = pdfWidth / captureWidth;
          const scaleY = pdfHeight / captureHeight;
          const scale = Math.min(scaleX, scaleY);
          
          const scaledWidth = captureWidth * scale;
          const scaledHeight = captureHeight * scale;
          
          // Center the image
          const x = (pdfWidth - scaledWidth) / 2;
          const y = (pdfHeight - scaledHeight) / 2;
          
          // Add high-quality image to PDF
          pdf.addImage(slide.data, 'JPEG', x, y, scaledWidth, scaledHeight, '', 'FAST');
          
          // Add clickable links (note: links may not work perfectly in browser-generated PDFs)
          slide.links.forEach((link, linkIndex) => {
            // Convert relative coordinates to PDF coordinates
            const linkX = x + (link.x * scaledWidth);
            const linkY = y + (link.y * scaledHeight);
            const linkWidth = Math.max(link.width * scaledWidth, 20);
            const linkHeight = Math.max(link.height * scaledHeight, 15);
            
            console.log(`🔗 Link ${linkIndex + 1}: "${link.text || link.url}"`);
            
            // Add link annotation to PDF
            try {
              if (typeof pdf.link === 'function') {
                pdf.link(linkX, linkY, linkWidth, linkHeight, link.url);
                console.log(`   ✅ Link added to PDF (may not work perfectly in browser PDF)`);
              } else {
                console.warn(`   ⚠️ pdf.link is not available in this jsPDF version`);
              }
            } catch (error) {
              console.error(`   ❌ Failed to add link to PDF:`, error);
            }
          });
          
          console.log(`📄 Added slide ${i + 1} to PDF (${assemblyProgress}% complete) - ${slide.links.length} links`);
          
          // Small delay to prevent browser freezing
          if (i % 3 === 0) {
            await new Promise(resolve => setTimeout(resolve, 50));
          }
          
        } catch (error) {
          console.error(`❌ Error adding slide ${i + 1} to PDF:`, error);
        }
      }

      // Save the PDF
      const fileName = `slide-deck-${new Date().toISOString().split('T')[0]}.pdf`;
      
      try {
        console.log(`💾 Saving PDF: ${fileName}`);
        pdf.save(fileName);
        
        const totalLinks = capturedSlides.reduce((sum, slide) => sum + slide.links.length, 0);
        console.log(`🎉 PDF generated successfully: ${fileName} with ${capturedSlides.length} slides and ${totalLinks} links`);
        console.log(`ℹ️  Note: For PDFs with perfect clickable links, use: npm run generate-pdf`);
        
      } catch (saveError) {
        console.error('❌ Save failed, trying alternative method:', saveError);
        
        // Alternative method: get PDF as blob and create download link
        const pdfBlob = pdf.output('blob');
        const url = URL.createObjectURL(pdfBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        
        const totalLinks = capturedSlides.reduce((sum, slide) => sum + slide.links.length, 0);
        console.log(`🎉 PDF generated using alternative method: ${fileName} with ${totalLinks} links`);
      }
      
    } catch (error) {
      console.error('❌ PDF Generation Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      throw new Error(`Error generating PDF: ${errorMessage}`);
    } finally {
      // Clean up any remaining temporary elements
      console.log(`🧹 Cleaning up ${this.tempElements.length} temporary elements...`);
      this.tempElements.forEach((element, index) => {
        if (document.body.contains(element)) {
          document.body.removeChild(element);
          console.log(`🧹 Removed temporary element ${index + 1}`);
        }
      });
      this.tempElements = [];
    }
  }
}

// Export singleton instance
export const pdfGenerator = new PDFGenerator(); 