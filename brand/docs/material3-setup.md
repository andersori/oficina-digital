# Material Design 3 Setup - Oficina Digital

## Guia de Configuração Completa para React + Material UI

Este guia explica como configurar o Material Design 3 com os temas customizados da Oficina Digital em um projeto React + Vite.

## 1. Instalação e Dependências

### Instalar Material UI
```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install @fontsource/roboto
```

### Dependências adicionais recomendadas
```bash
npm install @mui/x-date-pickers
npm install @mui/lab
npm install @mui/system
```

## 2. Configuração do Tema

### Criar arquivo de tema (src/theme/theme.js)
```javascript
import { createTheme } from '@mui/material/styles';

const oficinaTheme = createTheme({
  palette: {
    primary: {
      main: '#1976D2',        // Azul confiável
      light: '#42A5F5',
      dark: '#1565C0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFA726',        // Laranja energético
      light: '#FFB74D',
      dark: '#F57C00',
      contrastText: '#000000',
    },
    tertiary: {
      main: '#66BB6A',        // Verde positivo
      light: '#81C784',
      dark: '#4CAF50',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#F44336',
      light: '#EF5350',
      dark: '#D32F2F',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FF9800',
      light: '#FFB74D',
      dark: '#F57C00',
      contrastText: '#000000',
    },
    info: {
      main: '#2196F3',
      light: '#64B5F6',
      dark: '#1976D2',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#BDBDBD',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      textTransform: 'none', // Remover uppercase padrão
    },
  },
  shape: {
    borderRadius: 12, // Border radius padrão mais suave
  },
  components: {
    // Customizações globais dos componentes
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          minHeight: 48, // Tamanho mínimo para touch targets
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#1976D2',
          '&:hover': {
            backgroundColor: '#1565C0',
          },
        },
        containedSecondary: {
          backgroundColor: '#FFA726',
          '&:hover': {
            backgroundColor: '#F57C00',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
          '&:hover': {
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.24)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 12px rgba(25, 118, 210, 0.3)',
        },
      },
    },
  },
});

export default oficinaTheme;
```

## 3. Configuração do App Principal

### App.jsx
```jsx
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import officinaTheme from './theme/theme';
import './brand/identity/css/material3-tokens.css';

function App() {
  return (
    <ThemeProvider theme={oficinaTheme}>
      <CssBaseline />
      {/* Seus componentes aqui */}
    </ThemeProvider>
  );
}

export default App;
```

## 4. Componentes Específicos da Oficina Digital

### Botão Principal
```jsx
// components/OficinaButton.jsx
import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const OficinaButton = styled(Button)(({ theme, variant = 'primary' }) => ({
  borderRadius: 12,
  padding: '12px 24px',
  minHeight: 48,
  fontWeight: 600,
  textTransform: 'none',
  ...(variant === 'primary' && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(variant === 'secondary' && {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  }),
}));

export default OficinaButton;
```

### Card de Agendamento
```jsx
// components/AgendamentoCard.jsx
import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
  Avatar,
} from '@mui/material';
import { 
  DirectionsCar,
  Build,
  Schedule,
  Person,
} from '@mui/icons-material';

const AgendamentoCard = ({ agendamento }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'agendado':
        return 'warning';
      case 'em-andamento':
        return 'primary';
      case 'concluido':
        return 'success';
      case 'cancelado':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusLabel = (status) => {
    const labels = {
      'agendado': 'Agendado',
      'em-andamento': 'Em Andamento',
      'concluido': 'Concluído',
      'cancelado': 'Cancelado',
    };
    return labels[status] || status;
  };

  return (
    <Card className="oficina-card" sx={{ mb: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <Person />
            </Avatar>
            <Box>
              <Typography variant="h6" component="h3">
                {agendamento.cliente}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {agendamento.telefone}
              </Typography>
            </Box>
          </Box>
          <Chip
            label={getStatusLabel(agendamento.status)}
            color={getStatusColor(agendamento.status)}
            size="small"
          />
        </Box>

        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <DirectionsCar color="primary" />
          <Typography variant="body1">
            {agendamento.veiculo} - {agendamento.placa}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <Build color="primary" />
          <Typography variant="body1">
            {agendamento.servico}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <Schedule color="primary" />
          <Typography variant="body1">
            {agendamento.data} às {agendamento.horario}
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        {agendamento.status === 'agendado' && (
          <Button size="small" color="primary">
            Iniciar Serviço
          </Button>
        )}
        {agendamento.status === 'em-andamento' && (
          <Button size="small" color="success">
            Concluir
          </Button>
        )}
        <Button size="small" color="inherit">
          Detalhes
        </Button>
      </CardActions>
    </Card>
  );
};

export default AgendamentoCard;
```

### Formulário de Agendamento
```jsx
// components/AgendamentoForm.jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  MenuItem,
  Box,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';

const AgendamentoForm = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    cliente: '',
    telefone: '',
    veiculo: '',
    placa: '',
    servico: '',
    data: null,
    horario: '',
    observacoes: '',
  });

  const servicos = [
    'Troca de óleo',
    'Revisão completa',
    'Alinhamento e balanceamento',
    'Troca de pastilhas de freio',
    'Suspensão',
    'Parte elétrica',
    'Ar condicionado',
    'Outros',
  ];

  const horarios = [
    '08:00', '09:00', '10:00', '11:00',
    '14:00', '15:00', '16:00', '17:00',
  ];

  const handleChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      data: date,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({
      cliente: '',
      telefone: '',
      veiculo: '',
      placa: '',
      servico: '',
      data: null,
      horario: '',
      observacoes: '',
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle>Novo Agendamento</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nome do Cliente"
                  value={formData.cliente}
                  onChange={handleChange('cliente')}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="WhatsApp"
                  value={formData.telefone}
                  onChange={handleChange('telefone')}
                  placeholder="(11) 99999-9999"
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  label="Veículo"
                  value={formData.veiculo}
                  onChange={handleChange('veiculo')}
                  placeholder="Ex: Honda Civic 2020"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Placa"
                  value={formData.placa}
                  onChange={handleChange('placa')}
                  placeholder="ABC-1234"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  select
                  label="Tipo de Serviço"
                  value={formData.servico}
                  onChange={handleChange('servico')}
                  required
                >
                  {servicos.map((servico) => (
                    <MenuItem key={servico} value={servico}>
                      {servico}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePicker
                  label="Data"
                  value={formData.data}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Horário"
                  value={formData.horario}
                  onChange={handleChange('horario')}
                  required
                >
                  {horarios.map((horario) => (
                    <MenuItem key={horario} value={horario}>
                      {horario}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Observações"
                  value={formData.observacoes}
                  onChange={handleChange('observacoes')}
                  placeholder="Descreva o problema ou observações importantes..."
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={handleSubmit} variant="contained">
            Agendar Serviço
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
};

export default AgendamentoForm;
```

## 5. Hook para Tema Escuro

```jsx
// hooks/useTheme.js
import { useState, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';

export const useThemeMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    document.body.setAttribute('data-theme', newMode ? 'dark' : 'light');
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      // ... resto da configuração do tema
    },
  });

  return { darkMode, toggleDarkMode, theme };
};
```

## 6. Configuração do Vite

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/styles/variables.scss";`
      }
    }
  }
})
```

## 7. Testes com Testing Library

```jsx
// __tests__/AgendamentoCard.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import AgendamentoCard from '../components/AgendamentoCard';
import theme from '../theme/theme';

const mockAgendamento = {
  cliente: 'João Silva',
  telefone: '(11) 99999-9999',
  veiculo: 'Honda Civic 2020',
  placa: 'ABC-1234',
  servico: 'Troca de óleo',
  data: '2024-10-15',
  horario: '09:00',
  status: 'agendado',
};

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('AgendamentoCard', () => {
  test('renders agendamento information correctly', () => {
    renderWithTheme(<AgendamentoCard agendamento={mockAgendamento} />);
    
    expect(screen.getByText('João Silva')).toBeInTheDocument();
    expect(screen.getByText('Honda Civic 2020 - ABC-1234')).toBeInTheDocument();
    expect(screen.getByText('Troca de óleo')).toBeInTheDocument();
    expect(screen.getByText('Agendado')).toBeInTheDocument();
  });
});
```

## 8. Scripts do Package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint src --ext js,jsx --fix"
  }
}
```

## 9. Checklist de Implementação

### ✅ Setup Base
- [ ] Material UI instalado e configurado
- [ ] Tema customizado criado
- [ ] CSS tokens importados
- [ ] Fonts configuradas

### ✅ Componentes
- [ ] Botões customizados implementados
- [ ] Cards de agendamento criados
- [ ] Formulários funcionais
- [ ] Navegação mobile-first

### ✅ Funcionalidades
- [ ] Tema escuro implementado
- [ ] Responsividade testada
- [ ] Acessibilidade validada
- [ ] Performance otimizada

### ✅ Testes
- [ ] Testes unitários configurados
- [ ] Testes de componentes implementados
- [ ] Testes de integração funcionais
- [ ] Coverage adequado

---

**Próximo passo**: Implementar os componentes específicos do domínio da Oficina Digital usando esta base do Material Design 3.