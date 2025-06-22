# 📋 Startup Context Setup

**Organize your business narrative and supporting documents for AI-powered pitch deck creation.**

## 🎯 Purpose

This folder contains **your business content** that the AI uses to create compelling slides. The better you prepare this context, the more effective your AI-generated pitch deck will be.

**Key Principle**: The AI can only be as good as the context you provide. Comprehensive, well-organized business information leads to professional, compelling slides.

## 📁 Required Folder Structure

```
startup-context/
├── README.md                    # This file - setup instructions
├── narrative.md                 # Your core business story (ESSENTIAL)
├── supporting-docs/            # Business documents and data
│   ├── market-research.md      # Industry analysis and market data
│   ├── competitive-analysis.md # Competitor research and positioning
│   ├── financial-projections.md # Revenue models and forecasts
│   ├── product-roadmap.md      # Product development and features
│   └── partnership-info.md     # Strategic partnerships and customers
└── reference-materials/        # External documents (PDFs, reports)
    ├── industry-reports/       # Market research reports
    ├── customer-feedback/      # Testimonials and case studies
    └── press-coverage/         # Media mentions and PR
```

## 💡 Pro Tip: Include Your Internal Documents

**Beyond the templates above, add any existing business documents to dramatically improve AI output:**

- **Product Documents**: PRDs (Product Requirements Documents), technical specifications, product roadmaps, feature documentation
- **Strategic Documents**: Business plans, strategic memos, partnership agreements, board presentations
- **Marketing Materials**: Blog posts, press releases, case studies, white papers, marketing copy
- **UX Content**: Website copy, product landing pages, in-app messaging, user onboarding flows, help documentation
- **Customer Materials**: Sales decks, customer success stories, testimonials, support documentation, user research
- **Financial Documents**: Investor updates, board decks, detailed financial models, unit economics analyses

**How to organize additional documents:**
```
startup-context/
├── internal-docs/              # Your existing business documents
│   ├── product/               # PRDs, specs, roadmaps
│   ├── marketing/             # Blog posts, press releases, copy
│   ├── sales/                 # Sales decks, customer stories
│   ├── financial/             # Models, investor updates
│   └── strategic/             # Business plans, partnerships
```

**Why this matters**: The AI will reference these documents when creating slides, resulting in more specific, authentic, and compelling content that reflects your actual business rather than generic templates.

## 🚀 Quick Start (15 minutes)

### **Step 1: Create Your Core Narrative (5 minutes)**

Create `narrative.md` with this template:

```markdown
# [Your Company Name] - Business Narrative

## Company Overview
- **Company Name**: [Your company name]
- **Industry**: [Your industry/vertical]
- **Stage**: [Pre-seed, Seed, Series A, etc.]
- **Founded**: [Year]
- **Location**: [City, State/Country]

## The Problem (What pain are you solving?)
[Describe the specific problem your target customers face]
- Who experiences this problem?
- How painful is it? (quantify if possible)
- What are they doing today to solve it?
- Why isn't the current solution working?

## Your Solution (How do you solve it uniquely?)
[Explain your approach and why it's better]
- What do you do differently?
- Why is your solution 10x better?
- What makes it hard to replicate?

## Target Market
- **Primary customers**: [Who buys your product?]
- **Market size**: [TAM/SAM/SOM if known]
- **Customer segments**: [Different types of customers]

## Business Model
- **How you make money**: [Revenue streams]
- **Pricing model**: [How you price your product/service]
- **Unit economics**: [Key metrics if known]

## Traction (What proof do you have?)
- **Customers**: [Number of customers, notable names]
- **Revenue**: [Current revenue, growth rate]
- **Partnerships**: [Strategic partnerships]
- **Product milestones**: [Key achievements]

## Team
- **Founders**: [Names, backgrounds, why you're the right team]
- **Key hires**: [Critical team members]
- **Advisors**: [Notable advisors or board members]

## Funding
- **Previous funding**: [Amount raised, from whom]
- **Current ask**: [How much you're raising]
- **Use of funds**: [What you'll do with the money]
```

### **Step 2: Add Supporting Documents (5 minutes)**

Create key supporting files:

**`supporting-docs/market-research.md`**:
```markdown
# Market Research & Data

## Industry Statistics
- [Key industry numbers and trends]
- [Market growth rates]
- [Total addressable market data]

## Customer Research
- [Customer interviews and insights]
- [Pain point validation]
- [Willingness to pay data]

## Sources
- [List your data sources for credibility]
```

**`supporting-docs/competitive-analysis.md`**:
```markdown
# Competitive Analysis

## Direct Competitors
- **[Competitor 1]**: [What they do, strengths, weaknesses]
- **[Competitor 2]**: [What they do, strengths, weaknesses]

## Indirect Competitors
- [Alternative solutions customers use today]

## Your Advantages
- [What makes you different and better]
- [Defensible moats you're building]
```

### **Step 3: Reference with AI (5 minutes)**

Use these files in your AI prompts:

```
Based on @startup-context/narrative.md, create a compelling problem slide that follows Khosla's 5-second rule and uses specific examples from our market research.
```

```
Using @startup-context/supporting-docs/competitive-analysis.md, create a competition slide that positions us strategically rather than just comparing features.
```

## 📝 Detailed Content Guidelines

### **Essential Files (Must Have)**

#### **`narrative.md` - Your Core Story**
**Purpose**: Single source of truth for your business story
**AI Usage**: Referenced in every slide creation prompt
**Content Requirements**:
- **Specific, not generic**: Use real numbers, customer names, concrete examples
- **Emotional, not just logical**: Why should people care? What's at stake?
- **Unique positioning**: What makes you different from everyone else?
- **Credible claims**: Only include verifiable information

**Quality Checklist**:
- [ ] Can someone understand your business in 2 minutes?
- [ ] Are your claims specific and verifiable?
- [ ] Does it explain why you'll win vs. competitors?
- [ ] Is the problem visceral and urgent?

#### **`supporting-docs/` - Business Evidence**
**Purpose**: Detailed data and analysis to support your narrative
**AI Usage**: Referenced for specific slide types (market, competition, financials)

**Key Files**:
- **`market-research.md`** - Industry data, customer insights, market sizing
- **`competitive-analysis.md`** - Competitor research and strategic positioning  
- **`financial-projections.md`** - Revenue models, unit economics, forecasts
- **`product-roadmap.md`** - Product features, development timeline
- **`partnership-info.md`** - Strategic partnerships, customer testimonials

### **Optional Files (Enhance Quality)**

#### **`reference-materials/` - External Documents**
**Purpose**: Store PDFs, reports, and external research
**AI Usage**: "Extract key points from @startup-context/reference-materials/industry-report.pdf"

**Organization**:
- **`industry-reports/`** - Third-party market research
- **`customer-feedback/`** - Testimonials, case studies, surveys
- **`press-coverage/`** - Media mentions, PR materials

## 🤖 AI Integration Examples

### **Content Creation Prompts**

**Problem Slide**:
```
Based on @startup-context/narrative.md, create a problem slide that:
- Uses the specific pain points from our customer research
- Includes the market statistics from our supporting docs
- Follows Khosla's 5-second rule for immediate impact
- Matches the design system from @src/slides/Slide01.tsx
```

**Market Sizing**:
```
Using @startup-context/supporting-docs/market-research.md, create a market sizing slide that:
- Shows TAM/SAM/SOM with our bottom-up calculations
- Avoids "top-down BS numbers" as Khosla warns against
- Includes specific customer segments and use cases
- Maintains visual consistency with existing slides
```

**Competition Analysis**:
```
From @startup-context/supporting-docs/competitive-analysis.md, create a competition slide that:
- Positions us strategically, not just feature comparison
- Highlights our unfair advantages and defensible moats
- Uses Khosla's principle of showing advantages, not just differences
- Professional design matching the slide system
```

### **Narrative Flow Prompts**

**Story Arc Review**:
```
Review @startup-context/narrative.md and suggest improvements to slides 5-10 to ensure they:
- Follow a logical progression from problem to solution
- Build emotional engagement throughout
- Reference specific data points from our supporting docs
- Maintain narrative continuity while being standalone effective
```

**Content Extraction**:
```
Extract the most compelling points from @startup-context/supporting-docs/partnership-info.md to create a traction slide that:
- Shows strategic validation from industry partners
- Quantifies our early success with specific metrics
- Builds investor confidence in our execution ability
- Follows the visual design patterns from similar slides
```

## ⚠️ Important Guidelines

### **Data Accuracy Requirements**
- **Real data only**: Never fabricate statistics or business metrics
- **Attribute sources**: Include where data comes from for credibility
- **Update regularly**: Keep information current and accurate
- **Verify claims**: Ensure all statements can be defended

### **Privacy & Security**
- **Version Control**: This folder is included in git by default for team collaboration
- **Sensitive Data**: You can exclude specific files by uncommenting lines in `.gitignore`
- **Team Collaboration**: Shared business context helps teams stay aligned on narrative
- **Public Repos**: Be cautious about proprietary data if your repository is public
- **Selective Exclusion**: Consider excluding financial projections or customer data if highly sensitive

### **Content Quality Standards**
- **Specific over generic**: "1.2M businesses" not "millions of businesses"
- **Emotional over logical**: Why people should care, not just what you do
- **Unique over obvious**: What makes you different, not industry platitudes
- **Credible over aspirational**: What you can prove, not what you hope

## 📊 Content Templates

### **Market Research Template**
```markdown
# Market Research & Analysis

## Market Size & Opportunity
- **Total Addressable Market (TAM)**: $X billion
  - Source: [Report name, date]
  - Calculation method: [Bottom-up or top-down]
- **Serviceable Addressable Market (SAM)**: $X billion
- **Serviceable Obtainable Market (SOM)**: $X million

## Customer Segments
### Primary Segment: [Segment Name]
- **Size**: [Number of potential customers]
- **Pain point**: [Specific problem they face]
- **Current solutions**: [What they use today]
- **Willingness to pay**: [Pricing research]

### Secondary Segment: [Segment Name]
- [Same structure as above]

## Industry Trends
- **Growth rate**: [Annual growth percentage]
- **Key drivers**: [What's driving market growth]
- **Regulatory changes**: [Relevant regulations]
- **Technology trends**: [Relevant tech developments]

## Customer Research
### Interview Summary ([X] interviews conducted)
- **Key pain points identified**: [List top 3-5 pain points]
- **Current solution gaps**: [What existing solutions miss]
- **Feature priorities**: [What customers want most]
- **Pricing sensitivity**: [Price points and willingness to pay]

## Data Sources
- [List all sources with dates for credibility]
```

### **Financial Projections Template**
```markdown
# Financial Model & Projections

## Revenue Model
- **Primary revenue stream**: [How you make money]
- **Secondary streams**: [Additional revenue sources]
- **Pricing model**: [Per user, per transaction, subscription, etc.]

## Unit Economics
- **Customer Acquisition Cost (CAC)**: $X
- **Customer Lifetime Value (LTV)**: $X
- **LTV/CAC ratio**: X:1
- **Payback period**: X months
- **Gross margin**: X%

## Financial Projections (Next 3 Years)
### Year 1
- **Revenue**: $X
- **Customers**: X
- **Average Revenue Per User (ARPU)**: $X
- **Burn rate**: $X/month

### Year 2
- [Same metrics]

### Year 3
- [Same metrics]

## Key Assumptions
- **Customer growth rate**: [Monthly/annual growth]
- **Pricing assumptions**: [How pricing may change]
- **Market penetration**: [% of addressable market]
- **Churn rate**: [Customer retention assumptions]

## Funding Requirements
- **Amount raising**: $X
- **Use of funds**:
  - Product development: X%
  - Sales & marketing: X%
  - Team expansion: X%
  - Operations: X%
- **Runway**: X months
- **Next milestone**: [What you'll achieve with this funding]
```

## 🎯 Success Metrics

**You're Ready for AI Slide Creation When**:
- [ ] Your narrative tells a compelling, specific story
- [ ] All claims are backed by real data and sources
- [ ] Supporting documents provide detailed evidence
- [ ] Content is organized and easy for AI to reference
- [ ] You can answer detailed questions about any aspect of your business

**Red Flags That Need Fixing**:
- Generic statements that could apply to any company
- Made-up statistics or unverified claims
- Vague descriptions without specific examples
- Missing key business information (market size, competition, etc.)
- Inconsistent information across different documents

## 📚 Next Steps

1. **Create your narrative.md** using the template above
2. **Add supporting documents** with real business data
3. **Test with AI prompts** to see how well it understands your business
4. **Iterate and improve** based on the quality of AI-generated content
5. **Reference in slide creation** using @startup-context/filename.md

**Remember**: The AI is only as good as the context you provide. Invest time in creating comprehensive, accurate business documentation - it will dramatically improve your pitch deck quality.

---

**Ready to start?** Create your `narrative.md` file and begin building your AI-powered pitch deck! 🚀 