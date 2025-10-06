# Oficina Digital - Brand Identity

> **📖 Sobre este documento:** Este é o manual oficial da marca Oficina Digital. 
> Contém todas as diretrizes visuais, assets e especificaçõe## 🚀 Para Desenvolvedores

### Material Design 3 (Recomendado)
1. **Tema Material UI**: `docs/material3-theme-setup.md` - Setup completo
2. **CSS Tokens**: `identity/material3-tokens.css` - CSS variables semânticas
3. **Migração**: `docs/material3-migration-guide.md` - Guia de migração
4. **Componentes**: Use Material UI com tema customizado

### Legacy (Compatibilidade)
1. **Importe o CSS**: `@import url('../brand/identity/design-system.css');`
2. **Use as variáveis**: `var(--color-primary-red)`, `var(--font-heading)`, etc.
3. **Consulte**: `docs/quick-start-developers.md` para exemplos práticos
4. **Classes prontas**: `assets/css-components.md` tem componentes CSS completos

### Integração com Copilot
As instruções do GitHub Copilot referenciam Material Design 3:
- Material UI components com tema customizado da marca
- Tokens semânticos (`--md-sys-color-primary`, etc.)
- Acessibilidade WCAG AA built-in
- Touch targets 48px automáticosessárias 
> para implementar a identidade visual de forma consistente em todos os materiais 
> e plataformas do projeto.
> 
> **👥 Para quem:** Desenvolvedores, designers e colaboradores do projeto.


## 🎯 Conceito da Marca

**Oficina Digital** é uma plataforma que ajuda oficinas mecânicas a organizar serviços e agendamentos de forma simples e moderna.

### Valores da Marca
A marca transmite:
- **Tecnologia** (é digital)
- **Confiança e profissionalismo** (voltada a negócios reais)
- **Simplicidade e acessibilidade** (sem parecer complicada)

### Personalidade
- **📣 Tom da marca**: direto, útil, sem jargões técnicos
- **📱 Personalidade**: moderna, prática, humana

---

## 🎨 Paleta de Cores

| Cor | Hex | RGB | Uso Sugerido |
|-----|-----|-----|--------------|
| 🔴 **Vermelho Primário** | `#E53935` | `rgb(229, 57, 53)` | Botões, ícones de ação, destaques |
| ⚫ **Preto Profundo** | `#121212` | `rgb(18, 18, 18)` | Fundo principal, textos em destaque |
| ⚪ **Cinza Claro** | `#F5F5F5` | `rgb(245, 245, 245)` | Fundo de seções, áreas neutras |
| 🩶 **Cinza Médio** | `#9E9E9E` | `rgb(158, 158, 158)` | Textos secundários, bordas sutis |

### Significado das Cores
O **vermelho** dá energia e urgência (como um pit stop ou carro de corrida), enquanto o **preto** traz autoridade e elegância.

*Configurações disponíveis em: [`identity/colors/palette.json`](identity/colors/palette.json)*

---

## 🔠 Tipografia

### Hierarquia de Fontes

| Uso | Fonte | Peso | Características |
|-----|-------|------|-----------------|
| **Título/Logotipo** | Poppins ou Montserrat | Bold/ExtraBold | Letras firmes e geométricas |
| **Texto/Botões** | Inter ou Roboto | Regular/Medium | Excelente legibilidade em telas pequenas |

### Exemplo Visual
```
OFICINA DIGITAL
Gestão e agendamentos simples para sua oficina
```

*Configurações disponíveis em: [`identity/typography/fonts.json`](identity/typography/fonts.json)*

---

## 🧩 Logotipo

### Conceito do Logo
- **Ícone**: Engrenagem estilizada com um sinal de "check" ou calendário embutido no centro
- **Representação**: Serviços mecânicos + agendamento digital
- **Nome**: "Oficina" em branco + "Digital" em vermelho
- **Fundo**: Preto ou cinza escuro para realçar contraste

### Variações
1. **Versão Horizontal**: Ícone à esquerda + texto
2. **Versão Quadrada**: Apenas o ícone vermelho no fundo preto (para apps)
3. **Versão Monocromática**: Para impressões em preto e branco

*Assets disponíveis em: [`identity/logo/`](identity/logo/)*

---

## 🧭 Slogan Oficial

### **"Tecnologia simples para quem entende de carro."** 🚗

Este slogan foi escolhido por:
- **Conectar com o público**: Fala diretamente com mecânicos e proprietários de oficinas
- **Demonstrar respeito**: Reconhece a expertise do profissional da área
- **Simplificar a proposta**: Deixa claro que a tecnologia não vai complicar, vai facilitar
- **Criar identificação**: O público-alvo se vê representado na mensagem

### Aplicações do Slogan
- **Materiais promocionais**: Sempre acompanhando o logo
- **Assinatura de e-mail**: Como fechamento das comunicações
- **App Store**: Na descrição do aplicativo
- **Website**: Como subtítulo principal
- **Redes sociais**: Em posts institucionais

---

## 🧱 Estilo Visual

### Diretrizes de Layout
- **Fundo**: Layout limpo com fundo escuro
- **Destaques**: Elementos vermelhos em destaque
- **Botões**: Grandes e contrastantes com rótulos claros
  - Exemplos: "Agendar", "Registrar serviço", "Ver histórico"
- **Ícones**: Simples e ilustrativos (engrenagem, calendário, cliente, carro)
- **Tipografia**: Tamanho levemente maior para melhor leitura em tablets e smartphones

### Princípios de Design
1. **Simplicidade**: Interface intuitiva para usuários de diferentes idades
2. **Contraste**: Alto contraste para melhor legibilidade
3. **Acessibilidade**: Elementos grandes e textos claros
4. **Consistência**: Padrões visuais uniformes em toda a aplicação

---

## 📁 Estrutura de Assets

```
brand/
├── identity/
│   ├── colors/
│   │   ├── palette.json           # Cores originais (legacy)
│   │   └── palette-material3.json # Sistema de cores Material 3
│   ├── logo/
│   │   ├── logo-horizontal.svg
│   │   ├── logo-square.svg
│   │   └── logo-monochrome.svg
│   ├── typography/
│   │   └── fonts.json             # Tipografia em JSON
│   ├── design-system.css          # CSS Variables (legacy)
│   ├── material3-tokens.css       # Material 3 CSS tokens
│   └── brand-guidelines.md
├── assets/
│   ├── icons/
│   │   ├── engrenagem.svg         # Ícone de serviços
│   │   ├── calendario.svg         # Ícone de agendamentos
│   │   ├── cliente.svg            # Ícone de clientes
│   │   └── carro.svg              # Ícone de veículos
│   ├── images/
│   │   └── brand-showcase.png
│   └── css-components.md          # Classes CSS prontas (legacy)
└── docs/
    ├── usage-examples.md          # Exemplos visuais
    ├── quick-start-developers.md  # Guia rápido para devs
    ├── material3-integration.md   # Guia Material 3 (original)
    ├── material3-theme-setup.md   # Setup tema Material UI
    ├── material3-migration-guide.md # Migração para Material 3
    └── brand-checklist.md         # Checklist de qualidade
```

---

## 📋 Guidelines de Uso

### ✅ Faça
- Use as cores da paleta oficial
- Mantenha o contraste adequado entre texto e fundo
- Use as fontes especificadas para consistência
- Respeite o espaçamento mínimo ao redor do logo

### ❌ Evite
- Alterar as proporções do logotipo
- Usar cores fora da paleta oficial
- Colocar o logo sobre fundos que comprometam a legibilidade
- Usar fontes não especificadas nos materiais oficiais

---

## 🎯 Público-Alvo

**Primário**: Proprietários e funcionários de oficinas mecânicas
- Idade: 25-60 anos
- Características: Práticos, valorizam eficiência, podem ter resistência inicial à tecnologia
- Necessidades: Organização, controle de agendamentos, gestão de clientes

**Secundário**: Clientes das oficinas
- Características: Buscam comodidade e transparência nos serviços
- Necessidades: Facilidade para agendar, acompanhar serviços, receber atualizações

---

## Para Desenvolvedores

### Quick Start
1. **Importe o CSS**: `@import url('../brand/identity/design-system.css');`
2. **Use as variáveis do Copilot**: `var(--color-primary-red)`, `var(--font-heading)`, etc.
3. **Consulte**: `docs/quick-start-developers.md` para exemplos práticos
4. **Classes prontas**: `assets/css-components.md` tem componentes CSS completos

### Integração com Copilot
As instruções do GitHub Copilot referenciam estas variáveis específicas:
- `--color-primary-red` para ações e destaques
- `--color-neutral-black` para textos principais
- `--font-heading` para títulos (Poppins)
- `--font-body` para textos (Inter)

---

## Contato

Para dúvidas sobre o uso da marca ou solicitação de novos assets, entre em contato com a equipe de design.

---

*© 2025 Anderson Soriano - Oficina Digital. Todos os direitos reservados.*