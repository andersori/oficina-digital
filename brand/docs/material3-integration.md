# Material Design 3 Integration Guide

## Setup Rápido

### 1. Instalação
```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material # Para ícones
```

### 2. Tema Custom com Brand Colors
```typescript
// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E53935', // --color-primary-red
      dark: '#C62828',
      light: '#FFEBEE',
    },
    background: {
      default: '#F5F5F5', // --color-neutral-gray-light
      paper: '#FFFFFF',
    },
    text: {
      primary: '#121212', // --color-neutral-black
      secondary: '#9E9E9E', // --color-neutral-gray-medium
    },
  },
  typography: {
    fontFamily: [
      'Inter', // --font-body
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontFamily: 'Poppins, sans-serif', // --font-heading
      fontWeight: 800,
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Poppins, sans-serif', 
      fontWeight: 600,
    },
    button: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
      textTransform: 'none', // Manter case original
    },
  },
  components: {
    // Customizações para atender mecânicos
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 48, // Material 3 standard para acessibilidade
          borderRadius: 12, // Material 3 rounded corners
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16, // Material 3 card radius
        },
      },
    },
  },
});

export default theme;
```

### 3. Provider Setup
```typescript
// src/App.tsx
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Sua aplicação */}
    </ThemeProvider>
  );
}
```

## Componentes Principais

### Botões (seguindo UX para mecânicos)
```typescript
import { Button, Stack } from '@mui/material';

// Botão primário - ações principais
<Button 
  variant="contained" 
  size="large"
  sx={{ minHeight: 48 }} // Acessibilidade mobile
>
  Agendar Serviço
</Button>

// Botão secundário
<Button 
  variant="outlined" 
  size="large"
>
  Cancelar
</Button>

// Botão texto - ações menos importantes
<Button variant="text">
  Ver Detalhes
</Button>
```

### Cards para Agendamentos
```typescript
import { Card, CardContent, CardActions, Typography, Chip } from '@mui/material';

/**
 * Component: AppointmentCard
 * Context: Display appointment for shop dashboard
 * Users: Mechanics (low-tech familiarity)
 * Design: Material 3 Card with brand theming
 */
function AppointmentCard({ appointment }: Props) {
  return (
    <Card 
      variant="outlined"
      sx={{ 
        margin: 1,
        '&:hover': { 
          elevation: 4 // Material 3 elevation on hover
        }
      }}
    >
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          {appointment.serviceName}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          {appointment.customerName}
        </Typography>
        
        <Chip 
          label={appointment.status}
          color={getStatusColor(appointment.status)}
          size="small"
          sx={{ mt: 1 }}
        />
      </CardContent>
      
      <CardActions>
        <Button size="small" variant="contained">
          Atualizar Status
        </Button>
        <Button size="small" variant="text">
          Ver Detalhes
        </Button>
      </CardActions>
    </Card>
  );
}
```

### Formulários
```typescript
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// Campo de texto
<TextField
  label="Nome do Cliente"
  variant="outlined"
  fullWidth
  required
  sx={{ mb: 2 }}
  helperText="Digite o nome completo"
/>

// Select/Dropdown
<FormControl fullWidth sx={{ mb: 2 }}>
  <InputLabel>Tipo de Serviço</InputLabel>
  <Select
    value={serviceType}
    label="Tipo de Serviço"
    onChange={handleChange}
  >
    <MenuItem value="oil">Troca de Óleo</MenuItem>
    <MenuItem value="brake">Freios</MenuItem>
    <MenuItem value="tire">Pneus</MenuItem>
  </Select>
</FormControl>
```

### Navigation para Mobile
```typescript
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { CalendarToday, Build, Person, Settings } from '@mui/icons-material';

function MobileNavigation() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        zIndex: 1000
      }}
    >
      <BottomNavigationAction 
        label="Agenda" 
        icon={<CalendarToday />} 
      />
      <BottomNavigationAction 
        label="Serviços" 
        icon={<Build />} 
      />
      <BottomNavigationAction 
        label="Clientes" 
        icon={<Person />} 
      />
      <BottomNavigationAction 
        label="Config" 
        icon={<Settings />} 
      />
    </BottomNavigation>
  );
}
```

## Layout Responsivo

### Container Principal
```typescript
import { Container, Grid, useTheme, useMediaQuery } from '@mui/material';

function Dashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth={isMobile ? 'sm' : 'xl'}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {/* Conteúdo principal */}
        </Grid>
        <Grid item xs={12} md={4}>
          {/* Sidebar - escondida em mobile */}
          {!isMobile && <FilterSidebar />}
        </Grid>
      </Grid>
    </Container>
  );
}
```

## Status Colors (Semantic)
```typescript
// Helper function para cores de status
function getStatusColor(status: string): 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' {
  switch (status) {
    case 'agendado': return 'info';
    case 'em_andamento': return 'warning';
    case 'concluido': return 'success';
    case 'cancelado': return 'error';
    default: return 'default';
  }
}
```

## Ícones Material
```typescript
import { 
  CalendarToday,
  Build,
  DirectionsCar,
  Person,
  CheckCircle,
  Schedule,
  Cancel 
} from '@mui/icons-material';

// Uso em componentes
<CheckCircle color="success" />
<Schedule color="warning" />
<Cancel color="error" />
```

## Breakpoints Material 3
```typescript
// xs: 0px
// sm: 600px  
// md: 900px
// lg: 1200px
// xl: 1536px

// Uso com useMediaQuery
const isMobile = useMediaQuery(theme.breakpoints.down('md')); // < 900px
const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 900px - 1200px
const isDesktop = useMediaQuery(theme.breakpoints.up('lg')); // >= 1200px
```

## Acessibilidade Material 3
- ✅ **Touch targets**: 48px mínimo (já incluído nos componentes)
- ✅ **Focus visível**: Automático nos componentes Material
- ✅ **ARIA labels**: Incluídos nos componentes
- ✅ **Color contrast**: Material 3 garante 4.5:1 mínimo
- ✅ **Screen reader**: Semântica HTML correta

---

*Material Design 3 + Brand Oficina Digital = UX profissional e acessível para mecânicos brasileiros*