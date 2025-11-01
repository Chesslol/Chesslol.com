export type SocialLinks = {
  tiktok: string;
  youtube: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  siteUrl: string;
  socials: SocialLinks;
};

export const siteConfig: SiteConfig = {
  name: 'Chesslol',
  tagline: 'Where chess collides with creativity.',
  description: 'Discover games, challenges, and playful chess experiments from the Chesslol collective.',
  siteUrl: 'https://chesslol.com',
  socials: {
    tiktok: 'https://www.tiktok.com/@TODO',
    youtube: 'https://www.youtube.com/@TODO'
  }
};
