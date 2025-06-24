# Professional Pitch Deck Builder

Transform your business narrative into compelling investor presentations using proven methodologies from Khosla Ventures, Sequoia Capital, and successful platform companies.

## Zolidar pitch deck as an example

🚀 **<a href="https://zolidar.github.io/zolidar-pitch-builder/" target="_blank">View Live Presentation</a>** - Interactive web version  
📄 **<a href="https://docsend.com/view/ks2szb3qji48h79v" target="_blank">View PDF</a>** - Professional PDF export for DocSend sharing

## What This Is

An AI-powered pitch deck framework that transforms your business narrative into professional investor presentations using battle-tested methodologies from Khosla Ventures, Sequoia Capital, and successful platform companies.

**The key to success**: High-quality business context in the `startup-context/` folder. The AI can only be as good as the information you provide about your business.

## Quick Start Guide

### Prerequisites

- Cursor Editor with Claude Sonnet for optimal AI assistance
- Node.js (v18 or higher recommended)
- GitHub account (for deployment)

### 1. Get Started

Fork and clone this repository:
```bash
# Fork this repository on GitHub, then clone your fork
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
npm install
npm run dev
```

Your development server will start at `http://localhost:5173` - keep this running to see changes in real-time.

### 2. Prepare Your Business Context

This is the most critical step that determines the quality of your AI-generated presentation. The `startup-context/` folder structure is already created with templates - customize them with your business information.

**Essential files to create** (see [Startup Context Setup](startup-context/README.md) for templates):
- `startup-context/narrative.md` - Your core business story (MUST HAVE)
- `startup-context/supporting-docs/market-research.md` - Market data and customer research
- `startup-context/supporting-docs/competitive-analysis.md` - Competitor intelligence
- `startup-context/supporting-docs/financial-projections.md` - Revenue model and forecasts

**Replace example assets**:
- `src/assets/` - Add your logos, team photos, and company images

**Pro Tip**: Beyond the templates, add any internal business documents to dramatically improve AI output quality - PRDs, business plans, marketing materials, customer feedback, financial models, etc.

### 3. Generate Your Deck with AI

Open Cursor Agent (`Ctrl/Cmd + L`) and use this comprehensive prompt to generate your entire pitch deck:

```
Based on @startup-context/narrative.md and @startup-context/supporting-docs/, create a complete 15-slide investor pitch deck following this structure:

1. **Title Slide** - Company name, tagline, and presenter info
2. **Problem** - Specific pain points with emotional impact (5-second rule)
3. **Solution** - Your unique approach and key benefits
4. **Market Opportunity** - TAM/SAM/SOM with bottom-up sizing
5. **Product Demo** - Core functionality and user experience
6. **Traction** - Growth metrics, customer validation, key wins
7. **Business Model** - Revenue streams, pricing, unit economics
8. **Competition** - Competitive landscape and differentiation
9. **Go-to-Market** - Customer acquisition strategy and channels
10. **Team** - Founder backgrounds and key hires
11. **Financials** - 3-year projections and key assumptions
12. **Funding Ask** - Amount, use of funds, milestones
13. **Vision** - Long-term impact and market position
14. **Appendix** - Supporting data, detailed metrics, backup slides
15. **Thank You** - Contact information and next steps

For each slide:
- Follow Khosla's emotional storytelling principles
- Use Sequoia's systematic structure for comprehensive coverage
- Maintain consistent design system from existing slides
- Include specific data from my context files, not generic placeholders
- Create compelling narratives that build toward the funding ask

Start with slides 1-5, then I'll review before continuing with the rest.
```

### 4. Export and Share Your Presentation

**For Investor Sharing (Recommended)**: Export as PDF for DocSend
```bash
npm run generate-pdf     # Creates professional PDF with clickable links
```
Then upload the generated PDF to DocSend, Notion, or send directly to investors.

**For Interactive Presentations**: Deploy to GitHub Pages

Set up GitHub Pages (one-time):
- Go to your repository settings: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME/settings/pages`
- Source: **GitHub Actions** (not "Deploy from a branch")
- Save

Deploy when ready:
```bash
# Make sure all changes are committed and pushed
git add .
git commit -m "Update slides"
git push origin master

# Deploy to GitHub Pages (triggers GitHub Actions)
npm run deploy
```

Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## Advanced AI Prompting Techniques

The key to success is context-driven prompting. The AI needs to understand your business deeply to create compelling slides.

### Essential Setup Prompts

**Initial Context Setting:**
```
I'm building a pitch deck for [COMPANY NAME], a [BRIEF DESCRIPTION]. 

Our business model is [BUSINESS MODEL]. Our target market is [TARGET MARKET].

Please analyze the existing slides and help me improve the narrative flow and design consistency. I want to follow Khosla's emotional storytelling principles and Sequoia's systematic structure.
```

**Content Creation:**
```
Based on @startup-context/narrative.md, create a compelling problem slide that:
- Follows the 5-second rule (immediate emotional impact)
- Uses specific, relatable examples
- Sets up the urgency for our solution
- Maintains the existing design system from @src/slides/Slide01.tsx
```

**Design Consistency:**
```
Look at @src/slides/Slide05.tsx and create a similar slide for our market sizing data. 

Keep the same:
- Color scheme and typography
- Layout patterns and spacing
- Visual hierarchy and component structure

But update the content to show [SPECIFIC MARKET DATA].
```

### Advanced Techniques

**Iterative Refinement:**
```
I've created the first draft of my traction slide. Please:
1. Analyze it against Khosla's principles for emotional impact
2. Suggest improvements for visual hierarchy
3. Ensure the metrics tell a compelling growth story
4. Maintain consistency with the design system from other slides
```

**Content Extraction:**
```
From @startup-context/supporting-docs/[DOCUMENT], extract the key points for a competitive analysis slide. 

Structure it as:
- Clear differentiation points
- Visual comparison table
- Compelling narrative about our unique advantages
- Professional design matching @src/slides/Slide10.tsx
```

**Narrative Flow:**
```
Review slides 8-12 and ensure they flow logically:
- Problem → Solution → Market → Traction → Business Model

Suggest reordering or content changes to improve the story arc. Each slide should build anticipation for the next.
```

### Pro Tips for Better Results

- Use @ references: `@startup-context/narrative.md` for context, `@src/slides/Slide05.tsx` for design patterns
- Be specific: Instead of "make it better," specify what you want improved
- Reference methodologies: Mention Khosla, Sequoia, or specific principles
- Iterate in cycles: Build → analyze → improve → expand
- Keep context: Reference previous slides for consistency

## Business Context Guidelines

The quality of your pitch deck depends entirely on the business context you provide to the AI. Here's what makes great context:

### Essential Context Files

#### 1. Core Narrative (`startup-context/narrative.md`)

**Purpose**: Single source of truth for your business story  
**AI Impact**: Referenced in every slide creation

**Must Include**:
- Specific problem with quantified pain points
- Your unique solution and competitive advantages
- Target market with real size data (not "billions of people")
- Business model with actual pricing
- Traction with real numbers and customer names
- Team background and why you'll win
- Funding ask and specific use of funds

**Quality Test**: Can someone understand your business and why it matters quickly?

#### 2. Market Research (`supporting-docs/market-research.md`)

- TAM/SAM/SOM with sources and calculation methods
- Customer interviews and pain point validation
- Industry statistics with credible sources
- Pricing sensitivity and willingness to pay data

#### 3. Competitive Analysis (`supporting-docs/competitive-analysis.md`)

- Direct competitors with honest strengths/weaknesses
- Indirect competitors and status quo alternatives
- Your unfair advantages and defensible moats
- Win/loss analysis from real sales situations

#### 4. Financial Projections (`supporting-docs/financial-projections.md`)

- Unit economics (CAC, LTV, payback period)
- Historical financials if available
- 3-year projections with key assumptions
- Scenario analysis (base, upside, downside)

### Content Quality Standards

**Good Context Examples**:
- "1.24M small businesses face succession crisis annually, with 70% shutting down vs. selling" (specific, sourced)
- "Our enterprise customers pay $50K annually vs. $200K for traditional solutions" (quantified value prop)
- "Interviewed 47 potential customers, 89% said they'd pay $500/month for this solution" (validated demand)

**Poor Context Examples**:
- "Millions of businesses have this problem" (vague, unsourced)
- "We're 10x better than competitors" (unsubstantiated claim)
- "Huge market opportunity" (generic, no specifics)

## Available Commands

```bash
# Development
npm run dev              # Start development server (http://localhost:5173)
npm run build            # Build project for production
npm run lint             # Check code quality

# Export Options
npm run generate-pdf     # Generate PDF with clickable links
npm run capture-slides   # Export individual slide images

# Deployment  
npm run deploy           # Deploy to GitHub Pages (triggers GitHub Actions workflow)
npm run deploy-local     # Local deployment using legacy gh-pages branch method

# Utilities
npm run reorder-slides   # Reorder presentation with automatic backups
```

## Project Structure

```
your-repo-name/
├── src/
│   ├── slides/              # Your slides (Slide01.tsx, Slide02.tsx...)
│   ├── components/          # Reusable UI components  
│   └── assets/             # Images, logos, team photos
├── startup-context/         # Your business narrative and docs
├── scripts/                # Build and deployment utilities
├── .cursor/rules/          # AI guidelines (auto-included in Cursor)
└── dist/                   # Built files (auto-generated, not in git)
```

**Key Folders**:
- `src/slides/` - Edit these files to build your presentation
- `src/assets/` - Replace logos and team photos with your own
- `startup-context/` - Your business narrative and supporting documents
- `.cursor/rules/` - AI methodologies and design guidelines (auto-included)

## Complete Documentation

### Getting Started

- [Scripts Overview](scripts/README.md) - All available commands and utilities
- [Startup Context Setup](startup-context/README.md) - How to organize your business content

### AI Guidelines

These guidelines are automatically referenced by Cursor Editor when you use AI assistance:

- [Rules Hierarchy](.cursor/rules/HIERARCHY.md) - How all guidelines work together
- [Slide Design System](.cursor/rules/core/slide-design.md) - Visual guidelines
- [Content Patterns](.cursor/rules/content/) - Writing and narrative templates

### Methodologies Reference

- [Khosla Principles](.cursor/rules/reference/pitch-deck-guidelines.md) - Primary storytelling approach
- [Sequoia Structure](.cursor/rules/reference/sequoia-deck-structure.md) - Systematic coverage framework
- [Memo-Style Approach](.cursor/rules/reference/memo-style-fundraising.md) - For complex platform businesses

## Troubleshooting

### Deployment Issues

```bash
# Install GitHub CLI if needed:
brew install gh         # macOS
# or download from: https://github.com/cli/cli

# Authenticate GitHub CLI:
gh auth login           # Follow authentication prompts

# If deploy fails, ensure working directory is clean:
git status              # Check current status
git add .               # Stage all changes  
git commit -m "message" # Commit changes
git push origin master  # Push to remote
npm run deploy          # Then deploy
```

### Development Issues

```bash
# If npm run dev fails:
npm install             # Reinstall dependencies
npm run dev -- --port 3000  # Try different port
```

**Changes not reflecting**: Hard refresh (`Ctrl+F5` / `Cmd+Shift+R`) or clear browser cache

### Removing Redacted Content

Problem: Some slides have redacted content (background and text same color) from the example presentation.  
Solution: Use this AI prompt to restore normal content:

```
I notice this slide has redacted content where the background and text colors are the same, making text invisible. Please:

1. Remove all redacted styling (background colors matching text colors)
2. Replace the Lorem ipsum placeholder text with proper content based on @startup-context/narrative.md
3. Ensure all text is clearly visible with proper contrast
4. Maintain the slide's visual design and layout structure
5. Follow Khosla's principles for clear, compelling messaging

Make the slide professional and readable while keeping the existing design system.
```

## Creator & Methodology Credits

**Created by**: [Ashish Agrawal](https://www.linkedin.com/in/ashishagrawal/), Founder of Zolidar  
**Framework Origin**: Originally developed for Zolidar's employee ownership platform pitch deck

### Acknowledgments

Special thanks to our investors and advisors who provided invaluable feedback and resource recommendations:

- **[Chris Kolenaty](https://www.linkedin.com/in/chris-kolenaty-b10a0a33/)** - For sharing Vinod Khosla's presentation and pitch deck methodology
- **[Rocky Garff](https://www.linkedin.com/in/rgarff/)** - For pitch deck feedback and strategic guidance  
- **[Payton Dobbs](https://www.linkedin.com/in/paytondobbs/)** - For pitch deck feedback and refinement suggestions

**Source Materials**:
- [Vinod Khosla: Nail Your Raise - Luring VCs](https://www.khoslaventures.com/nail-your-raise-luring-vcs/) - Slide deck
- [Vinod Khosla Video Presentation](https://www.youtube.com/watch?v=mikw_w6De1g) - Video walkthrough on emotional storytelling and investor psychology
- [Sequoia Capital Pitch Deck Template](https://www.uvic.ca/gustavson/_assets/docs/pitch-deck-template-web.pdf) - Systematic structure framework
- [Rippling's 2024 Investor Memo](https://www.rippling.com/blog/rippling-2024-memo) - Memo-style fundraising approach
- [Rippling Fundraising Deep Dive](https://www.youtube.com/watch?v=zAYPT6CrWRQ&t=1030s) - Platform business strategy
- [Rippling Scaling Insights](https://www.youtube.com/watch?v=dJ3DT_7jzds&t=198s) - Growth and operational excellence

**Documentation Note**: This documentation was largely created by AI without close scrutiny or proofreading. Use as a starting framework and adapt to your specific needs.