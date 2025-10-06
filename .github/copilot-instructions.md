# Oficina Digital - AI Coding Agent Instructions

## Project Context
**Oficina Digital** is a SaaS platform for auto repair shop management in Brazil, focusing on appointment scheduling and service tracking. The target users are **mechanics and shop owners (25-60 years) with low-to-medium tech familiarity**.

## Architecture Overview
- **Monorepo structure**: `app/frontend` (React/TypeScript) + `app/backend` (Kotlin/Spring Boot)
- **Brand system**: Centralized in `brand/` with design tokens in JSON format
- **AI context**: Comprehensive documentation in `.ai/` directory
- **Infrastructure**: Docker containers, Terraform for AWS deployment

## Key Development Principles

### 1. User-First Development
- **Primary audience**: Mechanics with limited tech experience
- **UI Requirements**: Large buttons, simple flows (max 3 clicks), high contrast
- **Language**: Portuguese terminology - use "agendamento" (not "booking"), "serviço" (not "OS")
- **Error messages**: Friendly and actionable, never technical jargon

### 2. Brand Consistency
Always reference design tokens from `brand/identity/`:
- **Colors**: Use variables from `brand/identity/design-system.css`
  - `--color-primary-red` for actions and highlights
  - `--color-neutral-black` for primary text and backgrounds
  - `--color-neutral-gray-light` for section backgrounds
  - `--color-neutral-gray-medium` for secondary text
- **Typography**: 
  - `--font-heading` for titles and logos (Poppins)
  - `--font-body` for text and buttons (Inter)

**Reference files**:
- Color palette: `brand/identity/colors/palette.json`
- Typography specs: `brand/identity/typography/fonts.json`
- CSS variables: `brand/identity/design-system.css`

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
 * @see .ai/context.md
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
# Project setup (when implemented)
npm run dev          # Start frontend development
./gradlew bootRun    # Start backend development
docker-compose up    # Full local environment
```

## File Priorities
When implementing features, focus on:
1. Core user flows in `app/frontend/src/`
2. API endpoints in `app/backend/src/`
3. Design system consistency with `brand/` assets
4. Mobile-responsive components

---
*This project serves real mechanics solving real problems. Keep solutions simple, accessible, and reliable.*