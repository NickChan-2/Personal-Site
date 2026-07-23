# Nick Chan — Personal Site

Portfolio and service website for Nick Chan, an independent web developer and
technology partner for small businesses.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS plus a custom token-driven visual system
- MDX project case studies
- Motion (reserved for the interaction phase)
- Cloudflare Workers through OpenNext

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```

## Cloudflare preview

```bash
npm run preview
```

The Cloudflare adapter creates `.open-next/` before starting the local Worker
preview. Production secrets and deployment are intentionally deferred until
the launch phase.

## Current scope

Phases 1–4 are implemented: foundation, responsive structure, visual system,
public content, and two portfolio case studies. The inquiry UI and delivery,
analytics, advanced interaction, final QA, and deployment are later phases.

See [`SITE_PLAN.md`](./SITE_PLAN.md) for the approved product and implementation
plan.
# Personal-Site
