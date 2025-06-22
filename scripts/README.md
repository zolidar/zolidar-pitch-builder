# Utility Scripts

**Complete toolkit for managing your pitch deck presentation.**

## ⚡ Essential Commands (Run in Cursor Terminal)

**Open terminal in Cursor:** `Ctrl/Cmd + ` ` or View → Terminal

```bash
# Development & Content
npm run dev                    # Start development server → http://localhost:5173
npm run reorder-slides         # Reorder slides with automatic backups

# Export & Share  
npm run generate-pdf           # Professional PDF with clickable links
npm run capture-slides         # PNG screenshots for external tools
npm run deploy                 # Deploy to GitHub Pages (GitHub Actions)
npm run deploy-local           # Legacy deployment (creates gh-pages branch)

# Advanced  
gh workflow run deploy.yml     # Direct GitHub CLI deployment command
```

> **Cursor Workflow**: Keep `npm run dev` running while using Cursor Agent (`Ctrl/Cmd + L`) to build slides. Reference your startup files with `@startup-context/filename.md`.

## 📁 Script Categories

### 🔧 Development (`development/`)

**`reorder-slides.js`** - Interactive slide reordering with backup safety
- **Interactive mode**: `npm run reorder-slides` (recommended)
- **Direct mode**: `node scripts/development/reorder-slides.js 15 3` (move slide 15 to position 3)
- **Restore**: `node scripts/development/reorder-slides.js --restore`
- **Features**: Automatic backups, smart renumbering, updates all references

### 🎨 Generators (`generators/`)

**`generate-perfect-pdf.js`** - Professional PDF export with perfect clickable links
- **Usage**: Start dev server first, then `npm run generate-pdf`
- **Outputs**: Full deck, subset, and public versions in `scripts/generators/generated-pdfs/`
- **Configuration**: Edit slide arrays in the script file
- **Technology**: Uses Puppeteer for reliable link preservation

**`capture-slides.js`** - High-quality PNG screenshots for external tools
- **Usage**: Start dev server first, then `npm run capture-slides`
- **Output**: `scripts/generators/slide-screenshots/slide-XX.png`
- **Perfect for**: Google Slides, PowerPoint, social media

### 🚀 Deployment

**GitHub Actions Workflow** - Modern deployment via GitHub Actions
- **Primary**: `npm run deploy` (triggers GitHub Actions workflow via GitHub CLI)
- **Direct**: `gh workflow run deploy.yml` (direct GitHub CLI command)
- **Legacy**: `npm run deploy-local` (uses local gh-pages branch method)
- **Process**: Trigger workflow → GitHub Actions builds → Deploy to Pages → Done

**First-time setup required:**
1. **Fork this repository** on GitHub
2. **Clone your fork**: `git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git`
3. **Install GitHub CLI**: `brew install gh` (if not already installed)
4. **Authenticate**: `gh auth login`
5. **Enable GitHub Pages**: Repository Settings → Pages → Source: **GitHub Actions**
6. **Test deployment**: `npm run deploy`

Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

**Advantages of GitHub Actions method:**
- ✅ No gh-pages branch needed
- ✅ Cleaner git history  
- ✅ Automated builds on GitHub's infrastructure
- ✅ Better error handling and logs

## 📋 Prerequisites

- **Node.js**: v16 or higher
- **Development server**: Required for generators (`npm run dev`)
- **Git setup**: Required for deployment (repository + remote origin)

## 🔧 Detailed Usage

### PDF Generation Options

**🌟 For Best Results (Script-based in Cursor):**
```bash
# 1. Start development server (in Cursor terminal)
npm run dev

# 2. Generate high-quality PDFs with perfect clickable links
npm run generate-pdf

# Outputs (in scripts/generators/generated-pdfs/):
# - complete-pitch-deck.pdf     (complete presentation)
# - subset-pitch-deck.pdf       (curated shorter version) 
# - public-pitch-deck.pdf       (public-safe version)
```

**⚡ For Quick Generation (In-browser):**
- Click the **PDF** button while viewing slides
- Fast generation directly in the browser
- Links may not work perfectly (known limitation)
- Good for quick previews and sharing

**Customizing PDF content**: Edit the slide arrays at the top of `scripts/generators/generate-perfect-pdf.js`

### Slide Reordering (in Cursor Terminal)
```bash
# Interactive mode (shows current slides, prompts for changes)
npm run reorder-slides

# Quick reorder (move slide 8 to position 3)
node scripts/development/reorder-slides.js 8 3

# If something goes wrong, restore from backup
node scripts/development/reorder-slides.js --restore
```

### Screenshot Export (in Cursor Terminal)
```bash
# 1. Start development server
npm run dev

# 2. Capture all slides as PNGs
npm run capture-slides

# Output: scripts/generators/slide-screenshots/slide-01.png, slide-02.png, etc.
```

### GitHub Actions Deployment

**First-time setup (one-time only)**:
```bash
# 1. Fork this repository on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
npm install

# 3. Install and authenticate GitHub CLI
brew install gh
gh auth login

# 4. Set up GitHub Pages in repository settings:
#    Go to: Settings → Pages → Source: GitHub Actions

# 5. Test deployment
npm run deploy
```

**Deploy (in Cursor Terminal)**:
```bash
# Primary method (triggers GitHub Actions workflow)
npm run deploy

# Direct GitHub CLI command
gh workflow run deploy.yml

# Legacy method (creates gh-pages branch)
npm run deploy-local
```

The GitHub Actions workflow automatically:
- **Builds** your Vite project with correct base paths
- **Handles** environment variables (GITHUB_PAGES=true)
- **Deploys** directly to GitHub Pages without intermediate branches
- **Provides** deployment URL: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

**✅ Benefits**: No branch management, cleaner history, automated builds, better error handling

## 🏗️ Code Organization

### Clean Architecture
- **App.tsx**: Focuses purely on UI and presentation logic
- **PDF Generation**: Separated into `src/utils/pdfGenerator.ts` utility
- **Two PDF Options**: Browser-based (quick) and Puppeteer-based (high-quality)
- **Modular Scripts**: Each script handles a specific concern

### PDF Generation Approaches
1. **In-browser PDF** (`src/utils/pdfGenerator.ts`): 
   - Fast generation using html2canvas + jsPDF
   - Good for quick exports and previews
   - Links may not work perfectly (browser limitation)

2. **Script-based PDF** (`scripts/generators/generate-perfect-pdf.js`):
   - High-quality generation using Puppeteer
   - Perfect clickable link preservation
   - Multiple output formats (full, subset, public)
   - Configurable slide selection

## 🛠️ Troubleshooting

### Development Issues
- **Slide reordering fails**: Ensure you're in project root, files exist, and have write permissions
- **Backup corruption**: Manually restore from `.backup/` directory

### Generator Issues
- **"Dev server not found"**: Start `npm run dev` first, wait for "Local: http://localhost:5173/" message
- **PDF generation fails**: Check browser console, verify all slides load correctly
- **Screenshots incomplete**: Ensure all images load, check for CSS/JavaScript errors

### Deployment Issues
- **"gh: command not found"**: Install GitHub CLI with `brew install gh`
- **Authentication errors**: Run `gh auth login` and follow authentication steps
- **Build failures**: Check GitHub Actions logs in repository's Actions tab
- **Assets not loading**: Verify GitHub Pages source is set to "GitHub Actions"
- **Workflow not found**: Ensure `.github/workflows/deploy.yml` exists and is committed

### Quick Fixes
```bash
# Generator issues - restart dev server
npm run dev

# Deployment auth issues  
gh auth login

# Check deployment status
gh run list --workflow="deploy.yml"

# Slide reordering problems
node scripts/development/reorder-slides.js --restore

# Build problems
npm install && npm run build
```

## 🤝 Script Integration

All scripts integrate with package.json:
```json
{
  "scripts": {
    "reorder-slides": "node scripts/development/reorder-slides.js",
    "generate-pdf": "node scripts/generators/generate-perfect-pdf.js", 
    "capture-slides": "node scripts/generators/capture-slides.js",
    "deploy": "gh workflow run deploy.yml",
    "deploy-local": "node scripts/deploy.cjs"
  }
}
```

---

**💡 Need more details?** Check the script files themselves - they contain comprehensive inline documentation and configuration options. 