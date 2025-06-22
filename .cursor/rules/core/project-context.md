# Project Context & Core Rules

## Project Overview

This is a **Professional Pitch Deck Builder** - a React-based web application that enables anyone to create compelling investor presentations using proven methodologies from Khosla Ventures, Sequoia Capital, and successful startups.

**Key Facts:**
- **Slide Range**: Configurable slide count (example deck has 60 slides)
- **Target Audience**: Entrepreneurs, startups, and businesses seeking investment
- **Format**: Web-based presentation with PDF export capability
- **Domain**: Adaptable to any business vertical or industry
- **Originally built for**: Zolidar (employee ownership platform), now open-sourced

## Core Rules (ALWAYS FOLLOW)

### 1. 🚨 SLIDE DIMENSIONS - ABSOLUTELY CRITICAL
**This is the #1 rule that must NEVER be violated under any circumstances:**

- **MANDATORY**: All content must fit within SlideContainer.tsx dimensions
- **RESERVED SPACE**: Footer area is reserved for slide number and website text
- **TARGET SCREEN**: 13" laptop screen in maximized browser window
- **SCALING BEHAVIOR**: Non-responsive - scale entire slide rather than adjust layout
- **VIOLATION CONSEQUENCE**: Slides that exceed dimensions will be broken/unusable

**Before creating any slide content, ALWAYS:**
1. Check SlideContainer.tsx for exact dimensions
2. Account for footer space in your layout
3. Test that all content fits within bounds
4. Verify text doesn't wrap unexpectedly

### 2. Visual Design Standards
- Follow established color palette and typography (see slide-design.md)
- Maintain visual hierarchy for quick scanning
- Ensure professional appearance - no tacky, cluttered, or ugly designs
- Align with existing slides' design patterns

### 3. Narrative Continuity
- Each slide must flow naturally from previous slides
- Maintain story continuity while being effective standalone
- Follow proven narrative patterns (see content/narrative-flow.md)
- Use existing slides as design inspiration when creating new ones

### 4. Technical Constraints
- No hover interactions (PDF export requirement)
- CSS must be easily modifiable via LLM prompts or manual editing
- Maintain React/TypeScript component structure
- Update `slides/index.ts` when adding/modifying slides

### 5. Content Standards
- Focus on investor-appropriate messaging
- Use quantified statements and specific metrics
- Maintain professional tone throughout
- Include proper source attribution for data
- Adapt examples to your specific business/industry
- Remove any confidential or proprietary information
- **FOLLOW KHOSLA PRINCIPLES**: Apply guidelines from `rules/reference/pitch-deck-guidelines.md`

### 6. 🚫 DATA ACCURACY - NO FABRICATION
**NEVER make up, invent, or hallucinate data, statistics, or facts:**

- **ONLY USE** data explicitly provided by the deck builder
- **NO ASSUMPTIONS** about metrics, financials, or market data
- **NO PLACEHOLDER** numbers unless specifically requested
- **NO ESTIMATES** or "reasonable guesses" about business details
- **ALWAYS ASK** the builder for missing data rather than inventing it

**If data is missing:**
- Leave placeholders like `[INSERT YOUR METRIC]` or `[YOUR DATA HERE]`
- Ask the builder to provide the specific information needed
- Suggest data sources but don't make up numbers
- Use generic descriptors like "significant growth" instead of fake percentages

## File References

**🏆 MASTER HIERARCHY**: `rules/HIERARCHY.md` - Complete integration guide for all guidelines

**Technical Implementation:**
- **Slide Components**: `src/slides/Slide[XX].tsx`
- **Slide Index**: `src/slides/index.ts` (update labels here)
- **Container**: `src/components/SlideContainer.tsx` (dimension reference)

**Guidelines (Applied Automatically in Cursor Agent):**
- **Auto-Include Context**: `rules/includes/pitch-deck-context.md` (applied to all pitch deck work)
- **Design System**: `rules/core/slide-design.md`
- **Content Patterns**: `rules/content/` folder (headline templates, narrative flow)
- **Methodology References**: `rules/reference/` folder (Khosla, Sequoia, Conrad frameworks)

## Development Workflow

1. **Reference existing slides** for design patterns before creating new ones
2. **Copy similar slide structure** when content is comparable
3. **Maintain backup** of original slides when making major changes
4. **Test visual hierarchy** - viewers should get key takeaways quickly
5. **Update slide index** with proper labels and sequencing 