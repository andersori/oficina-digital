---
description: "User personas and UX guidelines for Oficina Digital"
applyTo: "**/*.{tsx,jsx,ts,js,css,scss,html}"
---

# User Experience Guidelines

## Primary Persona: João (Shop Owner)
- **Age**: 45 years, 20 years experience
- **Tech Level**: Low/Medium familiarity ⚠️ **CRITICAL**
- **Goals**: Increase efficiency, reduce manual work, grow business
- **Frustrations**: Complex interfaces, technical jargon, long workflows

## Secondary Persona: Maria (Customer)
- **Age**: 35 years, professional
- **Tech Level**: High familiarity
- **Goals**: Convenience, transparency, quick booking
- **Frustrations**: Lack of service visibility, time wasted calling

## UX Design Rules

### Interface Requirements - Material 3 Guidelines
- ✅ Material 3 button variants (filled, outlined, text) 
- ✅ 48px minimum touch targets (Material 3 standard)
- ✅ Simple flows (maximum 3 clicks)
- ✅ Material 3 elevation and color contrast
- ✅ Clear feedback with Material motion
- ❌ Custom components when Material 3 alternatives exist
- ❌ Technical terminology
- ❌ Complex navigation or hidden features

### Material 3 Component Usage
- **Buttons**: Use `Button` component with `variant` prop
- **Cards**: Use `Card` with appropriate elevation
- **Forms**: Use `TextField` with Material 3 styling
- **Navigation**: Use `BottomNavigation` or `Drawer` patterns

### Mobile-First Priority
1. **Mobile** (70% of users)
2. **Desktop** (25% - office computers)
3. **Tablet** (5% - occasional use)

### Error Handling Patterns
```typescript
// Good: User-friendly messaging
"Ops! Não conseguimos salvar. Verifique sua internet e tente novamente."

// Bad: Technical errors
"HTTP 500 - Internal Server Error"
```