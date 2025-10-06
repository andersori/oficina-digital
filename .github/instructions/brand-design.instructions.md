---
description: "Brand identity and visual design system for Oficina Digital"
applyTo: "**/*.{css,scss,tsx,jsx,html}"
---

# Brand & Visual Design System

Always use these exact design tokens from `brand/identity/`:

## Colors
**Source**: `brand/identity/colors/palette.json`
**CSS Variables**: `brand/identity/design-system.css`

Use the standardized color variables:
- `--color-primary-red` - Primary actions, highlights, CTAs
- `--color-neutral-black` - Primary text, dark backgrounds  
- `--color-neutral-gray-light` - Section backgrounds, cards
- `--color-neutral-gray-medium` - Secondary text, borders
- `--color-neutral-white` - Text on dark backgrounds

For semantic colors use:
- `--color-success` - Success states
- `--color-warning` - Warnings  
- `--color-error` - Errors, destructive actions
- `--color-info` - Information, links

## Typography
**Source**: `brand/identity/typography/fonts.json`
**CSS Variables**: `brand/identity/design-system.css`

Use the standardized font variables:
- `--font-heading` - For titles, logos, headings (Poppins)
- `--font-body` - For body text, buttons, labels (Inter)

Font hierarchy variables are available as `--font-size-*` for consistent sizing.

## How to Use
1. Import the design system: `@import url('../brand/identity/design-system.css');`
2. Use CSS variables in your components
3. Reference `brand/docs/quick-start-developers.md` for practical examples
4. Check `brand/assets/css-components.md` for ready-to-use components

## Design Principles
- **High Contrast**: Minimum 4.5:1 ratio for accessibility
- **Consistent Spacing**: Use 8px grid system
- **Clear Hierarchy**: Distinct visual levels
- **Brand Recognition**: Red for actions, black/gray for content