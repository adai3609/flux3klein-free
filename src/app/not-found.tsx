import Link from 'next/link';
import { siteNav } from '@/data/site';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-4 py-24 text-center sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-neon-cyan">404</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-white">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-mist">
        This page doesn&apos;t exist — but free image generation does.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-neon-cyan px-6 py-3 font-bold text-ink transition hover:shadow-glow-cyan"
        >
          Back to the generator
        </Link>
        <Link
          href={siteNav[1].href}
          className="rounded-xl border border-line bg-surface px-6 py-3 font-bold text-white transition hover:border-neon-violet/60"
        >
          Prompt guide
        </Link>
      </div>
    </div>
  );
}
