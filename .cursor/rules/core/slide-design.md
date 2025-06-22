# Slide Design System

## Overview
Comprehensive design guidelines for professional pitch decks, based on analysis of 60 example slides. This design system ensures consistency, visual impact, and professional presentation quality across any pitch deck built with this framework.

## Color Palette & Themes

### Primary Brand Colors
- **Brand Purple-Blue**: `text-violet-800` for hashtags and brand accents
- **Primary Slate**: `text-slate-800` for main headings and important content
- **Secondary Slate**: `text-slate-700` for subheadings
- **Muted Slate**: `text-slate-600`, `text-slate-500`, `text-slate-400` for supporting text (decreasing importance)
- **Brand Blue**: `text-blue-600`, `text-blue-700`, `text-blue-800` for key highlights and CTAs
- **Brand Indigo**: `text-indigo-700`, `text-indigo-600` for secondary highlights

### Background Color System
The deck uses eight distinct background patterns across slides 1-60:

1. **Brand Introduction/Hero**: Gradient backgrounds
   - `linear-gradient(to bottom right, #c4b5fd, #a5f3fc)` (purple-blue gradient) - Slides 1, 9, 19

2. **Dark Problem/Drama**: Dark slate backgrounds
   - `#0f172a` (very dark navy) for high-impact problem statements - Slide 2
   - `#1e293b` (dark slate) for supporting problem details - Slide 3
   - `#334155` (medium slate) for dramatic emphasis - Slide 7
   - `linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #334155 75%, #1e293b 100%)` - Slides 15, 16

3. **Light Solution/Positive**: Blue-tinted gradients and solids
   - `linear-gradient(to bottom, #f0f9ff 0%, #e0f2fe 100%)` - Slides 6, 47, 52-59
   - `linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)` - Slides 32, 33
   - `#dbeafe` - Slides 5, 21, 23-25, 48
   - `#e0f2fe` - Slides 37-40
   - `#93c5fd` - Slide 4
   - `linear-gradient(to top, #93c5fd, #dbeafe)` - Slide 60

4. **Neutral Process/Strategic**: Light professional backgrounds
   - `#cbd5e1` (light slate) - Slides 18, 27-30
   - `#e2e8f0` (lighter slate) - Slide 8
   - `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #e2e8f0 75%, #f8fafc 100%)` - Slide 10
   - `linear-gradient(135deg, #f8fafc 0%, #f1f5f9 20%, #e2e8f0 50%, #f1f5f9 80%, #f8fafc 100%)` - Slide 26
   - `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%, #f8fafc 100%)` - Slide 36

5. **Indigo/Purple System**: For complex explanatory content
   - `#e0e7ff` (light indigo) - Slides 12, 14, 20, 35
   - `#c7d2fe` (medium indigo) - Slides 13, 34
   - `linear-gradient(to bottom right, #dbeafe, #e0f2fe)` - Slide 17

6. **Green System**: For positive outcomes and growth
   - `#f0fdf4` (light green) - Slides 31, 49-51
   - `linear-gradient(to bottom, #f0fdf4, #dcfce7)` - Slide 11

7. **Neutral/Appendix**: Clean backgrounds
   - `#e7e5e4` (stone) - Slide 22
   - `linear-gradient(to bottom, #f8fafc, #e2e8f0)` - Slides 41-46

8. **White/Default**: Clean white for data-heavy slides
   - Default white background for slides without explicit background setting

### Accent Colors for Content Types
- **Orange accents**: `#F5631D` for SVG underlines and call-to-action elements
- **Blue system**: Multiple blue shades for cards, borders, and CTAs
- **Green tints**: For positive metrics and growth indicators
- **Amber/Yellow**: For highlights and warning/attention elements
- **Fuchsia**: `text-fuchsia-400` for standout statistics
- **Orange highlights**: `text-orange-500`, `text-orange-600` for transitional statements and emphasis

## Redacted Version Label System

### Standard Redacted Label Design
All redacted slides use a consistent sticky note design positioned at `absolute -top-6 -left-6 z-20`:

#### Modern Yellow Label (Slides 38, 39, 50, 51, 57, 59, 60)
```tsx
<div className="bg-yellow-100 border-r border-b border-yellow-300 px-4 py-2 rounded-md shadow-xl">
  <span className="text-yellow-900 text-xs font-medium">REDACTED VERSION</span>
</div>
```

#### Legacy Backdrop Blur Labels (Earlier slides)
Various color schemes with backdrop blur and rotation effects:
- **Slate variants**: `bg-slate-200/90`, `bg-slate-300/90`, `bg-slate-500/90`, `bg-slate-600/85`
- **Indigo variants**: `bg-indigo-200/90`, `bg-indigo-300/90`
- **Sky variants**: `bg-sky-200/90`, `bg-sky-300/90`
- **Green variants**: `bg-green-200/90`

All include:
- `backdrop-blur-sm shadow-xl drop-shadow-lg`
- `px-4 py-2 rounded-br-md border-r border-b`
- `transform rotate-1 hover:rotate-0 transition-transform duration-200`
- `text-xs font-medium tracking-wide uppercase`

## Typography System

### Font Hierarchy
1. **Brand Title** (Slide 1): `font-ubuntu text-7xl font-bold` with gradient text effects
2. **Appendix Titles** (Slide 22): `text-7xl font-bold`
3. **Main Headlines**: `text-4xl font-extrabold` to `text-[2.6rem] font-extrabold`
4. **Section Titles**: `text-[2.3rem] font-extrabold` to `text-[3.9rem] font-bold`
5. **Content Headers**: `text-2xl font-bold` to `text-3xl font-bold`
6. **Body Text**: `text-lg` to `text-2xl` with `font-light` or `font-normal`
7. **Supporting Text**: `text-base` to `text-xl` with `font-light`
8. **Small Text**: `text-sm` to `text-xs` for sources and metadata

### Font Weight Usage
- **font-extrabold**: Major headlines and dramatic statements
- **font-bold**: Section headers and important callouts
- **font-semibold**: Card titles and emphasis within content
- **font-normal**: Standard content and hashtags
- **font-light**: Supporting text, descriptions, and sources

### Text Color Patterns
- White text (`text-white`, `text-zinc-200`, `text-slate-200`) on dark backgrounds
- Dark text (`text-slate-800`, `text-slate-700`) on light backgrounds
- Muted text (`text-slate-400`, `text-slate-500`) for secondary information
- Brand colors for specific callouts and links
- Blue highlights (`text-blue-600`, `text-blue-700`, `text-blue-800`) for key terms
- Sky/Indigo variants (`text-sky-700`, `text-indigo-700`) for secondary emphasis

### Special Typography Patterns
- **Gradient text**: `bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent`
- **Ubuntu font**: Used for brand elements and company name mentions
- **Serif quotes**: `font-serif` for quote marks in testimonial sections
- **Mono font**: `font-mono` for technical function names and code elements

## Layout Patterns

### Content Structure Types

1. **Hero/Title Slides** (Slides 1, 22)
   - Centered content with `justify-center items-center`
   - Large typography with generous white space
   - Minimal content, maximum impact
   - Brand elements and hashtag systems

2. **Problem Statement Slides** (Slides 2-4, 7)
   - Dark backgrounds with light text
   - Progressive revelation of information
   - Left-aligned content with border-left accents
   - Use of contrasting text sizes for hierarchy
   - Orange text (`text-orange-500`) for transitional statements
   - Icon pattern backgrounds for visual interest

3. **Solution Explanation Slides** (Slides 5-6, 12-14, 17)
   - Light backgrounds with grid layouts
   - Card-based design with consistent padding (`p-6`, `p-4`)
   - Border-left accents (`border-l-4`) for emphasis
   - Icon integration with Lucide React icons
   - SVG underline elements for brand emphasis

4. **Data/Statistics Slides** (Slides 8-9, 21, 23, 42)
   - Complex grid layouts with mixed content types
   - Company logos in grid arrangements
   - Statistics cards with icon + number + description format
   - Source attribution with styled links
   - Comparison tables with highlight rows
   - Quote card systems with testimonials

5. **Partnership/Credibility Slides** (Slides 15-16, 39-40)
   - Logo arrangements with consistent sizing
   - Partnership flow indicators (arrows, chevrons)
   - Mixed content blocks with varied emphasis
   - Photo integration for founders with company logos
   - Geographic/market expansion visualizations

6. **Process/Methodology Slides** (Slides 18, 24-30, 47-60)
   - Step-by-step layouts with numbered indicators
   - Complex table/grid structures
   - Image integration with text overlay
   - Timeline visualizations (horizontal with alternating content)
   - Progressive disclosure patterns
   - Technical architecture diagrams
   - AI infrastructure and workflow visualizations

7. **Business Model/Revenue Slides** (Slides 11, 31, 35-37)
   - Multi-column grids with revenue streams
   - Color-coded categories and pricing tiers
   - Stacked bar charts and data visualizations
   - Industry sector breakdowns
   - Pricing strategy layouts

8. **Strategic Planning Slides** (Slides 32-34, 38)
   - Goal-oriented layouts with clear CTAs
   - Channel strategy visualizations
   - Market segmentation (micro, small, large business)
   - Competitive advantage frameworks
   - Growth strategy timelines

9. **Technical/AI Slides** (Slides 52-59)
   - Function category grids with color coding
   - Service capability matrices
   - AI infrastructure diagrams
   - Processing pipeline visualizations
   - Technical differentiation frameworks

10. **Timeline/Roadmap Slides** (Slide 60)
    - Horizontal timeline with milestone markers
    - Alternating content above/below timeline
    - Color-coded progress indicators
    - Funding round visualizations

### Grid Systems
- **Two-column**: `grid-cols-2` for balanced content split
- **Three-column**: `grid-cols-3` for feature comparison or three-step processes
- **Four-column**: `grid-cols-4` for data presentation or company showcases
- **Six-column**: `grid-cols-6` for detailed capability matrices
- **Mixed responsive**: `grid-cols-1 lg:grid-cols-2` for responsive layouts
- **Complex grids**: Multi-row, multi-column for detailed feature matrices

### Spacing Standards
- **Component margins**: `mb-4`, `mb-6`, `mb-8`, `mb-12` (increasing importance)
- **Section spacing**: `gap-4`, `gap-6`, `gap-8` for grid layouts
- **Card padding**: `p-4`, `p-6`, `px-6 py-8` for different content densities
- **Container max-widths**: `max-w-4xl`, `max-w-5xl`, `max-w-6xl`, `max-w-7xl` for content centering

## Component Patterns

### Card Design System
1. **Basic Info Cards**: `bg-slate-50 rounded-2xl shadow-sm` with consistent padding
2. **Emphasis Cards**: Border-left accents with `border-l-4` and matching background colors
3. **Statistic Cards**: Icon + number + description with color-coded backgrounds
4. **Process Cards**: Numbered indicators with gradient backgrounds
5. **Quote Cards**: White background with orange quote marks and author attribution
6. **Feature Cards**: Multi-level content with status indicators
7. **Technical Cards**: Function categories with color-coded borders and icons

### Icon Usage (Lucide React)
- Consistent sizing: `w-4 h-4`, `w-5 h-5`, `w-6 h-6`, `w-8 h-8` for different contexts
- Color coordination with card/section themes
- Common icons: Users, Star, BadgeCheck, DollarSign, Building2, Clock, TrendingUp
- Process icons: DoorOpen, Search, Puzzle, Settings for funnel stages
- Technical icons: Download, Mic, Brain, Database, Search, Shield for AI infrastructure

### Interactive Elements
- **External Links**: Consistent styling with `text-blue-600 underline hover:text-blue-800`
- **Info Badges**: Rounded full backgrounds with subtle borders
- **Source Citations**: Small, muted text with link styling
- **Status Indicators**: Color-coded badges for progress/completion states

### Visual Separators
- **SVG Underlines**: Custom orange SVG paths for brand emphasis
- **Border Accents**: Left borders in varying thicknesses (`border-l-2`, `border-l-4`)
- **Gradient Separators**: Subtle background gradients for section divisions

### Timeline Components
- **Horizontal timelines**: With alternating above/below content
- **Progress indicators**: Color-coded milestones (blue for current, green for future)
- **Arrow connectors**: Directional flow indicators
- **Milestone cards**: Positioned timeline cards with year/quarter labels

### Highlight Treatments
- **Background highlights**: Gradient backgrounds for key phrases
- **Border emphasis**: Color-coded left borders for content categories
- **Status badges**: Rounded indicators with appropriate color coding
- **Sticky note effects**: For redacted version labels with rotation and shadows

## Content Depth Patterns

### High-Density Information Slides
- Multiple data points with visual hierarchy
- Icon + statistic + description triplets
- Grid layouts with 6+ content blocks
- Source citations and external links
- Complex feature matrices and pricing tables
- Technical architecture diagrams
- Examples: Slides 8, 9, 25, 26, 27, 42, 52-59

### Medium-Density Content Slides
- 2-4 main content blocks
- Balanced text and visual elements
- Clear section breaks with spacing
- Timeline visualizations
- Quote collections
- Partnership showcases
- Examples: Slides 5, 6, 7, 11, 12, 15, 16, 32-40

### Low-Density Impact Slides
- Single dramatic statement or question
- Minimal text with maximum typography impact
- Strong background colors for emphasis
- Transitional messaging
- Hero/title slides
- Examples: Slides 1, 2, 3, 4, 10, 13, 19, 20, 22

### Specialized Layout Slides
- **Journey visualization**: Custom SVG illustrations (Slide 18)
- **Comparison tables**: Data-driven layouts (Slide 21, 23)
- **Process flows**: Step-by-step with visual indicators (Slides 22, 24, 28, 29)
- **Technical diagrams**: AI infrastructure and function categories (Slides 52-59)
- **Timeline visualization**: Horizontal milestone progression (Slide 60)

## Topic-Based Design Patterns

### Problem/Pain Point Slides
- **Background**: Dark slate colors (`#0f172a`, `#1e293b`, `#334155`)
- **Typography**: Light text with high contrast
- **Layout**: Progressive information revelation
- **Accents**: Border-left highlights and contrasting statistics
- **Transition elements**: Orange text for bridge statements
- **Visual elements**: Icon patterns and tessellated backgrounds

### Solution/Feature Slides
- **Background**: Light blue gradients or white
- **Typography**: Dark text on light backgrounds
- **Layout**: Grid-based with card components
- **Accents**: Blue accent colors and positive color psychology
- **Visual elements**: SVG underlines and border-left emphasis

### Data/Market Slides
- **Background**: Light gradients (often blue-tinted)
- **Typography**: Mixed hierarchy for different data types
- **Layout**: Complex grids with logos and statistics
- **Accents**: Color-coded sections and source attributions
- **Tables**: Comparison layouts with highlighting
- **Visual elements**: Company logo grids and statistical cards

### Partnership/Credibility Slides
- **Background**: Professional light colors or dark gradients
- **Typography**: Balanced emphasis between partners
- **Layout**: Logo grids with relationship indicators
- **Accents**: Consistent logo sizing and aligned text
- **Visual elements**: Flow indicators and partnership pathways

### Strategic/Process Slides
- **Background**: Neutral colors (mint, light slate)
- **Typography**: Clear hierarchy for step-by-step content
- **Layout**: Sequential or tabular arrangements
- **Accents**: Numbered indicators and flow elements
- **Visual elements**: Phase indicators and process flows

### Technical/AI Slides
- **Background**: Light blue gradients for technical content
- **Typography**: Mix of headers and technical details
- **Layout**: Function category grids and capability matrices
- **Accents**: Color-coded categories and technical indicators
- **Visual elements**: Icon systems and architectural diagrams

### Financial/Business Model Slides
- **Background**: Light professional colors or green tints
- **Typography**: Clear hierarchy for numbers and descriptions
- **Layout**: Multi-column grids with revenue streams
- **Accents**: Color-coded categories and pricing tiers
- **Visual elements**: Revenue stream visualizations and pricing matrices

### Timeline/Roadmap Slides
- **Background**: Blue gradients for forward-looking content
- **Typography**: Year/quarter labels with milestone descriptions
- **Layout**: Horizontal timeline with alternating content
- **Accents**: Color-coded progress states (past, current, future)
- **Visual elements**: Milestone markers and timeline progression

## Technical Implementation Notes

### Background Setting
All slides use the static `background` property:
```typescript
SlideComponent.background = "color-or-gradient-value";
// or with type assertion for linter compatibility
(SlideComponent as any).background = "color-value";
```

### Responsive Considerations
- Use responsive grid classes: `grid-cols-1 lg:grid-cols-2`
- Flexible text sizing for different screen sizes
- Consistent aspect ratio maintenance (`aspect-[16/9]`)

### Component Consistency
- Import and use `SlideTitle` component for standard titles
- Consistent icon imports from Lucide React
- Standardized link styling and external link indicators
- Company logo component for consistent sizing

### SVG Integration
- Custom orange underline SVGs for brand emphasis
- Timeline arrow indicators with gradient fills
- Flag markers and directional elements
- Icon pattern backgrounds for visual interest

### Content Guidelines
- **Maximum text per slide**: Avoid overwhelming information density
- **Source attribution**: Always include for external data
- **Link functionality**: Ensure all external links open in new tabs
- **Visual hierarchy**: Use size, weight, and color consistently
- **White space**: Generous margins and padding for readability
- **Quote formatting**: Use serif font for quote marks, highlighted key phrases
- **Status indicators**: Consistent color coding across different slide types
- **Redacted content**: Use Lorem ipsum for sensitive information with appropriate sticky labels

## Advanced Layout Patterns

### Timeline Visualizations
- Horizontal lines with nodes positioned at specific coordinates
- Alternating content above/below timeline
- Color-coded progress states (gray for past, blue for current, green for future)
- Milestone cards with precise positioning and responsive design

### Comparison Tables
- Header rows with distinct styling
- Highlighted comparison rows
- Font family variations for brand recognition
- Responsive column structures
- Color-coded data categories

### Multi-Revenue Stream Displays
- Color-coded revenue categories
- Numbered sequence indicators
- Gradient backgrounds for categorization
- Detailed breakdown structures with visual hierarchy

### Quote Card Systems
- Asymmetric grid layouts
- Consistent quote mark styling with serif fonts
- Author attribution patterns
- Background highlight treatments for emphasis
- Mixed card sizes for visual interest

### Technical Architecture Diagrams
- Function category grids with color-coded borders
- Service capability matrices
- Icon-based categorization systems
- Empty arrays for redacted function lists
- Modular component design for scalability

### AI Infrastructure Visualization
- Processing pipeline representations
- Workflow orchestration diagrams
- Quality monitoring indicators
- Capability matrix layouts
- Strategic impact summaries

This design system ensures consistency while allowing for appropriate variation based on content type and narrative flow. Each slide should feel cohesive with the overall deck while serving its specific purpose in the presentation story, from initial problem identification through technical implementation and future roadmap visualization. 