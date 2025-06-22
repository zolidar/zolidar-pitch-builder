import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { detectDevServerPort } from './detect-port.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureSlides() {
  console.log('Starting slide capture...');
  
  // Detect dev server port
  const baseUrl = await detectDevServerPort();
  console.log(`Using dev server at: ${baseUrl}`);
  
  // Create output directory within scripts folder
  const outputDir = path.join(__dirname, 'slide-screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport to presentation dimensions (16:9 aspect ratio)
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2
  });
  
  // Get the number of slides by checking the slides array
  await page.goto(`${baseUrl}/1`, {
    waitUntil: 'networkidle0',
    timeout: 30000
  });
  
  // Get total slides count
  const totalSlides = await page.evaluate(() => {
    const slideCountElement = document.querySelector('.text-slate-600');
    if (slideCountElement) {
      const text = slideCountElement.textContent;
      const match = text.match(/\d+\s*\/\s*(\d+)/);
      return match ? parseInt(match[1]) : 34; // fallback to 34 if not found
    }
    return 34;
  });
  
  console.log(`Found ${totalSlides} slides to capture`);
  
  // Capture each slide
  for (let i = 1; i <= totalSlides; i++) {
    console.log(`Capturing slide ${i}/${totalSlides}...`);
    
    await page.goto(`${baseUrl}/${i}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for slide to fully render
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Take screenshot of the slide container only
    const slideElement = await page.$('.aspect-\\[16\\/9\\]');
    if (slideElement) {
      await slideElement.screenshot({
        path: path.join(outputDir, `slide-${i.toString().padStart(2, '0')}.png`),
        type: 'png'
      });
    } else {
      // Fallback to full page screenshot
      await page.screenshot({
        path: path.join(outputDir, `slide-${i.toString().padStart(2, '0')}.png`),
        type: 'png',
        fullPage: false
      });
    }
  }
  
  await browser.close();
  
  console.log(`\nSlide capture complete!`);
  console.log(`${totalSlides} slides saved to ${outputDir}`);
  console.log(`\nTo import to Google Slides:`);
  console.log(`1. Go to slides.google.com`);
  console.log(`2. Create new presentation`);
  console.log(`3. Set slide size to 16:9 (File → Page setup → Widescreen 16:9)`);
  console.log(`4. Import images: Insert → Image → Upload from computer`);
  console.log(`5. Select all PNG files from the slide-screenshots folder`);
}

// Run the script
captureSlides().catch(console.error); 