# Sales Documents

This folder contains your existing sales materials that the AI can reference when creating slides.

## What to Include

- **Sales Decks** - Customer-facing presentations, demo scripts, pitch materials
- **Customer Success Stories** - Win stories, testimonials, reference customer details
- **Competitive Battle Cards** - Win/loss analysis, objection handling, competitive positioning
- **Pricing Documents** - Pricing models, proposal templates, ROI calculators
- **Support Documentation** - FAQ responses, common objections, customer onboarding guides
- **User Research** - Customer interviews, surveys, feedback analysis, persona research
- **Sales Process Docs** - Qualification criteria, sales methodology, pipeline stages

## How AI Uses These Documents

When you reference `@startup-context/internal-docs/sales/[filename]` in your prompts, the AI will:
- Extract proven customer value propositions for solution slides
- Use win stories and testimonials for traction slides
- Reference competitive insights for differentiation slides
- Pull pricing strategies and ROI data for business model slides

## Example Prompt

```
Based on the win stories in @startup-context/internal-docs/sales/customer-success-stories.md, create a traction slide that shows our proven track record with specific customer names, use cases, and quantified results.
```

## File Naming Tips

- Organize by function: `battle-cards/`, `testimonials/`, `pricing/`
- Include customer segments: `enterprise-sales-deck.md`, `smb-pricing-model.md`
- Version important docs: `competitive-analysis-v3.md` 