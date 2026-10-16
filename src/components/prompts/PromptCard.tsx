'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import type { PromptExample } from '@/types';

export function PromptCard({ example }: { example: PromptExample }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(example.text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can be denied (permissions/insecure context) — surface it
      // instead of failing silently.
      setCopied(false);
      window.alert('Copy failed — your browser blocked clipboard access. Select the text manually.');
    }
  }

  return (
    <article className="card card-hover flex flex-col gap-3 p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-bold text-white">{example.title}</h3>
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy ${example.title} prompt`}
          className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
            copied
              ? 'border-emerald-400/50 text-emerald-400'
              : 'border-line text-mist hover:border-neon-cyan/60 hover:text-neon-cyan'
          }`}
        >
          {copied ? <Check className="h-3.5 w-3.5" aria-hidden /> : <Copy className="h-3.5 w-3.5" aria-hidden />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <p className="text-sm leading-relaxed text-mist">{example.text}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-1">
        {example.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-surface-raised px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-neon-violet"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
