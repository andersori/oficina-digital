# Material Design 3 Color Migration Guide

## Mapeamento de Cores: Legacy → Material 3

### Cores da Marca
| Legacy | Material 3 Token | Valor | Uso |
|--------|------------------|-------|-----|
| `--color-primary-red` | `--md-sys-color-primary` | `#E53935` | Botões principais, CTAs |
| `--color-neutral-black` | `--md-sys-color-on-surface` | `#121212` | Texto principal |
| `--color-neutral-gray-light` | `--md-sys-color-surface` | `#F5F5F5` | Fundos de cards |
| `--color-neutral-gray-medium` | `--md-sys-color-outline` | `#9E9E9E` | Bordas, divisores |
| `--color-neutral-white` | `--md-sys-color-background` | `#FFFFFF` | Fundo principal |

### Cores Semânticas
| Legacy | Material 3 Token | Valor | Uso |
|--------|------------------|-------|-----|
| `--color-success` | `--md-sys-color-success` | `#4CAF50` | Sucesso, concluído |
| `--color-warning` | `--md-sys-color-warning` | `#FF9800` | Avisos, em andamento |
| `--color-error` | `--md-sys-color-error` | `#F44336` | Erros, cancelado |
| `--color-info` | `--md-sys-color-info` | `#2196F3` | Informações, agendado |

## Checklist de Migração

### 1. Arquivo de Cores ✅
- [x] `palette-material3.json` - Sistema semântico completo
- [x] `material3-tokens.css` - CSS variables Material 3
- [x] Aliases para compatibilidade com código existente

### 2. Documentação ✅
- [x] `material3-theme-setup.md` - Configuração tema Material UI
- [x] `material3-integration.md` - Guia de componentes
- [x] Atualização das instruções do Copilot

### 3. Próximos Passos
- [ ] Implementar tema Material UI no frontend
- [ ] Migrar componentes existentes para Material UI
- [ ] Testar modo escuro automático
- [ ] Validar acessibilidade com WCAG AA

## Vantagens da Migração

### Design System Robusto
- ✅ **Tokens semânticos** em vez de cores diretas
- ✅ **Modo escuro** automático com `prefers-color-scheme`
- ✅ **Estados interativos** (hover, pressed, disabled)
- ✅ **Contraste garantido** pelo sistema Material 3

### Desenvolvimento Mais Rápido
- ✅ **Componentes prontos** Material UI
- ✅ **Acessibilidade built-in** WCAG AA
- ✅ **Responsividade** com breakpoints padronizados
- ✅ **Manutenção simplificada** com menos CSS custom

### UX Consistente
- ✅ **Padrões familiares** aos usuários
- ✅ **Touch targets** 48px padrão Material 3
- ✅ **Feedback visual** consistente
- ✅ **Navigation patterns** otimizados para mobile

## Scripts de Migração

### Atualizar Imports CSS
```bash
# Substituir imports do design system antigo
find src -name "*.css" -exec sed -i 's/design-system.css/material3-tokens.css/g' {} \;

# Ou manualmente em cada arquivo:
# - @import url('../brand/identity/design-system.css');
# + @import url('../brand/identity/material3-tokens.css');
```

### Buscar e Substituir Variáveis
```bash
# Exemplo com sed (Linux/Mac) ou PowerShell (Windows)
# --color-primary-red → --md-sys-color-primary
find src -name "*.css" -exec sed -i 's/--color-primary-red/var(--md-sys-color-primary)/g' {} \;
```

### Validação
```typescript
// Verificar se as cores estão sendo aplicadas corretamente
function validateMaterial3Colors() {
  const root = document.documentElement;
  const primary = getComputedStyle(root).getPropertyValue('--md-sys-color-primary');
  
  console.log('Primary color:', primary); // Deve ser #E53935
  console.assert(primary.trim() === '#E53935', 'Primary color incorreta');
}
```

## Compatibilidade

### Browsers Suportados
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### CSS Features Utilizadas
- ✅ CSS Custom Properties (variáveis CSS)
- ✅ `prefers-color-scheme` media query
- ✅ CSS Grid e Flexbox
- ✅ `box-shadow` para elevação

---

*Migração completa para Material Design 3 mantendo a identidade da marca Oficina Digital*