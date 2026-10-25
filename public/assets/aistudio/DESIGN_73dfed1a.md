---
name: Imperial Amber
colors:
  surface: '#121316'
  surface-dim: '#121316'
  surface-bright: '#38393c'
  surface-container-lowest: '#0d0e11'
  surface-container-low: '#1b1b1f'
  surface-container: '#1f1f23'
  surface-container-high: '#292a2d'
  surface-container-highest: '#343538'
  on-surface: '#e3e2e6'
  on-surface-variant: '#d8c3b1'
  inverse-surface: '#e3e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#a08d7d'
  outline-variant: '#534436'
  surface-tint: '#ffb86e'
  primary: '#ffb86e'
  on-primary: '#492900'
  primary-container: '#cb7f23'
  on-primary-container: '#402300'
  inverse-primary: '#8a5100'
  secondary: '#fabc4d'
  on-secondary: '#432c00'
  secondary-container: '#bd8718'
  on-secondary-container: '#3a2600'
  tertiary: '#ffb692'
  on-tertiary: '#562000'
  tertiary-container: '#d67845'
  on-tertiary-container: '#4b1b00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcbd'
  primary-fixed-dim: '#ffb86e'
  on-primary-fixed: '#2c1600'
  on-primary-fixed-variant: '#693c00'
  secondary-fixed: '#ffdead'
  secondary-fixed-dim: '#fabc4d'
  on-secondary-fixed: '#281900'
  on-secondary-fixed-variant: '#604100'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb692'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#793101'
  background: '#121316'
  on-background: '#e3e2e6'
  surface-variant: '#343538'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an opulent, multi-generational Pakistani culinary identity tailored for an esteemed fine-dining heritage venue in Sialkot, Punjab. The experience marries aristocratic Mughal-Punjabi hospitality with sleek contemporary luxury. 

The aesthetic style is **Atmospheric Luxury Minimalism with Tactile Warmth**. It avoids outdated cultural clichés, relying instead on deep chiaroscuro contrasts, radiant amber backlights reminiscent of glowing tandoors and saffron infusions, and hyper-refined editorial typography. The target audience encompasses discerning multi-generational families, banquet hosts, and diaspora visitors seeking authentic culinary prestige in an elevated, world-class hospitality environment.

## Colors

The palette draws strictly from heirloom copperware, saffron-steeped broths, slow embers, and deep nightfall over the Punjab plains:

- **Deep Slate Canvas (`#121316`)**: An obsidian foundation with an undertone of warm soot, grounding digital surfaces with cinematic depth.
- **Warm Stone Surfaces (`#1E2024`)**: Elevated containers, cards, and modal canvases that provide quiet separation from the deep background without breaking the immersion.
- **Warm Spice Amber (`#C87D20`)**: The primary brand anchor, providing rich earthen authority to primary calls-to-action, primary icons, and focal accents.
- **Saffron Gold (`#E5A93C`)**: The secondary luminescent accent, reserved for gilded price tags, VIP badges, ratings, and active tab highlights.
- **Peshawari Clove (`#8B3E0F`)**: Tertiary deep accent used for subtle gradients, active selection states, and warm backdrops.
- **Warm Ivory (`#FAF7F2`)**: High-contrast, gentle primary text preventing eye strain across dark surfaces while delivering soft warmth compared to pure white.
- **Cardamom Veil (`#9EA0A5`)**: Secondary neutral for metadata, table numbers, ingredient descriptors, and inactive states.

## Typography

The typographical pairing strikes an equilibrium between timeless Pakistani heirloom dining and hyper-efficient reservation flows.

- **Headlines & Display:** Playfair Display delivers an editorial, high-contrast serif structure reminiscent of bespoke tasting menus and archival royal banquet programs. It conveys heritage and pride in craft.
- **Body & Labels:** Plus Jakarta Sans provides clean, open geometric forms that remain pristine across complex booking tables, banquet menus, and modifier checklists.
- **Stylistic Conventions:** Display titles use natural title casing. Section headers, category badges, and culinary credentials use uppercase letter-spaced labels (`label-sm`, `label-lg`) to evoke bespoke hospitality stationery.

## Layout & Spacing

The layout model uses a disciplined fluid grid tailored to showcase culinary imagery, family table reservations, and tiered degustation menus:

- **Desktop (≥1024px):** 12-column fluid grid, `3rem` canvas margins, and `1.5rem` gutters. Content containers cap at a max-width of `1280px` for optimal narrative readability.
- **Tablet (768px - 1023px):** 8-column layout with `2rem` margins and `1rem` gutters.
- **Mobile (<768px):** 4-column layout with `1.25rem` margin and `1rem` gutter, shifting reservation summaries and multi-dish course pairings to single-column vertical journeys.
- **Vertical Rhythm:** Generous vertical intervals (`space-xl`) between seasonal recommendations and private dawat (banquet) booking suites create a deliberate, unhurried pace.

## Elevation & Depth

Visual hierarchy abandons clinical gray dropshadows in favor of an atmospheric, amber-infused luminescent schema:

- **Tonal Hierarchy:** The canvas rests at `#121316`. Base cards occupy `#1E2024`. Elevated interactive elements (floating cart summaries, private dining modals) leverage `#25282D`.
- **Atmospheric Culinary Glow:** Elevated and interactive surfaces utilize warm, low-opacity saffron/amber ambient shadows: `box-shadow: 0 16px 36px -8px rgba(200, 125, 32, 0.12), 0 4px 12px rgba(0, 0, 0, 0.4)`.
- **Gilded Hairline Tracing:** Cards and elevated containers feature an ultra-thin border: `1px solid rgba(229, 169, 60, 0.15)`. Under hover or active states, this transitions to `rgba(229, 169, 60, 0.45)` with an inner soft radial highlight to simulate candlelit warmth.

## Shapes

The design system implements a refined `Rounded` geometry (Level 2). 

- Standard cards, interactive tiles, inputs, and container surfaces adhere to `0.5rem` (`rounded`), generating a warm, approachable character appropriate for family dining.
- Feature recipe modules and marquee banquet banners scale up to `1rem` (`rounded-lg`).
- Interactive pills, tags, dietary chips, and badge markers adopt a full capsule radius to juxtapose the structured serif headers with modern tactile comfort.

## Components

### Buttons
- **Primary Action (e.g., "Reserve Dawat Suite", "Order Banquet"):** Filled with a linear gradient from Warm Spice Amber (`#C87D20`) to Saffron Gold (`#E5A93C`). Text is set in `#121316` (Bold Plus Jakarta Sans). Soft amber outer halo on hover.
- **Secondary (e.g., "Explore Karahi Specialties"):** Background in `#1E2024` with a `1px` gold hairline border (`rgba(229, 169, 60, 0.3)`), shifting to solid saffron border on hover with Warm Ivory (`#FAF7F2`) text.
- **Ghost/Tertiary:** Ivory text with an animated subtle saffron underline on hover.

### Cards (Menu Items & Private Lounges)
- Built on `#1E2024` with a `1px` hairline stroke of `rgba(229, 169, 60, 0.12)`.
- Features generous internal padding (`space-lg`), high-contrast Playfair Display dish titles, discreet spice-index badges, and saffron gold price callouts.
- Imagery utilizes subtle dark vignette overlays ensuring text remains legible across culinary hero photography.

### Chips & Badges
- **Dietary & Halal Credentials (e.g., "Hand-Slaughtered Halal", "Chef's Handi Choice"):** Capsule pill badges with deep clove background (`#1E2024`), border `rgba(229, 169, 60, 0.25)`, and uppercase `label-sm` gold typography.

### Input Fields & Reservation Pickers
- **Guest Count, Date, Time Selectors:** Dark stone background (`#18191D`), `1px` border in card outline neutral (`#2D3036`).
- **Focus State:** Hairline illumination with `#C87D20` and a soft `2px` amber blur ring. Text typed in `#FAF7F2`, placeholder in `#6E7178`.

### Lists & Degustation Breakdown
- Course sequences (Starters, Tandoor, Shinwari Karahi, Sajji, Mithai) are separated by hairline dividers fading out at edges (`linear-gradient(90deg, transparent, rgba(229, 169, 60, 0.2), transparent)`).
- Numbers/Steps rendered in italicized Playfair Display saffron serifs.

### Specialized Component: Family Platter Customizer & Dawat Suite Navigator
- Tiered selector allowing large family groups to balance meat cuts, rice portions (Mandi/Biryani), and spice intensity with interactive saffron step-progress indicators.