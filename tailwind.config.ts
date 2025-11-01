import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          foreground: 'rgb(var(--color-primary-foreground) / <alpha-value>)'
        },
        accent: {
          soft: 'rgb(var(--color-accent-soft) / <alpha-value>)',
          contrast: 'rgb(var(--color-accent-contrast) / <alpha-value>)'
        },
        surface: {
          light: '#F8FAFC',
          dark: '#0B1120'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 25px 50px -12px rgb(var(--color-primary) / 0.45)'
      },
      maxWidth: {
        content: '72rem'
      }
    }
  },
  plugins: []
};

export default config;
