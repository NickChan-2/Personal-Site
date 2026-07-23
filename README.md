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
cp .env.example .env.local
npm run dev
```

Then open `http://localhost:3000`.

To test the full success state without sending real email, set
`INQUIRY_PREVIEW_MODE=true` in `.env.local`. That escape hatch is ignored by
production builds.

## Inquiry configuration

The form is submitted to a Next.js Server Action. The browser never receives
the private keys.

- `RESEND_API_KEY`: Resend API key for both notification emails.
- `INQUIRY_TO_EMAIL`: the inbox that receives new leads.
- `INQUIRY_FROM_EMAIL`: a sender on a domain verified by Resend.
- `TURNSTILE_SECRET_KEY`: private Cloudflare Turnstile validation key.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: matching public Turnstile widget key.
- `NEXT_PUBLIC_BOOKING_URL`: optional link shown after a successful inquiry.
- `NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN`: optional analytics beacon token.
- `NEXT_PUBLIC_SITE_URL`: the final `https://` origin used in metadata.

Use separate Turnstile widgets for local testing and production. Real inquiry
delivery should not be launched until both Turnstile keys are configured.

## Validation

```bash
npm run check
```

## Cloudflare preview

```bash
npm run preview
```

The Cloudflare adapter creates `.open-next/` before starting the local Worker
preview.

## Production launch

1. Set `NEXT_PUBLIC_SITE_URL` and the public Turnstile/analytics values in the
   build environment.
2. Add server-only values without committing them:

   ```bash
   npx wrangler secret put RESEND_API_KEY
   npx wrangler secret put INQUIRY_TO_EMAIL
   npx wrangler secret put INQUIRY_FROM_EMAIL
   npx wrangler secret put TURNSTILE_SECRET_KEY
   ```

3. Run `npm run check`, then `npm run deploy`.
4. Attach the custom domain in Cloudflare, enforce HTTPS, and verify:
   `/`, `/start-project`, `/api/health`, one real inquiry, both emails, and Web
   Analytics.
5. Use `npm run tail` for live Worker logs and `npm run deploy:list` to inspect
   versions. `npm run rollback` immediately promotes the previous version, so
   use it only when a production deployment must be reverted.

Cloudflare Worker observability is enabled in `wrangler.jsonc`. The
`/api/health` endpoint is intentionally small so it can be used by an uptime
monitor without triggering form or email work.

## Implemented scope

Phases 1–8 are implemented in the codebase: foundation, responsive structure,
visual system, public content, case studies, the inquiry and email pipeline,
analytics, motion, accessibility/metadata work, and Cloudflare launch tooling.
The final live deployment still requires the real domain, receiving address,
and provider keys listed above.

See [`SITE_PLAN.md`](./SITE_PLAN.md) for the approved product and implementation
plan.
