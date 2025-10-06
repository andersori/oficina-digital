---
description: "Core business workflows and user journeys for Oficina Digital"
applyTo: "**/*.{tsx,jsx,ts,js,kt}"
---

# Business Workflows & User Journeys

## Shop Owner Journey
```
1. Registration Flow:
   Owner Registration → Shop Profile → Branch Setup → Service Catalog

2. Daily Operations:
   View Agenda → Update Service Status → Manage Appointments → Customer Communication

3. Service Management:
   Service Catalog → Toggle Availability → Set Duration → Price Configuration
```

## Customer Journey
```
1. Booking Flow:
   Find Shop → Select Service → Choose Time → Confirm Appointment

2. Service Tracking:
   Check Status → Receive Notifications → View History → Rate Service
```

## Core Features by Priority

### P0 (MVP - Critical)
- [ ] Shop owner registration and authentication
- [ ] Shop profile and branch management
- [ ] Service catalog management
- [ ] Basic appointment CRUD operations
- [ ] Service status tracking
- [ ] Simple dashboard for daily operations

### P1 (V2 - Important)
- [ ] WhatsApp/SMS notifications
- [ ] Photo upload for service evidence
- [ ] Basic reporting and analytics
- [ ] Service availability toggles
- [ ] Customer self-service portal

### P2 (V3 - Future)
- [ ] Native mobile app
- [ ] Payment integration (PIX, cards)
- [ ] Google Calendar sync
- [ ] Advanced analytics and insights
- [ ] Rating and review system

## Business Rules

### Appointment System
- **Working Hours**: Configurable per shop
- **Advance Booking**: Up to 30 days
- **Cancellation**: 24h notice minimum
- **Capacity**: Shop-defined simultaneous services

### Service Management
- **Status Updates**: Manual by mechanic
- **Photo Evidence**: Optional but encouraged
- **Completion**: Customer notification required
- **Duration**: Estimated time per service type

## Integration Points
- **Immediate**: WhatsApp Business API, Email notifications
- **Future**: Payment gateways, Calendar sync, CRM systems