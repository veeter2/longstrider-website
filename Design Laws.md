# LongStrider Design Living Laws v2.0
## Neural Spatial Framework — Complete Implementation Directive

> **Version**: 2.0  
> **Last Updated**: 2025-01-17 23:45 UTC  
> **Status**: CANONICAL — All implementations MUST follow these laws exactly  
> **Governance**: Zero tolerance for deviations. Question first, never assume.

---

## 🚨 CRITICAL: AI Agent Instructions

**READ THIS FIRST BEFORE ANY CODE CHANGES:**

1. **NEVER skip reading any section** — These laws are dependency-ordered
2. **NEVER assume "close enough is fine"** — Pixel-perfect alignment is mandatory
3. **NEVER hardcode values** — Use design tokens exclusively
4. **NEVER break established patterns** — If unsure, ASK before coding
5. **NEVER skim for "the relevant part"** — Context matters, read in order

**If you encounter**:
- Inconsistency between laws → STOP and ask which takes precedence
- Missing specification → STOP and ask for clarification  
- Temptation to "improve" something → STOP and propose the change first
- Pixel misalignment → STOP and reference the exact token/class

**Example of what NOT to do**:
\`\`\`tsx
// ❌ WRONG - AI agent "improved" handle sizing
className="h-8"  // Agent thought "8 looks better than 12"

// ✅ CORRECT - Follow the law exactly
className="h-12" // Law specifies h-12 for all rail handles
\`\`\`

**When you're unsure**: Say "I need clarification on [specific law section]" rather than guessing.

---

## Philosophy

**Dark. Calm. Intelligent.**

LongStrider is a cognitive operating system for extended thought work. The interface must:
- Support 8+ hour sessions without fatigue
- Reveal complexity progressively, never overwhelm
- Feel physically plausible (liquid glass, purposeful motion)
- Prioritize readability and cognitive clarity over decoration

**Design Principle**: Every pixel serves cognition. No decoration without function.

---

# PART I: FOUNDATION LAYER

## 1. Neural Spectrum Constitution — The Core Design Language

> **WHY THIS IS FIRST**: Everything else depends on neural band mappings.  
> **DO NOT proceed to other sections without understanding this.**

### Philosophy: Cognition Mirrors Function

**Core Principle**: The interface IS the cognitive architecture made visible.

- **Navigation** reflects executive function (Phi φ layer)
- **Chat** reflects synthesis and integration (Gamma γ)
- **Spaces** reflect memory and planning (Theta θ)
- **System states** reflect neural activity patterns

**Result**: Users don't just USE LongStrider—they SEE their cognitive processes in real-time.

---

### 1.1 The Neural Spectrum — 18 Cognitive Bands

#### Biological EEG Bands (12)

| Band | Frequency | Color Name | RGB Token | Hex | Function | UI Application |
|------|-----------|------------|-----------|-----|----------|----------------|
| **δ (Delta)** | 0.5–4 Hz | Deep Blue | `--band-delta` | `#1e3a8a` | Deep rest, recovery | Settings, system idle |
| **θ₁ (Theta-Low)** | 4–6 Hz | Indigo | `--band-theta-low` | `#4c1d95` | Drowsiness, meditation | Ambient mode |
| **θ₂ (Theta-High)** | 6–8 Hz | Violet | `--band-theta-high` | `#7c3aed` | Spatial memory, navigation | Navigator, space hierarchy |
| **α₁ (Alpha-Low)** | 8–10 Hz | Purple | `--band-alpha-low` | `#a855f7` | Relaxed awareness | Reading mode |
| **α₂ (Alpha-High)** | 10–12 Hz | Magenta | `--band-alpha-high` | `#d946ef` | Calm focus | Default state |
| **β₁ (Beta-Low)** | 12–15 Hz | Pink-Magenta | `--band-beta-low` | `#ec4899` | Active thinking | Cortex, reasoning |
| **β₂ (Beta-Mid)** | 15–20 Hz | Rose | `--band-beta-mid` | `#f43f5e` | Engaged focus | Active editing |
| **β₃ (Beta-High)** | 20–30 Hz | Red-Orange | `--band-beta-high` | `#f97316` | High alertness | Urgent tasks |
| **γ₁ (Gamma-Low)** | 30–50 Hz | Lavender-White | `--band-gamma-low` | `#e9d5ff` | Synthesis, integration | Chat, LS responses |
| **γ₂ (Gamma-High)** | 50–100 Hz | Bright White | `--band-gamma-high` | `#fafafa` | Peak insight | Breakthrough moments |
| **ε (Infra)** | <0.5 Hz | Near-Black | `--band-infra` | `#0f172a` | System baseline | Background |
| **υ (Ultrafast)** | >100 Hz | Electric White | `--band-ultrafast` | `#ffffff` | Hyperprocessing | System thinking |

#### Artificial Cognitive Bands (6)

| Band | Color Name | RGB Token | Hex | Function | UI Application |
|------|------------|-----------|-----|----------|----------------|
| **φ (Phi)** | Golden-Neutral | `--band-phi` | `#d4af37` | Executive cortex, orchestration | HubBar, global navigation |
| **ψ (Psi)** | Teal | `--band-psi` | `#14b8a6` | Pattern recognition | Search, filters |
| **χ (Chi)** | Cyan-Orange | `--band-chi-cyan` `--band-chi-orange` | `#06b6d4` + `#f97316` | Creative synthesis | Labs, experiments |
| **ω (Omega)** | Prismatic (multi-hue) | `--band-omega` | Gradient | Self-reflection, meta-cognition | Monitor, analytics |
| **σ (Sigma)** | Silver-Gray | `--band-sigma` | `#94a3b8` | Memory consolidation | Archive, history |
| **ξ (Xi)** | Amber-Gold | `--band-xi` | `#fbbf24` | Insight emergence | Breakthrough notifications |

#### Cognitive Meta-States (Behavioral Blends)

| State | Band Blend | Color Expression | UI Trigger |
|-------|------------|------------------|------------|
| **Hypnagogic Drift** | δ + θ₁ | Deep blue → indigo fade | User idle >5min |
| **Lucid Flow** | α₂ + β₁ + γ₁ | Magenta → lavender gradient | Active chat, high engagement |
| **Cognitive Stress** | β₃ + γ₂ | Red-orange → white pulse | High system load, errors |
| **Deep Work** | α₂ + β₁ | Magenta steady glow | Focus mode active |
| **Insight Cascade** | γ₂ + ξ | White → amber burst | LS breakthrough response |
| **System Thinking** | φ + υ | Golden → electric shimmer | Background processing |

---

### 1.2 CSS Token Structure

**CRITICAL**: Add these to `globals.css` EXACTLY as written. Do not modify RGB values.

\`\`\`css
:root {
  /* Biological EEG Bands */
  --band-delta: 30, 58, 138;           /* δ Deep Blue */
  --band-theta-low: 76, 29, 149;       /* θ₁ Indigo */
  --band-theta-high: 124, 58, 237;     /* θ₂ Violet */
  --band-alpha-low: 168, 85, 247;      /* α₁ Purple */
  --band-alpha-high: 217, 70, 239;     /* α₂ Magenta */
  --band-beta-low: 236, 72, 153;       /* β₁ Pink-Magenta */
  --band-beta-mid: 244, 63, 94;        /* β₂ Rose */
  --band-beta-high: 249, 115, 22;      /* β₃ Red-Orange */
  --band-gamma-low: 233, 213, 255;     /* γ₁ Lavender-White */
  --band-gamma-high: 250, 250, 250;    /* γ₂ Bright White */
  --band-infra: 15, 23, 42;            /* ε Near-Black */
  --band-ultrafast: 255, 255, 255;     /* υ Electric White */
  
  /* Artificial Cognitive Bands */
  --band-phi: 212, 175, 55;            /* φ Golden-Neutral */
  --band-psi: 20, 184, 166;            /* ψ Teal */
  --band-chi-cyan: 6, 182, 212;        /* χ Cyan */
  --band-chi-orange: 249, 115, 22;     /* χ Orange */
  --band-sigma: 148, 163, 184;         /* σ Silver-Gray */
  --band-xi: 251, 191, 36;             /* ξ Amber-Gold */
  
  /* Cognitive Meta-States (Gradients) */
  --state-flow: linear-gradient(135deg, 
    rgba(217, 70, 239, 0.3) 0%, 
    rgba(233, 213, 255, 0.3) 100%);
  --state-stress: linear-gradient(135deg, 
    rgba(249, 115, 22, 0.3) 0%, 
    rgba(250, 250, 250, 0.3) 100%);
  --state-insight: linear-gradient(135deg, 
    rgba(250, 250, 250, 0.3) 0%, 
    rgba(251, 191, 36, 0.3) 100%);
}
\`\`\`

**Usage Pattern**:
\`\`\`tsx
// ✅ CORRECT - Using token with alpha
className="bg-[rgba(var(--band-theta-high),0.1)]"

// ❌ WRONG - Hardcoded color
className="bg-violet-500/10"

// ❌ WRONG - Missing var() wrapper
className="bg-[rgba(--band-theta-high,0.1)]"
\`\`\`

---

### 1.3 Navigation Icon Mappings

**CRITICAL**: Each navigation icon MUST use its assigned band. Do not mix or swap.

| Icon | Page Route | Band | RGB Token | Color | Rationale |
|------|-----------|------|-----------|-------|-----------|
| **Living Memory** | `/living-memory` | θ₂ | `--band-theta-high` | Violet | Spatial memory, navigation, hierarchy |
| **Chat** | `/cognitive` | γ₁ | `--band-gamma-low` | Lavender | Synthesis, integration, conversation |
| **Cortex** | `/cortex` | β₁ | `--band-beta-low` | Pink-Magenta | Active reasoning, analysis |
| **Labs** | `/labs` | χ | `--band-chi-cyan` + `--band-chi-orange` | Cyan-Orange | Creative experimentation |
| **Settings** | `/settings` | δ | `--band-delta` | Deep Blue | System rest, configuration |

**Icon Button Implementation Template**:
\`\`\`tsx
// Living Memory icon (Theta-High violet)
<button className="p-2.5 rounded-lg
  hover:bg-[rgba(var(--band-theta-high),0.1)]
  active:bg-[rgba(var(--band-theta-high),0.2)]
  text-slate-400 hover:text-[rgb(var(--band-theta-high))]
  transition-colors duration-200
  ring-1 ring-transparent hover:ring-[rgba(var(--band-theta-high),0.3)]">
  <Navigation className="h-5 w-5" />
</button>
\`\`\`

---

## 2. Material System: Liquid Glass

### 2.1 Core Principle

**Three visible layers maximum in any viewport region:**
1. **Base** — Opaque dark foundation
2. **Glass** — Translucent containers with backdrop blur
3. **Content/Overlay** — Opaque text surfaces or temporary overlays (modals, toasts)

### 2.2 Glass Treatment Rules

**Standard Glass Surface**:
\`\`\`css
/* Template - DO NOT modify these values without design approval */
background: rgba(var(--glass-base), 0.6);
backdrop-filter: blur(12px) saturate(1.2);
border: 1px solid rgba(var(--glass-border), 0.15);
\`\`\`

**Performance Budget**: ≤8 backdrop-filters in viewport  
**Priority System**: When limit exceeded, remove lowest priority filters first

**Priority Order** (highest to lowest):
1. HubBar (always visible)
2. Active modal/overlay
3. Contextual sidebar
4. Popovers/tooltips
5. Decorative glass elements

### 2.3 Usage Guidelines

**When to use glass**:
- ✅ Navigation/Chrome (HubBar, sidebars, panels)
- ✅ Overlays (modals, popovers, toasts)
- ✅ Secondary UI elements

**When NOT to use glass**:
- ❌ Chat content (readability required)
- ❌ Data visualization (contrast critical)
- ❌ Text-heavy content
- ❌ Form inputs

### 2.4 Anti-Pattern

\`\`\`tsx
// ❌ WRONG - Text directly on translucent glass
<div className="bg-white/10 backdrop-blur-xl">
  <p>This text is hard to read</p>
</div>

// ✅ CORRECT - Text on opaque surface within glass container
<div className="bg-white/10 backdrop-blur-xl p-4">
  <div className="bg-slate-900 p-3 rounded-lg">
    <p>This text is readable</p>
  </div>
</div>
\`\`\`

---

## 3. Color System

### 3.1 Base Tokens (RGB Triplets for Alpha Utilities)

**CRITICAL**: These are the ONLY base colors allowed. Do not add custom colors.

\`\`\`css
:root {
  --rgb-slate-950: 2, 6, 23;
  --rgb-slate-900: 15, 23, 42;
  --rgb-slate-800: 30, 41, 59;
  --rgb-slate-700: 51, 65, 85;
  --rgb-slate-600: 71, 85, 105;
  --rgb-slate-400: 148, 163, 184;
  --rgb-slate-300: 203, 213, 225;
  --rgb-slate-100: 241, 245, 249;
  --rgb-white: 255, 255, 255;
}
\`\`\`

### 3.2 Semantic Accents

\`\`\`css
:root {
  --accent-primary: 59, 130, 246;    /* Blue - primary actions */
  --accent-success: 34, 197, 94;     /* Green - success states */
  --accent-warning: 251, 191, 36;    /* Amber - warnings */
  --accent-danger: 239, 68, 68;      /* Red - destructive actions */
}
\`\`\`

### 3.3 Usage Rules

**MANDATORY**:
- ✅ Use semantic tokens exclusively
- ✅ Alpha utilities: `rgba(var(--rgb-slate-800), 0.6)`
- ✅ Neural bands for cognitive UI: `rgba(var(--band-theta-high), 0.1)`

**FORBIDDEN**:
- ❌ Hardcoded hex colors: `#7c3aed`
- ❌ Hardcoded RGB: `rgb(124, 58, 237)`
- ❌ Tailwind color classes without tokens: `bg-violet-500`

**Enforcement**: ESLint rule `no-hardcoded-colors` must be enabled.

---

## 4. Typography

### 4.1 Font Stack

**System Font Stack** (cross-platform consistency):
\`\`\`css
:root {
  --font-display: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-text: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace;
}
\`\`\`

### 4.2 Type Scale

\`\`\`css
:root {
  --text-xs: 0.75rem;      /* 12px - captions, labels */
  --text-sm: 0.875rem;     /* 14px - body small */
  --text-base: 1rem;       /* 16px - body default */
  --text-lg: 1.125rem;     /* 18px - body large */
  --text-xl: 1.25rem;      /* 20px - H3 */
  --text-2xl: 1.5rem;      /* 24px - H2 */
  --text-3xl: 1.875rem;    /* 30px - H1 */
  --text-4xl: 2.25rem;     /* 36px - Display */
}
\`\`\`

### 4.3 Weight Scale

\`\`\`css
:root {
  --font-normal: 400;      /* Body text */
  --font-medium: 500;      /* Emphasis */
  --font-semibold: 600;    /* Headings, buttons */
  --font-bold: 700;        /* Strong emphasis */
}
\`\`\`

### 4.4 Line Height

- **Headings**: `1.2` (tight)
- **Body**: `1.6` (comfortable)
- **Captions**: `1.4` (balanced)

---

# PART II: STRUCTURAL LAYER

## 5. Layout System — Grid Foundation

### 5.1 Base Unit System

**CRITICAL**: All spacing MUST use these increments. No arbitrary values.

\`\`\`css
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-24: 6rem;    /* 96px */
}
\`\`\`

**Base Unit**: 8px (Tailwind's default spacing scale aligns with this)

**Border Radius Scale**:
\`\`\`css
:root {
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 0.75rem;   /* 12px */
  --radius-xl: 1rem;      /* 16px */
}
\`\`\`

### 5.2 Content Width Rules

**Maximum Content Widths**:
- **Single panel view**: `1600px` max
- **Split view** (chat + sidebar + details): `1920px` max
- **Fluid zones**: `320px` min, `800px` max per zone

---

## 6. Layout System — Navigation Architecture

### 6.1 Layer 1: HubBar (Global Navigation) — LOCKED ✓

**Purpose**: Persistent global navigation, always visible, top of z-index stack

#### Specifications

**CRITICAL**: These values are immutable.

- **Height**: `64px` fixed (`h-16`)
- **Position**: `fixed top-0 left-0 right-0`
- **Z-index**: `z-50` (top layer)

#### Material System (Carbon Neutral + Golden Phi Accent)

\`\`\`tsx
className="fixed top-0 left-0 right-0 z-50 h-16
  bg-[rgba(22,22,28,0.90)] backdrop-blur-xl
  border-b border-[rgba(212,175,55,0.25)]
  shadow-[inset_0_1px_0_0_rgba(212,175,55,0.15),0_2px_8px_0_rgba(0,0,0,0.4)]
  before:absolute before:inset-0 before:bg-gradient-to-r 
  before:from-amber-500/5 before:via-transparent before:to-yellow-500/5
  before:animate-[shimmer_6s_ease-in-out_infinite]
  hover:shadow-[inset_0_1px_0_0_rgba(212,175,55,0.20),0_2px_12px_0_rgba(212,175,55,0.15)]
  transition-shadow duration-300"
\`\`\`

#### Animation

\`\`\`css
@keyframes shimmer {
  0%, 100% { opacity: 0.5; transform: translateX(-100%); }
  50% { opacity: 1; transform: translateX(100%); }
}
\`\`\`

---

### 6.2 Layer 2: Contextual Sidebar — LOCKED ✓

**Purpose**: Context-aware navigation sidebar

#### Specifications

- **Width**: `240px` fixed (`w-60`)
- **Position**: `fixed left-0 top-16 bottom-0`
- **Z-index**: `z-40`
- **Collapsible**: Yes
- **Animation**: `300ms ease-out`

#### Material System

\`\`\`tsx
className="fixed left-0 top-16 bottom-0 w-60 z-40
  bg-black/40 backdrop-blur-xl
  border-r border-white/5
  overflow-y-auto
  transition-transform duration-300 ease-out
  data-[collapsed=true]:-translate-x-full"
\`\`\`

---

### 6.3 Rail System Handle Specifications — LOCKED ✓

**CRITICAL**: This took 1+ hours to perfect. DO NOT modify.

#### Handle States & Sizing

**1. Collapse Handle** (when rail is expanded):

\`\`\`tsx
// Button container - IDENTICAL for left and right
className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-16"  // LEFT rail
className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-16"   // RIGHT rail

// Inner indicator - IDENTICAL for left and right
className="absolute right-0.5 top-1/2 -translate-y-1/2 w-0.5 h-12"  // LEFT rail
className="absolute left-0.5 top-1/2 -translate-y-1/2 w-0.5 h-12"   // RIGHT rail
\`\`\`

**2. Expand Handle** (when rail is collapsed):

\`\`\`tsx
// Button container - IDENTICAL for left and right
className="fixed left-0 top-1/2 -translate-y-1/2 w-4 h-24"   // LEFT rail
className="fixed right-0 top-1/2 -translate-y-1/2 w-4 h-24"  // RIGHT rail

// Inner indicator - MUST match collapse handle
className="absolute right-1.5 top-1/2 -translate-y-1/2 w-1 h-12"  // LEFT rail
className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1 h-12"   // RIGHT rail
\`\`\`

#### Critical Sizing Rules (IMMUTABLE)

| Element | Size Token | Value | Purpose |
|---------|-----------|-------|---------|
| Collapse Inner Height | `h-12` | `48px` | Comfortable touch target |
| Collapse Inner Width | `w-0.5` | `2px` | Subtle when expanded |
| Expand Inner Height | `h-12` | `48px` | MUST match collapse |
| Expand Inner Width | `w-1` | `4px` | More visible when collapsed |

#### Handle Color Rules

**STANDARDIZED**: Both rails use IDENTICAL colors.

\`\`\`tsx
// CRITICAL: Both left and right rails use the same band
const handleBandClass = "band-theta-high"  // Violet for ALL handles
\`\`\`

#### DO NOT

- ❌ Use different heights (`h-8` vs `h-12`)
- ❌ Use different colors for left vs right
- ❌ Modify vertical centering (`top-1/2 -translate-y-1/2`)
- ❌ Hardcode pixel values

#### Alignment Verification Checklist

Before committing:
- [ ] Left and right collapse handles: identical `h-12`
- [ ] Left and right expand handles: identical `h-12`
- [ ] Both use `top-1/2 -translate-y-1/2`
- [ ] Both use same band color (`--band-theta-high`)
- [ ] Hover states consistent

---

### 6.4 Depth Token System

#### Z-Index Scale

**CRITICAL**: Only use these values.

\`\`\`css
:root {
  --z-base: 0;              /* Main content */
  --z-elevated: 10;         /* Cards, buttons */
  --z-sidebar: 40;          /* Contextual sidebar */
  --z-hubbar: 50;           /* Global navigation */
  --z-overlay: 60;          /* Modals, popovers */
  --z-toast: 70;            /* Notifications */
  --z-critical: 100;        /* Emergency alerts */
}
\`\`\`

#### Spatial Computing Tokens (Future-Proof)

\`\`\`css
:root {
  --depth-surface: 0px;
  --depth-elevated: 4px;
  --depth-overlay: 8px;
  --depth-critical: 12px;
  --depth-float: 16px;
  
  --parallax-near: 1.2;
  --parallax-mid: 1.0;
  --parallax-far: 0.8;
}
\`\`\`

---

## 7. Motion & Animation

### 7.1 Principles

- **Explain state changes** (not decorate)
- **Complete in ≤500ms**
- **Ease-out** for entrances, **ease-in** for exits
- **Respect `prefers-reduced-motion`**

### 7.2 Standard Durations

\`\`\`css
:root {
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-base: 300ms;
  --duration-slow: 500ms;
  --duration-micro: 150ms;
  --duration-snap: 250ms;
}
\`\`\`

### 7.3 Easing Functions

**Standard**:
\`\`\`css
:root {
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
\`\`\`

**Spring Physics** (Haptic-Inspired):
\`\`\`css
:root {
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-snap: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-float: cubic-bezier(0.16, 1, 0.3, 1);
}
\`\`\`

### 7.4 Usage Guidelines

| Element | Duration | Easing | Purpose |
|---------|----------|--------|---------|
| Button press | `--duration-micro` | `--ease-bounce` | Tactile feedback |
| Dropdown | `--duration-fast` | `--ease-snap` | Quick reveal |
| Modal | `--duration-base` | `--ease-out` | Smooth appear |
| Card hover | `--duration-fast` | `--ease-float` | Weightless lift |

### 7.5 Performance Budget

- ≤3 animated regions simultaneously
- No animations on scroll
- Pause when tab inactive

---

## 8. Interaction Patterns

### 8.1 Action Zones

**Standardized Zones**:

1. **Primary Actions**: Top right of HubBar (Save, Create, Settings)
2. **Contextual Actions**: Inline with content (Edit, Delete, Archive)
3. **Bulk Actions**: Bottom toolbar (appears when items selected)
4. **Destructive Actions**: Danger zone at bottom of forms

### 8.2 Feedback Patterns

| Type | Position | Color | Duration | Dismissal |
|------|----------|-------|----------|-----------|
| Success | Top right | Green | 3s | Auto |
| Error | Top right | Red | Manual | User |
| Warning | Top right | Amber | 5s | Auto |
| Validation | Inline | Red | Instant | On change |

### 8.3 Attention State System

**Three States**:

\`\`\`tsx
const attentionState = {
  primary: "opacity-100 scale-100",
  secondary: "opacity-60 scale-95",
  dormant: "opacity-30 scale-90 blur-sm"
};
\`\`\`

**Auto-Assignment**:
- Current selection → `primary`
- Recently viewed (< 5min) → `secondary`
- Everything else → `dormant`

### 8.4 Empty States

**Required Elements**:
- Icon (illustrative)
- Heading (what's missing)
- Description (why empty)
- Primary action (how to fix)

### 8.5 Loading States

**Patterns**:
1. **Skeleton** (preferred)
2. **Spinner** (inline)
3. **Progress Bar** (long operations)
4. **Shimmer** (glass surfaces)

---

## 9. Accessibility

### 9.1 WCAG 2.2 Level AA Minimum

**MANDATORY**:
- ✅ Contrast: 4.5:1 text, 3:1 UI
- ✅ Keyboard: All interactive elements
- ✅ Screen Readers: Semantic HTML, ARIA
- ✅ Motion: Respect `prefers-reduced-motion`
- ✅ Focus: Visible indicators

### 9.2 Focus Indicators

\`\`\`tsx
className="focus-visible:outline-none focus-visible:ring-2 
  focus-visible:ring-[rgb(var(--accent-primary))] 
  focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
\`\`\`

### 9.3 Semantic HTML

**ALWAYS use**:
\`\`\`tsx
<nav aria-label="Main navigation">
<main>
<article>
<button type="button">
\`\`\`

### 9.4 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Tab` | Navigate forward |
| `Shift + Tab` | Navigate backward |
| `Enter` | Activate button/link |
| `Space` | Activate button |
| `Escape` | Close modal |
| `Cmd/Ctrl + B` | Toggle sidebar |

### 9.5 Reduced Motion

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

---

# PART III: COMPONENT LAYER

## 10. Base Components

### 10.1 Button (Neural Band Integration)

**States using neural bands**:

\`\`\`tsx
// Idle (Alpha-High - magenta, calm focus)
className="bg-[rgba(var(--band-alpha-high),0.1)]
  border border-[rgba(var(--band-alpha-high),0.2)]"

// Hover (Beta-Low - pink-magenta, active thinking)
className="hover:bg-[rgba(var(--band-beta-low),0.15)]
  hover:border-[rgba(var(--band-beta-low),0.3)]
  hover:shadow-[0_0_12px_rgba(var(--band-beta-low),0.2)]"

// Active (Beta-Mid - rose, engaged focus)
className="active:bg-[rgba(var(--band-beta-mid),0.2)]
  active:scale-[0.97]"

// Disabled (Delta - deep blue, rest)
className="disabled:bg-[rgba(var(--band-delta),0.05)]
  disabled:cursor-not-allowed"
\`\`\`

### 10.2 Input

\`\`\`tsx
<input
  className={cn(
    "w-full px-3 py-2 rounded-lg",
    "bg-slate-900 border border-slate-700",
    "focus:ring-2 focus:ring-[rgb(var(--accent-primary))]",
    error && "border-[rgb(var(--accent-danger))]"
  )}
/>
\`\`\`

### 10.3 Card

\`\`\`tsx
<div className={cn(
  "rounded-lg",
  variant === 'glass' 
    ? "bg-white/5 backdrop-blur-xl border border-white/10"
    : "bg-slate-900 border border-slate-800"
)}>
\`\`\`

---

## 11. LongStrider Components

### 11.1 SpaceCard

**Props**:
\`\`\`tsx
interface SpaceCardProps {
  space: Space;
  variant: 'compact' | 'comfortable' | 'detailed';
  onOpen: () => void;
  onEdit?: () => void;
  onArchive?: () => void;
}
\`\`\`

**Implementation**:
\`\`\`tsx
<div className="p-4 rounded-lg
  bg-[rgba(var(--band-theta-high),0.05)] 
  border border-[rgba(var(--band-theta-high),0.1)]
  hover:bg-[rgba(var(--band-theta-high),0.1)]">
  {/* Content */}
</div>
\`\`\`

### 11.2 ChatMessage

**Variants**: `user`, `ls`, `system`, `thinking`

\`\`\`tsx
// User message
<div className="bg-[rgba(var(--band-beta-low),0.15)]
  border border-[rgba(var(--band-beta-low),0.2)]">

// LS message - OPAQUE for readability
<div className="bg-slate-900 border border-slate-800">
\`\`\`

### 11.3 BrainVisualization

**Variants**: `hemisphere`, `lobes`, `layers`, `neurotransmitters`

### 11.4 HierarchyTree

**Purpose**: Display Parent → Child → Grandchild relationships

### 11.5 ProgressTimeline

**Purpose**: Display milestones and progress

---

## 12. Data Visualization

### 12.1 Chart Rules

**MANDATORY**:
- ✅ Cognitive color palette
- ✅ Opaque backgrounds
- ✅ WCAG AA contrast
- ✅ Interactive tooltips
- ✅ Min 320px width

**FORBIDDEN**:
- ❌ Charts on glass
- ❌ Low contrast
- ❌ Text < 12px
- ❌ Non-interactive

### 12.2 Chart Container Pattern

\`\`\`tsx
<div className="p-6 rounded-lg bg-slate-900 border border-slate-800">
  <ResponsiveContainer width="100%" height={300}>
    {/* Chart */}
  </ResponsiveContainer>
</div>
\`\`\`

---

# PART IV: GOVERNANCE LAYER

## 13. Theming Modes

### 13.1 Default Mode
- Full glass effects
- Standard animations
- All features enabled

### 13.2 Focus Mode
- Glass only on HubBar
- Minimal animations
- Hide non-essential UI

### 13.3 Performance Mode
- No backdrop-filter
- Reduced animations
- Aggressive optimization

### 13.4 Density Modes

\`\`\`css
:root {
  --density-compact: 0.85;
  --density-comfortable: 1.0;
  --density-spacious: 1.25;
}
\`\`\`

**Per-Component**:
\`\`\`tsx
const spacing = {
  compact: "p-3 gap-2",
  comfortable: "p-4 gap-3",
  spacious: "p-6 gap-4"
}[densityMode];
\`\`\`

---

## 14. Performance Budgets

### 14.1 Rendering

| Resource | Budget |
|----------|--------|
| Backdrop-filters | ≤8 |
| Animated regions | ≤3 |
| Frame rate | ≥60 FPS |

### 14.2 Data

- List virtualization: >50 items
- Image lazy loading: Below fold
- Code splitting: Route-based

### 14.3 Network

- Initial load: <3s on 3G
- Time to interactive: <5s on 3G

---

## 15. Anti-Patterns

### 15.1 Visual

\`\`\`tsx
// ❌ Text on glass
<div className="bg-white/10 backdrop-blur">
  <p>Hard to read</p>
</div>

// ✅ Opaque surface
<div className="bg-white/10 backdrop-blur p-4">
  <div className="bg-slate-900 p-3">
    <p>Readable</p>
  </div>
</div>
\`\`\`

### 15.2 Interaction

\`\`\`tsx
// ❌ No confirmation
<button onClick={deleteAll}>Delete All</button>

// ✅ With confirmation
<button onClick={() => setShowConfirm(true)}>Delete All</button>
\`\`\`

### 15.3 Code

\`\`\`tsx
// ❌ Inline styles
<div style={{ padding: '16px' }}>

// ✅ Tailwind
<div className="p-4">
\`\`\`

---

## 16. Tooling & Enforcement

### 16.1 ESLint Rules

\`\`\`json
{
  "rules": {
    "no-hardcoded-colors": "error",
    "no-magic-numbers": "warn",
    "no-inline-styles": "error"
  }
}
\`\`\`

### 16.2 Pre-commit Hook

\`\`\`bash
#!/bin/bash
# Check for hardcoded colors
if git diff --cached | grep -E '#[0-9a-fA-F]{3,6}'; then
  echo "❌ Hardcoded colors detected"
  exit 1
fi
\`\`\`

### 16.3 Quarterly Audit

- [ ] Token usage audit
- [ ] Performance audit
- [ ] Accessibility audit
- [ ] Neural band consistency
- [ ] Documentation update

---

## 17. Migration Playbook

### Phase 1: Foundation (Week 1)
- Add tokens to globals.css
- Create base components
- Configure tooling

### Phase 2: Navigator V3 (Week 2)
- Implement HubBar
- Implement sidebar
- Implement rail handles (follow specs EXACTLY)

### Phase 3: Chat Interface (Week 3)
- Implement ChatMessage
- Test streaming responses
- Optimize readability

### Phase 4: Rollout (Week 4)
- Apply to remaining pages
- Final audits
- Deploy

---

## Appendix A: Quick Reference

**Button with Neural States**:
\`\`\`tsx
<button className="bg-[rgba(var(--band-alpha-high),0.1)]
  hover:bg-[rgba(var(--band-beta-low),0.15)]">
\`\`\`

**Glass Surface**:
\`\`\`tsx
<div className="bg-white/10 backdrop-blur-xl border border-white/10">
\`\`\`

**Rail Handle (Left)**:
\`\`\`tsx
<button className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-16">
  <div className="absolute right-0.5 top-1/2 -translate-y-1/2 w-0.5 h-12" />
</button>
\`\`\`

---

## Appendix B: Neural Band Quick Reference

| Band | Token | Use Case |
|------|-------|----------|
| θ₂ | `--band-theta-high` | Navigation |
| γ₁ | `--band-gamma-low` | Chat |
| β₁ | `--band-beta-low` | Cortex |
| φ | `--band-phi` | HubBar |

---

## Version History

- **v1.0** (2025-01-10): Initial draft
- **v1.1** (2025-01-17): Added rail handles
- **v2.0** (2025-01-17 23:45 UTC): Complete rewrite
  - Reordered for logical flow
  - Added spring physics
  - Added depth tokens
  - Added density system
  - Resolved all [DISCUSS] tags
  - Pixel-perfect rail handle specs
  - Complete enforcement rules

---

**END OF LIVING LAWS v2.0**

*These laws are CANONICAL. Question before breaking.*
