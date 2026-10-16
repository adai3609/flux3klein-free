import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0b0f1a', soft: '#0e1322' },
        surface: { DEFAULT: '#121828', raised: '#1a2236' },
        line: '#243049',
        neon: { cyan: '#22d3ee', violet: '#a78bfa' },
        mist: '#94a3b8',
      },
      boxShadow: {
        'glow-cyan': '0 0 24px rgba(34, 211, 238, 0.18)',
        'glow-violet': '0 0 24px rgba(167, 139, 250, 0.18)',
      },
      maxWidth: { content: '72rem' },
    },
  },
  plugins: [],
};

export default config;
