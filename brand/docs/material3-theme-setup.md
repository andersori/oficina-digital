# Material Design 3 Theme Configuration

## Setup do Tema Material UI

### 1. Instalar Dependências
```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material @mui/lab
```

### 2. Criar Tema Material 3 Customizado
```typescript
// src/theme/material3-theme.ts
import { createTheme } from '@mui/material/styles';

// Baseado em: brand/identity/colors/palette-material3.json
const material3Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E53935',      // md-sys-color-primary
      dark: '#C62828',      // md-sys-color-primary-hover
      light: '#FFEBEE',     // md-sys-color-primary-container
      contrastText: '#FFFFFF', // md-sys-color-on-primary
    },
    secondary: {
      main: '#424242',      // md-sys-color-secondary
      dark: '#616161',      // md-sys-color-secondary-hover
      light: '#F5F5F5',     // md-sys-color-secondary-container
      contrastText: '#FFFFFF', // md-sys-color-on-secondary
    },
    error: {
      main: '#F44336',      // md-sys-color-error
      dark: '#C62828',      // md-sys-color-error-dark
      light: '#FFEBEE',     // md-sys-color-error-container
      contrastText: '#FFFFFF', // md-sys-color-on-error
    },
    warning: {
      main: '#FF9800',      // md-sys-color-warning (semantic)
      dark: '#F57C00',
      light: '#FFF3E0',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#2196F3',      // md-sys-color-info (semantic)
      dark: '#1976D2',
      light: '#E3F2FD',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50',      // md-sys-color-success (semantic)
      dark: '#388E3C',
      light: '#E8F5E8',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',   // md-sys-color-background
      paper: '#F5F5F5',     // md-sys-color-surface
    },
    text: {
      primary: '#121212',   // md-sys-color-on-surface
      secondary: '#424242', // md-sys-color-on-surface-variant
      disabled: '#9E9E9E',  // md-sys-color-on-disabled
    },
    divider: '#9E9E9E',     // md-sys-color-outline
    action: {
      hover: 'rgba(229, 57, 53, 0.04)',
      selected: 'rgba(229, 57, 53, 0.08)',
      disabled: '#E0E0E0',
      disabledBackground: '#F5F5F5',
    },
  },
  typography: {
    // Material 3 Typography Scale com fontes da marca
    fontFamily: [
      'Inter',
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(','),
    
    // Display Scale (Poppins para headlines)
    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 800,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.4,
    },
    
    // Body Scale (Inter para textos)
    body1: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    
    // Label Scale (Inter para botões e labels)
    button: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      letterSpacing: '0.025em',
      textTransform: 'none', // Manter case original
    },
    caption: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.4,
      letterSpacing: '0.025em',
    },
    overline: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
      fontSize: '0.75rem',
      lineHeight: 1.4,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 12, // Material 3 border radius
  },
  spacing: 8, // 8px grid system
  components: {
    // Material 3 Component Customizations
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 48, // Material 3 touch target
          borderRadius: 24, // Material 3 button radius
          textTransform: 'none',
          fontWeight: 500,
          paddingInline: 24,
          paddingBlock: 12,
        },
        contained: {
          boxShadow: 'none', // Material 3 filled buttons no shadow
          '&:hover': {
            boxShadow: 'var(--md-sys-elevation-level1)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
        sizeSmall: {
          minHeight: 40,
          paddingInline: 16,
          paddingBlock: 8,
        },
        sizeLarge: {
          minHeight: 56,
          paddingInline: 32,
          paddingBlock: 16,
          fontSize: '1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16, // Material 3 card radius
          border: '1px solid var(--md-sys-color-outline-variant)',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'var(--md-sys-elevation-level1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12, // Material 3 text field radius
            minHeight: 48, // Touch target
            '& fieldset': {
              borderWidth: 2,
            },
            '&:hover fieldset': {
              borderWidth: 2,
            },
            '&.Mui-focused fieldset': {
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16, // Material 3 chip radius
          height: 32,
          fontSize: '0.875rem',
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid var(--md-sys-color-outline-variant)',
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          borderTop: '1px solid var(--md-sys-color-outline-variant)',
          backgroundColor: 'var(--md-sys-color-surface)',
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          minWidth: 64,
          paddingTop: 8,
          paddingBottom: 8,
          '&.Mui-selected': {
            color: 'var(--md-sys-color-primary)',
          },
        },
      },
    },
  },
});

export default material3Theme;
```

### 3. Setup do Provider
```typescript
// src/App.tsx
import { ThemeProvider, CssBaseline } from '@mui/material';
import material3Theme from './theme/material3-theme';

function App() {
  return (
    <ThemeProvider theme={material3Theme}>
      <CssBaseline />
      {/* Importar CSS tokens */}
      <link rel="stylesheet" href="../brand/identity/material3-tokens.css" />
      
      {/* Sua aplicação */}
      <Router>
        <Routes>
          {/* Suas rotas */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
```

### 4. Exemplo de Uso
```typescript
// src/components/AppointmentCard.tsx
import { 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Button, 
  Chip,
  useTheme 
} from '@mui/material';

/**
 * Component: AppointmentCard
 * Context: Display appointment for shop dashboard
 * Users: Mechanics (low-tech familiarity)
 * Design: Material 3 Card with Oficina Digital brand theming
 */
function AppointmentCard({ appointment }: Props) {
  const theme = useTheme();
  
  return (
    <Card className="md-surface md-elevation-1">
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          {appointment.serviceName}
        </Typography>
        
        <Typography variant="body2" className="md-text-on-surface-variant" gutterBottom>
          Cliente: {appointment.customerName}
        </Typography>
        
        <Typography variant="body2" className="md-text-on-surface-variant" gutterBottom>
          Veículo: {appointment.vehicleModel} - {appointment.vehiclePlate}
        </Typography>
        
        <Chip 
          label={appointment.status}
          color={getStatusColor(appointment.status)}
          size="small"
          sx={{ mt: 1 }}
        />
      </CardContent>
      
      <CardActions>
        <Button 
          variant="contained" 
          size="large"
          color="primary"
        >
          Atualizar Status
        </Button>
        <Button 
          variant="outlined" 
          size="large"
        >
          Ver Detalhes
        </Button>
      </CardActions>
    </Card>
  );
}

function getStatusColor(status: string): 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' {
  switch (status) {
    case 'agendado': return 'info';
    case 'em_andamento': return 'warning';
    case 'concluido': return 'success';
    case 'cancelado': return 'error';
    default: return 'default';
  }
}

export default AppointmentCard;
```

## Modo Escuro (Opcional)
```typescript
// src/theme/dark-theme.ts
import { createTheme } from '@mui/material/styles';
import material3Theme from './material3-theme';

const darkTheme = createTheme({
  ...material3Theme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFCDD2',      // md-sys-color-primary (dark)
      dark: '#FFEBEE',      // md-sys-color-primary-container (dark)
      light: '#C62828',     // md-sys-color-on-primary (dark)
      contrastText: '#C62828',
    },
    background: {
      default: '#121212',   // md-sys-color-background (dark)
      paper: '#1E1E1E',     // md-sys-color-surface (dark)
    },
    text: {
      primary: '#FFFFFF',   // md-sys-color-on-surface (dark)
      secondary: '#BDBDBD', // md-sys-color-on-surface-variant (dark)
    },
    // ... outros ajustes para modo escuro
  },
});
```

## Migração do CSS Existente
```css
/* Antes (CSS custom) */
.button-primary {
  background-color: var(--color-primary-red);
  color: var(--color-neutral-white);
}

/* Depois (Material 3) */
.button-primary {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}

/* Ou melhor ainda, use o componente Material UI */
<Button variant="contained" color="primary">
  Texto do Botão
</Button>
```

---

*Configuração completa para Material Design 3 com as cores da marca Oficina Digital*