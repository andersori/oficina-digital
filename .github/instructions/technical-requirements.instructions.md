---
description: "Performance, security, and compliance requirements for Oficina Digital"
applyTo: "**"
---

# Technical Requirements

## Performance Targets
- **Page Load**: <2.5 seconds (LCP)
- **Interactivity**: <100ms (FID)
- **Visual Stability**: <0.1 (CLS)
- **Uptime**: >99.5%
- **Mobile Score**: >90 (Lighthouse)

## Security Requirements
- **Authentication**: JWT tokens with refresh mechanism
- **Input Validation**: All API endpoints
- **Rate Limiting**: Prevent abuse and DDoS
- **HTTPS Only**: All production traffic
- **Data Encryption**: At rest and in transit

## LGPD Compliance (Critical)
- **Data Minimization**: Collect only necessary data
- **Consent Management**: Clear opt-in for data processing
- **Right to Deletion**: Implement data removal
- **Data Portability**: Export user data functionality
- **Privacy by Design**: Build protection from day one

## Accessibility Standards
- **WCAG AA**: Minimum compliance level
- **Contrast Ratio**: 4.5:1 minimum
- **Keyboard Navigation**: Full functionality
- **Screen Reader**: Semantic HTML and ARIA labels
- **Touch Targets**: 44px minimum size

## Development Standards
- **Code Quality**: ESLint + Prettier configured
- **Testing**: Unit tests for business logic, E2E for user journeys
- **TypeScript**: Strict mode enabled
- **Error Handling**: Graceful degradation and user-friendly messages
- **Monitoring**: Error tracking and performance monitoring

## Infrastructure
- **Containerization**: Docker for consistency
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel (frontend) + AWS (backend)
- **Database**: PostgreSQL with proper indexing
- **Caching**: Redis for session and frequently accessed data

## Network Optimization
- **Bundle Size**: Monitor and optimize JavaScript bundles
- **Image Optimization**: WebP format, responsive images
- **CDN**: Static assets delivery
- **Compression**: Gzip/Brotli for text resources