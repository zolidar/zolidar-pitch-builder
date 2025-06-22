#!/usr/bin/env node

/**
 * Legacy Local Deployment Script
 * 
 * This script provides local gh-pages branch deployment as an alternative to 
 * the modern GitHub Actions workflow. It creates and manages a gh-pages branch
 * manually from your local machine.
 * 
 * Usage: npm run deploy-local
 * Modern alternative: npm run deploy (uses GitHub Actions)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting legacy deployment to gh-pages branch...');
console.log('💡 Consider using: npm run deploy (GitHub Actions method)\n');

try {
  // 1. Ensure we're on master branch and working directory is clean
  const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
  if (currentBranch !== 'master') {
    console.error('❌ Error: Please switch to master branch before deploying');
    process.exit(1);
  }

  const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
  if (gitStatus) {
    // Filter out dist folder changes since it gets rebuilt
    const nonDistChanges = gitStatus.split('\n').filter(line => !line.includes('dist/'));
    if (nonDistChanges.length > 0) {
      console.error('❌ Error: Working directory is not clean. Please commit your changes first.');
      console.log('Uncommitted changes (excluding dist folder):');
      console.log(nonDistChanges.join('\n'));
      process.exit(1);
    }
  }

  // 2. Build the project
  console.log('🔨 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  // 3. Check if dist folder exists
  if (!fs.existsSync('dist')) {
    console.error('❌ Error: Build failed - dist directory not found');
    process.exit(1);
  }

  // 4. Add .nojekyll file
  fs.writeFileSync('dist/.nojekyll', '');
  console.log('📁 Added .nojekyll file');

  // 5. Store current commit for reference
  const commitHash = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();

  // 6. Switch to gh-pages branch (create if doesn't exist)
  console.log('🌿 Switching to gh-pages branch...');
  try {
    execSync('git checkout gh-pages', { stdio: 'pipe' });
  } catch (error) {
    console.log('Creating new gh-pages branch...');
    execSync('git checkout --orphan gh-pages', { stdio: 'pipe' });
  }

  // 7. Remove all files except .git
  console.log('🧹 Cleaning gh-pages branch...');
  const files = fs.readdirSync('.');
  for (const file of files) {
    if (file !== '.git') {
      try {
        execSync(`rm -rf "${file}"`, { stdio: 'pipe' });
      } catch (error) {
        // Ignore errors for files that don't exist
      }
    }
  }

  // 8. Copy dist contents to root
  console.log('📁 Copying built files to root...');
  execSync('cp -r dist/* . 2>/dev/null || true', { stdio: 'pipe' });
  execSync('cp -r dist/.* . 2>/dev/null || true', { stdio: 'pipe' });

  // 9. Remove the now-empty dist folder
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // 10. Commit and push
  console.log('💾 Committing to gh-pages...');
  execSync('git add .', { stdio: 'pipe' });
  
  try {
    execSync(`git commit -m "Deploy from master ${commitHash} - ${new Date().toISOString()}"`, { stdio: 'pipe' });
    console.log('🚀 Pushing to gh-pages...');
    execSync('git push -f origin gh-pages', { stdio: 'inherit' });
  } catch (commitError) {
    if (commitError.message.includes('nothing to commit')) {
      console.log('📝 No changes to deploy');
    } else {
      throw commitError;
    }
  }

  // 11. Switch back to master
  console.log('🔄 Switching back to master...');
  execSync('git checkout master', { stdio: 'pipe' });

  console.log('✅ Deployment complete!');
  console.log('🌐 Site deployed to gh-pages branch');
  console.log('📝 Configure GitHub Pages: Settings → Pages → Deploy from branch → gh-pages');
  console.log('🔗 Your site will be available at: https://[username].github.io/[repo-name]/');
  console.log('');
  console.log('💡 Consider using the modern deployment method: npm run deploy (GitHub Actions)');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  
  // Try to switch back to master if something went wrong
  try {
    execSync('git checkout master', { stdio: 'pipe' });
  } catch (checkoutError) {
    console.error('⚠️  Could not switch back to master. You may need to do this manually.');
  }
  
  process.exit(1);
} 