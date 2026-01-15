You a seinor software engineer with deep experience in marketing landing pages and SEO and deep architecture knowledge. This is the architecture for this project and it should be followed line by line. If you follow any other architectural patters STOP! 

This is a retreat landing page template.                                                    

 The App is Astro 5.16.9 with Tailwind CSS 4.1.18 already configured via Vite. Let me provide a comprehensive architectural plan.

  ---
  Retreat Landing Page Template — Architectural Plan

  1. Folder & File Structure

  src/
  ├── assets/
  │   ├── images/
  │   │   ├── hero/              # Hero section images
  │   │   ├── features/          # Feature icons/images
  │   │   └── about/             # About section images
  │   └── icons/                 # SVG icons
  │
  ├── components/
  │   ├── ui/                    # Atomic/reusable UI primitives
  │   │   ├── Button.astro
  │   │   ├── Container.astro
  │   │   ├── SectionHeading.astro
  │   │   └── Card.astro
  │   │
  │   ├── sections/              # Page sections (composed of ui/)
  │   │   ├── Hero.astro
  │   │   ├── Features.astro
  │   │   ├── About.astro
  │   │   ├── Schedule.astro
  │   │   ├── Contact.astro
  │   │   └── Footer.astro
  │   │
  │   └── layout/                # Layout-specific components
  │       ├── Header.astro
  │       └── MobileNav.astro
  │
  ├── layouts/
  │   └── BaseLayout.astro       # Main HTML shell + meta/SEO
  │
  ├── pages/
  │   └── index.astro            # Landing page (composes sections)
  │
  ├── data/
  │   └── siteConfig.ts          # Centralized content/config
  │
  └── styles/
      └── global.css             # Tailwind import + CSS variables

  Key Principles:
  - ui/ = small, reusable atoms (buttons, containers, headings)
  - sections/ = larger compositions that consume ui/ and siteConfig
  - data/ = single source of truth for all customizable content

  ---
  2. UI Components Map
  Component: Button.astro
  Purpose: CTA button with variants
  Props/Data: label, href, variant (primary/secondary), size (sm/md/lg)
  ────────────────────────────────────────
  Component: Container.astro
  Purpose: Max-width wrapper with consistent padding
  Props/Data: class (optional override)
  ────────────────────────────────────────
  Component: SectionHeading.astro
  Purpose: Consistent section titles
  Props/Data: title, subtitle, alignment (left/center)
  ────────────────────────────────────────
  Component: Card.astro
  Purpose: Feature/schedule item card
  Props/Data: title, description, icon, variant
  ────────────────────────────────────────
  Component: Hero.astro
  Purpose: Full-viewport hero with CTA
  Props/Data: Pulls from siteConfig.hero
  ────────────────────────────────────────
  Component: Features.astro
  Purpose: Grid of feature cards
  Props/Data: Pulls from siteConfig.features[]
  ────────────────────────────────────────
  Component: About.astro
  Purpose: Text + image about section
  Props/Data: Pulls from siteConfig.about
  ────────────────────────────────────────
  Component: Schedule.astro
  Purpose: Timeline/agenda display
  Props/Data: Pulls from siteConfig.schedule[]
  ────────────────────────────────────────
  Component: Contact.astro
  Purpose: Tally.so embed wrapper
  Props/Data: Pulls from siteConfig.contact.tallyFormId
  ────────────────────────────────────────
  Component: Footer.astro
  Purpose: Links, copyright, socials
  Props/Data: Pulls from siteConfig.footer
  ────────────────────────────────────────
  Component: Header.astro
  Purpose: Logo + nav (desktop)
  Props/Data: Pulls from siteConfig.nav[]
  ────────────────────────────────────────
  Component: MobileNav.astro
  Purpose: Hamburger menu (mobile)
  Props/Data: Pulls from siteConfig.nav[]
  ---
  3. Data Model (siteConfig.ts)

  // src/data/siteConfig.ts

  export interface SiteConfig {
    meta: {
      title: string;
      description: string;
      ogImage: string;
      themeColor: string;
    };

    brand: {
      name: string;
      logo: string;
      tagline: string;
    };

    nav: Array<{
      label: string;
      href: string;  // anchor links: #features, #about, etc.
    }>;

    hero: {
      headline: string;
      subheadline: string;
      backgroundImage: string;
      cta: {
        primary: { label: string; href: string };
        secondary?: { label: string; href: string };
      };
    };

    features: Array<{
      icon: string;      // icon name or path
      title: string;
      description: string;
    }>;

    about: {
      heading: string;
      paragraphs: string[];
      image: string;
      imageAlt: string;
    };

    schedule: Array<{
      time: string;
      title: string;
      description: string;
      day?: string;      // for multi-day retreats
    }>;

    contact: {
      heading: string;
      subheading: string;
      tallyFormId: string;
    };

    footer: {
      copyright: string;
      links: Array<{ label: string; href: string }>;
      socials: Array<{ platform: string; href: string; icon: string }>;
    };

    theme: {
      primaryColor: string;    // Tailwind color name or CSS variable
      secondaryColor: string;
      accentColor: string;
    };
  }

  export const siteConfig: SiteConfig = {
    // ... default/example values
  };

  Benefits:
  - Single file to customize for each retreat
  - Type-safe with TypeScript
  - Components import what they need, reducing prop drilling

  ---
  4. Mobile-First Responsive Strategy

  Breakpoints (Tailwind defaults)
  ┌────────────┬────────┬────────────────────────────┐
  │ Breakpoint │ Prefix │           Target           │
  ├────────────┼────────┼────────────────────────────┤
  │ < 640px    │ (none) │ Mobile phones              │
  ├────────────┼────────┼────────────────────────────┤
  │ ≥ 640px    │ sm:    │ Large phones/small tablets │
  ├────────────┼────────┼────────────────────────────┤
  │ ≥ 768px    │ md:    │ Tablets                    │
  ├────────────┼────────┼────────────────────────────┤
  │ ≥ 1024px   │ lg:    │ Laptops/desktops           │
  ├────────────┼────────┼────────────────────────────┤
  │ ≥ 1280px   │ xl:    │ Large desktops             │
  └────────────┴────────┴────────────────────────────┘
  Utility Patterns

  <!-- Mobile-first: stack → row -->
  <div class="flex flex-col md:flex-row gap-4 md:gap-8">

  <!-- Mobile-first: full width → contained -->
  <div class="w-full lg:max-w-6xl lg:mx-auto">

  <!-- Mobile-first: smaller → larger text -->
  <h1 class="text-3xl md:text-4xl lg:text-5xl">

  <!-- Mobile-first: tighter → looser spacing -->
  <section class="py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8">

  Section-Specific Patterns
  ┌──────────┬──────────────────────────────────┬────────────────────────────────────┐
  │ Section  │              Mobile              │              Tablet+               │
  ├──────────┼──────────────────────────────────┼────────────────────────────────────┤
  │ Hero     │ Stacked, full-bleed, text-center │ Side-by-side optional, larger type │
  ├──────────┼──────────────────────────────────┼────────────────────────────────────┤
  │ Features │ 1-column cards                   │ 2-col (md), 3-col (lg) grid        │
  ├──────────┼──────────────────────────────────┼────────────────────────────────────┤
  │ About    │ Image above text                 │ Image beside text                  │
  ├──────────┼──────────────────────────────────┼────────────────────────────────────┤
  │ Schedule │ Vertical timeline                │ Horizontal or 2-col                │
  ├──────────┼──────────────────────────────────┼────────────────────────────────────┤
  │ Footer   │ Stacked links                    │ Inline/grid links                  │
  └──────────┴──────────────────────────────────┴────────────────────────────────────┘
  ---
  5. Tailwind Component Library Integration

  Recommended Libraries
  ┌────────────┬───────────────────────────────────────┬────────────────────────────────────────────┐
  │  Library   │                Use For                │            Integration Approach            │
  ├────────────┼───────────────────────────────────────┼────────────────────────────────────────────┤
  │ HyperUI    │ Hero patterns, feature grids          │ Copy markup, adapt to Astro components     │
  ├────────────┼───────────────────────────────────────┼────────────────────────────────────────────┤
  │ Tailblocks │ Section layouts                       │ Reference for structure, customize heavily │
  ├────────────┼───────────────────────────────────────┼────────────────────────────────────────────┤
  │ Preline UI │ Interactive elements (nav, accordion) │ May need JS; use sparingly                 │
  └────────────┴───────────────────────────────────────┴────────────────────────────────────────────┘
  Integration Best Practices

  1. Never copy-paste entire components blindly — Extract only the HTML structure and Tailwind classes you need.
  2. Adapt to your component architecture:
  <!-- Don't: inline everything from HyperUI -->
  <!-- Do: Extract reusable parts -->

  <!-- Button.astro (extracted pattern) -->
  ---
  interface Props {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
  }
  const { label, href, variant = 'primary' } = Astro.props;
  const baseClasses = "inline-block rounded-lg px-8 py-3 font-medium transition";
  const variantClasses = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary: "border border-gray-300 hover:bg-gray-50"
  };
  ---
  <a href={href} class={`${baseClasses} ${variantClasses[variant]}`}>
    {label}
  </a>
  3. Create a /references folder (gitignored) to save original snippets for reference.
  4. Document source in comments when adapting:
  <!-- Adapted from HyperUI Hero Component -->

  ---
  6. Tally.so Form Integration

  Embed Approach

  <!-- src/components/sections/Contact.astro -->
  ---
  import { siteConfig } from '../../data/siteConfig';
  import Container from '../ui/Container.astro';
  import SectionHeading from '../ui/SectionHeading.astro';

  const { heading, subheading, tallyFormId } = siteConfig.contact;
  ---

  <section id="contact" class="py-16 md:py-24 bg-gray-50">
    <Container>
      <SectionHeading title={heading} subtitle={subheading} />

      <div class="mt-8 max-w-2xl mx-auto">
        <!-- Tally embed iframe -->
        <iframe
          data-tally-src={`https://tally.so/embed/${tallyFormId}?alignLeft=1&hideTitle=1&transparentBackground=1`}
          loading="lazy"
          width="100%"
          height="500"
          frameborder="0"
          title="Contact Form"
        ></iframe>

        <!-- Tally embed script (loaded once) -->
        <script is:inline>
          // Tally embed script - loads form dynamically
          var d=document,w="https://tally.so/widgets/embed.js",
          v=function(){if(typeof Tally!=="undefined"){Tally.loadEmbeds()}
          else{d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){e.src=e.dataset.tallySrc})}};
          if(typeof Tally!=="undefined")v();
          else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w;s.onload=v;s.onerror=v;d.body.appendChild(s)}
        </script>
      </div>
    </Container>
  </section>

  Key Points

  - Use data-tally-src for lazy loading
  - Set transparentBackground=1 for seamless blending
  - Form ID is the only config needed in siteConfig
  - Height may need adjustment based on form length

  ---
  7. Best Practices: DRY, KISS, Reusability

  DRY (Don't Repeat Yourself)
  ┌─────────────────────────┬──────────────────────────────────────────────────────────┐
  │         Pattern         │                      Implementation                      │
  ├─────────────────────────┼──────────────────────────────────────────────────────────┤
  │ Centralized content     │ All text/images in siteConfig.ts                         │
  ├─────────────────────────┼──────────────────────────────────────────────────────────┤
  │ Shared UI primitives    │ Button, Container, SectionHeading used everywhere        │
  ├─────────────────────────┼──────────────────────────────────────────────────────────┤
  │ Consistent spacing      │ Define spacing scale in CSS variables or Tailwind config │
  ├─────────────────────────┼──────────────────────────────────────────────────────────┤
  │ Reusable class patterns │ Extract common patterns into component props/variants    │
  └─────────────────────────┴──────────────────────────────────────────────────────────┘
  KISS (Keep It Simple)
  ┌─────────────────────────────────┬────────────────────────────────────┐
  │              Avoid              │               Prefer               │
  ├─────────────────────────────────┼────────────────────────────────────┤
  │ Complex state management        │ Astro's zero-JS by default         │
  ├─────────────────────────────────┼────────────────────────────────────┤
  │ Over-abstracted components      │ Flat, readable component structure │
  ├─────────────────────────────────┼────────────────────────────────────┤
  │ Custom CSS where Tailwind works │ Tailwind utilities first           │
  ├─────────────────────────────────┼────────────────────────────────────┤
  │ Premature optimization          │ Ship, then optimize                │
  └─────────────────────────────────┴────────────────────────────────────┘
  Reusability & Scalability

  1. Component variants over new components — Button with variant prop, not PrimaryButton + SecondaryButton
  2. Composition over inheritance — Sections compose ui/ components, not extend them
  3. Props with sensible defaults:
  ---
  interface Props {
    alignment?: 'left' | 'center';
  }
  const { alignment = 'center' } = Astro.props;
  ---
  4. Type everything — TypeScript interfaces for siteConfig and component props
  5. One section = one file — Avoid splitting sections across multiple files unless truly necessary

  ---
  8. GitHub Flow Branching Strategy

  main (production-ready)
    │
    ├── feature/scaffold-structure     # Initial folder setup
    ├── feature/ui-components          # Button, Container, etc.
    ├── feature/hero-section           # Hero implementation
    ├── feature/features-section       # Features grid
    ├── feature/about-section          # About section
    ├── feature/schedule-section       # Schedule/timeline
    ├── feature/contact-section        # Tally.so integration
    ├── feature/footer                 # Footer component
    ├── feature/responsive-polish      # Final responsive tweaks
    └── feature/seo-meta               # Meta tags, OG images

  Workflow

  1. Create feature branch from main
  2. Make atomic commits with clear messages
  3. Open PR when feature is complete
  4. Self-review or peer review
  5. Merge to main (squash or regular merge)
  6. Delete feature branch

  Commit Message Convention

  feat(hero): add hero section with CTA buttons
  fix(nav): correct mobile menu z-index
  style(features): adjust card spacing on tablet
  refactor(config): extract theme colors to CSS variables
  docs(readme): add setup instructions

  ---
  9. First Steps — Project Scaffolding

  Phase 1: Clean Up & Prepare

  # 1. Remove default Astro demo content
  rm src/components/Welcome.astro
  rm src/assets/astro.svg
  rm src/assets/background.svg

  # 2. Create folder structure
  mkdir -p src/components/{ui,sections,layout}
  mkdir -p src/data
  mkdir -p src/assets/{images/{hero,features,about},icons}

  Phase 2: Create Foundation Files

  1. Create src/data/siteConfig.ts — Define type interface + placeholder content
  2. Update src/layouts/Layout.astro → Rename to BaseLayout.astro, add SEO meta structure
  3. Create src/components/ui/Container.astro — Basic max-width wrapper
  4. Update src/styles/global.css — Add CSS variables for theme colors

  Phase 3: Tailwind 4 Theme Setup

  In global.css, define custom properties that Tailwind 4 can use:
  @import "tailwindcss";

  @theme {
    --color-primary-50: #f0f9ff;
    --color-primary-500: #0ea5e9;
    --color-primary-600: #0284c7;
    --color-primary-700: #0369a1;
    /* ... extend as needed */
  }

  Phase 4: Initial Commit Structure

  git checkout -b feature/scaffold-structure
  # Create folders and placeholder files
  git add .
  git commit -m "feat(scaffold): create component folder structure and siteConfig"
  git push -u origin feature/scaffold-structure
  # Open PR, merge to main

  Phase 5: Begin Component Development

  Start with ui/ components (bottom-up approach):
  1. Container.astro
  2. Button.astro
  3. SectionHeading.astro
  4. Card.astro

  Then compose sections/:
  1. Hero.astro (uses Container, Button)
  2. Features.astro (uses Container, SectionHeading, Card)
  3. Continue through remaining sections...

  ---
  Summary Checklist
  ┌──────┬─────────────────────────────────┬────────────────────────────┐
  │ Step │           Description           │           Branch           │
  ├──────┼─────────────────────────────────┼────────────────────────────┤
  │ ☐    │ Clean up demo files             │ feature/scaffold-structure │
  ├──────┼─────────────────────────────────┼────────────────────────────┤
  │ ☐    │ Create folder structure         │ feature/scaffold-structure │
  ├──────┼─────────────────────────────────┼────────────────────────────┤
  │ ☐    │ Define siteConfig.ts interface  │ feature/scaffold-structure │
  ├──────┼─────────────────────────────────┼────────────────────────────┤
  │ ☐    │ Set up BaseLayout with SEO      │ feature/scaffold-structure │
  ├──────┼─────────────────────────────────┼────────────────────────────┤
  │ ☐    │ Configure Tailwind theme colors │ feature/scaffold-structure │
  ├──────┼─────────────────────────────────┼────────────────────────────┤
  │ ☐    │ Build ui/ components            │ feature/ui-components      │
  ├──────┼─────────────────────────────────┼────────────────────────────┤
  │ ☐    │ Build Hero section              │ feature/hero-section       │
  ├──────┼─────────────────────────────────┼────────────────────────────┤
  │ ☐    │ Build Features section          │ feature/features-section   │
  ├──────┼─────────────────────────────────┼────────────────────────────┤
  │ ☐    │ Build About section             │ feature/about-section      │
  ├──────┼─────────────────────────────────┼────────────────────────────┤
  │ ☐    │ Build Schedule section          │ feature/schedule-section   │
  ├──────┼─────────────────────────────────┼────────────────────────────┤
  │ ☐    │ Build Contact (Tally) section   │ feature/contact-section    │
  ├──────┼─────────────────────────────────┼────────────────────────────┤
  │ ☐    │ Build Footer                    │ feature/footer             │
  ├──────┼─────────────────────────────────┼────────────────────────────┤
  │ ☐    │ Responsive polish pass          │ feature/responsive-polish  │
  ├──────┼─────────────────────────────────┼────────────────────────────┤
  │ ☐    │ Final SEO/meta optimization     │ feature/seo-meta           │
  └──────┴─────────────────────────────────┴────────────────────────────┘
  ---
  This architecture gives you a clean separation of concerns, type-safe configuration, and a clear path from planning to implementation. Would you like me to proceed with implementing any specific part of this plan?
