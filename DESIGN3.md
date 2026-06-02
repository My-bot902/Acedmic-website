---
name: Academic Excellence Portal
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#554240'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#89726f'
  outline-variant: '#dcc0bd'
  surface-tint: '#9d4139'
  primary: '#210000'
  on-primary: '#ffffff'
  primary-container: '#4a0404'
  on-primary-container: '#d26a5f'
  inverse-primary: '#ffb4aa'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#0a0a0a'
  on-tertiary: '#ffffff'
  tertiary-container: '#212121'
  on-tertiary-container: '#8a8888'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#7e2b23'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
  max-width: 1440px
---

## Brand & Style

This design system is built for "The Winners Academy," a prestigious institution requiring a balance of academic tradition and modern efficiency. The personality is **authoritative, trustworthy, and precise**. It evokes the feeling of a well-organized, high-end educational environment where data is clear and actions are purposeful.

The visual style is **Corporate / Modern** with a focus on high-clarity data density. We employ a "clean-room" aesthetic: expansive white surfaces, razor-sharp alignment, and subtle functional borders that prioritize content legibility over decorative flourish. The aesthetic avoids heavy shadows or rounded "playful" shapes in favor of a structured, professional environment optimized for administrative excellence.

## Colors

The palette is rooted in the institution's heritage, utilizing a deep **Burgundy** (#4A0404) as the primary brand anchor for navigation, headers, and primary actions. **Academic Gold** (#C5A059) is used sparingly as a secondary accent for highlights, iconography, and decorative rules to denote prestige without compromising accessibility.

The UI relies heavily on a high-contrast neutral scale. Backgrounds are kept at pure white or very light gray (#F8F9FA) to ensure that text remains the focal point. Borders use a consistent, low-contrast gray (#E9ECEF) to define structures like tables and cards without adding visual noise. Functional colors for status (Success, Error) are desaturated to fit the professional tone.

## Typography

The typography system uses a pairing of **Hanken Grotesk** for headlines and **Inter** for body and UI elements. This combination provides a sharp, contemporary look that is highly legible in data-heavy contexts.

- **Headlines:** Use Hanken Grotesk with tighter letter spacing for a confident, editorial feel. 
- **Body & Data:** Inter is used for all functional text. Its neutral tone and excellent x-height make it perfect for reading student records and financial reports.
- **Hierarchy:** Use font weight to differentiate between data labels (SemiBold) and user input (Regular). 
- **Mobile:** Large display sizes scale down on mobile to prevent overflow, while body sizes remain constant to ensure readability.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The layout philosophy is structured and rigorous, emphasizing vertical rhythm through a 4px baseline unit.

- **Dashboards:** Use a fixed side-navigation (280px) with a fluid content area. 
- **Data Tables:** Spacing is condensed (8px padding) to maximize the amount of information visible on a single screen without horizontal scrolling.
- **Content Containers:** Cards and sections use a standard 24px padding to create clear breathing room between administrative blocks.
- **Breakpoints:** Mobile (< 768px), Tablet (768px - 1024px), Desktop (> 1024px). On mobile, sidebars collapse into a "hamburger" menu to prioritize the workspace.

## Elevation & Depth

To maintain a clean and professional appearance, this design system rejects heavy shadows in favor of **Tonal Layers** and **Low-contrast Outlines**.

- **Level 0 (Base):** The primary background color (White or Light Gray).
- **Level 1 (Cards/Sections):** White surfaces with a 1px border (#E9ECEF). No shadow.
- **Level 2 (Dropdowns/Modals):** A subtle, extra-diffused shadow (0px 4px 20px rgba(0,0,0,0.05)) is used only for floating elements that sit above the primary interface to provide clear focus.
- **Interactive States:** Buttons and interactive cards use a slight color shift (darkening or lightening by 5%) rather than an elevation change to signify hover or active states.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a subtle modern touch that softens the "institutional" feel while maintaining the professional rigor of the brand.

- **Buttons & Inputs:** Use the standard 0.25rem (4px) corner radius.
- **Large Containers:** Cards and dashboards use 0.5rem (8px) to create a clear container identity.
- **Status Pills:** Small status indicators (e.g., "Paid", "Absent") use a pill-shape (full rounding) to differentiate them from functional buttons.

## Components

### Buttons
Primary buttons are solid Burgundy (#4A0404) with white text. Secondary buttons use a Burgundy outline with Burgundy text. Action icons within buttons should use the Gold accent (#C5A059) to draw the eye to the specific function.

### Input Fields
Inputs are defined by a 1px border (#E9ECEF). Upon focus, the border transitions to Burgundy with a subtle 2px soft glow in the same color. Labels sit above the input in Inter SemiBold 12px.

### Data Tables
Tables are the heart of the portal. Rows have a 1px bottom border. Header rows use a light gray background (#F1F3F5) with uppercase labels. Hover states on rows use an extremely subtle tint (#F8F9FA) to help users track data horizontally.

### Cards
Cards are used to group related dashboard metrics. They feature a 1px border and no shadow. The header of a card may feature a subtle Gold top-border (2px) to denote importance or "Winner" status.

### Status Indicators
Small, high-contrast badges used for student status or grade indicators. Use desaturated Red for errors/absences and desaturated Green for successes/attendance, ensuring text contrast meets WCAG AA standards.