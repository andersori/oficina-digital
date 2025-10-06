# Oficina Digital - Quick Start Guide para Desenvolvedores

## 🚀 Como usar o Design System

### 1. Importar no seu CSS/SCSS
```css
@import url('../brand/identity/design-system.css');
```

### 2. Usar as variáveis do Copilot
```css
/* Use exatamente essas variáveis mencionadas nas instruções do Copilot */
.button-primary {
  background-color: var(--color-primary-red);
  color: var(--color-neutral-white);
  font-family: var(--font-body);
}

.card {
  background-color: var(--color-neutral-gray-light);
  color: var(--color-neutral-black);
}

.heading {
  font-family: var(--font-heading);
  color: var(--color-neutral-black);
}
```

### 3. Componente React Exemplo
```tsx
/**
 * Component: AppointmentCard
 * Context: Display appointment for shop dashboard  
 * Users: Mechanics (low-tech familiarity)
 * @see .github/copilot-instructions.md
 */
import './AppointmentCard.css';

interface AppointmentCardProps {
  appointment: Appointment;
  onStatusChange: (id: string, status: string) => void;
}

export function AppointmentCard({ appointment, onStatusChange }: AppointmentCardProps) {
  return (
    <div className="appointment-card">
      <h3 className="appointment-title">{appointment.serviceName}</h3>
      <p className="appointment-customer">{appointment.customerName}</p>
      <div className="appointment-actions">
        <button 
          className="btn-primary"
          onClick={() => onStatusChange(appointment.id, 'completed')}
        >
          Marcar como Concluído
        </button>
      </div>
    </div>
  );
}
```

```css
/* AppointmentCard.css */
.appointment-card {
  background-color: var(--color-neutral-white);
  border: 1px solid var(--color-neutral-gray-light);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}

.appointment-title {
  font-family: var(--font-heading);
  font-size: var(--font-size-xl);
  color: var(--color-neutral-black);
  margin-bottom: var(--spacing-sm);
}

.appointment-customer {
  font-family: var(--font-body);
  color: var(--color-neutral-gray-medium);
  margin-bottom: var(--spacing-md);
}

.btn-primary {
  background-color: var(--color-primary-red);
  color: var(--color-neutral-white);
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-md) var(--spacing-lg);
  border: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: var(--transition-normal);
  
  /* Acessibilidade: botão grande para toque */
  min-height: 44px;
  min-width: 44px;
}

.btn-primary:hover {
  background-color: var(--color-primary-red-dark);
}

/* Mobile First - seguindo as instruções do Copilot */
@media (max-width: 768px) {
  .appointment-card {
    padding: var(--spacing-md);
  }
  
  .btn-primary {
    width: 100%;
    font-size: var(--font-size-base);
  }
}
```

## 🎨 Ícones Disponíveis

Use os ícones da pasta `brand/assets/icons/`:

- `calendario.svg` - Para agendamentos
- `carro.svg` - Para veículos
- `cliente.svg` - Para clientes
- `engrenagem.svg` - Para serviços/configurações

```tsx
// Exemplo de uso
import CalendarioIcon from '../brand/assets/icons/calendario.svg';

<img src={CalendarioIcon} alt="Agendar" className="icon" />
```

## 📱 Breakpoints Responsivos

```css
/* Mobile First (padrão) */
.container {
  padding: var(--spacing-md);
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: var(--spacing-lg);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: var(--spacing-xl);
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

## ✅ Checklist Rápido

- [ ] Usei `var(--color-primary-red)` para ações e destaques?
- [ ] Botões têm mínimo 44px para toque mobile?
- [ ] Contrastes atendem 4.5:1 para acessibilidade?
- [ ] Usei `var(--font-heading)` para títulos?
- [ ] Usei `var(--font-body)` para textos?
- [ ] Interface é mobile-first?
- [ ] Mensagens de erro são amigáveis?

## 🚫 Evitar

```css
/* ❌ Não faça */
.button {
  background: red; /* Use var(--color-primary-red) */
  font-family: Arial; /* Use var(--font-body) */
  font-size: 12px; /* Muito pequeno para mobile */
}

/* ❌ Não faça */
.error {
  color: #ff0000;
  content: "Error 500"; /* Use mensagem amigável */
}
```

```css
/* ✅ Faça */
.button {
  background-color: var(--color-primary-red);
  font-family: var(--font-body);
  font-size: var(--font-size-base); /* 16px mínimo */
}

.error {
  color: var(--color-error);
  /* Mensagem: "Ops! Algo deu errado. Tente novamente." */
}
```

---

*Este guia garante que você siga exatamente as instruções definidas para o Copilot.*