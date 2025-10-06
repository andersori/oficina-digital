# Frontend - Oficina Digital

Dashboard para gestão de agendamentos de oficinas mecânicas.

## 🚀 Tecnologias

- **React 18** + **TypeScript**
- **Vite** - Build tool moderna e rápida
- **Material Design 3** - Design system do Google com customização da marca
- **Material UI** (@mui/material) - Componentes React implementando Material 3
- Responsivo e acessível por padrão

## 📋 Pré-requisitos

- Node.js 20+ 
- npm 10+

## 🔧 Instalação

```bash
# Instalar dependências
npm install
```

## 🏃 Como Executar

```bash
# Modo desenvolvimento (hot reload)
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

O aplicativo estará disponível em: **http://localhost:5173/**

## 📱 Funcionalidades

### Dashboard Principal
- ✅ Visualização em **Semana** e **Dia** (toggle de alternância)
- ✅ Navegação entre períodos (botões Anterior/Próximo)
- ✅ Botão **Hoje** para retornar à data atual
- ✅ Seletor de data com calendário
- ✅ Menu de filtros lateral (escondido por padrão)

### Visualização em Semana
- Grade de 7 dias mostrando todos os agendamentos
- Contador de agendamentos por dia
- Indicadores coloridos por status
- Click em um dia para ver detalhes (muda automaticamente para visualização de dia)
- Destaque visual para o dia atual (borda vermelha)

### Visualização em Dia
- Timeline completa de 08:00 às 18:00
- Slots vazios claramente marcados como "Horário disponível"
- Detalhes completos de cada agendamento:
  - Nome do serviço
  - Cliente
  - Veículo (modelo + placa)
  - Horário e duração
  - Observações (quando disponível)
- Status com badge colorido

### Sistema de Filtros
- **Por Status:** Agendado, Em Andamento, Concluído, Cancelado
- **Por Filial:** Filial Centro, Filial Zona Sul
- **Por Tipo de Serviço:** 9 tipos diferentes
- Botão "Limpar Filtros" quando há filtros ativos
- Overlay com fechamento ao clicar fora da sidebar

## 🎨 Design System

O projeto utiliza **Material Design 3** (Material You) do Google, customizado com as cores da marca Oficina Digital:

### Material 3 + Brand Integration
- **Framework**: Material UI (@mui/material) com tema customizado
- **Componentes**: Cards, Buttons, TextFields com design system consistente
- **Acessibilidade**: WCAG AA built-in, touch targets de 48px
- **Responsividade**: Breakpoints e layout system do Material 3

### Cores da Marca Mapeadas
- **Primary**: `#E53935` (vermelho Oficina Digital) → Material 3 `primary` role
- **Surface**: `#121212` (preto) → Material 3 `surface` tokens  
- **Background**: `#F5F5F5` (cinza claro) → Material 3 `background`
- **Text**: Hierarquia de cores seguindo Material 3

### Tipografia Material 3
- **Display/Headlines**: Poppins (brand) para títulos
- **Body/Labels**: Inter (brand) para textos e botões
- **Scale**: Seguindo escala tipográfica Material 3

### Componentes Otimizados para Mecânicos
- Botões com **mínimo 48px** de altura (padrão Material 3)
- Cards com elevação e feedback visual
- Formulários com validation states claros
- Navigation otimizada para mobile (BottomNavigation)

## 📂 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Dashboard/       # Container principal
│   ├── WeekView/        # Visualização semanal
│   ├── DayView/         # Visualização diária
│   └── FilterSidebar/   # Menu de filtros
├── data/                # Mock data
│   └── mockData.ts      # Dados de exemplo
├── types/               # TypeScript types
│   └── index.ts         # Definições de tipos
├── utils/               # Funções utilitárias
│   ├── dateUtils.ts     # Manipulação de datas
│   └── filterUtils.ts   # Lógica de filtros
├── styles/              # Estilos globais
│   ├── design-system.css # CSS Variables
│   └── global.css       # Reset e base styles
├── App.tsx              # Componente raiz
└── main.tsx             # Entry point
```

## 🧪 Dados Mock

O sistema vem com dados de demonstração:

- **Proprietário logado:** João Silva (Oficina Digital Demo)
- **2 filiais:** Centro e Zona Sul
- **14 agendamentos** distribuídos em 2 semanas
- **4 tipos de status:** agendado, em andamento, concluído, cancelado
- **9 tipos de serviços** automotivos comuns no Brasil

## 🌐 Responsividade

O layout é **mobile-first** com breakpoints:

- **Mobile:** < 768px (1 coluna na visualização semanal)
- **Tablet:** 768px - 1024px (4 colunas na visualização semanal)
- **Desktop:** > 1024px (7 colunas na visualização semanal)

## ♿ Acessibilidade

Material Design 3 inclui acessibilidade por padrão:
- ✅ Touch targets de 48px (padrão Material 3)
- ✅ Focus visível automático em componentes Material
- ✅ ARIA labels incluídos nos componentes
- ✅ Contraste adequado garantido pelo sistema
- ✅ Semântica HTML correta
- ✅ Suporte a screen readers nativo

## 📝 Convenções de Código

### Comentários de Contexto
Todos os componentes incluem comentários seguindo o padrão:

```typescript
/**
 * Component: NomeDoComponente
 * Context: Descrição do propósito
 * Users: Mecânicos (baixa-média familiaridade com tecnologia)
 * Design: Material 3 component with brand theming
 * @see .github/copilot-instructions.md
 */
import { Card, Button } from '@mui/material';
```

### Terminologia Brasileira
Seguimos termos específicos do mercado brasileiro:

- ✅ **"Agendamento"** (não "booking" ou "reserva")
- ✅ **"Serviço"** (não "ordem de serviço" ou "OS")
- ✅ **"Cliente"** (não "usuário" para donos de veículos)
- ✅ **"Filial"** (não "estabelecimento" ou "loja")
- ✅ **"Veículo"** (em contextos formais)

## 🔮 Próximos Passos

### Backend Integration (futuro)
- [ ] Substituir mock data por chamadas à API REST
- [ ] Autenticação JWT
- [ ] WebSocket para atualizações em tempo real

### Funcionalidades Adicionais (roadmap)
- [ ] CRUD de agendamentos
- [ ] Notificações WhatsApp/SMS
- [ ] Upload de fotos dos serviços
- [ ] Relatórios e analytics
- [ ] Exportação de dados

## 📄 Licença

Este projeto é parte do **Oficina Digital** - © 2025 Anderson Soriano

---

**Desenvolvido com ❤️ para mecânicos brasileiros**
