import type { FaqItem } from '@/types';

export const homeFaqs: FaqItem[] = [
  {
    question: 'Is FLUX 3 Klein free to use?',
    answer:
      'Yes. You can generate images free in your browser through the embedded community demo — no account or payment required on this site. The model itself is open-weight: Black Forest Labs announced that organizations earning under $5 million per year can run it in-house for free, with separate terms for larger commercial use.',
  },
  {
    question: 'Do I need to sign up to generate images?',
    answer:
      'No signup is required to use the embedded demo on this site. Queue times depend on community demo load; heavy users can run the model locally on their own GPU.',
  },
  {
    question: 'What is FLUX 3 Klein?',
    answer:
      'FLUX 3 Image Klein is an open-weight image generation model from Black Forest Labs, released October 16, 2026. It has 5.6 billion parameters and its INT8 build runs on consumer GPUs with 8 GB of VRAM.',
  },
  {
    question: 'Can I run FLUX 3 Klein on my own GPU?',
    answer:
      'Yes. The INT8 build runs on GeForce RTX cards with 8 GB of VRAM. See our run-locally guide for the step-by-step setup.',
  },
  {
    question: 'How do I write better prompts?',
    answer:
      'Describe the subject, the setting, the lighting, and the style in one flowing sentence. Our prompt guide includes a copy-paste gallery of worked examples across ten styles.',
  },
  {
    question: 'Who makes FLUX 3 Klein?',
    answer:
      'Black Forest Labs, the team behind the FLUX image model family. This site is an independent resource and is not affiliated with them.',
  },
];

export const promptFaqs: FaqItem[] = [
  {
    question: 'What makes a good FLUX 3 Klein prompt?',
    answer:
      'Concrete nouns, one clear scene, and explicit style words. Name the subject, the action, the environment, the lighting, and the rendering style — in that order — and keep it to one or two sentences.',
  },
  {
    question: 'How long should a prompt be?',
    answer:
      'One to three sentences. Longer prompts dilute attention; shorter prompts leave the style to chance. The gallery examples on this page all land in the sweet spot.',
  },
  {
    question: 'Can I use these prompts commercially?',
    answer:
      'Prompts are not copyrightable, and images you generate are governed by the model license of the service you use. Check the FLUX 3 Klein license terms for commercial-use conditions.',
  },
];
