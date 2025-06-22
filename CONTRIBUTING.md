# 🤝 Contributing to Professional Pitch Deck Builder

Thank you for your interest in contributing! This project aims to democratize access to professional pitch deck creation using proven methodologies and AI-assisted workflows.

> **⚠️ Important**: This is an open source project provided "as-is" without warranties or guarantees. Maintainer participation is voluntary and not guaranteed. The community is encouraged to collaborate and support each other.

## 🎯 Project Mission

**Enable anyone to create compelling investor presentations using proven methodologies from successful VCs and startups.**

We believe that access to professional pitch deck creation shouldn't be limited by design skills or expensive consultants. This project combines:
- **Proven methodologies** (Khosla, Sequoia, successful startups)
- **AI-assisted construction** (Cursor Agent + Claude)
- **Professional design systems** (beautiful, consistent output)

## 🚀 Ways to Contribute

### 1. **Methodology Improvements** 🧠
**Most valuable contributions**
- Enhance slide design patterns and layouts
- Improve AI prompting guidelines in `.cursor/rules/`
- Add new storytelling frameworks
- Refine content structure templates

### 2. **Code Contributions** 💻
- Fix bugs in scripts (PDF generation, deployment, slide reordering)
- Improve build and deployment processes
- Enhance component reusability
- Add new export formats

### 3. **Documentation** 📚
- Improve setup instructions
- Add troubleshooting guides
- Create video tutorials
- Translate documentation

### 4. **Community Examples** 🌟
- Share successful deck examples (anonymized)
- Document industry-specific adaptations
- Contribute startup-context templates
- Add use case studies

## 🛠️ Development Setup

### Prerequisites
- **Node.js** v16 or higher
- **Git**
- **Cursor Editor** (for AI workflow testing)

### Local Development
```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork
git clone https://github.com/zolidar/zolidar-pitch-builder.git
cd zolidar-pitch-builder

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open http://localhost:5173
```

### Testing Your Changes
```bash
# Test PDF generation
npm run generate-pdf

# Test slide screenshots
npm run capture-slides

# Test deployment (creates gh-pages branch)
npm run deploy
```

## 📋 Contribution Guidelines

### **Code Style**
- **TypeScript** for all new code
- **Tailwind CSS** for styling (maintain design system consistency)
- **Component-based architecture** (reusable slide components)
- **Descriptive commit messages** following conventional commits

### **Design System Principles**
- **5-second rule**: Each slide should convey its message in 5 seconds
- **Consistent typography**: Follow established hierarchy
- **Professional aesthetics**: Clean, modern, investor-appropriate
- **Mobile responsive**: Works on all screen sizes

### **AI Guidelines**
- **Real data only**: Never suggest fabricating metrics or data
- **Context-driven**: Leverage startup-context files effectively
- **Iterative refinement**: Support build → analyze → improve cycles
- **Methodology adherence**: Follow Khosla/Sequoia principles

## 🔄 Pull Request Process

### 1. **Before You Start**
- Check existing issues and PRs to avoid duplication
- Create an issue to discuss major changes
- Fork the repository and create a feature branch

### 2. **Making Changes**
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make your changes
# Test thoroughly

# Commit with descriptive message
git commit -m "feat: add new slide layout pattern for technical architecture"
```

### 3. **Submitting PR**
- **Clear title**: Describe what the PR does
- **Detailed description**: Explain the problem and solution
- **Screenshots**: For UI/design changes
- **Test instructions**: How to test your changes
- **Breaking changes**: Note any breaking changes

### 4. **PR Template**
```markdown
## What does this PR do?
Brief description of the change

## Why is this needed?
Problem this solves or improvement this provides

## How to test?
Step-by-step testing instructions

## Screenshots (if applicable)
Before/after images for visual changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Tests pass locally
- [ ] Documentation updated (if needed)
- [ ] No breaking changes (or clearly documented)
```

## 🎨 Methodology Contributions

### **Slide Design Patterns**
When contributing new slide layouts or design patterns:

1. **Follow the design system** in `.cursor/rules/core/slide-design.md`
2. **Test with real content** (not lorem ipsum)
3. **Ensure 5-second rule compliance**
4. **Document the pattern** in appropriate `.cursor/rules/` files

### **AI Guidelines**
When improving AI prompting or guidelines:

1. **Test with Cursor Agent** using actual business content
2. **Document the methodology** clearly
3. **Provide example prompts** that work well
4. **Consider edge cases** and error scenarios

### **Content Templates**
When adding new content patterns:

1. **Base on proven methodologies** (cite sources)
2. **Provide clear examples** in `startup-context/` templates
3. **Test across different industries** when possible
4. **Document the use cases** clearly

## 🐛 Bug Reports

### **Good Bug Reports Include:**
- **Clear title**: What's broken?
- **Steps to reproduce**: Exact steps to trigger the bug
- **Expected behavior**: What should happen?
- **Actual behavior**: What actually happens?
- **Environment**: OS, Node version, browser
- **Screenshots**: If applicable
- **Error messages**: Full error text

### **Example Bug Report**
```markdown
**Title**: PDF generation fails with slides containing complex charts

**Steps to reproduce:**
1. Create slide with multiple charts using Chart.js
2. Run `npm run generate-pdf`
3. PDF generation hangs at slide 15

**Expected**: PDF generates successfully with all slides
**Actual**: Process hangs, no PDF created
**Environment**: macOS 14.0, Node 18.17.0, Chrome 119
**Error**: [Paste full error message]
```

## 💡 Feature Requests

### **Good Feature Requests Include:**
- **Clear use case**: Why is this needed?
- **Detailed description**: What should it do?
- **Examples**: How would it work?
- **Alternatives considered**: Other solutions you've thought of

### **Priority Areas for Features:**
1. **Export formats**: PowerPoint, Keynote, Figma
2. **Design patterns**: New slide layouts, industry-specific templates
3. **AI improvements**: Better prompting, context handling
4. **Workflow enhancements**: Collaboration, version control
5. **Accessibility**: Screen readers, keyboard navigation

## 🌟 Recognition

### **Contributors**
Contributors may be:
- **Listed in README.md** with their contributions
- **Credited in release notes** for significant contributions
- **Invited to the contributors team** for ongoing contributors

### **Types of Recognition:**
- 🧠 **Methodology Expert**: Major improvements to AI guidelines or storytelling frameworks
- 💻 **Code Contributor**: Significant code improvements or new features
- 📚 **Documentation Hero**: Major documentation improvements
- 🐛 **Bug Hunter**: Multiple bug reports or fixes
- 🌟 **Community Champion**: Helping others, sharing examples

## 📞 Getting Help

### **Questions or Stuck?**
- **Create a Discussion**: For general questions
- **Check existing issues**: Your question might already be answered
- **Community support**: Help from other users and contributors

### **Response Times**
Response times are not guaranteed and depend on maintainer availability:
- **Bug reports**: Best effort basis
- **Feature requests**: Best effort basis
- **Pull requests**: Best effort basis
- **Questions**: Community-driven support

## 🎯 Project Roadmap

### **Potential Areas for Community Development**
- Improving AI guideline quality
- Adding more export formats
- Enhancing slide design patterns
- Better startup-context templates

### **Community-Driven Future Possibilities**
- Multi-language support
- Industry-specific templates
- Collaboration features
- Advanced AI integrations

*Note: This roadmap represents potential community-driven development areas, not commitments by maintainers.*

## 📜 Code of Conduct

### **Our Standards**
- **Be respectful**: Treat everyone with respect and kindness
- **Be inclusive**: Welcome people of all backgrounds and experience levels
- **Be constructive**: Provide helpful feedback and suggestions
- **Be patient**: Remember that everyone is learning

### **Unacceptable Behavior**
- Harassment, discrimination, or inappropriate comments
- Spam, self-promotion, or off-topic discussions
- Sharing private information without permission
- Any behavior that makes others feel unwelcome

### **Enforcement**
Violations may result in warnings, temporary bans, or permanent bans depending on severity and maintainer discretion. Report issues to the maintainers when possible.

---

## 🚀 Ready to Contribute?

1. **Read this guide** thoroughly
2. **Set up your development environment**
3. **Look at open issues** for good first contributions
4. **Start small** with documentation or bug fixes
5. **Ask questions** if you're unsure about anything

**Thank you for helping make professional pitch deck creation accessible to everyone!** 🎯

---

## 📋 Disclaimer

This project is provided "as-is" under the MIT License. Maintainers have no obligation to:
- Review or merge contributions
- Provide support or respond to issues
- Maintain or update the project
- Provide any warranties or guarantees

All participation is voluntary and community-driven. By contributing, you acknowledge that your contributions may or may not be incorporated into the project at the sole discretion of the maintainers.

 