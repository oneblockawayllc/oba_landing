# Adaptive Growth Design Tokens

Design tokens for the Adaptive Growth theme, based on Group-38.png branding with biomorphic AI and neural pathway elements.

## Usage

### CSS Custom Properties

Import the tokens in your CSS:

```css
@import '../design-tokens.css';
```

Then use the variables in your styles:

```css
.my-button {
  background: var(--ag-gradient-primary);
  color: var(--ag-text-primary);
  padding: var(--ag-padding-button);
  border-radius: var(--ag-radius-button);
  transition: var(--ag-transition-base);
}

.my-button:hover {
  border-radius: var(--ag-radius-button-hover-primary);
  transform: var(--ag-transform-button-hover);
}
```

### Utility Classes

Pre-built utility classes are available:

```html
<button class="ag-button-primary">Primary Button</button>
<button class="ag-button-secondary">Secondary Button</button>
<div class="ag-card">Card Content</div>
<input class="ag-input" type="text" placeholder="Enter text">
<span class="ag-badge">Badge</span>
<h1 class="ag-gradient-text">Gradient Heading</h1>
```

### JSON Tokens

For programmatic access (JavaScript/TypeScript):

```javascript
import tokens from './design-tokens.json';

const primaryColor = tokens.colors.primary.start; // "#ff00ff"
const buttonPadding = tokens.spacing.button.padding; // "0.875rem 2rem"
```

## Token Categories

### Colors
- Primary gradient colors (magenta to purple)
- Background colors (dark theme)
- Text colors (with opacity variations)
- Border colors

### Typography
- Font sizes (title, headings, body, buttons, labels)
- Font weights
- Letter spacing
- Line heights
- Text transforms

### Spacing
- Scale: xs, sm, md, lg, xl, 2xl, 3xl
- Component-specific spacing (buttons, cards, inputs, badges)

### Border Radius
- Blob morphing values for buttons, cards, and inputs
- Hover and focus states

### Shadows
- Button shadows
- Card shadows
- Input focus shadows
- Accent glow effects

### Transitions & Animations
- Transition timing functions
- Animation durations
- Transform values
- Keyframe animations

### Effects
- Backdrop blur
- Grid patterns
- Neural pathway lines

## Key Features

### Blob Morphing
The theme uses organic blob shapes that morph on interaction:
- Buttons: `50px` → `60px 40px 60px 40px` (primary) or `40px 60px 40px 60px` (secondary)
- Cards: `24px 12px 24px 12px` → `12px 24px 12px 24px`
- Inputs: `12px` → `12px 20px 12px 20px` (hover) → `20px 12px 20px 12px` (focus)

### Neural Pathway Animations
- Grid flow pattern on button hover
- Neural pathway lines that sweep across buttons
- Gentle floating background patterns on cards

### Dark Theme
- Base background: `#2a2a2a`
- Semi-transparent overlays for depth
- High contrast text for readability

## Examples

### Creating a Custom Button

```css
.custom-button {
  background: var(--ag-gradient-primary);
  color: var(--ag-text-primary);
  padding: var(--ag-padding-button);
  border-radius: var(--ag-radius-button);
  font-size: var(--ag-font-size-button);
  font-weight: var(--ag-font-weight-button);
  box-shadow: var(--ag-shadow-button);
  transition: var(--ag-transition-base);
  position: relative;
  overflow: hidden;
}

.custom-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--ag-grid-pattern);
  opacity: 0;
  transition: opacity 0.4s;
}

.custom-button:hover::before {
  opacity: 1;
  animation: ag-grid-flow var(--ag-animation-grid-flow);
}

.custom-button:hover {
  transform: var(--ag-transform-button-hover);
  border-radius: var(--ag-radius-button-hover-primary);
  box-shadow: var(--ag-shadow-button-hover);
}
```

### Creating a Custom Card

```css
.custom-card {
  background: var(--ag-bg-card);
  backdrop-filter: var(--ag-backdrop-blur);
  border-radius: var(--ag-radius-card);
  padding: var(--ag-padding-card);
  border: 1px solid var(--ag-border-base);
  box-shadow: var(--ag-shadow-card);
  transition: var(--ag-transition-base);
  position: relative;
  overflow: hidden;
}

.custom-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: var(--ag-bg-pattern-card);
  animation: ag-gentle-float var(--ag-animation-gentle-float);
  pointer-events: none;
}

.custom-card:hover {
  border-radius: var(--ag-radius-card-hover);
  transform: var(--ag-transform-card-hover);
  border-color: var(--ag-border-card-hover);
  box-shadow: var(--ag-shadow-card-hover);
  background: var(--ag-bg-card-hover);
}
```

## Integration with Tailwind

You can extend Tailwind config to use these tokens:

```javascript
// tailwind.config.ts
import tokens from './design-tokens.json';

export default {
  theme: {
    extend: {
      colors: {
        'ag-primary-start': tokens.colors.primary.start,
        'ag-primary-end': tokens.colors.primary.end,
      },
      borderRadius: {
        'ag-button': tokens.borderRadius.button,
        'ag-card': tokens.borderRadius.card,
      },
      // ... etc
    },
  },
};
```

