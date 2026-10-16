import Link from 'next/link';
import type { FaqItem } from '@/types';
import { FaqSection } from '@/components/seo/FaqSection';
import { AdSlot } from '@/components/site/AdSlot';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Run FLUX 3 Klein Locally — 8 GB GPU Setup Guide',
  description:
    'Run FLUX 3 Klein on your own GPU: 5.6B open weights, INT8 build on 8 GB VRAM RTX cards. Weights, quantization, inference stacks and license notes.',
  path: '/run-locally',
});

const localRunFaqs: FaqItem[] = [
  {
    question: 'What GPU do I need to run FLUX 3 Klein?',
    answer:
      'The official INT8 build runs on GeForce RTX cards with 8 GB of VRAM. More VRAM helps with larger resolutions and faster batches, but 8 GB is the announced floor.',
  },
  {
    question: 'Is commercial use allowed?',
    answer:
      'Black Forest Labs announced the model is free to run in-house for organizations earning under $5 million per year. Larger commercial use falls under separate license terms — read the official model card before selling outputs.',
  },
  {
    question: 'Do I need the internet after downloading the weights?',
    answer:
      'No. Once the weights are on your disk, generation runs entirely offline on your own machine.',
  },
];

export default function RunLocallyPage() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6">
      <header className="border-b border-line/60 py-12">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-neon-cyan">Local setup</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Run FLUX 3 Klein Locally
        </h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-mist">
          No queue, no limits, fully offline — the model is small enough for a consumer GPU. The
          announced floor is an <strong className="text-white">8 GB VRAM RTX card</strong> using
          the INT8 build.
        </p>
      </header>

      <article className="prose-site max-w-3xl py-10">
        <h2>Step-by-step setup</h2>
        <h3>1 · Check your hardware</h3>
        <p>
          You need an NVIDIA GeForce RTX card with at least 8 GB of VRAM for the INT8 build.
          Check yours in Task Manager → Performance → GPU, or with{' '}
          <code className="rounded bg-surface-raised px-1.5 py-0.5 text-neon-cyan">
            nvidia-smi
          </code>
          .
        </p>
        <h3>2 · Download the weights</h3>
        <p>
          Get the official FLUX 3 Klein weights from the{' '}
          <a
            href="https://huggingface.co/Black-Forest-Labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Black Forest Labs page on Hugging Face
          </a>
          . Always download from the official organization — mirror re-uploads can be stale or
          tampered with. Accept the license terms when prompted.
        </p>
        <h3>3 · Pick an inference stack</h3>
        <ul>
          <li>
            <strong className="text-white">ComfyUI</strong> — node-based workflow, best for
            repeatable pipelines and ControlNet-style extras.
          </li>
          <li>
            <strong className="text-white">diffusers</strong> — Python library, best for
            scripting batches and integrating into your own tools.
          </li>
          <li>
            <strong className="text-white">MLX</strong> — Apple-silicon path if you are on a Mac.
          </li>
        </ul>
        <h3>4 · Use the INT8 quantized build</h3>
        <p>
          The INT8 quantization is what brings the memory floor down to 8 GB. Load the quantized
          checkpoint rather than full precision unless you have VRAM to spare — quality
          difference is minor, the memory difference is not.
        </p>
        <h3>5 · Read the license before selling anything</h3>
        <p>
          The announcement allows free in-house use under the $5M revenue threshold. If outputs
          feed a commercial product, confirm your case against the official license text on the
          model page. This site is an independent guide and not legal advice.
        </p>
        <p>
          <em>
            Specific commands follow the official model card — it is updated by Black Forest
            Labs as inference stacks add support. Follow it as the source of truth.
          </em>
        </p>
      </article>

      <AdSlot />
      <FaqSection items={localRunFaqs} />
      <p className="mt-10 text-sm text-mist">
        Not ready to install anything?{' '}
        <Link href="/#generator" className="text-neon-cyan hover:underline">
          Use the free browser generator
        </Link>{' '}
        instead.
      </p>
    </div>
  );
}
