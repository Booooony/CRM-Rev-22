# Dashboard Design Reference

## Overview
This document serves as the design system reference for the CRM Rev 2 project, based on the provided dashboard mockup.

---

## Color Scheme

### Theme
- **Primary Theme**: Dark mode dashboard
- **Background**: Dark grey/charcoal
- **Card Background**: Slightly lighter dark grey (elevated cards)
- **Text Primary**: White/Light grey
- **Text Secondary**: Medium grey

### Accent Colors
- **Success/Positive**: Green (various shades for charts and indicators)
  - Chart fill: Light to medium green gradient
  - Status indicator: Bright green dot
- **Warning/In Progress**: Gold/Yellow
  - Status indicator: Star icon
- **Negative/Down**: Red (for negative trends)
- **Neutral**: Grey tones

### Status Indicators
- **Done**: Green dot (●)
- **In Process**: Gold/Yellow star icon (⭐)
- **Positive Trend**: Upward arrow icon
- **Negative Trend**: Downward arrow icon

---

## Component Styles

### 1. KPI Cards (Key Performance Indicators)

**Layout:**
- 4 cards in a row (responsive grid)
- Equal width, consistent spacing
- Elevated appearance with subtle shadow

**Structure:**
```
┌─────────────────────────────┐
│ METRIC NAME                 │
│                             │
│ $1,250.00    +12.5% ↑      │
│                             │
│ Trending up this month      │
│ Visitors for the last 6 mo │
└─────────────────────────────┘
```

**Elements:**
- **Title**: Small, uppercase or regular case, grey text
- **Main Value**: Large, bold, white text (primary metric)
- **Percentage Change**: Medium size, colored based on positive/negative
  - Positive: Green with ↑ icon
  - Negative: Red with ↓ icon
- **Description Line 1**: Short status message
- **Description Line 2**: Additional context (grey, smaller)

**Metrics Shown:**
1. Total Revenue
2. New Customers
3. Active Accounts
4. Growth Rate

---

### 2. Chart/Graph Card

**Header Section:**
- **Title**: "Total Visitors" (large, bold, white)
- **Subtitle**: "Total for the last 3 months" (grey, smaller)
- **Time Period Selectors**: Horizontal button group
  - Options: "Last 3 months" | "Last 30 days" | "Last 7 days"
  - Selected: Highlighted background
  - Unselected: Transparent/subtle background

**Chart Area:**
- **Type**: Area chart (filled line graph)
- **Fill**: Green gradient (darker at bottom, lighter at top)
- **Style**: Smooth curves, clean appearance
- **X-Axis**: Date labels (e.g., "Jun 24", "Jun 25", etc.)
- **Y-Axis**: Value labels (implicit, may be shown)
- **Grid**: Subtle horizontal gridlines

---

### 3. Data Table (Document Outline)

**Tab Navigation:**
- Horizontal tabs at top
- Selected tab: Underlined or highlighted
- Tab labels with optional count badges (e.g., "Past Performance 3")
- Tabs shown:
  - Outline (selected)
  - Past Performance 3
  - Key Personnel 2
  - Focus Documents

**Action Buttons:**
- Positioned to the right of tabs
- **Customize Columns**: Button with dropdown arrow
- **+ Add Section**: Primary action button with plus icon

**Table Structure:**

**Columns:**
1. **Checkbox**: For row selection (left-most)
2. **Drag Handle**: Three horizontal dots icon (⋮⋮)
3. **Section Title**: Text (left-aligned)
4. **Section Type**: Text (e.g., "Narrative", "Cover page")
5. **Status**: Icon + text (e.g., "Done" with green dot, "In Process" with star)
6. **Target**: Numeric value
7. **Limit**: Numeric value
8. **Reviewer**: Text or dropdown selector
9. **More Options**: Three vertical dots icon (⋮)

**Row Styling:**
- Alternating row backgrounds (subtle)
- Hover state: Slight highlight
- Selected row: More prominent highlight
- Border between rows: Subtle line

**Status Cell Styling:**
- Icon + text combination
- Green dot (●) for "Done"
- Star icon (⭐) for "In Process"
- Colored text matching status

**Reviewer Cell:**
- Name displayed when assigned
- "Assign reviewer" with dropdown arrow when unassigned
- Clickable dropdown selector

**Interactive Elements:**
- Checkboxes: Standard checkbox style
- Drag handles: Visible on hover or always visible
- Dropdown arrows: Next to dropdown fields
- More options: Three-dot menu icon

---

## Typography

### Hierarchy
1. **Page Title / Main Metric**: 32-48px, Bold, White
2. **Section Headers**: 20-24px, Bold/Semi-bold, White
3. **Card Titles**: 14-16px, Regular/Medium, Grey
4. **Body Text**: 14px, Regular, Light grey
5. **Small Text / Captions**: 12px, Regular, Medium grey

### Font Family
- Modern sans-serif (e.g., Inter, Roboto, System UI)
- Consistent across all components

---

## Spacing & Layout

### Container Spacing
- **Card Padding**: 20-24px
- **Card Margin**: 16-20px between cards
- **Section Margin**: 24-32px between major sections

### Grid System
- **KPI Cards**: 4-column grid (responsive: 2x2 on tablet, 1 column on mobile)
- **Chart Section**: Full width
- **Table Section**: Full width

---

## Interactive States

### Buttons
- **Default**: Solid or outlined, appropriate color
- **Hover**: Slight color change, cursor pointer
- **Active/Selected**: Highlighted background or border
- **Disabled**: Reduced opacity, no pointer

### Table Rows
- **Default**: Standard background
- **Hover**: Subtle highlight
- **Selected**: Prominent highlight (checkbox checked)
- **Dragging**: Elevated appearance, reduced opacity

### Dropdowns
- **Closed**: Text with down arrow
- **Open**: Dropdown menu below
- **Hover Option**: Highlighted background

---

## Icons

### Standard Icons Used
- **Trend Up**: ↑ (arrow pointing up)
- **Trend Down**: ↓ (arrow pointing down)
- **Status Done**: ● (green dot)
- **Status In Process**: ⭐ (star)
- **Drag Handle**: ⋮⋮ (six dots in two columns)
- **More Options**: ⋮ (three vertical dots)
- **Dropdown**: ▼ (down arrow)
- **Add**: + (plus sign)

### Icon Styling
- Line icons or filled, consistent style
- Size: 16-20px typically
- Color: Inherits from context or specific status color

---

## Responsive Behavior

### Breakpoints
- **Desktop**: 1200px+ (4 KPI cards)
- **Tablet**: 768-1199px (2x2 KPI cards)
- **Mobile**: <768px (Stacked KPI cards, horizontal scroll for table)

### Table Responsiveness
- Horizontal scroll on smaller screens
- Consider card view for mobile
- Maintain functionality of all interactive elements

---

## Accessibility Considerations

- Sufficient color contrast (WCAG AA minimum)
- Keyboard navigation support
- Focus indicators on interactive elements
- Screen reader friendly labels
- Proper semantic HTML

---

## Implementation Notes

### CSS Framework Suggestions
- Tailwind CSS (with dark mode utilities)
- Material-UI (dark theme)
- Custom CSS with CSS variables for theming

### Chart Library Suggestions
- Chart.js
- Recharts (for React)
- ApexCharts
- D3.js (for custom implementations)

### Table Library Suggestions
- TanStack Table (React Table)
- AG Grid
- Material-UI DataGrid
- Custom implementation with drag-and-drop (react-beautiful-dnd)

---

## Component Checklist

When implementing any dashboard view, ensure:

- [ ] Dark theme is applied consistently
- [ ] Green color is used for positive indicators and charts
- [ ] KPI cards follow the exact structure (value, percentage, description)
- [ ] Charts use area style with green gradient
- [ ] Tables include all interactive elements (checkboxes, drag handles, dropdowns)
- [ ] Status indicators use icons (green dot, star)
- [ ] Tabs navigation is present where applicable
- [ ] Action buttons are positioned correctly
- [ ] Typography hierarchy is maintained
- [ ] Spacing is consistent with the reference
- [ ] Hover and active states are implemented
- [ ] Responsive behavior works across devices

---

## Example Color Palette (Extract these from your design)

```css
:root {
  /* Backgrounds */
  --bg-primary: #1a1a1a;
  --bg-secondary: #2a2a2a;
  --bg-elevated: #333333;
  
  /* Text */
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --text-tertiary: #808080;
  
  /* Accents */
  --accent-success: #4ade80;
  --accent-success-dark: #22c55e;
  --accent-warning: #fbbf24;
  --accent-error: #ef4444;
  
  /* Chart Colors */
  --chart-green-light: #86efac;
  --chart-green-medium: #4ade80;
  --chart-green-dark: #22c55e;
  
  /* Borders */
  --border-subtle: #404040;
  --border-medium: #505050;
  
  /* Interactive */
  --hover-overlay: rgba(255, 255, 255, 0.05);
  --active-overlay: rgba(255, 255, 255, 0.1);
}
```

---

## Sample HTML Structure

### KPI Card
```html
<div class="kpi-card">
  <div class="kpi-header">Total Revenue</div>
  <div class="kpi-value-row">
    <span class="kpi-value">$1,250.00</span>
    <span class="kpi-change positive">
      +12.5% <span class="trend-icon">↑</span>
    </span>
  </div>
  <div class="kpi-description">Trending up this month</div>
  <div class="kpi-subdescription">Visitors for the last 6 months</div>
</div>
```

### Table Row
```html
<tr class="table-row">
  <td><input type="checkbox" /></td>
  <td><span class="drag-handle">⋮⋮</span></td>
  <td>Executive summary</td>
  <td>Narrative</td>
  <td><span class="status done"><span class="status-icon">●</span> Done</span></td>
  <td>10</td>
  <td>13</td>
  <td>Eddie Lake</td>
  <td><button class="more-options">⋮</button></td>
</tr>
```

---

*Last Updated: November 13, 2025*

