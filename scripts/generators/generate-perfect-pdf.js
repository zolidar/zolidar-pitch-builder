import puppeteer from 'puppeteer';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { detectDevServerPort } from './detect-port.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CONFIGURE PDF GENERATION SETTINGS HERE
// Full PDF range - specify start and end slide numbers for the complete PDF
const FULL_PDF_START_SLIDE = 1;
const FULL_PDF_END_SLIDE = 60; // Set to desired end slide number, or use 'auto' to include all slides

// Subset PDF slides - Edit this array to specify which slides to include in the subset PDF
const SUBSET_SLIDES = [
  1, 2, 3, 20
  // Add or remove slide numbers as needed
  // Example: [1, 3, 5, 7, 9] would include only slides 1, 3, 5, 7, and 9 in the subset PDF
];

// Public PDF slides - Edit this array to specify which slides to include in the public PDF
const PUBLIC_SLIDES = [
  1, 2, 3, 4, 10
  // Add or remove slide numbers for the fully public version
  // This should contain slides that are safe for public sharing
];

async function generatePerfectPDF() {
  console.log('Starting perfect PDF generation with clickable links...');
  
  // Detect dev server port
  const baseUrl = await detectDevServerPort();
  console.log(`Using dev server at: ${baseUrl}`);
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport to exact presentation dimensions (16:9)
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2
  });
  
  // Get total slides count
  await page.goto(`${baseUrl}/1`, {
    waitUntil: 'networkidle0',
    timeout: 30000
  });
  
  const totalSlides = await page.evaluate(() => {
    const slideCountElement = document.querySelector('.text-slate-600');
    if (slideCountElement) {
      const text = slideCountElement.textContent;
      const match = text.match(/\d+\s*\/\s*(\d+)/);
      return match ? parseInt(match[1]) : 34;
    }
    return 34;
  });
  
  console.log(`Found ${totalSlides} slides total`);
  
  // Determine the actual range for full PDF
  const actualEndSlide = FULL_PDF_END_SLIDE === 'auto' ? totalSlides : Math.min(FULL_PDF_END_SLIDE, totalSlides);
  const actualStartSlide = Math.max(1, FULL_PDF_START_SLIDE);
  
  console.log(`Full PDF will include slides ${actualStartSlide} to ${actualEndSlide}`);
  
  // Create temporary directory for slide images within scripts folder
  const tempDir = path.join(__dirname, 'temp-slide-images');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  // Create output directory for PDFs within scripts folder
  const outputDir = path.join(__dirname, 'generated-pdfs');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  
  // Capture each slide in the specified range and extract link information
  const slideData = [];
  
  for (let i = actualStartSlide; i <= actualEndSlide; i++) {
    console.log(`Processing slide ${i}/${actualEndSlide} (range: ${actualStartSlide}-${actualEndSlide})...`);
    
    await page.goto(`${baseUrl}/${i}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for slide to fully render
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Extract links from the slide
    const links = await page.evaluate(() => {
      const slideContainer = document.querySelector('.aspect-\\[16\\/9\\]');
      if (!slideContainer) return [];
      
      const slideRect = slideContainer.getBoundingClientRect();
      const links = [];
      
      // Find all clickable links within the slide container
      const linkElements = slideContainer.querySelectorAll('a[href]');
      
      linkElements.forEach(link => {
        const href = link.getAttribute('href');
        const rect = link.getBoundingClientRect();
        
        // Only include links that are visible and have valid hrefs
        if (href && rect.width > 0 && rect.height > 0) {
          // Calculate relative position within slide (as percentage)
          const relativeX = (rect.left - slideRect.left) / slideRect.width;
          const relativeY = (rect.top - slideRect.top) / slideRect.height;
          const relativeWidth = rect.width / slideRect.width;
          const relativeHeight = rect.height / slideRect.height;
          
          links.push({
            url: href,
            x: relativeX,
            y: relativeY,
            width: relativeWidth,
            height: relativeHeight,
            text: link.textContent?.trim() || ''
          });
        }
      });
      
      return links;
    });
    
    console.log(`Found ${links.length} clickable links in slide ${i}`);
    
    // Take screenshot of the slide container
    const slideElement = await page.$('.aspect-\\[16\\/9\\]');
    const imagePath = path.join(tempDir, `slide-${i}.png`);
    
    if (slideElement) {
      await slideElement.screenshot({
        path: imagePath,
        type: 'png'
      });
      
      slideData.push({
        imagePath,
        links,
        slideNumber: i
      });
    }
  }
  
  await browser.close();
  
  // Helper function to create PDF from slide data
  function createPDF(slideDataArray, filename, description) {
    console.log(`Creating ${description}...`);
    
    // Standard presentation dimensions in points (72 DPI)
    const slideWidth = 1152; // 16 inches * 72 DPI
    const slideHeight = 648;  // 9 inches * 72 DPI
    
    const doc = new PDFDocument({
      size: [slideWidth, slideHeight],
      margin: 0
    });
    
    doc.pipe(fs.createWriteStream(filename));
    
    for (let i = 0; i < slideDataArray.length; i++) {
      const { imagePath, links, slideNumber } = slideDataArray[i];
      
      if (i > 0) {
        doc.addPage();
      }
      
      // Add image to fill entire page
      doc.image(imagePath, 0, 0, {
        width: slideWidth,
        height: slideHeight
      });
      
      // Add clickable link annotations
      links.forEach(link => {
        // Convert relative coordinates to PDF coordinates
        const x = link.x * slideWidth;
        const y = link.y * slideHeight;
        const width = link.width * slideWidth;
        const height = link.height * slideHeight;
        
        // Ensure the link area has minimum dimensions for clickability
        const minWidth = Math.max(width, 20);
        const minHeight = Math.max(height, 15);
        
        console.log(`Adding clickable link on slide ${slideNumber}: ${link.text || link.url}`);
        
        // Add link annotation to PDF
        doc.link(x, y, minWidth, minHeight, link.url);
      });
      
      console.log(`Added slide ${slideNumber} to ${description} with ${links.length} clickable links`);
    }
    
    doc.end();
    return slideDataArray.reduce((sum, slide) => sum + slide.links.length, 0);
  }
  
  // Create complete PDF with all slides in specified range
  const totalLinksComplete = createPDF(slideData, path.join(outputDir, 'complete-pitch-deck.pdf'), 'complete PDF with all slides');
  
  // Create subset PDF with only specified slides
  const subsetSlideData = slideData.filter(slide => SUBSET_SLIDES.includes(slide.slideNumber));
  const totalLinksSubset = createPDF(subsetSlideData, path.join(outputDir, 'subset-pitch-deck.pdf'), 'subset PDF with selected slides');
  
  // Create public PDF with only public slides
  const publicSlideData = slideData.filter(slide => PUBLIC_SLIDES.includes(slide.slideNumber));
  const totalLinksPublic = createPDF(publicSlideData, path.join(outputDir, 'public-pitch-deck.pdf'), 'public PDF with public slides');
  
  // Clean up temporary files
  slideData.forEach(slide => {
    if (fs.existsSync(slide.imagePath)) {
      fs.unlinkSync(slide.imagePath);
    }
  });
  
  // Remove temp directory (only if empty)
  try {
    fs.rmdirSync(tempDir);
  } catch (error) {
    console.warn(`Warning: Could not remove temp directory ${tempDir}:`, error.message);
  }
  
  console.log('\n=== PDF Generation Complete ===');
  console.log('Complete PDF generated: ' + path.join(outputDir, 'complete-pitch-deck.pdf'));
  console.log(`  - Slide range: ${actualStartSlide} to ${actualEndSlide} (${slideData.length} slides)`);
  console.log(`  - Total clickable links preserved: ${totalLinksComplete}`);
  
  console.log('\nSubset PDF generated: ' + path.join(outputDir, 'subset-pitch-deck.pdf'));
  console.log(`  - Selected slides: [${SUBSET_SLIDES.join(', ')}]`);
  console.log(`  - Total slides in subset: ${subsetSlideData.length}`);
  console.log(`  - Total clickable links preserved: ${totalLinksSubset}`);
  
  console.log('\nPublic PDF generated: ' + path.join(outputDir, 'public-pitch-deck.pdf'));
  console.log(`  - Selected slides: [${PUBLIC_SLIDES.join(', ')}]`);
  console.log(`  - Total slides in public PDF: ${publicSlideData.length}`);
  console.log(`  - Total clickable links preserved: ${totalLinksPublic}`);
  
  console.log('\nAll PDFs maintain exact browser appearance with clickable links.');
  console.log('To modify the full PDF range, edit FULL_PDF_START_SLIDE and FULL_PDF_END_SLIDE at the top of this file.');
  console.log('To modify subset slides, edit the SUBSET_SLIDES array at the top of this file.');
  console.log('To modify public slides, edit the PUBLIC_SLIDES array at the top of this file.');
}

// Run the script
generatePerfectPDF().catch(console.error); 