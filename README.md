# FLUX 3 Klein Free

Unofficial free-image-generation landing site for FLUX 3 Klein (Black Forest
Labs' open-weight 5.6B image model, released Oct 16, 2026). Static Next.js,
English content, targets "flux 3 klein free / online / no signup" keywords.

## Stack

- Next.js 15 (App Router, `output: 'export'`)
- TypeScript strict (`noUncheckedIndexedAccess`)
- Tailwind CSS 3.4, lucide-react

## Run

```bash
pnpm install
pnpm build      # static export to ./out
pnpm dev        # local dev
```

## Deploy (Vercel)

1. Push to GitHub, import in Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain. Rebuild.

## Generator embed

`src/data/embed.ts` points at Black Forest Labs' official demo Space via the
direct `*.hf.space` subdomain (verified 2026-10-17 — the huggingface.co page
URL sends X-Frame-Options and cannot be framed). If the demo ever stops
loading, check the Space on the model page and update `spaceUrl`.

## Where things live

| Path | Purpose |
| --- | --- |
| `src/data/embed.ts` | Generator iframe URL config (verify before deploy) |
| `src/data/prompts.ts` | Prompt gallery (10 examples) |
| `src/data/faqs.ts` | FAQ content incl. FAQPage JSON-LD |
| `src/components/home/GeneratorEmbed.tsx` | User-initiated lazy iframe |
| `src/components/site/AdSlot.tsx` | AdSense placeholder |

## Content policy

Independent resource, not affiliated with Black Forest Labs. Only
officially announced facts (release date, params, VRAM floor, license
threshold); the model card on Hugging Face is cited as the source of truth
for setup specifics.
