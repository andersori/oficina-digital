---
description: "Kotlin Spring Boot backend development patterns for Oficina Digital"
applyTo: "**/*.{kt,kts}"
---

# Backend Development Guidelines

## Architecture Pattern
- **Framework**: Spring Boot with Kotlin
- **Database**: PostgreSQL with JPA/Hibernate
- **Architecture**: Clean Architecture and Hexagonal
- **API Style**: RESTful with clear resource naming

## Entity Patterns
```kotlin
@Entity
@Table(name = "appointments")
data class Appointment(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    
    @Column(nullable = false)
    val customerId: Long,
    
    @Column(nullable = false)
    val shopId: Long,
    
    @Enumerated(EnumType.STRING)
    val status: AppointmentStatus,
    
    @CreationTimestamp
    val createdAt: LocalDateTime = LocalDateTime.now(),
    
    @UpdateTimestamp
    val updatedAt: LocalDateTime = LocalDateTime.now()
)
```

## Service Layer Patterns
```kotlin
@Service
class AppointmentService(
    private val appointmentRepository: AppointmentRepository,
    private val notificationService: NotificationService
) {
    
    @Transactional
    fun createAppointment(request: CreateAppointmentRequest): AppointmentResponse {
        // Validation
        validateAppointmentRequest(request)
        
        // Business logic
        val appointment = appointmentRepository.save(
            Appointment(
                customerId = request.customerId,
                shopId = request.shopId,
                status = AppointmentStatus.SCHEDULED
            )
        )
        
        // Side effects
        notificationService.sendAppointmentConfirmation(appointment)
        
        return appointment.toResponse()
    }
}
```

## API Response Patterns
```kotlin
// Consistent response format
data class ApiResponse<T>(
    val success: Boolean,
    val data: T?,
    val message: String?,
    val errors: List<String> = emptyList()
)

// Error handling
@RestControllerAdvice
class GlobalExceptionHandler {
    
    @ExceptionHandler(ValidationException::class)
    fun handleValidation(ex: ValidationException): ResponseEntity<ApiResponse<Nothing>> {
        return ResponseEntity.badRequest().body(
            ApiResponse(
                success = false,
                data = null,
                message = "Dados inválidos",
                errors = ex.errors
            )
        )
    }
}
```

## Security & Validation
- **Input validation**: Always validate API inputs
- **Authentication**: JWT tokens with Spring Security
- **Authorization**: Role-based access control
- **Rate limiting**: Prevent abuse
- **LGPD compliance**: Data protection from design