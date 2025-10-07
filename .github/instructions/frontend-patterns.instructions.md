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
 * Design: Material 3 Card with brand theming
 * @see .github/copilot-instructions.md
 */
import { Card, CardContent, Button } from '@mui/material';

export function AppointmentCard({ appointment }: Props) {
  return (
    <Card variant="outlined">
      <CardContent>
        {/* Material 3 components with brand styling */}
      </CardContent>
    </Card>
  );
}
```

## Material Design 3 Integration
- **Components**: Use `@mui/material` with Material 3 theming
- **Theme**: Custom theme with Oficina Digital brand colors
- **Typography**: Material 3 scale with Poppins/Inter fonts

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
Use Material 3 breakpoints with brand customization:

```typescript
// Material UI breakpoints with brand theming
import { useTheme, useMediaQuery } from '@mui/material';

function ResponsiveComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Container maxWidth={isMobile ? 'sm' : 'lg'}>
      {/* Material 3 responsive components */}
    </Container>
  );
}
```

## Performance Requirements
- **Lazy loading**: For routes and heavy components
- **Code splitting**: By feature/route
- **Image optimization**: WebP, proper sizing
- **Bundle size**: Monitor and optimize