# Rules Hierarchy & Application Order

**Master reference for understanding how all guidelines work together when building pitch deck slides.**

## 🏆 Absolute Priority Rules (NEVER VIOLATE)

### 1. SLIDE DIMENSIONS (Technical Foundation)
**Source**: `.cursor/rules/core/project-context.md`
- All content MUST fit within SlideContainer.tsx dimensions
- Footer space is reserved and cannot be used
- Target: 13" laptop screen in maximized browser
- Violation = broken/unusable slides

### 2. DATA ACCURACY (Content Integrity)
**Source**: `.cursor/rules/core/project-context.md`
- NEVER fabricate data, statistics, or facts
- Only use data explicitly provided by deck builder
- Leave placeholders when data is missing
- Ask for real data rather than making estimates

## 🎯 Primary Application Rules (Core Methodology)

### 3. KHOSLA PRINCIPLES (Storytelling & Impact)
**Source**: `.cursor/rules/reference/pitch-deck-guidelines.md`
**Auto-Applied**: Via `.cursor/rules/includes/pitch-deck-context.md`

**The 5-Second Rule**: Every slide must pass - one clear message only
**Headlines as Messages**: Not topics, but complete thoughts that advance narrative
**Less is More**: High signal-to-clutter ratio, remove unnecessary elements
**Emotional Arc**: Story trumps logic, visceral impact over information
**Fear & Greed**: Address investor psychology directly

**Application**: These principles apply to EVERY slide, EVERY time.

### 4. VISUAL DESIGN STANDARDS (Aesthetic Foundation)
**Source**: `.cursor/rules/core/slide-design.md`

**Color Palette**: Brand-consistent colors with psychological impact
**Typography Hierarchy**: Clear font weights and sizes for information hierarchy
**Layout Patterns**: Proven grid systems and spacing standards
**Component Consistency**: Standardized cards, icons, and interactive elements

**Application**: Visual execution of Khosla's principles through professional design.

### 5. HEADLINE WRITING PATTERNS (Content Creation)
**Source**: `.cursor/rules/content/headline-writing.md`

**Problem Headlines**: Dramatic questions + urgent statements + specific statistics
**Solution Headlines**: Concept naming + process explanation + value multiplier
**Traction Headlines**: Strategic advantage + partnership announcements + financial positioning

**Application**: Specific templates for creating Khosla-compliant headlines.

## 🔄 Secondary Framework Rules (Structural Guidance)

### 6. SEQUOIA STRUCTURE (Comprehensive Coverage)
**Source**: `.cursor/rules/reference/sequoia-deck-structure.md`
**Priority**: Tertiary - provides skeleton, not soul

**Modern Format**: 11-slide condensed structure for quick pitches
**Traditional Format**: 12-slide comprehensive structure for formal presentations
**TAM/SAM/SOM**: Systematic market sizing methodology

**Application**: Use as structural framework when it supports Khosla's storytelling.

### 7. CONRAD MEMO DEPTH (Strategic Complexity)
**Source**: `.cursor/rules/reference/memo-style-fundraising.md`
**Priority**: Secondary - for complex platform businesses only

**Three-Part Framework**: Strategic insight → execution approach → competitive advantage
**Product as Strategy**: Architecture serves strategic goals
**Written Depth**: Comprehensive analysis for complex businesses

**Application**: When strategic complexity requires detailed explanation beyond slides.

## 📖 Supporting Guidelines (Enhancement Rules)

### 8. NARRATIVE FLOW (Story Continuity)
**Source**: `.cursor/rules/content/narrative-flow.md`

**Slide Transitions**: Each slide flows naturally to next
**Story Coherence**: Maintains narrative while being standalone effective
**Emotional Progression**: Builds investor engagement throughout deck

**Application**: Ensures Khosla's storytelling principles work across entire presentation.

### 9. TECHNICAL CONSTRAINTS (Implementation Requirements)
**Source**: `.cursor/rules/core/project-context.md`

**No Hover Interactions**: PDF export compatibility
**React/TypeScript Structure**: Component-based architecture
**Slide Index Updates**: Maintain proper labeling and sequencing

**Application**: Technical implementation details that support all other rules.

## 🔄 Integration Workflow

### When Creating ANY Slide:

1. **✅ DIMENSION CHECK**: Will this fit in SlideContainer.tsx?
2. **✅ DATA VERIFICATION**: Is all information real and provided?
3. **✅ 5-SECOND TEST**: One clear message that passes quick comprehension?
4. **✅ VISUAL HIERARCHY**: Does design support the message effectively?
5. **✅ HEADLINE QUALITY**: Does title advance narrative as complete thought?
6. **✅ STORY FLOW**: Does this slide connect to overall presentation arc?
7. **✅ TECHNICAL COMPLIANCE**: React structure, no hover states, index updated?

### When Frameworks Conflict:

**Resolution Priority:**
1. **Absolute Rules Win**: Dimensions and data accuracy are non-negotiable
2. **Khosla Principles Win**: 5-second rule and emotional impact trump everything else
3. **Design Standards Win**: Professional appearance supports credibility
4. **Structure Serves Story**: Use Sequoia/Conrad frameworks only when they enhance Khosla's impact
5. **Technical Constraints Win**: Implementation requirements cannot be ignored

### Framework Integration Patterns:

**Simple Business (Most Cases)**:
- Khosla principles + Visual design + Headline patterns + Sequoia structure
- Skip Conrad memo depth
- Focus on emotional storytelling with systematic coverage

**Complex Platform Business**:
- Khosla principles + Visual design + Conrad strategic depth + Sequoia structure
- Use memo approach for appendix/detailed analysis
- Maintain slide clarity while providing strategic sophistication

**Quick Pitch Scenario**:
- Khosla principles + Visual design + Headline patterns
- Minimal structure, maximum emotional impact
- Focus on 5-second rule and narrative arc

## 📚 Quick Reference by Task

### Creating New Slide:
1. Check: `project-context.md` (dimensions, data rules)
2. Apply: `pitch-deck-context.md` (auto-included Khosla principles)
3. Reference: `slide-design.md` (visual standards)
4. Use: `headline-writing.md` (content templates)

### Reviewing Existing Slide:
1. Test: 5-second rule comprehension
2. Verify: Dimension compliance and data accuracy
3. Check: Visual hierarchy and design consistency
4. Confirm: Narrative flow and story advancement

### Structuring Full Presentation:
1. Primary: Khosla's narrative arc (emotional storytelling)
2. Secondary: Sequoia's comprehensive coverage (systematic completeness)
3. Tertiary: Conrad's strategic depth (if complex platform business)
4. Always: Visual design standards and technical constraints

## 🎯 Success Metrics

**You're Following the Hierarchy Correctly When:**
- Every slide passes the 5-second test
- Visual design is consistent and professional
- Headlines advance the story as complete thoughts
- Dimensions never cause layout issues
- Data is always real and attributed
- Overall presentation has emotional arc with systematic coverage
- Technical implementation is clean and maintainable

**Red Flags Indicating Hierarchy Violations:**
- Slides with multiple competing messages
- Visual inconsistency or unprofessional appearance
- Generic headlines that don't advance narrative
- Content overflowing slide boundaries
- Made-up statistics or unverified claims
- Logical structure without emotional engagement
- Technical implementation issues or hover dependencies 