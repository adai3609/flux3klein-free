import Link from 'next/link';
import { BookOpen, Cpu, Sparkles, Zap } from 'lucide-react';
import { GeneratorEmbed } from '@/components/home/GeneratorEmbed';
import { FaqSection } from '@/components/seo/FaqSection';
import { JsonLd } from '@/components/seo/JsonLd';
import { AdSlot } from '@/components/site/AdSlot';
import { homeFaqs } from '@/data/faqs';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'FLUX 3 Klein Free — Generate Images Online, No Signup',
  description:
    'Generate images free with FLUX 3 Klein in your browser — Black Forest Labs’ open-weight 5.6B model. No signup, plus prompt guide and local GPU setup.',
  path: '/',
});

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FLUX 3 Klein Free Image Generator',
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Free browser-based image generation with FLUX 3 Klein, the open-weight 5.6B image model from Black Forest Labs.',
};

const features = [
  {
    icon: Zap,
    title: 'Free, no signup',
    description:
      'Generate straight in your browser through the official community demo. No account, no credit card, no watermark gatekeeping.',
  },
  {
    icon: Sparkles,
    title: 'Prompt guide included',
    description:
      'Ten worked, copy-paste prompt examples across ten styles — plus the formula for writing your own.',
  },
  {
    icon: Cpu,
    title: 'Run it locally',
    description:
      'The INT8 build runs on an 8 GB RTX card. Our guide walks through weights, quantization and inference stacks.',
  },
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareAppJsonLd} />

      <section className="relative overflow-hidden border-b border-line/60">
        <div
          aria-hidden
          className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #22d3ee, #a78bfa)' }}
        />
        <div className="relative mx-auto max-w-content px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-neon-cyan">
            Free · No signup · Open weights
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            FLUX 3 Klein <span className="text-aurora">Free Image Generator</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-mist">
            Generate images online with FLUX 3 Klein — Black Forest Labs&apos; open-weight
            5.6-billion-parameter image model, released October 16, 2026. Free in your browser,
            no account required.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="py-10">
          <GeneratorEmbed />
        </div>

        <section className="grid gap-4 md:grid-cols-3" aria-label="Why use this site">
          {features.map((feature) => (
            <div key={feature.title} className="card p-6">
              <feature.icon className="h-6 w-6 text-neon-cyan" aria-hidden />
              <h2 className="mt-3 font-bold text-white">{feature.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-mist">{feature.description}</p>
            </div>
          ))}
        </section>

        <AdSlot className="mt-10" />

        <article className="prose-site max-w-3xl py-12">
          <h2>What is FLUX 3 Klein?</h2>
          <p>
            FLUX 3 Image Klein is an open-weight image generation model from Black Forest Labs,
            released on October 16, 2026. It has 5.6 billion parameters — small enough to run on
            consumer hardware, tuned to punch far above its size. The INT8 (8-bit quantized)
            build runs on GeForce RTX cards with as little as 8 GB of VRAM, which makes local,
            private image generation realistic for ordinary PCs.
          </p>
          <p>
            Black Forest Labs announced that organizations earning under $5 million per year can
            run the model in-house for free — a deliberately permissive license for individuals
            and small teams. Exact license terms live on the{' '}
            <a
              href="https://huggingface.co/Black-Forest-Labs"
              target="_blank"
              rel="noopener noreferrer"
            >
              official Hugging Face model page
            </a>
            .
          </p>
          <h2>How to use the generator on this page</h2>
          <p>
            Click <strong className="text-white">Start generating</strong> in the embed above — it
            loads the official community demo right here, so you never hand your email to anyone.
            Type a prompt, wait out the queue, and download your image. For better results in
            fewer generations, steal one of the ten examples in our{' '}
            <Link href="/prompts">prompt guide</Link>; and if the demo queue is long, the{' '}
            <Link href="/run-locally">local setup guide</Link> gets the same model running on
            your own GPU.
          </p>
        </article>

        <FaqSection items={homeFaqs} />
      </div>
    </>
  );
}
