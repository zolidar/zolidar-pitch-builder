#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SlideReorderer {
  constructor(slidesDir = './src/slides') {
    this.slidesDir = slidesDir;
    this.backupDir = path.join(slidesDir, '.backup');
    this.indexPath = path.join(slidesDir, 'index.ts');
  }

  // Utility to pad numbers with zeros
  padNumber(num) {
    return num.toString().padStart(2, '0');
  }

  // Create backup directory
  createBackupDir() {
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
    }
  }

  // Get all slide files in order
  getSlideFiles() {
    const files = fs.readdirSync(this.slidesDir)
      .filter(file => file.match(/^Slide\d{2}\.tsx$/))
      .sort();
    return files;
  }

  // Parse index.ts to get labels
  parseIndexFile() {
    const content = fs.readFileSync(this.indexPath, 'utf8');
    const slideEntries = [];
    
    // Extract slide entries from the exports array
    const exportsMatch = content.match(/export const slides = \[([\s\S]*?)\];/);
    if (!exportsMatch) {
      throw new Error('Could not parse slides array from index.ts');
    }

    const entriesText = exportsMatch[1];
    // Split more carefully to handle multi-line entries
    const entries = entriesText.split(/},\s*{/).map((entry, index, array) => {
      // Add back the braces that were removed by split (except for first and last)
      if (index === 0) {
        return entry.replace(/^\s*{\s*/, '').trim();
      } else if (index === array.length - 1) {
        return entry.replace(/}\s*$/, '').trim();
      } else {
        return entry.trim();
      }
    }).filter(entry => entry.length > 0);
    
    entries.forEach((entry, index) => {
      const componentMatch = entry.match(/component:\s*Slide(\d+)/);
      const labelMatch = entry.match(/label:\s*['"`]([^'"`]*?)['"`]/);
      
      if (componentMatch) {
        const slideNum = parseInt(componentMatch[1]);
        const label = labelMatch ? labelMatch[1] : '';
        slideEntries.push({ slideNum, label, originalEntry: entry, index: index });
      }
    });

    return slideEntries.sort((a, b) => a.slideNum - b.slideNum);
  }

  // Create backup of all affected files
  createBackups(fromSlide, toSlide) {
    console.log('Creating backups...');
    this.createBackupDir();
    
    const files = this.getSlideFiles();
    const fromNum = parseInt(fromSlide);
    const toNum = parseInt(toSlide);
    
    // Determine which files need backing up
    const minAffected = Math.min(fromNum, toNum);
    const maxAffected = Math.max(fromNum, toNum);
    
    files.forEach(file => {
      const slideNum = parseInt(file.match(/Slide(\d+)/)[1]);
      if (slideNum >= minAffected) {
        const backupPath = path.join(this.backupDir, file);
        const originalPath = path.join(this.slidesDir, file);
        fs.copyFileSync(originalPath, backupPath);
      }
    });

    // Backup index.ts
    fs.copyFileSync(this.indexPath, path.join(this.backupDir, 'index.ts'));
    console.log('Backups created successfully.');
  }

  // Update slide file content to match new slide number
  updateSlideContent(filePath, oldNum, newNum) {
    let content = fs.readFileSync(filePath, 'utf8');
    const oldPadded = this.padNumber(oldNum);
    const newPadded = this.padNumber(newNum);
    
    // Update const declarations like "const Slide02"
    content = content.replace(
      new RegExp(`const Slide${oldPadded}`, 'g'),
      `const Slide${newPadded}`
    );
    
    // Update export default like "export default Slide02"
    content = content.replace(
      new RegExp(`export default Slide${oldPadded}`, 'g'),
      `export default Slide${newPadded}`
    );
    
    // Update background assignments like "Slide02.background"
    content = content.replace(
      new RegExp(`Slide${oldPadded}\.background`, 'g'),
      `Slide${newPadded}.background`
    );
    
    // Update background assignments like "(Slide02 as any).background"
    content = content.replace(
      new RegExp(`\\(Slide${oldPadded} as any\\)\\.background`, 'g'),
      `(Slide${newPadded} as any).background`
    );
    
    // Update any other references that might use the slide name
    content = content.replace(
      new RegExp(`\\bSlide${oldPadded}:\\s*React\\.FC`, 'g'),
      `Slide${newPadded}: React.FC`
    );

    fs.writeFileSync(filePath, content, 'utf8');
  }

  // Perform the slide reordering
  reorderSlides(fromSlide, toSlide) {
    const fromNum = parseInt(fromSlide);
    const toNum = parseInt(toSlide);
    
    console.log(`Moving Slide${this.padNumber(fromNum)} to position ${toNum}...`);
    
    // Create backups first
    this.createBackups(fromSlide, toSlide);
    
    // Get current slide labels
    const slideEntries = this.parseIndexFile();
    const labels = slideEntries.map(entry => entry.label);
    
    // Create a temporary directory for processing
    const tempDir = path.join(this.slidesDir, '.temp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }

    try {
      // Step 1: Move all affected slides to temp directory with new numbers
      const files = this.getSlideFiles();
      const slideData = [];
      
      // Collect all slide data
      files.forEach(file => {
        const slideNum = parseInt(file.match(/Slide(\d+)/)[1]);
        const filePath = path.join(this.slidesDir, file);
        slideData.push({
          originalNum: slideNum,
          content: fs.readFileSync(filePath, 'utf8'),
          label: labels[slideNum - 1] || ''
        });
      });

      // Calculate new positions
      const newOrder = [...slideData];
      const movingSlide = newOrder.splice(fromNum - 1, 1)[0];
      newOrder.splice(toNum - 1, 0, movingSlide);

      // Step 2: Remove old files
      files.forEach(file => {
        const filePath = path.join(this.slidesDir, file);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      });

      // Step 3: Create new files with updated content
      newOrder.forEach((slide, index) => {
        const newNum = index + 1;
        const newFileName = `Slide${this.padNumber(newNum)}.tsx`;
        const newFilePath = path.join(this.slidesDir, newFileName);
        
        // Write content with updated references
        let updatedContent = slide.content;
        const oldPadded = this.padNumber(slide.originalNum);
        const newPadded = this.padNumber(newNum);
        
        // Update all references in the content
        updatedContent = updatedContent.replace(
          new RegExp(`const Slide${oldPadded}`, 'g'),
          `const Slide${newPadded}`
        );
        updatedContent = updatedContent.replace(
          new RegExp(`export default Slide${oldPadded}`, 'g'),
          `export default Slide${newPadded}`
        );
        updatedContent = updatedContent.replace(
          new RegExp(`Slide${oldPadded}\\.background`, 'g'),
          `Slide${newPadded}.background`
        );
        updatedContent = updatedContent.replace(
          new RegExp(`\\(Slide${oldPadded} as any\\)\\.background`, 'g'),
          `(Slide${newPadded} as any).background`
        );
        updatedContent = updatedContent.replace(
          new RegExp(`\\bSlide${oldPadded}:\\s*React\\.FC`, 'g'),
          `Slide${newPadded}: React.FC`
        );

        fs.writeFileSync(newFilePath, updatedContent, 'utf8');
      });

      // Step 4: Update index.ts
      this.updateIndexFile(newOrder);

      console.log('Slide reordering completed successfully!');
      
    } finally {
      // Clean up temp directory
      if (fs.existsSync(tempDir)) {
        fs.rmSync(tempDir, { recursive: true });
      }
    }
  }

  // Update index.ts with new order
  updateIndexFile(newOrder) {
    console.log('Updating index.ts...');
    
    // Generate imports
    const imports = newOrder.map((_, index) => {
      const num = this.padNumber(index + 1);
      return `import Slide${num} from './Slide${num}';`;
    }).join('\n');

    // Generate exports array
    const exports = newOrder.map((slide, index) => {
      const num = this.padNumber(index + 1);
      return `  { component: Slide${num}, label: '${slide.label}' }`;
    }).join(',\n');

    const newContent = `${imports}

export const slides = [
${exports}
];
`;

    fs.writeFileSync(this.indexPath, newContent, 'utf8');
  }

  // Restore from backup
  restoreFromBackup() {
    console.log('Restoring from backup...');
    
    if (!fs.existsSync(this.backupDir)) {
      console.log('No backup directory found.');
      return;
    }

    const backupFiles = fs.readdirSync(this.backupDir);
    backupFiles.forEach(file => {
      const backupPath = path.join(this.backupDir, file);
      const originalPath = path.join(this.slidesDir, file);
      fs.copyFileSync(backupPath, originalPath);
    });

    console.log('Restored from backup successfully.');
  }

  // Interactive CLI
  async runInteractive() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const question = (prompt) => {
      return new Promise((resolve) => {
        rl.question(prompt, resolve);
      });
    };

    try {
      console.log('=== Slide Reorderer ===\n');
      
      const files = this.getSlideFiles();
      console.log('Current slides:');
      files.forEach((file, index) => {
        const slideNum = parseInt(file.match(/Slide(\d+)/)[1]);
        const labels = this.parseIndexFile();
        const label = labels[slideNum - 1]?.label || '';
        console.log(`  ${slideNum}: ${file} - "${label}"`);
      });

      console.log('\nOptions:');
      console.log('1. Reorder slides');
      console.log('2. Restore from backup');
      console.log('3. Exit');

      const choice = await question('\nSelect option (1-3): ');

      switch (choice) {
        case '1':
          const fromSlide = await question('Enter slide number to move: ');
          const toSlide = await question('Enter target position: ');
          
          const fromNum = parseInt(fromSlide);
          const toNum = parseInt(toSlide);
          
          if (isNaN(fromNum) || isNaN(toNum) || fromNum < 1 || toNum < 1) {
            console.log('Invalid slide numbers.');
            break;
          }
          
          const confirm = await question(`Move Slide${this.padNumber(fromNum)} to position ${toNum}? (y/N): `);
          if (confirm.toLowerCase() === 'y' || confirm.toLowerCase() === 'yes') {
            this.reorderSlides(fromSlide, toSlide);
          } else {
            console.log('Operation cancelled.');
          }
          break;
          
        case '2':
          const confirmRestore = await question('Restore from backup? This will overwrite current files. (y/N): ');
          if (confirmRestore.toLowerCase() === 'y' || confirmRestore.toLowerCase() === 'yes') {
            this.restoreFromBackup();
          } else {
            console.log('Restore cancelled.');
          }
          break;
          
        case '3':
          console.log('Goodbye!');
          break;
          
        default:
          console.log('Invalid option.');
      }
      
    } finally {
      rl.close();
    }
  }
}

// CLI execution - ES module equivalent of require.main === module
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const reorderer = new SlideReorderer();

  if (args.length === 0) {
    // Interactive mode
    reorderer.runInteractive().catch(console.error);
  } else if (args.length === 2) {
    // Direct execution mode
    const [fromSlide, toSlide] = args;
    reorderer.reorderSlides(fromSlide, toSlide);
  } else if (args[0] === '--restore') {
    // Restore mode
    reorderer.restoreFromBackup();
  } else {
    console.log('Usage:');
    console.log('  node reorder-slides.js                    # Interactive mode');
    console.log('  node reorder-slides.js <from> <to>        # Direct mode');
    console.log('  node reorder-slides.js --restore          # Restore from backup');
    console.log('');
    console.log('Examples:');
    console.log('  node reorder-slides.js 15 3              # Move slide 15 to position 3');
    console.log('  node reorder-slides.js                   # Interactive mode');
  }
}

export default SlideReorderer; 