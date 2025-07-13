# Layout Improvement Options

The current custom layout works but could be refined. Here are three options to improve the research card layout and overall design.

## Option 1: Refined Custom Layout (Recommended)

**What it does**: Keep the current approach but fix proportion and spacing issues

### Changes:
1. Improve research card proportions 
2. Better responsive behavior
3. Fix any overflow/spacing issues
4. Enhanced visual hierarchy

### Implementation:
- Update `custom_theme.scss` with refined grid and spacing
- Optimize image sizing and text flow
- Better mobile responsiveness

### Pros:
- ✅ Minimal changes needed
- ✅ Maintains current design concept
- ✅ Addresses specific layout issues

### Cons:
- ⚠️ Still requires manual SCSS maintenance

---

## Option 2: Switch to Quarto Jolla Template

**What it does**: Replace custom layout with proven Jolla template

### Changes:
1. Change `index.qmd` to use Jolla template
2. Remove custom hero/research sections  
3. Use Jolla's built-in about and listing features
4. Keep static link injection system

### Implementation:
```yaml
# index.qmd
---
title: "Viraj R. Chordiya"
about:
  template: jolla
  image: viraj.jpeg
  image-shape: round
  links:
    - icon: linkedin
      text: LinkedIn
      href: https://linkedin.com/in/virajchordiya
# ... rest stays the same
---
```

### Pros:
- ✅ Proven, well-tested layout
- ✅ Better responsive design out of the box
- ✅ No custom CSS maintenance needed
- ✅ Cleaner research card display

### Cons:
- ⚠️ Less customization control
- ⚠️ Need to adapt to Jolla's structure

---

## Option 3: CSS Grid-Based Custom Layout  

**What it does**: Build a modern CSS Grid layout from scratch

### Changes:
1. Replace flexbox with CSS Grid
2. Modern responsive design patterns
3. Better control over breakpoints
4. Professional academic layout

### Implementation:
- Create new CSS Grid system in SCSS
- Update HTML structure for grid
- Modern responsive patterns (grid-template-areas)
- Clean separation of concerns

### Pros:
- ✅ Maximum control and flexibility
- ✅ Modern responsive design
- ✅ Professional appearance
- ✅ Future-proof approach

### Cons:
- ⚠️ More complex to implement
- ⚠️ Requires more CSS knowledge

---

## Recommendation

**Start with Option 1** (Refined Custom Layout) because:
1. Quick to implement and test
2. Addresses immediate issues
3. Can always upgrade to Options 2 or 3 later
4. Maintains your current visual design

If Option 1 doesn't fully solve the layout issues, then **Option 2** (Jolla) is the safest choice for a professional academic website.

## Current Issues to Address

Based on the current layout, here are the specific problems to fix:

1. **Research Card Proportions**: Images vs text balance
2. **Responsive Behavior**: Mobile layout improvements  
3. **Spacing Consistency**: Margins and padding
4. **Visual Hierarchy**: Better separation between sections
5. **Cross-browser Compatibility**: Ensure consistent rendering

Let me know which option you'd like to pursue!
