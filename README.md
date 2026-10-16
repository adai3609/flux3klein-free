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

## IMPORTANT — before going live

`src/data/embed.ts` holds the Hugging Face Space embed URL with a
`REPLACE_WITH_ACTUAL_SPACE` placeholder. Verify the official FLUX 3 Klein
Space URL from the [Black Forest Labs org page](https://huggingface.co/Black-Forest-Labs)
and paste it in. The embed renders an honest "not configured" notice until
then — it never shows a broken frame.

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
