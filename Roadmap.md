Rising Men Retreat Landing Page — Development Roadmap

Role Acknowledged: Planning & Roadmap Agent
Constraints: No implementation code. No file scaffolding. Architecture derived from prior planning session.

---

Phase 0: Foundation & Configuration

Goal: Establish the project foundation with clean slate and core configuration.

Components/Files
┌──────────────────────────────┬──────────────────────────────────────────────────────┐
│ File │ Purpose │
├──────────────────────────────┼──────────────────────────────────────────────────────┤
│ src/data/siteConfig.ts │ Type interface + placeholder content │
├──────────────────────────────┼──────────────────────────────────────────────────────┤
│ src/styles/global.css │ Tailwind import + CSS theme variables │
├──────────────────────────────┼──────────────────────────────────────────────────────┤
│ src/layouts/BaseLayout.astro │ Rename existing Layout.astro, add SEO meta structure │
└──────────────────────────────┴──────────────────────────────────────────────────────┘
Tasks

1. Remove default Astro demo content (Welcome.astro, demo assets)
2. Create folder structure (components/ui, components/sections, components/layout, data, assets/images/\*)
3. Define SiteConfig TypeScript interface
4. Configure Tailwind 4 theme tokens in global.css
5. Update BaseLayout with proper HTML shell + meta placeholders

Dependencies

- None (starting phase)

Acceptance Criteria

- No demo files remain in src/
- Folder structure matches architecture spec
- siteConfig.ts exports typed interface with placeholder values
- npm run dev starts without errors
- BaseLayout renders empty page with correct <head> structure

🛑 STOP — Human Approval Required

Verify folder structure and type definitions before proceeding.

---

Phase 1: UI Primitives

Goal: Build atomic, reusable UI components that all sections will consume.

Components/Files
┌──────────────────────┬─────────────────────────────────────┬───────────────────────────────────────────┐
│ Component │ Props │ Purpose │
├──────────────────────┼─────────────────────────────────────┼───────────────────────────────────────────┤
│ Container.astro │ class? │ Max-width wrapper with responsive padding │
├──────────────────────┼─────────────────────────────────────┼───────────────────────────────────────────┤
│ Button.astro │ label, href, variant, size? │ CTA buttons (primary/secondary) │
├──────────────────────┼─────────────────────────────────────┼───────────────────────────────────────────┤
│ SectionHeading.astro │ title, subtitle?, alignment? │ Consistent section headers │
├──────────────────────┼─────────────────────────────────────┼───────────────────────────────────────────┤
│ Card.astro │ title, description, icon?, variant? │ Feature/schedule cards │
└──────────────────────┴─────────────────────────────────────┴───────────────────────────────────────────┘
Dependencies

- Phase 0 complete (folder structure exists)

Acceptance Criteria

- Each component is self-contained with typed props
- Components use Tailwind utilities (no custom CSS unless necessary)
- Mobile-first classes applied (base → md: → lg:)
- Components render correctly in isolation
- No hardcoded content — all text via props

🛑 STOP — Human Approval Required

Review UI primitives for consistency and reusability before building sections.

---

Phase 2: Layout Components

Goal: Build navigation and layout wrapper components.

Components/Files
┌─────────────────┬──────────────────────────────────┬───────────────────────────┐
│ Component │ Data Source │ Purpose │
├─────────────────┼──────────────────────────────────┼───────────────────────────┤
│ Header.astro │ siteConfig.brand, siteConfig.nav │ Logo + desktop navigation │
├─────────────────┼──────────────────────────────────┼───────────────────────────┤
│ MobileNav.astro │ siteConfig.nav │ Hamburger menu for mobile │
└─────────────────┴──────────────────────────────────┴───────────────────────────┘
Dependencies

- Phase 0 complete (siteConfig exists)
- Phase 1 complete (Button component available)

Acceptance Criteria

- Header displays logo and nav links from config
- MobileNav hidden on md: and above
- Desktop nav hidden below md:
- Smooth anchor scroll to sections
- Minimal JavaScript (CSS-only toggle preferred, or minimal JS)

🛑 STOP — Human Approval Required

Verify navigation behavior on mobile and desktop before section implementation.

---

Phase 3: Hero Section

Goal: Implement the primary above-the-fold hero section.

Components/Files
┌────────────┬─────────────────┬───────────────────┐
│ Component │ Data Source │ Consumes │
├────────────┼─────────────────┼───────────────────┤
│ Hero.astro │ siteConfig.hero │ Container, Button │
└────────────┴─────────────────┴───────────────────┘
Dependencies

- Phase 1 complete (Button, Container)
- Phase 0 complete (siteConfig.hero defined)

Acceptance Criteria

- Full-viewport height on mobile, flexible on desktop
- Background image with appropriate overlay for text readability
- Headline, subheadline, and CTA buttons from config
- Mobile: stacked, centered layout
- Desktop: larger typography, optional side-by-side layout
- CTA buttons use Button component with correct variants

🛑 STOP — Human Approval Required

Hero is the first impression — verify visual impact and responsiveness.

---

Phase 4: Features Section

Goal: Implement the feature grid showcasing retreat benefits.

Components/Files
┌────────────────┬───────────────────────┬─────────────────────────────────┐
│ Component │ Data Source │ Consumes │
├────────────────┼───────────────────────┼─────────────────────────────────┤
│ Features.astro │ siteConfig.features[] │ Container, SectionHeading, Card │
└────────────────┴───────────────────────┴─────────────────────────────────┘
Dependencies

- Phase 1 complete (all UI primitives)
- Phase 0 complete (siteConfig.features defined)

Acceptance Criteria

- Section heading renders from config
- Features array maps to Card components
- Mobile: 1-column stack
- Tablet (md:): 2-column grid
- Desktop (lg:): 3-column grid
- Consistent gap/spacing across breakpoints

---

Phase 5: About Section

Goal: Implement the about/story section with text and imagery.

Components/Files
┌─────────────┬──────────────────┬───────────────────────────┐
│ Component │ Data Source │ Consumes │
├─────────────┼──────────────────┼───────────────────────────┤
│ About.astro │ siteConfig.about │ Container, SectionHeading │
└─────────────┴──────────────────┴───────────────────────────┘
Dependencies

- Phase 1 complete (Container, SectionHeading)
- Phase 0 complete (siteConfig.about defined)

Acceptance Criteria

- Image + text layout
- Mobile: image above text (stacked)
- Desktop: image beside text (side-by-side)
- Paragraphs array renders correctly
- Image has proper alt text from config

---

Phase 6: Schedule Section

Goal: Implement the retreat agenda/timeline display.

Components/Files
┌────────────────┬───────────────────────┬─────────────────────────────────┐
│ Component │ Data Source │ Consumes │
├────────────────┼───────────────────────┼─────────────────────────────────┤
│ Schedule.astro │ siteConfig.schedule[] │ Container, SectionHeading, Card │
└────────────────┴───────────────────────┴─────────────────────────────────┘
Dependencies

- Phase 1 complete (all UI primitives)
- Phase 0 complete (siteConfig.schedule defined)

Acceptance Criteria

- Timeline or card-based layout
- Mobile: vertical timeline/stack
- Desktop: horizontal or 2-column layout
- Time, title, and description visible per item
- Optional day grouping for multi-day retreats

---

Phase 7: Contact Section (Tally.so)

Goal: Implement the contact form section with Tally.so embed.

Components/Files
┌───────────────┬────────────────────┬───────────────────────────┐
│ Component │ Data Source │ Consumes │
├───────────────┼────────────────────┼───────────────────────────┤
│ Contact.astro │ siteConfig.contact │ Container, SectionHeading │
└───────────────┴────────────────────┴───────────────────────────┘
Dependencies

- Phase 1 complete (Container, SectionHeading)
- Phase 0 complete (siteConfig.contact.tallyFormId defined)

Acceptance Criteria

- Tally.so iframe embeds correctly
- Lazy loading enabled (data-tally-src pattern)
- Transparent background for seamless integration
- Form is functional and submits correctly
- Responsive width (100% container)

🛑 STOP — Human Approval Required

Verify form functionality and styling integration before footer.

---

Phase 8: Footer

Goal: Implement the site footer with links and social icons.

Components/Files
┌──────────────┬───────────────────┬───────────┐
│ Component │ Data Source │ Consumes │
├──────────────┼───────────────────┼───────────┤
│ Footer.astro │ siteConfig.footer │ Container │
└──────────────┴───────────────────┴───────────┘
Dependencies

- Phase 1 complete (Container)
- Phase 0 complete (siteConfig.footer defined)

Acceptance Criteria

- Copyright text from config
- Navigation links array rendered
- Social icons with proper external links
- Mobile: stacked layout
- Desktop: horizontal/grid layout

---

Phase 9: Page Assembly & Integration

Goal: Compose all sections into the landing page.

Components/Files
┌───────────────────────┬─────────────────────────────────────────┐
│ File │ Purpose │
├───────────────────────┼─────────────────────────────────────────┤
│ src/pages/index.astro │ Import and render all sections in order │
└───────────────────────┴─────────────────────────────────────────┘
Dependencies

- All previous phases complete

Acceptance Criteria

- All sections render in correct order
- Anchor links from nav scroll to correct sections
- No console errors
- Page loads performantly
- All content pulled from siteConfig

🛑 STOP — Human Approval Required

Full page review before polish phase.

---

Phase 10: Responsive Polish & QA

Goal: Final responsive adjustments and cross-browser testing.

Tasks

1. Test all breakpoints (320px, 640px, 768px, 1024px, 1280px)
2. Verify touch targets on mobile (min 44px)
3. Check text readability and contrast
4. Test on real devices if possible
5. Fix any spacing/alignment inconsistencies

Acceptance Criteria

- No horizontal scroll on any viewport
- All interactive elements accessible
- Consistent spacing scale throughout
- Images properly sized/optimized

---

Phase 11: SEO & Meta Optimization

Goal: Finalize SEO meta tags and Open Graph data.

Tasks

1. Complete meta tags in BaseLayout from siteConfig.meta
2. Add Open Graph image
3. Add canonical URL
4. Verify structured data if needed
5. Test with social share debuggers

Acceptance Criteria

- Title and description render correctly
- OG image displays on social shares
- Favicon displays correctly
- robots.txt and sitemap.xml considered

🛑 STOP — Human Approval Required

Final review before deployment preparation.

---

Self-Review Checklist
┌──────────────────────────────┬───────────────────────────────────────────────────────────────────────┐
│ Question │ Assessment │
├──────────────────────────────┼───────────────────────────────────────────────────────────────────────┤
│ Is the sequence minimal? │ ✅ Yes — each phase builds on the previous with clear dependencies │
├──────────────────────────────┼───────────────────────────────────────────────────────────────────────┤
│ Is anything premature? │ ✅ No — UI primitives before sections, sections before assembly │
├──────────────────────────────┼───────────────────────────────────────────────────────────────────────┤
│ Is scope tightly controlled? │ ✅ Yes — each phase has specific deliverables and acceptance criteria │
└──────────────────────────────┴───────────────────────────────────────────────────────────────────────┘

---

Phase Dependency Graph

Phase 0 (Foundation)
│
├──→ Phase 1 (UI Primitives)
│ │
│ ├──→ Phase 2 (Layout/Nav)
│ │
│ ├──→ Phase 3 (Hero)
│ │
│ ├──→ Phase 4 (Features)
│ │
│ ├──→ Phase 5 (About)
│ │
│ ├──→ Phase 6 (Schedule)
│ │
│ ├──→ Phase 7 (Contact)
│ │
│ └──→ Phase 8 (Footer)
│
└──────────────────┬───────────────────┘
│
▼
Phase 9 (Assembly)
│
▼
Phase 10 (Polish)
│
▼
Phase 11 (SEO)

---

perform a self-review:

- Is the sequence minimal?
- Is anything premature?
- Is scope tightly controlled?

Acknowledge this role before proceeding.
