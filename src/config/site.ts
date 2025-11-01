export type SocialLinks = {
  tiktok: string;
  youtube: string;
};

export type AccentPaletteName = 'indigo' | 'lime';

export type AccentPalette = {
  label: string;
  primary: string;
  primaryForeground: string;
  accentSoft: string;
  accentContrast: string;
};

export const accentPalettes: Record<AccentPaletteName, AccentPalette> = {
  indigo: {
    label: 'Indigo Pulse',
    primary: '99 102 241',
    primaryForeground: '238 242 255',
    accentSoft: '129 140 248',
    accentContrast: '49 46 129'
  },
  lime: {
    label: 'Lime Burst',
    primary: '101 163 13',
    primaryForeground: '247 254 231',
    accentSoft: '163 230 53',
    accentContrast: '54 83 20'
  }
};

export type ThemeConfig = {
  accentPalette: AccentPaletteName;
};

export type SiteConfig = {
  name: string;
  username: string;
  bio: string;
  tagline: string;
  description: string;
  siteUrl: string;
  socials: SocialLinks;
  theme: ThemeConfig;
};

export const siteConfig: SiteConfig = {
  name: 'Chesslol',
  username: '@chesslol',
  bio: 'Short bio placeholder',
  tagline: 'Where chess collides with creativity.',
  description: 'Visual link hub highlighting Chesslol posts and socials.',
  siteUrl: 'https://chesslol.com',
  socials: {
    tiktok: '',
    youtube: ''
  },
  theme: {
    accentPalette: 'indigo'
  }
};
