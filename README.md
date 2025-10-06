# Oficina Digital

> **Tecnologia simples para quem entende de carro**

Plataforma digital para gestão de oficinas mecânicas, focada em agendamentos e acompanhamento de serviços.

## 🎯 Objetivo

Simplificar a gestão de oficinas mecânicas através de uma plataforma digital intuitiva, permitindo que proprietários organizem agendamentos e clientes acompanhem seus serviços em tempo real.

## 👥 Público-Alvo

- **Proprietários de oficinas** (25-60 anos) - Organização e gestão
- **Clientes** - Agendamento e acompanhamento de serviços

## 🚗 Principais Fluxos

### Para Proprietários de Oficina

#### 1. Cadastro e Configuração
```
Registro do Proprietário
    ↓
Cadastro da Oficina
    ↓
Configuração de Filiais
    ↓
Criação do Catálogo de Serviços
```

#### 2. Gestão Diária
```
Visualizar Agenda do Dia
    ↓
Atualizar Status dos Serviços
    ↓
Gerenciar Novos Agendamentos
    ↓
Comunicar com Clientes
```

#### 3. Configuração de Serviços
```
Definir Tipos de Serviços
    ↓
Configurar Disponibilidade (Ativo/Inativo)
    ↓
Estimar Tempo de Duração
    ↓
Definir Preços (futuro)
```

### Para Clientes

#### 1. Agendamento
```
Buscar Oficina Próxima
    ↓
Selecionar Tipo de Serviço
    ↓
Escolher Data e Horário
    ↓
Confirmar Agendamento
```

#### 2. Acompanhamento
```
Verificar Status do Serviço
    ↓
Receber Notificações
    ↓
Visualizar Histórico
    ↓
Avaliar Serviço (futuro)
```

## 🔧 Funcionalidades Principais

### MVP (Versão 1.0)
- ✅ Cadastro de oficinas e responsáveis
- ✅ Gestão de catálogo de serviços
- ✅ Sistema de agendamento
- ✅ Controle de status de serviços
- ✅ Dashboard básico para oficinas

### Versão 2.0
- 📱 Notificações por WhatsApp/SMS
- 📸 Upload de fotos dos serviços
- 📊 Relatórios básicos
- 🔄 Toggle de disponibilidade de serviços

### Versão 3.0
- 📱 App mobile nativo
- 💳 Integração com pagamentos
- 📅 Sincronização com Google Calendar
- ⭐ Sistema de avaliações

## 🏗️ Arquitetura

```
Frontend (React + TypeScript)
    ↕
Backend (Kotlin + Spring Boot)
    ↕
Database (PostgreSQL)
```

## 🎨 Design System

- **Cores principais**: Vermelho (#E53935) + Preto (#121212)
- **Tipografia**: Poppins (títulos) + Inter (textos)
- **Abordagem**: Mobile-first, botões grandes, alto contraste

## 🚀 Como Executar

```bash
# Frontend
cd app/frontend
npm install
npm run dev

# Backend
cd app/backend
./gradlew bootRun

# Ambiente completo com Docker
cd infra/local
docker-compose up
```

## 📊 Métricas de Sucesso

- **1.000 oficinas** ativas no primeiro ano
- **80% de uso semanal** pelos proprietários
- **NPS >50** de satisfação

## 🔒 Conformidade

- **LGPD**: Proteção de dados desde o design
- **Acessibilidade**: WCAG AA
- **Performance**: <2.5s carregamento mobile

---

## 📝 Notas para Desenvolvedores

- **Terminologia**: Use "agendamento", "serviço", "cliente", "oficina", "mecânico"
- **UX**: Máximo 3 cliques para ações principais
- **Erro**: Mensagens amigáveis, nunca termos técnicos
- **Mobile**: 70% dos usuários em dispositivos móveis

---

*Construído para servir mecânicos reais resolvendo problemas reais. Mantenha simples, acessível e confiável.*