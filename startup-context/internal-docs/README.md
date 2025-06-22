# Internal Business Documents

This folder contains your existing business documents that dramatically improve AI-generated slide quality. The AI references these documents to create specific, authentic content that reflects your actual business rather than generic templates.

## Folder Structure

```
internal-docs/
├── product/           # PRDs, specs, roadmaps, feature docs
├── marketing/         # Blog posts, case studies, press releases, brand guidelines
├── sales/             # Sales decks, customer stories, competitive battle cards
├── financial/         # Investor updates, financial models, unit economics
└── strategic/         # Business plans, partnerships, strategic memos
```

## What Makes This Powerful

**Before**: Generic AI slides with placeholder content  
**After**: Specific slides with your actual customer names, metrics, and proven messaging

The AI will automatically reference these documents when you use prompts like:
- `@startup-context/internal-docs/sales/customer-success-stories.md`
- `@startup-context/internal-docs/product/roadmap-2024.md`
- `@startup-context/internal-docs/financial/unit-economics.md`

## Quick Start

1. **Copy your existing documents** into the appropriate subfolders
2. **Use descriptive filenames** (e.g., `enterprise-customer-case-study.md`)
3. **Reference in AI prompts** using the @ syntax shown above

## Example: Transforming Generic to Specific

**Generic Prompt**:
```
Create a traction slide showing our customer success
```

**Specific Prompt with Internal Docs**:
```
Based on @startup-context/internal-docs/sales/customer-success-stories.md and @startup-context/internal-docs/financial/q4-metrics.md, create a traction slide that shows our proven customer success with specific company names, use cases, and quantified ROI results.
```

The second approach produces slides with real customer names, actual metrics, and authentic success stories from your business.

## Document Types by Folder

Each subfolder contains a detailed README explaining:
- What types of documents to include
- How the AI uses those documents
- Example prompts for best results
- File naming conventions

## Privacy & Security

- These folders are included in git by default for team collaboration
- Exclude sensitive files by adding them to `.gitignore` if needed
- Be cautious with proprietary data in public repositories
- Consider using separate folders for highly confidential materials

## Pro Tips

- **More context = better slides**: The AI performs best with comprehensive business information
- **Update regularly**: Keep documents current for accurate slide content
- **Use specific filenames**: `enterprise-pricing-model.md` is better than `pricing.md`
- **Cross-reference documents**: Combine multiple sources in single prompts for richer content 