'use client';

import { useState } from 'react';
import { ExternalLink, Play, ShieldAlert } from 'lucide-react';
import { embedConfig } from '@/data/embed';

/**
 * User-initiated lazy embed: the iframe only loads when the visitor clicks
 * "Start generating". If the official Space URL is not configured yet
 * (REPLACE_WITH_ACTUAL_SPACE placeholder), we show an honest notice and a
 * link to the model page instead of a broken frame.
 */
export function GeneratorEmbed() {
  const [loaded, setLoaded] = useState(false);
  const spaceNotConfigured = embedConfig.spaceUrl.includes('REPLACE_WITH_ACTUAL_SPACE');

  return (
    <div id="generator" className="card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/60 bg-surface-raised px-5 py-3">
        <p className="text-sm font-bold text-white">FLUX 3 Klein — official demo</p>
        <a
          href={embedConfig.spaceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neon-cyan hover:underline"
        >
          Open in new tab
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      </div>

      {spaceNotConfigured ? (
        <div className="flex flex-col items-center gap-3 px-6 py-16 text-center">
          <ShieldAlert className="h-8 w-8 text-neon-violet" aria-hidden />
          <p className="max-w-md text-sm leading-relaxed text-mist">
            The embed URL is not configured yet. Grab the official FLUX 3 Klein Space link from
            the Black Forest Labs model page, then update{' '}
            <code className="rounded bg-surface-raised px-1.5 py-0.5 text-neon-cyan">
              src/data/embed.ts
            </code>
            .
          </p>
          <a
            href={embedConfig.modelPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line px-4 py-2 text-sm font-semibold text-white transition hover:border-neon-cyan/60"
          >
            Open the model page
          </a>
        </div>
      ) : loaded ? (
        <iframe
          src={embedConfig.spaceUrl}
          title="FLUX 3 Klein image generator"
          className="h-[720px] w-full border-0 bg-ink-soft"
          allow="accelerometer; clipboard-write; encrypted-media"
        />
      ) : (
        <div className="flex flex-col items-center gap-4 px-6 py-20 text-center">
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-neon-cyan px-6 py-3 font-bold text-ink transition hover:shadow-glow-cyan"
          >
            <Play className="h-4 w-4" aria-hidden />
            Start generating
          </button>
          <p className="max-w-sm text-xs leading-relaxed text-mist">
            Loads Black Forest Labs' official demo right here. Free, no signup — queue times
            depend on demo traffic.
          </p>
        </div>
      )}
    </div>
  );
}
