---
name: Academic Excellence
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#564240'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#89726f'
  outline-variant: '#dcc0bd'
  surface-tint: '#9f3f3a'
  primary: '#380003'
  on-primary: '#ffffff'
  primary-container: '#5a0b0d'
  on-primary-container: '#e1716a'
  inverse-primary: '#ffb3ad'
  secondary: '#7a5816'
  on-secondary: '#ffffff'
  secondary-container: '#ffd083'
  on-secondary-container: '#795715'
  tertiary: '#171714'
  on-tertiary: '#ffffff'
  tertiary-container: '#2b2b28'
  on-tertiary-container: '#94928e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#802825'
  secondary-fixed: '#ffdeab'
  secondary-fixed-dim: '#edbf74'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5f4100'
  tertiary-fixed: '#e5e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1c1c19'
  on-tertiary-fixed-variant: '#474743'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is rooted in the concepts of **Heritage, Precision, and Achievement**. It is designed for an educational institution that balances traditional academic rigour with modern pedagogical delivery. The visual language evokes the feeling of an elite university—authoritative and established—while remaining accessible through clean, functional digital interfaces.

The aesthetic follows a **Corporate / Modern** style with subtle **Minimalist** influences. It prioritizes clarity, whitespace, and a sophisticated interplay between classical typography and modern interface elements. The emotional response should be one of confidence, reliability, and the pursuit of excellence.

## Colors

The palette is anchored by a deep **Heritage Burgundy** (Primary), representing tradition and depth of knowledge, and a **Prestige Gold** (Secondary), used for accents, highlights, and status indicators. 

- **Primary (#5A0B0D):** Used for top-level navigation, primary buttons, and critical branding elements.
- **Secondary (#B38B45):** Used for decorative accents, call-outs, and secondary actions.
- **Tertiary (#F9F6F1):** A warm, parchment-inspired off-white used for large section backgrounds to reduce eye strain and enhance the academic feel.
- **Neutral (#1A1A1A):** A high-contrast charcoal for maximum legibility in body copy and headings.

## Typography

The system utilizes a dual-font strategy to bridge the gap between tradition and modern utility. 

**Libre Caslon Text** is used for headlines. Its classical serif structure provides the "authoritative" and "literary" weight required for an academic institution. 

**Work Sans** is the functional workhorse for body copy and UI labels. It is a highly legible, professional sans-serif that remains neutral and clear at smaller scales. Use uppercase styling for `label-md` to denote section headers or metadata, increasing professional "gravitas."

## Layout & Spacing

The layout utilizes a **Fixed Grid** philosophy on desktop to maintain an editorial, structured feel, transitioning to a fluid model for smaller devices.

- **Desktop (1440px+):** 12-column grid, 1280px max-width container, 24px gutters.
- **Tablet (768px - 1439px):** 8-column grid, fluid width with 32px side margins.
- **Mobile (Up to 767px):** 4-column grid, fluid width with 20px side margins.

Spacing follows an 8px base unit. Use generous "stack-lg" (32px) between major content sections to allow the design to breathe, reinforcing the premium, high-achieving brand position.

## Elevation & Depth

To maintain a sophisticated and "grounded" aesthetic, this system avoids heavy drop shadows. Instead, it employs **Tonal Layers** and **Low-contrast outlines**.

- **Surface Tiers:** Use the tertiary color (#F9F6F1) as the base "canvas." Elevated cards should use pure white (#FFFFFF).
- **Outlines:** Use a subtle 1px border (#E5E5E5) for cards and input fields to define boundaries without adding visual clutter.
- **Interactive Depth:** When a user interacts with an element (e.g., hovering over a course card), apply an **Ambient Shadow**: a very soft, diffused 15% opacity shadow using the primary burgundy tint to create a "lift" effect that feels intentional and elegant.

## Shapes

The shape language is conservative to reflect institutional stability. 

A **Soft (1)** roundedness level is applied to UI components like buttons and form fields. This provides a subtle modern touch without appearing overly "bubbly" or informal. Cards and large containers should utilize the `rounded-lg` (0.5rem) token to distinguish them from smaller UI elements.

## Components

### Buttons
- **Primary:** Solid Heritage Burgundy background, white text, uppercase `label-md`. 
- **Secondary:** Prestige Gold outline, Heritage Burgundy text. Used for less critical actions.
- **Ghost:** No background, Heritage Burgundy text with a 1px bottom border on hover.

### Form Fields
- **Inputs:** White background, 1px neutral border, Work Sans body-md text. Labels should use `label-sm` in Heritage Burgundy to ensure clarity.
- **Focus State:** 2px border in Prestige Gold to clearly indicate user activity.

### Cards
- **Course/Program Cards:** White background, `rounded-lg` corners, 1px light border. Use the secondary gold for accent lines or icons within the card to denote "Featured" or "Scholarship" status.

### Progress Indicators
- For student portals, use a thin, horizontal Prestige Gold bar to indicate course completion.

### Lists
- Use custom bullet points featuring the "torch" or "leaf" motif from the logo in Prestige Gold to add a branded, academic touch to text-heavy pages.