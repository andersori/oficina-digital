---
description: "Material Design 3 component usage patterns for Oficina Digital"
applyTo: "**/*.{tsx,jsx}"
---

# Material Design 3 Component Guidelines

## Component Import Pattern
Always import from @mui/material and include brand context:

```typescript
/**
 * Component: [ComponentName]
 * Context: [Purpose description]
 * Users: Mechanics (low-tech familiarity)
 * Design: Material 3 [ComponentType] with brand theming
 */
import { 
  Card, 
  CardContent, 
  Button, 
  Typography,
  useTheme,
  useMediaQuery 
} from '@mui/material';
```

## Essential Material 3 Components

### Buttons (Optimized for Mechanics)
- Use `variant="contained"` for primary actions
- Use `variant="outlined"` for secondary actions  
- Use `variant="text"` for tertiary actions
- Always set `size="large"` for better touch targets
- Add `sx={{ minHeight: 48 }}` when needed

### Cards for Data Display
- Use `Card` with `variant="outlined"` for content containers
- Include `CardContent` for main content
- Use `CardActions` for action buttons
- Apply hover elevation: `'&:hover': { elevation: 4 }`

### Forms and Input
- Use `TextField` with `variant="outlined"`
- Include `helperText` for guidance
- Use `FormControl` + `Select` for dropdowns
- Always include `label` and `required` props

### Navigation
- Use `BottomNavigation` for mobile primary navigation
- Use `Drawer` for desktop sidebar navigation
- Use `AppBar` for top navigation when needed

## Responsive Patterns
```typescript
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('md'));

// Use in components
<Container maxWidth={isMobile ? 'sm' : 'xl'}>
  <Grid container spacing={isMobile ? 1 : 2}>
    {/* Responsive content */}
  </Grid>
</Container>
```

## Status and Feedback
- Use `Chip` for status indicators with semantic colors
- Use `Alert` for user feedback messages
- Use `CircularProgress` for loading states
- Use `Skeleton` for content placeholders

## Brand Color Integration
```typescript
// Use theme colors mapped to brand
sx={{
  backgroundColor: 'primary.main',
  color: 'primary.contrastText',
  '&:hover': {
    backgroundColor: 'primary.dark'
  }
}}
```

## Accessibility (Built-in Material 3)
- Components include ARIA labels automatically
- Focus management handled by Material 3
- Color contrast guaranteed by theme
- Touch targets meet 48px minimum standard