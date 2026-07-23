# Nick Chan Personal Site Plan

**Status:** Approved planning baseline  
**Prepared:** July 23, 2026  
**Implementation status:** Not started  
**Reference:** [AI Engineering for Intelligent Interfaces on Dribbble](https://dribbble.com/shots/27072108-AI-Engineering-for-Intelligent-Interfaces)

This document records the decisions made during the planning session for Nick Chan's personal website. It is the working source of truth for design and implementation. Details can evolve during prototyping, but major changes should be recorded here so the site remains coherent.

## 1. Purpose

The site will help Nick sell professionally designed, fully managed websites to local small businesses.

The initial site is not intended to sell complex custom software as its primary service. Software tools and integrations remain a secondary capability that can be introduced as Nick's services and client needs grow.

### Primary business objective

Generate qualified project inquiries from small-business owners who need a new website or a meaningful redesign.

### Supporting objectives

- Establish Nick as a credible independent developer.
- Demonstrate thoughtful design and development ability.
- Explain the value of a fully managed website service.
- Show real and self-directed work honestly.
- Create a strong foundation that can grow without a rebuild.

## 2. Audience and Positioning

### Target audience

Industry-neutral, owner-led local businesses and small teams, including examples such as:

- Private practices
- Barbers and salons
- Contractors and home-service businesses
- Cafés and restaurants
- Gyms and fitness studios

The site should speak to the needs these businesses share instead of positioning Nick as an expert in only one industry.

### Common customer needs

- A credible and modern online presence
- More customer inquiries or bookings
- Clear presentation of services
- A site that works well on mobile devices
- Help with hosting and technical decisions
- Ongoing updates without learning web technology
- A single person who takes responsibility for the result

### Positioning

Nick will be presented as:

> An independent web developer who works like a long-term technology partner.

The brand should feel personal, direct, technically credible, and professional. It should not pretend to be a large agency.

### Working identity

**Name:** Nick Chan  
**Descriptor:** Independent Web Developer & Technology Partner  
**Optional mark:** NC monogram

The exact descriptor and headline copy can be refined during implementation.

## 3. Core Offer

### Primary offer

Modern, reliable websites for small businesses.

### Service promise

> Nick designs, builds, hosts, and maintains the website so the business owner does not have to manage the technical side.

### Fully managed service

The service can include:

- Discovery and planning
- Website strategy and information architecture
- Visual design
- Development
- Responsive implementation
- Content setup
- Contact forms and common integrations
- Analytics
- Domain and DNS configuration
- Hosting and deployment
- Monitoring
- Security and dependency updates
- Routine content changes
- Troubleshooting
- Ongoing technical guidance

### Service boundaries

“Fully managed” must not imply unlimited development.

- Routine content edits can be included in ongoing care.
- Response expectations should be defined.
- Major new pages, redesigns, integrations, and custom features should be quoted separately.
- Cancellation and handoff terms should be clear.
- Clients should be able to leave with their domain and a reasonable site handoff.

### Ownership

- The client owns and controls their domain.
- Nick receives the access needed to configure DNS.
- Nick manages hosting, deployment, updates, and support.
- Nick should not personally own a client's domain.

### Commercial structure

The planned structure is:

1. A one-time website project fee
2. An ongoing managed-care fee
3. Separate quotes for substantial expansion work

No prices will be published on the initial personal site. Each prospect will receive a custom proposal.

## 4. Conversion Strategy

### Primary call to action

**Start a Project**

### Secondary call to action

**View My Work**

### Desired visitor journey

1. Understand the offer.
2. See evidence Nick can deliver.
3. Understand the fully managed service.
4. Learn what working with Nick feels like.
5. Feel reassured about reliability and ongoing support.
6. Submit a short project inquiry.

### Inquiry flow

The inquiry will be a quick, accessible three-step experience.

#### Step 1: You and your business

- Name
- Business name
- Email
- Optional phone number

#### Step 2: What you need

- New site or redesign
- Business description
- What the website should help accomplish

#### Step 3: Project context

- Existing website, if any
- Desired timeline
- Additional information
- Preferred contact method

#### Confirmation

- Nick receives the complete inquiry by email.
- The prospect receives a confirmation email.
- The prospect can optionally book a consultation.
- Budget will not be requested initially.

## 5. Information Architecture

### Primary navigation

- Work
- Services
- About
- Start a Project

### Routes

```text
/
/work
/work/[slug]
/services
/about
/start-project
```

“Process” will be a section within the homepage or Services page rather than a separate route.

### Homepage sequence

1. Offer-first hero
2. Selected work
3. Website services
4. Fully managed approach
5. Simple working process
6. Personal introduction and credibility
7. Final project-inquiry call to action

The hero should explain the business value before giving Nick's personal biography. Nick's identity remains visible, but the visitor's problem leads the page.

### Working hero message

> Modern websites. Fully managed.

Supporting copy should explain that Nick designs, builds, hosts, and maintains websites for small businesses. This is placeholder direction, not final copy.

## 6. Portfolio Strategy

The portfolio will distinguish real client work from self-directed concepts.

### Initial project directions

1. **Therapy practice**
   - Real client project
   - Currently in development
   - Trust, accessibility, privacy awareness, information clarity, and inquiry flow
   - Must not claim results before launch

2. **Contractor**
   - First completed concept project
   - Lead generation, service areas, project proof, quote flow, and strong calls to action

3. **Barber**
   - Post-launch concept
   - Personality, services, pricing, gallery, and booking

4. **Café**
   - Post-launch concept
   - Atmosphere, menu, hours, location, and local discovery

### First-launch portfolio

The initial site will launch with:

- Therapy-practice case study labeled “In development”
- Completed contractor concept case study

The site will not show empty “coming soon” project cards. Barber and café projects will be added after launch.

### Case-study structure

Each case study should cover:

- Business situation
- Project goal
- Audience considerations
- Design approach
- Pages and features
- Important technical decisions
- Managed-service considerations
- Current status or final result

Concept projects must be labeled clearly. The site will not invent clients, testimonials, revenue increases, conversion metrics, or other outcomes.

## 7. Services Presentation

The public service story will have three connected layers.

### Website design and build

Planning, design, development, content setup, responsive behavior, forms, analytics, testing, and launch.

### Fully managed care

Hosting, monitoring, technical updates, routine content changes, troubleshooting, and ongoing support.

### Growth and expansion

New pages, integrations, booking, payments, calculators, portals, and custom functionality quoted separately.

Essential and Growth scopes may be used internally when preparing proposals, but the initial public site will not present a complicated package or pricing table.

## 8. Credibility

The site will rely on real, verifiable signals.

### Initial credibility signals

- Nick's real identity and personal presence
- Senior computer science student at SDSU
- Internship experience at Daktronics
- Relevant side projects
- Detailed case studies
- Direct access to the developer doing the work
- Transparent development status
- Clear process and ongoing-support promise
- Live demonstrations or code links when appropriate

The offer and work should lead. Student status should strengthen the About section rather than become the main headline.

### Information still needed

- Exact Daktronics role and dates
- Preferred SDSU wording and expected graduation
- Side projects worth presenting
- Headshot or portrait direction
- Public contact details
- Approval and privacy boundaries for the therapy-practice case study

## 9. Visual Direction

### Reference interpretation

The main inspiration from the Dribbble reference is the glass-panel treatment and layered interface construction—not its central AI character.

### Overall page rhythm

- Dark, cinematic hero and selected showcase areas
- Lighter, warm content areas for clarity and approachability
- Dark-to-light transitions that preserve one visual system

### Signature motif

Glass panels will be the core visual material.

- Translucent charcoal or milky surfaces
- Background blur used selectively
- Thin illuminated borders
- Subtle internal gradients
- Fine top-edge highlights
- Layered depth
- Soft shadows
- Green-tinted reflections
- Restrained orange emphasis

Panels must contain real information rather than decorative fake analytics.

### Color direction

The approved personality is clean, modern, and energetic.

- Deep green-black base
- Emerald green identity
- Tangerine-orange accent
- Warm off-white light surfaces
- Dark green body text on light sections

Approximate use:

```text
75% neutral backgrounds and glass surfaces
20% green identity and illumination
 5% orange calls to action and emphasis
```

Exact values will be decided during visual prototyping. Initial exploratory values may include:

```text
Dark background  #07110D
Glass green      #10271C
Primary green    #39C878
Orange accent    #FF8A3D
Warm off-white   #F3F5EF
Dark text        #142019
```

These values are starting points, not final requirements.

### Typography

Begin with a bold, technical direction:

- Large display headlines
- Tight or slightly condensed headline spacing
- Clear technical labels
- Highly readable body copy

Exact font families are deferred until visual prototyping.

### What not to copy

- The reference's AI character
- Fake dashboards or fabricated analytics
- Excessive tiny labels
- Low-contrast text
- Dense interface decoration on every section
- Effects that obscure the service offer

## 10. Hero and Interaction Direction

### Hero composition

Use an asymmetric split at desktop sizes:

- Headline, explanation, and actions on the left
- Layered informational glass panels on the right

Suggested panel content:

- Design, development, hosting, and support
- Current availability
- Plan, build, and grow process
- One-partner managed-service promise

This composition is provisional and can evolve during prototyping.

### Motion language

Use a controlled-experimental approach.

Potential effects:

- Cursor-responsive lighting on glass
- Shallow panel parallax
- Gentle 3D panel tilt
- Small magnetic response on primary actions
- Cards separating slightly in depth
- Slow background-grid movement
- Scroll-triggered project transitions
- Restrained status-indicator motion
- Glass-layer page transitions where performance allows

### Interaction guardrails

- No scroll hijacking
- No long intro before the page is usable
- No essential information hidden behind animation
- No motion required to understand navigation or content
- No movement that reduces text readability
- Reduced-motion support
- Simpler effects on mobile and lower-powered devices

## 11. Responsive Strategy

The mobile site will be intentionally redesigned rather than treated as a compressed desktop layout.

### Mobile hero order

1. Navigation
2. Technical label
3. Headline
4. Supporting explanation
5. Primary and secondary actions
6. Stacked glass panels
7. Availability and managed-service details

### Mobile behavior

- Glass panels stack vertically.
- Important information appears first.
- Pointer-based parallax is removed.
- Motion is calmer and touch-appropriate.
- Buttons and touch targets are comfortably sized.
- Navigation uses a compact glass menu.
- Important information never depends on hover.
- The inquiry remains a three-step flow.

## 12. Accessibility and Performance

### Accessibility target

Target WCAG 2.2 Level AA. Conformance should not be claimed until the finished site has been tested appropriately.

Requirements include:

- Strong text contrast, including on glass
- Visible focus states
- Complete keyboard navigation
- Semantic headings and landmarks
- Descriptive controls and links
- Accessible form labels, instructions, and errors
- Comfortable touch targets
- No information communicated by color alone
- No essential hover-only content
- Appropriate image alternatives
- Skip-to-content navigation
- Reduced-motion support

### Performance targets

The site should target good Core Web Vitals for:

- Largest Contentful Paint
- Interaction to Next Paint
- Cumulative Layout Shift

Implementation constraints:

- Prefer CSS for simple effects.
- Limit simultaneous blurred layers.
- Animate transforms and opacity.
- Load client-side behavior only where needed.
- Optimize and correctly size project imagery.
- Minimize font files and weights.
- Avoid heavy animation or 3D libraries until justified.
- Ensure meaningful content works before enhancement scripts load.
- Test on an ordinary phone as well as desktop hardware.

## 13. Technical Architecture

### Core stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Motion for React
- Local MDX content
- Cloudflare Workers
- OpenNext Cloudflare adapter

### Explicit exclusions for version one

- Database
- CMS
- Global state-management library
- Three.js or another 3D engine
- GSAP
- Large component kit
- Multiple animation libraries

### Rendering boundaries

Use Server Components by default.

Server-rendered responsibilities:

- Pages and layouts
- Navigation content
- Services
- Case-study content
- Project listings
- SEO metadata

Client-side responsibilities:

- Hero-panel interactions
- Pointer-responsive lighting
- Scroll effects
- Mobile menu
- Interactive project cards
- Multi-step inquiry state

### Planned routes and folders

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── work/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── services/page.tsx
│   ├── about/page.tsx
│   └── start-project/page.tsx
├── components/
│   ├── layout/
│   ├── ui/
│   ├── glass/
│   ├── motion/
│   ├── projects/
│   └── inquiry/
├── content/
│   └── projects/
├── lib/
│   ├── actions/
│   ├── email/
│   ├── validation/
│   └── utilities/
└── styles/

public/
├── images/
├── icons/
└── fonts/

open-next.config.ts
wrangler.jsonc
```

### Initial component system

```text
Layout
├── SiteHeader
├── MobileNavigation
├── Section
└── SiteFooter

Design system
├── GlassPanel
├── TechnicalLabel
├── PrimaryButton
├── SecondaryButton
├── StatusIndicator
├── GridBackground
└── PointerGlow

Content
├── ProjectCard
├── CaseStudyHeader
├── ServicePanel
├── ProcessStep
├── CredentialPanel
└── CallToAction

Inquiry
├── InquiryStepper
├── BusinessStep
├── GoalsStep
├── ContextStep
└── SubmissionStatus
```

### Inquiry implementation

```text
Three-step client interface
        ↓
Next.js Server Action
        ↓
Server-side validation
        ↓
Honeypot and basic throttling
        ↓
Email provider
        ↓
Nick notification + prospect confirmation
```

The email provider's credentials must remain server-side. A challenge service can be added later if spam becomes a real problem.

### Cloudflare deployment

- Deploy Next.js to Cloudflare Workers with `@opennextjs/cloudflare`.
- Use the Next.js Node.js runtime.
- Do not opt into the restricted Edge runtime.
- Use `next dev` for active local development.
- Test production builds through the Cloudflare runtime preview.
- Store production secrets through Cloudflare.
- Keep the application reasonably portable.

The exact email provider, analytics service, and image pipeline can be selected during implementation without changing the larger architecture.

## 14. First-Launch Scope

### Included

- Home
- Work
- Services
- About
- Start a Project
- Responsive navigation and footer
- Dark-to-light glass design system
- Bold technical typography direction
- Strong but limited experimental hero interactions
- Therapy-practice case study marked “In development”
- Completed contractor concept case study
- Three-step inquiry
- Notification and confirmation emails
- Basic analytics
- Accessibility testing
- Responsive testing
- Performance testing
- Cloudflare deployment
- Custom domain

### Deferred until after launch

- Barber concept
- Café concept
- Published prices
- Real testimonials when available
- Blog or writing section
- CMS
- Database
- Client portal
- Custom software as a primary service
- Complex inquiry tracking
- Heavy 3D rendering
- Additional experimental page transitions

## 15. Development Phases

Each phase ends with a review gate. Structural issues should be resolved before visual polish is layered on top.

### Phase 1: Foundation

- Create the Next.js project.
- Configure TypeScript, Tailwind, ESLint, and App Router.
- Configure MDX and Motion.
- Configure Cloudflare and OpenNext.
- Establish the directory structure.
- Add development, preview, build, and validation commands.
- Verify a minimal build in the Cloudflare runtime.

**Review gate:** The project builds locally and in the Cloudflare preview runtime with a clean foundation.

### Phase 2: Structural wireframe

- Build all five page routes.
- Add navigation and footer.
- Establish homepage section order.
- Create project, service, About, and inquiry structures.
- Implement desktop and mobile layouts.
- Use basic placeholder styling.

**Review gate:** Approve the complete visitor journey and responsive structure before visual polish.

### Phase 3: Visual system

- Establish typography hierarchy.
- Define green, orange, dark, and light tokens.
- Build dark and light glass variants.
- Create buttons, technical labels, grids, and status indicators.
- Style the headline-left hero.
- Establish the dark-to-light page rhythm.

**Review gate:** Approve the visual language before substantial motion is added.

### Phase 4: Content and portfolio

- Write and refine homepage copy.
- Build Services and About content.
- Add SDSU, Daktronics, and side-project credibility.
- Create the therapy-practice case study.
- Create the contractor concept case study.
- Add project media and accurate status labels.
- Review every public claim.

**Review gate:** Approve copy, project presentation, and credibility before launch integrations.

### Phase 5: Inquiry and integrations

- Build the accessible three-step form.
- Add server-side validation.
- Add spam protection and throttling.
- Send notification and confirmation emails.
- Add optional scheduling.
- Add privacy-respecting analytics.
- Test success, failure, and retry states.

**Review gate:** Verify real inquiry delivery and understandable form behavior.

### Phase 6: Experimental interaction

- Add glass-panel depth and pointer lighting.
- Add limited parallax and scroll-linked effects.
- Add project transitions and micro-interactions.
- Add reduced-motion behavior.
- Simplify mobile effects.
- Profile each accepted effect.

**Review gate:** Keep only effects that improve the experience without harming usability or performance.

### Phase 7: Quality assurance

- Keyboard review
- Screen-reader review
- Contrast and form testing
- Mobile-device testing
- Cross-browser testing
- Core Web Vitals and Lighthouse checks
- Metadata, sitemap, social previews, and structured data
- Cloudflare-runtime preview testing

**Review gate:** Resolve launch-blocking issues.

### Phase 8: Launch

- Configure production secrets.
- Connect the domain.
- Configure DNS and HTTPS.
- Deploy to Cloudflare.
- Verify forms, email, analytics, and monitoring.
- Establish a rollback path.
- Begin post-launch portfolio additions.

## 16. Open Items Before Launch

These items do not block initial scaffolding, but they must be resolved before the relevant phase is approved.

- Final domain
- Final hero and supporting copy
- Exact fonts
- Final color values
- Nick's headshot or portrait treatment
- Public email address
- Booking service and booking link, if used
- Email-delivery provider
- Analytics provider
- Exact Daktronics role and dates
- SDSU graduation information
- Selected side projects
- Therapy-practice case-study permissions and media
- Contractor concept brief and visual assets
- Maintenance-plan terms and response boundaries
- Privacy policy content appropriate to analytics and inquiry handling

## 17. Decision Principles

When a later choice is unclear, prefer the option that:

1. Helps a small-business owner understand the offer.
2. Builds trust honestly.
3. Keeps Nick's ongoing workload reliable.
4. Preserves accessibility and performance.
5. Uses progressive enhancement.
6. Avoids infrastructure that version one does not need.
7. Can be maintained by one developer.
8. Allows the site to launch before every future idea is complete.

