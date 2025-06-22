# Product Documents

This folder contains your existing product documentation that the AI can reference when creating slides.

## What to Include

- **PRDs (Product Requirements Documents)** - Detailed product specifications and requirements
- **Technical Specifications** - Architecture docs, API documentation, technical design documents
- **Product Roadmaps** - Feature timelines, development priorities, strategic product direction
- **Feature Documentation** - Detailed descriptions of product capabilities and functionality
- **User Stories & Requirements** - Customer needs, use cases, acceptance criteria
- **Product Strategy Docs** - Positioning, competitive analysis, go-to-market strategy

## How AI Uses These Documents

When you reference `@startup-context/internal-docs/product/[filename]` in your prompts, the AI will:
- Extract specific product features and capabilities for solution slides
- Use technical details for product demo and architecture slides
- Reference roadmap items for future vision and development slides
- Pull user stories for problem validation and customer need slides

## Example Prompt

```
Based on @startup-context/internal-docs/product/product-roadmap.md, create a product vision slide that shows our development timeline and key milestones, following Khosla's principles for compelling storytelling.
```

## File Naming Tips

- Use descriptive names: `core-product-prd.md` instead of `prd1.md`
- Include dates for versioned docs: `roadmap-2024-q4.md`
- Group related docs: `api-spec-v2.md`, `api-integration-guide.md` 