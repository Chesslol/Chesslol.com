import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1',
          foreground: '#EEF2FF'
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
        glow: '0 25px 50px -12px rgb(99 102 241 / 0.45)'
      },
      maxWidth: {
        content: '72rem'
      }
    }
  },
  plugins: []
};

export default config;
