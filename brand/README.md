# Oficina Digital - Brand System

> Sistema de design completo para a plataforma de gestão de oficinas mecânicas

## 🎨 Visão Geral

Este diretório contém toda a identidade visual, assets e guidelines para manter a consistência da marca **Oficina Digital** em todas as plataformas e touchpoints.

### **Identidade da Marca**
- **Setor**: Gestão de oficinas mecânicas e serviços automotivos
- **Público**: Mecânicos e donos de oficina brasileiros (25-60 anos)
- **Valores**: Confiabilidade, simplicidade, profissionalismo, eficiência

### **Framework de Design**
- **React + Material UI** com tema customizado
- **Material Design 3** como base do sistema
- **CSS Custom Properties** para máxima flexibilidade
- **Mobile-first** com foco em acessibilidade

## 🚀 Para Desenvolvedores

### Material Design 3 (Recomendado)
> ✅ **RECOMENDADO**: Use Material Design 3 para todos os desenvolvimentos

1. **Tema Material UI**: `docs/material3-setup.md` - Setup completo
2. **CSS Tokens**: `identity/css/material3-tokens.css` - CSS variables semânticas
3. **Migração**: `docs/material3-integration.md` - Guia de migração
4. **Componentes**: Use Material UI com tema customizado

### Integração com Copilot
As instruções do GitHub Copilot referenciam Material Design 3:
- Material UI components com tema customizado da marca
- Tokens semânticos (`--md-sys-color-primary`, etc.)
- Acessibilidade WCAG AA built-in
- Touch targets 48px automáticos

## 📁 Estrutura do Projeto

```
brand/
├── assets/                    # Assets visuais da marca
│   ├── icons/                # Ícones SVG específicos da Oficina Digital
│   └── images/               # Imagens, logos e ilustrações
├── identity/                 # Sistema de identidade visual
│   ├── colors/               # Paletas de cores e tokens
│   │   └── palette-material3.json
│   └── css/                  # Tokens CSS e temas
│       └── material3-tokens.css
└── docs/                     # Documentação técnica
    ├── material3-setup.md    # Setup completo do Material UI
    ├── material3-integration.md  # Guia de migração
    └── README.md             # Este arquivo
```

## 🎯 Paleta de Cores

### **Cores Principais**
- **Primary**: `#1976D2` - Azul confiável para elementos principais
- **Secondary**: `#FFA726` - Laranja energético para CTAs e destaques  
- **Tertiary**: `#66BB6A` - Verde para status positivos e sucessos
- **Error**: `#F44336` - Vermelho para erros e alertas críticos

### **Cores Neutras**
- **Background**: `#FAFAFA` - Fundo padrão claro
- **Surface**: `#FFFFFF` - Superfícies (cards, modais)
- **Text Primary**: `#212121` - Texto principal
- **Text Secondary**: `#757575` - Texto secundário

### **Significado das Cores**
- **Azul**: Transmite confiabilidade e profissionalismo técnico
- **Laranja**: Energia da indústria automotiva, urgência positiva
- **Verde**: Confirmações, serviços concluídos, status positivos
- **Vermelho**: Apenas para alertas críticos e erros importantes

## 🚀 Início Rápido

### **1. Instalar Dependências**
```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material @fontsource/roboto
```

### **2. Importar Tema**
```jsx
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import oficinaTheme from './theme/oficinaTheme';
import './brand/identity/css/material3-tokens.css';

function App() {
  return (
    <ThemeProvider theme={oficinaTheme}>
      <CssBaseline />
      {/* Sua aplicação */}
    </ThemeProvider>
  );
}
```

### **3. Usar Componentes**
```jsx
import { Button, Card, CardContent } from '@mui/material';

// Botão principal
<Button variant="contained" color="primary">
  Agendar Serviço
</Button>

// Card com tema aplicado
<Card>
  <CardContent>
    Conteúdo do agendamento
  </CardContent>
</Card>
```

## 🎨 Componentes Específicos

### **Status de Agendamentos**
```jsx
// Status coloridos por tipo
<Chip 
  label="Agendado" 
  color="info"
/>
<Chip 
  label="Em Andamento" 
  color="warning"
/>
<Chip 
  label="Concluído" 
  color="success"
/>
```

### **Botões de Ação**
```jsx
// CTA principal - laranja energético
<Button variant="contained" color="secondary">
  Novo Agendamento
</Button>

// Ação primária - azul confiável  
<Button variant="contained" color="primary">
  Iniciar Serviço
</Button>

// Sucesso - verde positivo
<Button variant="contained" color="success">
  Concluir
</Button>
```

### **Iconografia Semântica**
```jsx
import { 
  CalendarToday,    // Agendamentos
  Build,           // Serviços
  DirectionsCar,   // Veículos
  Person,          // Clientes
  Settings,        // Configurações
} from '@mui/icons-material';
```

## 📱 Design Responsivo

### **Breakpoints Oficina Digital**
- **Mobile**: `0px - 767px` (70% dos usuários)
- **Tablet**: `768px - 1023px` (5% dos usuários)  
- **Desktop**: `1024px+` (25% dos usuários)

### **Touch Targets**
- **Mínimo**: 48px × 48px (WCAG AA)
- **Recomendado**: 56px × 56px para mobile
- **Espaçamento**: 8px entre elementos interativos

### **Tipografia Responsiva**
```css
/* Mobile-first typography */
h1 { font-size: 1.75rem; }  /* 28px */
h2 { font-size: 1.5rem; }   /* 24px */
body { font-size: 1rem; }   /* 16px - mínimo legível */

@media (min-width: 768px) {
  h1 { font-size: 2.5rem; } /* 40px */
  h2 { font-size: 2rem; }   /* 32px */
}
```

## 🌐 Acessibilidade (WCAG AA)

### **Contraste de Cores**
- ✅ **4.5:1** - Contraste mínimo (texto normal)
- ✅ **3:1** - Contraste mínimo (texto grande)
- ✅ **7:1** - Contraste enhanced (tema alto contraste)

### **Navegação por Teclado**
```jsx
// Todos os elementos interativos são acessíveis
<Button 
  aria-label="Agendar serviço para Honda Civic"
  tabIndex={0}
  onKeyDown={handleKeyPress}
>
  Agendar
</Button>
```

### **Screen Readers**
```jsx
// Estrutura semântica clara
<main>
  <h1>Agendamentos de Hoje</h1>
  <section aria-label="Lista de agendamentos">
    <article role="listitem">
      <h2>Cliente: João Silva</h2>
      {/* Conteúdo do agendamento */}
    </article>
  </section>
</main>
```

## 🛠️ Desenvolvimento

### **Configuração do Projeto**
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@brand': '/brand',
      '@components': '/src/components',
    },
  },
});
```

### **Estrutura de Componentes**
```
src/
├── components/
│   ├── forms/
│   │   └── AgendamentoForm.jsx
│   ├── cards/
│   │   └── AgendamentoCard.jsx
│   └── navigation/
│       └── MobileNavigation.jsx
├── theme/
│   └── oficinaTheme.js
└── providers/
    └── ThemeProvider.jsx
```

### **Testes Visuais**
```jsx
// Storybook para componentes
export default {
  title: 'Oficina/AgendamentoCard',
  component: AgendamentoCard,
};

export const Agendado = () => (
  <AgendamentoCard status="agendado" cliente="João Silva" />
);

export const EmAndamento = () => (
  <AgendamentoCard status="em-andamento" cliente="Maria Santos" />
);
```

## 🎭 Temas

### **Tema Claro (Padrão)**
- Ideal para uso diurno em oficinas bem iluminadas
- Cores vibrantes e alto contraste
- Background claro (#FAFAFA)

### **Tema Escuro**
- Para reduzir fadiga visual em trabalho noturno
- Cores adaptadas para baixa luminosidade
- Background escuro (#121212)

### **Seletor de Tema**
```jsx
// Hook para alternar temas
const { darkMode, toggleTheme } = useTheme();

<IconButton onClick={toggleTheme}>
  {darkMode ? <LightMode /> : <DarkMode />}
</IconButton>
```

## 🌍 Contexto Brasileiro

### **Linguagem e Tom**
- **Terminologia técnica brasileira**: "agendamento", "serviço", "cliente"
- **Tom amigável e direto**: "Pronto! Serviço agendado."
- **Evitar jargão**: "Ops! Algo deu errado" vs "Error 500"

### **UX para Mecânicos**
- **Fluxos simples**: Máximo 3 cliques para qualquer ação
- **Botões grandes**: Facilitar uso com dedos sujos/luvas
- **Feedback visual claro**: Estados de loading, sucesso, erro
- **Mobile-first**: 70% dos usuários usam celular

## 📚 Documentação

### **Para Desenvolvedores**
- **[Setup Completo](docs/material3-setup.md)**: Configuração passo a passo
- **[Guia de Integração](docs/material3-integration.md)**: Migração de projetos existentes

### **Para Designers**
- **[Paleta de Cores](identity/colors/palette-material3.json)**: Cores em formato JSON
- **[Tokens CSS](identity/css/material3-tokens.css)**: Variáveis prontas para uso

## 🤝 Contribuindo

### **Adicionando Componentes**
1. Seguir guidelines do Material Design 3
2. Usar tokens CSS `--md-sys-color-*`  
3. Incluir variants para tema claro/escuro
4. Documentar uso e acessibilidade
5. Adicionar testes visuais

### **Modificando Cores**
1. Atualizar `palette-material3.json`
2. Regenerar tokens CSS
3. Testar contraste em todos os temas
4. Validar com ferramentas de acessibilidade

### **Critérios de Qualidade**
- ✅ WCAG AA compliance
- ✅ Mobile-first responsive
- ✅ Cross-browser compatibility  
- ✅ Performance optimized
- ✅ Semantic HTML structure

## 🔗 Links Úteis

- **[Material Design 3](https://m3.material.io/)**: Especificações oficiais
- **[Material UI](https://mui.com/)**: Documentação do framework
- **[Color Oracle](https://colororacle.org/)**: Simulador de daltonismo
- **[WebAIM](https://webaim.org/resources/contrastchecker/)**: Validador de contraste
- **[axe DevTools](https://www.deque.com/axe/)**: Teste de acessibilidade

## 📈 Métricas de Sucesso

### **Performance**
- **Loading**: < 2.5s LCP
- **Mobile Score**: > 90 (Lighthouse)
- **Bundle Size**: < 500KB (gzipped)

### **Acessibilidade**
- **WCAG AA**: 100% compliance
- **Keyboard Navigation**: Functional
- **Screen Reader**: Compatible

### **Usabilidade**
- **Task Success Rate**: > 95%
- **Time to Complete**: < 3 cliques
- **User Satisfaction**: NPS > 50

---

**Lembre-se**: Este sistema de design serve **mecânicos reais** resolvendo **problemas reais**. Mantenha soluções simples, acessíveis e confiáveis! 🔧⚙️