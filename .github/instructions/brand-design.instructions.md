---
description: "Brand identity and Material Design 3 integration for Oficina Digital"
applyTo: "**/*.{css,scss,tsx,jsx,html}"
---

# Brand & Material Design 3 Integration

Always use Material Design 3 (Material You) components with Oficina Digital brand customization.

## Material Design 3 Setup
**Framework**: Use Material UI v5+ with Material Design 3 tokens
**Documentation**: https://m3.material.io/
**React Library**: `@mui/material` with Material You theming

## Brand Color Mapping to Material 3
**Source**: `brand/identity/colors/palette.json`
**CSS Variables**: `brand/identity/design-system.css`

Map Oficina Digital colors to Material 3 semantic tokens:
- `--color-primary-red` → `primary` color role
- `--color-neutral-black` → `surface` and `on-surface` tokens
- `--color-neutral-gray-light` → `surface-variant` 
- `--color-neutral-gray-medium` → `outline` and `on-surface-variant`

## Typography Integration
**Source**: `brand/identity/typography/fonts.json`

Use Material 3 typography scale with brand fonts:
- `--font-heading` (Poppins) → `displayLarge`, `headlineLarge`, `titleLarge`
- `--font-body` (Inter) → `bodyLarge`, `bodyMedium`, `labelLarge`

## Component Guidelines
- **Buttons**: Use Material 3 button variants (filled, outlined, text)
- **Cards**: Follow Material 3 elevation and surface guidelines  
- **Navigation**: Use Material 3 navigation patterns
- **Forms**: Material 3 text fields with brand color theming

## How to Use
1. Install: `npm install @mui/material @emotion/react @emotion/styled`
2. Create Material 3 theme with brand colors
3. Reference `brand/docs/material3-integration.md` for setup guide
4. Use Material components with brand token overrides

## Design Principles
- **High Contrast**: Minimum 4.5:1 ratio for accessibility
- **Consistent Spacing**: Use 8px grid system
- **Clear Hierarchy**: Distinct visual levels
- **Brand Recognition**: Red for actions, black/gray for content