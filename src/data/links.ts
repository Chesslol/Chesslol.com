export type LinkItem = {
  title: string;
  url: string;
  description?: string;
  icon?: string;
};

export const links: LinkItem[] = [
  {
    title: 'Costume Game',
    url: 'https://youware.app/project/costume-pw0bpp6zpo?enter_from=share&invite_code=4NDCU7RVOK',
    description: 'Suit up for the latest Chesslol challenge on YouWare.',
    icon: '🕹️'
  },
  {
    title: 'TikTok',
    url: 'https://www.tiktok.com/@TODO',
    description: 'Follow Chesslol on TikTok for daily clips and new experiments.',
    icon: '🎵'
  },
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/@TODO',
    description: 'Long-form breakdowns, streams, and highlights.',
    icon: '▶️'
  }
];
