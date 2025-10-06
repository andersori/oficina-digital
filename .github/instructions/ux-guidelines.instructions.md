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

### Interface Requirements
- ✅ Large buttons (min 44px touch targets)
- ✅ Simple flows (maximum 3 clicks)
- ✅ High contrast (4.5:1 ratio minimum)
- ✅ Clear feedback for all actions
- ❌ Complex navigation or hidden features
- ❌ Technical terminology
- ❌ Small text or buttons

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