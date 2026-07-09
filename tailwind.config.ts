import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FBFAF7',
        'paper-deep': '#F3F1EC',
        ink: '#101418',
        'ink-soft': '#3D4450',
        'ink-mute': '#7A8290',
        bleu: '#0A1F3C',
        api: '#12365B',
        epi: '#421F2A',
        gln: '#1E3A31',
        outremer: '#1D3EC2',
        laiton: '#A98E5C'
      },
      fontFamily: {
        display: ['General Sans', 'system-ui', 'sans-serif'],
        text: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        meta: ['var(--font-plex)', 'monospace']
      },
      transitionTimingFunction: {
        institutional: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: []
};
export default config;
