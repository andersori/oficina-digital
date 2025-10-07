# Material Design 3 Integration Guide

> Guia de Integração para Projetos Existentes

Este documento orienta como integrar o Material Design 3 da Oficina Digital em projetos React existentes.

## 🚀 Setup Rápido

### 1. Instalação
```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material @fontsource/roboto
```

### 2. Tema Custom com Brand Colors
```typescript
// src/theme/oficinaTheme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Azul confiável
      light: '#42A5F5',
      dark: '#1565C0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFA726', // Laranja energético
      light: '#FFB74D',
      dark: '#F57C00',
      contrastText: '#000000',
    },
    success: {
      main: '#66BB6A', // Verde positivo
      light: '#81C784',
      dark: '#4CAF50',
    },
    error: {
      main: '#F44336',
      light: '#EF5350',
      dark: '#D32F2F',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 800,
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
    },
    button: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 48,
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
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
import theme from './theme/oficinaTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Sua aplicação */}
    </ThemeProvider>
  );
}
```

## 🎨 Componentes Principais

### Botões (UX para mecânicos)
```tsx
import { Button } from '@mui/material';

// Botão primário - ações principais
<Button 
  variant="contained" 
  size="large"
  sx={{ minHeight: 48 }}
>
  Agendar Serviço
</Button>

// Botão secundário
<Button variant="outlined" size="large">
  Cancelar
</Button>

// Botão texto
<Button variant="text">
  Ver Detalhes
</Button>
```

### Cards para Agendamentos
```tsx
import { Card, CardContent, CardActions, Typography, Chip } from '@mui/material';

function AgendamentoCard({ agendamento }) {
  return (
    <Card 
      variant="outlined"
      sx={{ 
        margin: 1,
        '&:hover': { elevation: 4 }
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {agendamento.servico}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {agendamento.cliente}
        </Typography>
        <Chip 
          label={agendamento.status}
          color={getStatusColor(agendamento.status)}
          size="small"
          sx={{ mt: 1 }}
        />
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Atualizar
        </Button>
        <Button size="small" variant="text">
          Detalhes
        </Button>
      </CardActions>
    </Card>
  );
}
```

### Formulários
```tsx
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// Campo de texto
<TextField
  label="Nome do Cliente"
  variant="outlined"
  fullWidth
  required
  sx={{ mb: 2 }}
/>

// Select
<FormControl fullWidth sx={{ mb: 2 }}>
  <InputLabel>Tipo de Serviço</InputLabel>
  <Select value={servico} onChange={handleChange}>
    <MenuItem value="oleo">Troca de Óleo</MenuItem>
    <MenuItem value="freio">Freios</MenuItem>
    <MenuItem value="pneu">Pneus</MenuItem>
  </Select>
</FormControl>
```

### Navegação Mobile
```tsx
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { CalendarToday, Build, Person, Settings } from '@mui/icons-material';

function MobileNavigation() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(_, newValue) => setValue(newValue)}
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        zIndex: 1000
      }}
    >
      <BottomNavigationAction label="Agenda" icon={<CalendarToday />} />
      <BottomNavigationAction label="Serviços" icon={<Build />} />
      <BottomNavigationAction label="Clientes" icon={<Person />} />
      <BottomNavigationAction label="Config" icon={<Settings />} />
    </BottomNavigation>
  );
}
```

## 📱 Layout Responsivo

### Container Principal
```tsx
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

### Breakpoints Material 3
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

## 🎨 Cores Semânticas

### Status Helper
```typescript
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

### Ícones Material
```tsx
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

## 🚀 Migração Passo a Passo

### 1. Auditoria do Projeto
```bash
# Listar componentes atuais
find src -name "*.jsx" -o -name "*.js" | grep -i component

# Identificar dependências UI
grep -r "import.*from.*@mui\|material-ui\|antd\|chakra" src/
```

### 2. Backup e Preparação
```bash
# Criar branch para migração
git checkout -b feature/material3-integration

# Backup dos estilos atuais
cp -r src/styles src/styles.backup
```

### 3. Instalação
```bash
# Remover bibliotecas antigas
npm uninstall @mui/material-v4 antd chakra-ui

# Instalar Material UI v5
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material @mui/x-date-pickers
```

### 4. Provider com Tema
```tsx
// src/providers/ThemeProvider.tsx
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { oficinaTheme, oficinaDarkTheme } from '../theme/oficinaTheme';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const currentTheme = darkMode ? oficinaDarkTheme : oficinaTheme;

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <MuiThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
```

### 5. Migração de Componentes

#### Wrapper para Transição
```tsx
// src/components/migration/ButtonWrapper.tsx
import { Button as MuiButton } from '@mui/material';

const ButtonWrapper = ({ 
  variant, 
  color, 
  children, 
  legacy = false,
  ...props 
}) => {
  if (legacy) {
    return <OldButton variant={variant} {...props}>{children}</OldButton>;
  }

  const muiVariant = variant === 'primary' ? 'contained' : variant;
  const muiColor = color === 'danger' ? 'error' : color;

  return (
    <MuiButton 
      variant={muiVariant}
      color={muiColor}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
```

### 6. Testes da Migração

#### Testes de Componentes
```tsx
// src/__tests__/components/AgendamentoForm.test.tsx
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../providers/ThemeProvider';
import AgendamentoForm from '../components/forms/AgendamentoForm';

const renderWithProvider = (component) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe('AgendamentoForm Migration', () => {
  test('renders with Material UI theme', () => {
    renderWithProvider(
      <AgendamentoForm open={true} onClose={() => {}} />
    );
    
    expect(screen.getByLabelText(/nome do cliente/i)).toBeInTheDocument();
  });
});
```

## ✅ Checklist de Migração

### Planejamento
- [ ] Auditoria de componentes existentes
- [ ] Cronograma de migração definido
- [ ] Backup do código atual
- [ ] Estratégia de rollback definida

### Setup
- [ ] Material UI instalado
- [ ] Tema Oficina Digital configurado
- [ ] Provider global implementado
- [ ] CSS tokens importados

### Componentes
- [ ] Botões migrados
- [ ] Formulários migrados
- [ ] Cards migrados
- [ ] Navegação migrada
- [ ] Layout responsivo atualizado

### Qualidade
- [ ] Testes unitários passando
- [ ] Performance mantida/melhorada
- [ ] Acessibilidade validada (WCAG AA)
- [ ] Compatibilidade cross-browser

## 🌐 Acessibilidade Material 3

- ✅ **Touch targets**: 48px mínimo (automático)
- ✅ **Focus visível**: Built-in nos componentes
- ✅ **ARIA labels**: Incluídos automaticamente
- ✅ **Color contrast**: Material 3 garante 4.5:1 mínimo
- ✅ **Screen reader**: Semântica HTML correta

## 🎯 Problemas Comuns

### Conflitos de CSS
```css
/* Desabilitar estilos antigos */
.legacy-disabled {
  /* CSS antigo comentado */
}

/* Namespace para novos estilos */
.mui-oficina {
  /* Estilos Material UI */
}
```

### Performance
```tsx
// Lazy loading
const AgendamentoForm = React.lazy(() => 
  import('../components/forms/AgendamentoForm')
);

// Memoização
const AgendamentoCard = React.memo(({ agendamento }) => {
  // Componente...
});
```

### Bundle Size
```bash
# Analisar bundle
npm install --save-dev webpack-bundle-analyzer
npm run build
npx webpack-bundle-analyzer build/static/js/*.js
```

---

**Resultado**: Migração suave para Material Design 3 mantendo funcionalidade e melhorando UX/DX da Oficina Digital! 🎨✨