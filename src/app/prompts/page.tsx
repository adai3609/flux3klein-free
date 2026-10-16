import Link from 'next/link';
import { PromptCard } from '@/components/prompts/PromptCard';
import { FaqSection } from '@/components/seo/FaqSection';
import { AdSlot } from '@/components/site/AdSlot';
import { promptFaqs } from '@/data/faqs';
import { promptExamples } from '@/data/prompts';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'FLUX 3 Klein Prompt Guide — 10 Copy-Paste Examples',
  description:
    'Write better FLUX 3 Klein prompts: the 5-part formula plus ten copy-paste example prompts across portrait, product, architecture, fantasy and more.',
  path: '/prompts',
});

const formulaSteps = [
  { label: '1 · Subject', example: 'a weathered fisherman' },
  { label: '2 · Action / pose', example: 'mending a net, looking at the camera' },
  { label: '3 · Environment', example: 'on a wooden dock at dawn' },
  { label: '4 · Lighting', example: 'soft golden window light from the east' },
  { label: '5 · Style', example: 'photorealistic, 50mm lens, muted palette' },
] as const;

export default function PromptsPage() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6">
      <header className="border-b border-line/60 py-12">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-neon-cyan">Prompt guide</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
          FLUX 3 Klein Prompt Guide
        </h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-mist">
          Five slots, one sentence, ten worked examples. Copy any prompt below, paste it into the{' '}
          <Link href="/#generator" className="text-neon-cyan hover:underline">
            generator
          </Link>
          , then swap the nouns for your subject.
        </p>
      </header>

      <section className="py-10" aria-label="Prompt formula">
        <h2 className="text-2xl font-bold tracking-tight text-white">The 5-part formula</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {formulaSteps.map((step) => (
            <div key={step.label} className="card p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-neon-violet">
                {step.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mist">{step.example}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-mist">
          Join the slots into one flowing sentence. Order matters more than length: subject
          first, style last.
        </p>
      </section>

      <section aria-label="Prompt gallery">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Copy-paste prompt gallery
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {promptExamples.map((example) => (
            <PromptCard key={example.id} example={example} />
          ))}
        </div>
      </section>

      <AdSlot className="mt-10" />
      <FaqSection items={promptFaqs} />
    </div>
  );
}
