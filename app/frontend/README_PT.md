# Frontend - Oficina Digital

Dashboard para gestão de agendamentos de oficinas mecânicas.

## 🚀 Tecnologias

- **React 18** + **TypeScript**
- **Vite** - Build tool moderna e rápida
- **Design System** próprio com CSS Variables
- Sem dependências de UI libraries - código limpo e customizável

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

O projeto utiliza um design system próprio baseado nas cores da marca:

### Cores Principais
- **Vermelho Primário:** `#E53935` - Ações, destaques, CTAs
- **Preto:** `#121212` - Texto principal, backgrounds
- **Cinza Claro:** `#F5F5F5` - Fundos de seção
- **Cinza Médio:** `#9E9E9E` - Texto secundário

### Tipografia
- **Poppins** - Títulos e headings (bold, semibold)
- **Inter** - Textos e botões (regular, medium)

### Componentes
Todos os componentes seguem:
- Botões com **mínimo 44px** de altura (acessibilidade mobile)
- Alto contraste (4.5:1 mínimo)
- Transições suaves (250ms)
- Mobile-first responsive design

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

- ✅ Todos os botões com altura mínima de 44px
- ✅ Labels descritivos para screen readers
- ✅ Contraste adequado em todos os elementos
- ✅ Focus visível em elementos interativos
- ✅ Suporte a navegação por teclado

## 📝 Convenções de Código

### Comentários de Contexto
Todos os componentes incluem comentários seguindo o padrão:

```typescript
/**
 * Component: NomeDoComponente
 * Context: Descrição do propósito
 * Users: Mecânicos (baixa-média familiaridade com tecnologia)
 * @see .ai/context.md
 */
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
