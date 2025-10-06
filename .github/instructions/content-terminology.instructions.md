---
description: "Portuguese terminology and content guidelines for auto repair industry"
applyTo: "**/*.{tsx,jsx,ts,js,md}"
---

# Content & Terminology Guidelines

## Language: Portuguese (Brazil)

### Required Industry Terms
Use these exact Portuguese terms in all UI text:

- **"Agendamento"** (not "booking", "reserva", or "marcação")
- **"Serviço"** (not "ordem de serviço", "OS", or "trabalho")
- **"Cliente"** (not "usuário" when referring to car owner)
- **"Oficina"** (not "estabelecimento", "empresa", or "loja")
- **"Mecânico"** (not "técnico", "profissional", or "operador")
- **"Veículo"** (not "carro" in formal contexts)
- **"Proprietário"** (for shop owner)

### Content Style
- **Tone**: Direct, helpful, professional but human
- **Avoid**: Technical jargon, complex terms, IT terminology
- **Include**: Clear action words, automotive context
- **Format**: Short sentences, bullet points when listing

### Error Messages Pattern
```typescript
// Template: Problem + Solution + Action
"Ops! [What happened]. [Why/Context]. [What to do next]."

// Examples:
"Ops! Não conseguimos salvar. Verifique sua internet e tente novamente."
"Ops! Este horário não está disponível. Escolha outro horário."
"Ops! Dados incompletos. Preencha todos os campos obrigatórios."
```

### UI Copy Guidelines
- Button labels: Action verbs ("Agendar", "Salvar", "Cancelar")
- Form labels: Clear, specific ("Nome do cliente", "Tipo de serviço")
- Success messages: Reassuring ("Agendamento confirmado!", "Dados salvos com sucesso!")
- Loading states: Progressive ("Salvando...", "Carregando agenda...")