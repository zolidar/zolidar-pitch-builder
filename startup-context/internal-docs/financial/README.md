# Financial Documents

This folder contains your existing financial materials that the AI can reference when creating slides.

## What to Include

- **Investor Updates** - Monthly/quarterly investor communications, progress reports
- **Board Decks** - Board meeting presentations, strategic updates, performance reviews
- **Detailed Financial Models** - Unit economics, revenue projections, scenario planning
- **Unit Economics Analyses** - CAC, LTV, payback period, cohort analysis
- **Fundraising Materials** - Previous pitch decks, term sheets, investor feedback
- **Financial Reports** - P&L statements, cash flow analysis, burn rate calculations
- **Budget Planning** - Annual budgets, departmental spending, headcount planning

## How AI Uses These Documents

When you reference `@startup-context/internal-docs/financial/[filename]` in your prompts, the AI will:
- Extract proven financial metrics for traction slides
- Use unit economics for business model slides
- Reference growth projections for market opportunity slides
- Pull funding history and use of funds for investment slides

## Example Prompt

```
Using the unit economics from @startup-context/internal-docs/financial/unit-economics-analysis.md, create a business model slide that shows our proven path to profitability with specific CAC, LTV, and payback metrics.
```

## File Naming Tips

- Include time periods: `q4-2024-investor-update.md`, `2025-budget-plan.md`
- Be specific: `saas-unit-economics.md`, `enterprise-cohort-analysis.md`
- Version models: `financial-model-v4.md` 