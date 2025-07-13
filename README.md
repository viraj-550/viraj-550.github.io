# Viraj R. Chordiya - Academic Website

This is a **custom-designed** Quarto academic website featuring a professional layout with a hero section and horizontal research cards. The site uses static link injection to display research links as styled buttons, avoiding CORS issues while maintaining reliability.

## 📑 Table of Contents

### 🚀 [Quick Start Guide](#-quick-start-guide)
- [Adding New Research](#adding-new-research-most-common-task)

### 📖 [Complete Customization Guide](#-complete-customization-guide)
- [🎨 Changing Fonts](#-changing-fonts)
- [📸 Changing Pictures](#-changing-pictures)  
- [📄 Adding New Research Items](#-adding-new-research-items)
- [🎯 Updating Personal Information](#-updating-personal-information)
- [🎨 Layout & Design Customization](#-layout--design-customization)
- [📊 Analytics & SEO](#-analytics--seo)
- [🔧 Advanced Customization](#-advanced-customization)

### 🛠 [Technical Info](#-technical-architecture--advanced-features)
- [🎯 Link Button System](#-link-button-system)
- [📁 File Structure](#-file-structure)
- [Advanced Button Customization](#advanced-button-customization)

### 📋 [Reference](#-quick-reference-checklist)
- [Build & Deploy Commands](#-build--deploy-commands)
- [🆘 Support & Troubleshooting](#-support--troubleshooting)

---

## � Quick Start Guide

### Adding New Research (Most Common Task)

1. **Create research folder**: `mkdir research/your-paper-name`
2. **Create research page**: `touch research/your-paper-name/index.qmd`
3. **Add content** following the template below
4. **Update homepage links** in `index.qmd`
5. **Build**: `quarto render`

## �📖 Complete Customization Guide

This section provides step-by-step instructions for all customization tasks you'll need for future updates.

## 🎨 Changing Fonts

### 1. **Main Body Font**
Edit the font import and body styling in `custom_theme.scss`:

```scss
// Line 1: Change the Google Fonts import
@import url('https://fonts.googleapis.com/css2?family=YOUR_NEW_FONT:wght@400;500;600;700&display=swap');

// Line 6: Update the body font-family
body { 
  font-family: 'YOUR_NEW_FONT', sans-serif; 
  font-size: 1.1rem;
}
```

### 2. **Specific Text Elements**
Update font sizes for different sections:

```scss
// Research titles (currently 1.5rem)
.listing-title { font-size: 1.6rem; }

// Research descriptions (currently 1.1rem)  
.listing-description { font-size: 1.2rem; }

// Bio text (currently 1.15rem)
.hero-text p { font-size: 1.2rem; }

// Research abstracts (currently 0.95rem)
.abstract-content { font-size: 1rem; }
```

### 3. **Google Fonts Selection**
Popular academic font combinations:
- **Modern**: Inter + Roboto Mono
- **Traditional**: Crimson Text + Source Code Pro  
- **Clean**: Open Sans + Fira Code
- **Professional**: Lato + JetBrains Mono

## 📸 Changing Pictures

### 1. **Profile Photo**
Replace `viraj.jpeg` in the root directory:
- **Recommended size**: 300x360px (4:5 ratio)
- **Format**: JPEG or PNG
- **File name**: Keep as `viraj.jpeg` or update the reference in `index.qmd`:

```qmd
// Line ~20 in index.qmd
![](YOUR_NEW_PHOTO.jpg){.profile-img}
```

### 2. **Research Images**
For each research item, add/update images in the research folder:

```
research/
├── your-paper/
│   ├── index.qmd
│   └── paper-figure.png  ← Research image here
```

Update the image reference in the research page YAML:
```yaml
---
title: "Your Paper Title"
image: "paper-figure.png"  # ← Reference your image here
---
```

### 3. **Image Optimization Tips**
- **Research images**: 250x180px for consistency
- **File size**: Keep under 500KB for fast loading
- **Format**: PNG for figures/charts, JPEG for photos
- **Tools**: Use [TinyPNG](https://tinypng.com/) for compression

### 4. **University Logo (UIUC)**
To add your UIUC logo next to university name:

1. **Add logo file** to root directory (e.g., `uiuc-logo.png`)
2. **Update bio text** in `index.qmd`:
```qmd
Hi! I'm a first-year Finance Ph.D. at the University of Illinois Urbana-Champaign. ![](uiuc-logo.png){.uiuc-logo}
```
3. **Add CSS styling** in `custom_theme.scss`:
```scss
.uiuc-logo {
  height: 1.2rem;
  width: auto;
  display: inline-block;
  margin-left: 0.5rem;
  vertical-align: text-bottom;
  opacity: 0.8;
}
```

## 📄 Adding New Research Items

### Complete Research Setup Template

Create `research/your-new-paper/index.qmd` with this structure:

```yaml
---
title: "Your New Paper Title"
author: "Viraj R. Chordiya"
date: "2025-07-13"  # Publication/update date
description: "Brief description for homepage listing (keep under 150 characters)"
categories: [research, finance, econometrics]  # Relevant tags
image: "figure1.png"  # Main figure from your paper
---

## Abstract

Your paper abstract here. This will appear on the research page.

## Research Links

::: {.research-links}
[📄 Paper (PDF)](https://papers.ssrn.com/your-paper){.btn .btn-outline-primary .btn-sm target="_blank"}
[📊 SSRN](https://papers.ssrn.com/your-paper){.btn .btn-outline-secondary .btn-sm target="_blank"}
[💻 Data & Code](https://github.com/viraj-550/your-repo){.btn .btn-outline-success .btn-sm target="_blank"}
[🎤 Slides](https://your-slides-link.com){.btn .btn-outline-warning .btn-sm target="_blank"}
:::

## Introduction

Your paper content starts here...
```

### Adding Homepage Links

Edit `index.qmd` around line 70-90, add your paper to the `researchData` object:

```javascript
const researchData = {
  'Thin Markets, Thick Premiums': {
    abstract: 'This study examines how market liquidity affects insurance premium pricing...',
    links: [
      { text: '📄 Paper (PDF)', href: 'https://papers.ssrn.com', class: 'btn-outline-primary' },
      { text: '📊 SSRN', href: 'https://papers.ssrn.com', class: 'btn-outline-secondary' },
      { text: '💻 Data & Code', href: 'https://github.com/viraj-550', class: 'btn-outline-success' }
    ]
  },
  'Your New Paper Title': {  // ← Add your new paper here
    abstract: 'Brief summary of your new research for homepage display...',
    links: [
      { text: '📄 Paper (PDF)', href: 'https://your-pdf-link.com', class: 'btn-outline-primary' },
      { text: '📊 SSRN', href: 'https://papers.ssrn.com/your-new-paper', class: 'btn-outline-secondary' },
      { text: '💻 Data & Code', href: 'https://github.com/viraj-550/your-new-repo', class: 'btn-outline-success' }
    ]
  }
};
```

## 🎯 Updating Personal Information

### 1. **Bio Text**
Edit the hero section in `index.qmd`:

```qmd
::: {.hero-text}
# Viraj R. Chordiya

Hi! I'm a first-year Finance Ph.D. at the University of Illinois Urbana-Champaign. 

__Research Interests__: Credit Markets, Insurance, Macro-Finance  # ← Update interests

You can reach out to me at [virajrc2\@illinois.edu](mailto:virajrc2@illinois.edu)  # ← Update email
```

### 2. **Social Links**
Update the hero links section in `index.qmd`:

```qmd
::: {.hero-links}
[{{< fa brands linkedin >}} LinkedIn](https://www.linkedin.com/in/YOUR_LINKEDIN/){.btn .btn-outline-primary .btn-sm target="_blank"}
[{{< fa brands twitter >}} Twitter](https://twitter.com/YOUR_TWITTER){.btn .btn-outline-primary .btn-sm target="_blank"}
[{{< fa brands github >}} Github](https://github.com/YOUR_GITHUB){.btn .btn-outline-primary .btn-sm target="_blank"}
[{{< fa file-pdf >}} CV](YOUR_CV_FILE.pdf){.btn .btn-primary .btn-sm target="_blank"}
:::
```

### 3. **CV/Resume File**
1. **Replace CV file**: Update `cv_viraj_chordiya.pdf` in root directory
2. **Update references**: If changing filename, update both:
   - `index.qmd` hero links section
   - `_quarto.yml` navbar resume link

### 4. **Page Title & Branding**
Update site title in `_quarto.yml`:

```yaml
website:
  title: "Your New Name"  # ← Updates page titles and meta tags
  navbar:
    # ...
```

## 🎨 Layout & Design Customization

### 1. **Color Scheme**
Edit color variables in `custom_theme.scss`:

```scss
// Primary colors (buttons, links)
.btn-primary { background-color: #YOUR_COLOR; }
.btn-outline-primary { border-color: #YOUR_COLOR; color: #YOUR_COLOR; }

// Hero section background
.hero-section {
  background: linear-gradient(135deg, #YOUR_START_COLOR 0%, #YOUR_END_COLOR 100%);
}
```

### 2. **Research Card Layout**
Adjust research card proportions in `custom_theme.scss`:

```scss
.research-image {
  flex: 0 0 40%;  // ← Change from 50% to 40% for smaller images
  // OR
  flex: 0 0 60%;  // ← Change to 60% for larger images
}

.research-content {
  flex: 1;  // ← Takes remaining space automatically
}
```

### 3. **Spacing & Margins**
Adjust overall spacing in `_quarto.yml`:

```yaml
format:
  html:
    grid:
      body-width: 1200px      # ← Wider content (currently 1100px)
      margin-width: 100px     # ← Smaller margins (currently 150px)
      gutter-width: 2rem      # ← More internal spacing
```

### 4. **Mobile Responsiveness**
Customize mobile layout in `custom_theme.scss`:

```scss
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;    // ← Stack profile image and text
    text-align: center;        // ← Center everything on mobile
  }
  
  .profile-img {
    width: 200px;              // ← Smaller image on mobile
    height: 240px;
  }
}
```

## 📊 Analytics & SEO

### 1. **Google Analytics**
Add to `_quarto.yml`:

```yaml
format:
  html:
    include-in-header: |
      <!-- Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      </script>
```

### 2. **Meta Tags & SEO**
Enhance `_quarto.yml`:

```yaml
website:
  title: "Your Name"
  description: "Academic website of [Your Name], Finance Ph.D. candidate"
  open-graph: true
  twitter-card: true
  image: "viraj.jpeg"  # ← Social media preview image
```

## 🔧 Advanced Customization

### 1. **Custom CSS Classes**
Add new styling classes in `custom_theme.scss`:

```scss
// Example: Highlight boxes for important content
.highlight-box {
  background-color: #f8f9fa;
  border-left: 4px solid #007bff;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
}

// Example: Custom button styles
.btn-custom {
  background-color: #your-color;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}
```

### 2. **JavaScript Customization**
Modify link injection behavior in `index.qmd`:

```javascript
// Example: Add custom button text formatting
linkElement.innerHTML = `🔗 ${linkData.text}`;  // ← Adds link emoji to all buttons

// Example: Add custom styling based on conditions
if (linkData.href.includes('github.com')) {
  linkElement.style.fontWeight = 'bold';  // ← Bold GitHub links
}
```

## 🚀 Build & Deploy Commands

### Development Workflow
```bash
# Preview changes locally
quarto preview

# Build site
quarto render

# Clean and rebuild (if issues)
quarto clean && quarto render
```

### GitHub Pages Deploy
```bash
# Standard deployment
quarto render
git add .
git commit -m "Update website content"
git push origin main
```

---

## 📋 Quick Reference Checklist

When updating your website, use this checklist:

- [ ] **Images**: Optimize size and format (250x180px for research)
- [ ] **Links**: Test all external links work correctly  
- [ ] **Mobile**: Check responsive design on different screen sizes
- [ ] **CV**: Update CV file and ensure link works
- [ ] **JavaScript**: Verify research title matching in `researchData` object
- [ ] **Build**: Run `quarto render` after all changes
- [ ] **Deploy**: Push changes to GitHub for live updates

---

## ✅ Solved Issues

### ~~Layout Problems~~ → **Custom Layout**
- ❌ ~~Trestles template conflicts~~ → ✅ **Custom hero + research sections**
- ❌ ~~Awkward research card display~~ → ✅ **Horizontal cards with proper proportions**
- ❌ ~~Horizontal scrolling~~ → ✅ **Responsive design that adapts to screen size**
- ❌ ~~Poor section separation~~ → ✅ **Clear visual hierarchy**

### ~~CORS & Link Issues~~ → **Static Link System**
- ❌ ~~Dynamic link fetching failures~~ → ✅ **Pre-defined static links**
- ❌ ~~CORS errors in local development~~ → ✅ **No external requests needed**
- ❌ ~~Unreliable link injection~~ → ✅ **Guaranteed link display**

## 🚨 Minor Considerations

1. **Manual Link Management**: Links must be manually added to JavaScript object (by design for reliability)
2. **Image Optimization**: Research images should be optimized for web (recommended: 250x180px)
3. **Content Length**: Research descriptions should be kept concise for card layout

## � Technical Architecture & Advanced Features

### 🎯 Link Button System

The homepage automatically displays research links as styled buttons using a **static mapping approach** for maximum reliability.

#### How It Works

1. **Research Detection**: JavaScript scans the homepage for research listings and extracts titles
2. **Static Link Mapping**: Links are pre-defined in the `researchData` object in `index.qmd`
3. **Button Injection**: Matching research items get their links injected as styled buttons
4. **Automatic Styling**: Buttons are automatically styled based on their class

#### Button Color Coding

| Link Type | Button Color | Class |
|-----------|-------------|--------|
| **Papers/PDFs** | 🔵 Blue | `btn-outline-primary` |
| **SSRN/Journals** | ⚫ Gray | `btn-outline-secondary` |
| **Code/Data** | 🟢 Green | `btn-outline-success` |
| **Slides** | 🟡 Yellow | `btn-outline-warning` |  
| **Videos** | 🔴 Red | `btn-outline-danger` |
| **Summaries** | 🟦 Light Blue | `btn-outline-info` |

#### Why Static Mapping?

✅ **Reliable**: No CORS issues or fetch failures  
✅ **Fast**: No network requests needed  
✅ **Predictable**: Links always display correctly  
✅ **Maintainable**: Easy to update and manage

### 📁 File Structure

```
/
├── index.qmd                 # Homepage with auto-link JavaScript
├── custom_theme.scss         # Custom styling for buttons and layout
├── _quarto.yml              # Site configuration
├── research/
│   ├── paper-1/
│   │   └── index.qmd        # Research page with .research-links section
│   └── paper-2/
│       └── index.qmd
├── docs/                    # Generated site (after quarto render)
└── README.md               # This file
```

## 🛠 Customization

### Adding New Button Styles

To add recognition for new link types, edit the JavaScript in `index.qmd`:

```javascript
// Add after line ~126
} else if (linkText.includes('your-new-type')) {
  linkElement.className += ' btn-outline-purple';  // or any Bootstrap class
```

### Modifying Button Appearance

Edit `custom_theme.scss` to customize button styles:

```scss
.listing-links .btn {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  // Add your custom styles
}
```

## � Support & Troubleshooting

### Common Issues

#### Links Not Appearing  
1. **Check title matching**: Ensure the research title in `researchData` exactly matches the title in your research page
2. **Verify JavaScript**: Open browser dev tools (F12) and check for console errors
3. **Rebuild site**: Run `quarto render` after making changes

#### Layout Issues
1. **Clear browser cache**: Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
2. **Check responsive design**: Test on different screen sizes
3. **Verify SCSS compilation**: Ensure `custom_theme.scss` changes are reflected

#### Research Cards Not Displaying Properly
1. **Image optimization**: Use images around 250x180px for best results  
2. **Description length**: Keep descriptions concise for card layout
3. **Check mobile view**: Cards stack vertically on smaller screens

### Getting Help

For questions or issues:
1. Check the browser console (F12 → Console) for JavaScript errors
2. Verify your research page structure matches the examples above  
3. Ensure the `researchData` object syntax is correct in `index.qmd`

---

**Built with [Quarto](https://quarto.org/) • Enhanced with Custom Layout • Powered by Static Link Injection**
