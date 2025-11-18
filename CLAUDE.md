# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 website for "One Block Away" - an AI Implementation & Orchestration service targeting businesses in downtown Apex and the RTP region. The site showcases a distinctive "Wireframe Catalyst" design system with vaporwave aesthetics and isometric grid patterns.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm lint
```

## Architecture

### Design System Foundation

The project uses a dual design token system:

1. **Wireframe Catalyst Design System** (primary)
   - Defined in `globals.css` with CSS custom properties
   - Vaporwave color palette (magenta `#FF71CE`, cyan `#01CDFE`, purple `#B967FF`)
   - Isometric 30° grid pattern overlays
   - Technical, wireframe-inspired aesthetic
   - Custom components: `.wireframe-btn`, `.wireframe-card`, `.wireframe-input-*`

2. **Adaptive Growth Design Tokens** (legacy/alternative)
   - Defined in `design-tokens.json` and `design-tokens.css`
   - Orange gradient theme (`#ea580c` to `#ff6b35`)
   - Blob morphing animations and organic shapes
   - Neural pathway visual effects
   - See `DESIGN_TOKENS.md` for full documentation

### Tailwind Configuration

The Tailwind config (`tailwind.config.ts`) extends with:
- Custom color system mapping to CSS variables (primary, accent, bg, text, border)
- Font families: display (Bricolage), sans (Inter, IBM Sans), mono (IBM Mono)
- Animated backgrounds and gradients
- Custom border radius values for blob morphing
- Neo-minimalism shadow system

### Page Structure

The site is a single-page application (`app/page.tsx`) with section components:

1. **Hero** - Landing section with main value proposition
2. **Services** - Service offerings
3. **ThreeHeadedMonster** - Core methodology/approach
4. **GeographicFocus** - Apex/RTP regional emphasis
5. **SuccessPrinciples** - Business principles
6. **BookConsult** - Call-to-action for consultation
7. **About** - Company/founder information
8. **Contact** - Contact form

### Component Patterns

- All components use TypeScript with `.tsx` extension
- Components import from `@/components/` (path alias configured)
- Layout includes persistent `Navigation` and `Footer`
- `ScrollReveal` component handles scroll-based animations
- Grid annotations are fixed position elements showing design system metadata

### Styling Approach

- Global styles in `app/globals.css` with extensive custom CSS
- Tailwind utilities for spacing and responsive design
- CSS custom properties for theming (prefixed with `--color-`, `--ag-`, etc.)
- Animation system using `@keyframes` and utility classes
- Spring physics-based timing functions: `--spring-tension`, `--spring-smooth`

### Key Visual Features

- **Isometric Grid**: 30° repeating linear gradients with vaporwave tinting
- **Grid Annotations**: Technical labels in monospace font (e.g., "ISOMETRIC: 30°")
- **Blob Morphing**: Border radius transitions on hover (e.g., `50px` → `60px 40px 60px 40px`)
- **Wireframe Patterns**: Diagonal stripe overlays on hover states
- **Vaporwave Accents**: Bright neon colors against neutral backgrounds

## Important Notes

- The design system emphasizes technical precision with organic, playful interactions
- Two design token systems exist - Wireframe Catalyst is primary, Adaptive Growth is available as alternative
- All animations respect `prefers-reduced-motion`
- Components should maintain the wireframe/technical aesthetic
- Contact form validation expected but implementation may vary
