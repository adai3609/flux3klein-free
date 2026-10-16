import { ChevronDown } from 'lucide-react';
import { faqJsonLd, JsonLd } from '@/components/seo/JsonLd';
import type { FaqItem } from '@/types';

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
  withJsonLd?: boolean;
}

export function FaqSection({ items, title = 'Frequently asked questions', withJsonLd = true }: FaqSectionProps) {
  return (
    <section className="mt-12">
      {withJsonLd ? <JsonLd data={faqJsonLd(items)} /> : null}
      <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <details key={item.question} className="card group px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h3 className="text-base font-semibold text-white">{item.question}</h3>
              <ChevronDown
                className="h-4 w-4 shrink-0 text-neon-cyan transition-transform group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <p className="mt-3 leading-relaxed text-mist">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
