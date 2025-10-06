---
description: "React and TypeScript development patterns for Oficina Digital"
applyTo: "**/*.{tsx,ts,jsx,js}"
---

# Frontend Development Guidelines

## Component Structure
Always include context comments for AI agents:

```typescript
/**
 * Component: AppointmentCard
 * Context: Display appointment info for shop dashboard
 * Users: Mechanics (low-tech familiarity)
 * @see .ai/context.md
 */
export function AppointmentCard({ appointment }: Props) {
  // Component implementation
}
```

## Design System Integration
- **Import CSS**: `@import url('../brand/identity/design-system.css');`
- **Use variables**: Reference CSS custom properties from the design system
- **Follow patterns**: Check `brand/docs/quick-start-developers.md` for examples
- **Ready components**: Use classes from `brand/assets/css-components.md`

## State Management Patterns
- **Use**: Context API + React Query for data fetching
- **Avoid**: Complex state management (Redux, Zustand unless justified)
- **Keep**: Simple, predictable state flows

```typescript
// Preferred: Simple Context pattern
const ShopContext = createContext<ShopContextType>();

// Data fetching with React Query
const { data: appointments, isLoading } = useQuery({
  queryKey: ['appointments', shopId],
  queryFn: () => fetchAppointments(shopId)
});
```

## TypeScript Standards
- **Strict mode**: Always enabled
- **Interfaces**: Prefer over types for object shapes
- **Props**: Always type component props explicitly
- **API responses**: Type all external data

```typescript
interface AppointmentProps {
  appointment: Appointment;
  onStatusChange: (id: string, status: AppointmentStatus) => void;
  className?: string;
}
```

## Mobile-First Responsive Patterns
Follow the responsive breakpoints defined in `brand/identity/design-system.css`:

```css
/* Mobile First (default) - as defined in design system */
.component {
  /* Use CSS variables from brand/identity/design-system.css */
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
}

/* Tablet and Desktop - follow design system patterns */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

**Reference**: `brand/identity/design-system.css` for spacing, typography, and breakpoint variables.

## Performance Requirements
- **Lazy loading**: For routes and heavy components
- **Code splitting**: By feature/route
- **Image optimization**: WebP, proper sizing
- **Bundle size**: Monitor and optimize