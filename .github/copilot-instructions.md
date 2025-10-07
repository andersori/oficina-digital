# Oficina Digital - AI Coding Agent Instructions

## Project Context
**Oficina Digital** is a SaaS platform for auto repair shop management in Brazil, focusing on appointment scheduling and service tracking. The target users are **mechanics and shop owners (25-60 years) with low-to-medium tech familiarity**.

## Architecture Overview
- **Monorepo structure**: `app/frontend` (React + Vite + Material Design 3) + `app/backend` (Kotlin/Spring Boot)
- **Design system**: Material Design 3 with Oficina Digital brand customization
- **UI Library**: Material UI (@mui/material) with custom theming
- **Build tool**: Vite for fast development and optimized builds
- **Infrastructure**: Docker containers, Terraform for AWS deployment

## Key Development Principles

### 1. User-First Development
- **Primary audience**: Mechanics with limited tech experience
- **UI Requirements**: Large buttons, simple flows (max 3 clicks), high contrast
- **Language**: Portuguese terminology - use "agendamento" (not "booking"), "serviço" (not "OS")
- **Error messages**: Friendly and actionable, never technical jargon

### 2. Material Design 3
Use Material UI components with Oficina Digital brand theming:
- **Components**: Material UI (@mui/material) with custom theme
- **Colors**: Brand colors mapped to Material 3 semantic tokens
  - `--md-sys-color-primary` → #1976D2 (azul confiável)
  - `--md-sys-color-secondary` → #FFA726 (laranja energético)
  - `--md-sys-color-tertiary` → #66BB6A (verde positivo)
  - `--md-sys-color-error` → #F44336 (vermelho de alerta)
- **Typography**: Material 3 scale with Roboto font family
- **Accessibility**: Material 3 built-in WCAG AA compliance

**Reference files**:
- Color mapping: `brand/identity/colors/palette-material3.json`
- CSS tokens: `brand/identity/css/material3-tokens.css` 
- Setup guide: `brand/docs/material3-setup.md`
- Migration guide: `brand/docs/material3-integration.md`

### 3. Mobile-First Responsive Design
- **Priority**: Mobile (70%) > Desktop (25%) > Tablet (5%)
- **Performance targets**: <2.5s LCP, >90 mobile score
- **Accessibility**: WCAG AA compliance (4.5:1 contrast ratio)

## Core Features & Workflows

### Shop Owner Journey
1. **Registration**: Owner → Shop → Branches
2. **Service Setup**: Catalog → Availability toggles → Duration estimates
3. **Daily Operations**: View agenda → Update service status → Manage appointments

### Customer Journey
1. **Booking**: Find shop → Select service → Choose time → Confirm
2. **Tracking**: Check status → Receive notifications → View history

## Technical Patterns

### State Management
- Use Context API + React Query for data fetching
- Avoid complex state - keep it simple for maintainability

### Component Structure
```typescript
// Always include context comments for AI agents
/**
 * Component: AppointmentCard
 * Context: Display appointment for shop dashboard
 * Users: Mechanics (low-tech familiarity)
 * @see .github/copilot-instructions.md
 */
```

### Error Handling
```typescript
// Good: User-friendly messaging
{ error: "Ops! Não conseguimos salvar. Verifique sua internet e tente novamente." }

// Bad: Technical error
{ error: "HTTP 500 - Internal Server Error" }
```

## Integration Requirements

### Immediate (MVP)
- WhatsApp Business API for notifications
- Email service for confirmations
- PostgreSQL with JPA/Hibernate

### Future Roadmap
- PIX/Card payment integration
- Google Calendar sync
- Photo upload for service documentation

## Development Workflow

### Environment Setup
- VS Code configured with Copilot context files (`.vscode/settings.json`)
- Docker for local development
- GitHub Actions for CI/CD

### Quality Standards
- TypeScript strict mode enabled
- ESLint + Prettier configured
- Unit tests for critical business logic
- E2E tests for main user journeys

## Business Context
- **Market**: 200k auto shops in Brazil, <20% digitalized
- **Revenue model**: Freemium → Premium subscriptions → Transaction fees
- **Success metrics**: 1k shops by year 1, 80% weekly active usage, NPS >50

## Critical Considerations
- **LGPD compliance**: Implement data protection from day one
- **Security**: Rate limiting, input validation, HTTPS only
- **Performance**: Optimize for slow mobile networks
- **Scalability**: Multi-tenant architecture ready

## Quick Reference Commands
```bash
# Project setup
npm run dev       # Start frontend development (Vite)
./gradlew bootRun # Start backend development
docker-compose up # Full local environment

# React + Vite specific
npm run build     # Production build
npm run preview   # Preview production build
npm test          # Run unit tests (Vitest)
npm run lint      # ESLint code checking
npm run format    # Prettier code formatting
```

## File Priorities
When implementing features, focus on:
1. Core user flows in `app/frontend/src/`
2. API endpoints in `app/backend/src/`
3. Mobile-responsive components

---
*This project serves real mechanics solving real problems. Keep solutions simple, accessible, and reliable.*