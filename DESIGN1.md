---
name: Academic Excellence System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#331200'
  on-tertiary-container: '#cf6721'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb68e'
  on-tertiary-fixed: '#331200'
  on-tertiary-fixed-variant: '#763300'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
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
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system is built on the pillars of **Authority, Achievement, and Modern Professionalism**. It serves two distinct purposes: inspiring trust and ambition for prospective students on the public-facing site, and providing high-efficiency, systematic clarity for administrators.

The visual style is **Corporate / Modern** with a focus on structured precision. It avoids unnecessary decorative flair in favor of clear information hierarchy, using the rich heritage suggested by the academy's logo (the Greek key and laurel motifs) as subtle background elements or borders to ground the modern UI in tradition. The emotional response should be one of confidence and reliability—feeling like a premium institution that prioritizes student success.

## Colors

The palette is anchored by **Deep Blue** (Slate 900), representing institutional stability and intellect. **Emerald Green** is used as a vibrant accent for growth, success markers, and primary calls to action. A **Deep Gold** (derived from the logo) is reserved for high-achievement markers like certifications and "Winner" badges.

The background remains a clean **White** or **Off-White** (Slate 50) to ensure maximum readability and a spacious, high-end feel. For the admin portal, a secondary scale of grays (Slate 200–600) provides the necessary contrast for dense data tables and complex navigation sidebars.

## Typography

The typography strategy uses **Montserrat** for all headings to provide a geometric, authoritative, and modern corporate feel. Its bold weights are essential for high-converting landing pages.

**Inter** is the workhorse for body text and administrative data. It was selected for its exceptional legibility in dense environments like tables, student records, and complex forms. Letter spacing is slightly tightened for headlines to feel more cohesive, while labels use all-caps and increased tracking for clear categorization in the admin dashboard.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for the public site, with generous vertical spacing (`xl`) to allow marketing content to breathe. Section margins are set to 24px on mobile and scale to 80px on desktop.

For the **Admin Portal**, the system switches to a **fixed-sidebar/fluid-content** model. Spacing is condensed to `sm` and `md` units to maximize information density. Tables use a 48px row height for standard data and 40px for compact views. Breakpoints are standard: 640px (Mobile), 1024px (Tablet/Small Desktop), and 1440px (Large Desktop).

## Elevation & Depth

To maintain a clean, professional aesthetic, this design system uses **Tonal Layers** supplemented by very subtle **Ambient Shadows**.

- **Surface 0 (Background):** Slate 50. Used for the main canvas.
- **Surface 1 (Cards/Containers):** White (#FFFFFF). Uses a 1px Slate 200 border or a very soft shadow (0px 4px 12px rgba(15, 23, 42, 0.05)).
- **Surface 2 (Popovers/Modals):** White. Uses a more pronounced shadow to indicate focus (0px 10px 25px rgba(15, 23, 42, 0.1)).

In the admin portal, depth is achieved primarily through thin, low-contrast borders (Slate 200) rather than shadows, ensuring the interface remains crisp and fast to scan.

## Shapes

The shape language is **Soft** and structured. A 0.25rem (4px) base radius is applied to form inputs, buttons, and small UI components to keep the design feeling precise and professional. 

Larger containers and cards use a 0.5rem (8px) radius. This conservative approach to roundedness reinforces the "Corporate" aspect of the academy, avoiding the overly-playful nature of fully rounded pill shapes while remaining friendlier than sharp, 90-degree corners.

## Components

### Buttons
- **Primary:** Deep Blue background, White text. High-emphasis CTAs on the public site use Emerald Green to drive conversion.
- **Secondary:** White background, Deep Blue border (1px).
- **Size:** 48px height for marketing; 36px height for admin actions.

### Input Fields
- **Style:** 1px border (Slate 300), 4px radius. 
- **Active State:** Border changes to Deep Blue with a 2px Emerald Green focus ring (low opacity).
- **Labels:** Inter Medium, 14px, positioned above the field.

### Data Tables (Admin)
- **Header:** Slate 100 background, 12px Inter Bold, uppercase.
- **Rows:** Alternating subtle zebra striping (Slate 50) for high-density readability.
- **Action Icons:** 20px size, Slate 500, changing to Deep Blue on hover.

### Progress Indicators
- Used extensively for course completion. Always use **Emerald Green** for completed segments and **Slate 200** for remaining portions to provide clear, positive reinforcement.

### Cards
- Public cards (Courses/Programs) feature a top-heavy layout with high-quality imagery, a Montserrat Title, and a clear price/enrollment CTA.
- Admin cards (Stats/Metrics) use a "Big Number" format with a small label and a 12px trend indicator (up/down).