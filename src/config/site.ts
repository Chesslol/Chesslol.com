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
  description: 'Chesslol is a fast, fun hub for the latest experiments, games, and content from the Chesslol community.',
  siteUrl: 'https://chesslol.com',
  socials: {
    tiktok: 'https://www.tiktok.com/@TODO',
    youtube: 'https://www.youtube.com/@TODO'
  }
};
