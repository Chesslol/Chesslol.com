export type PostAspect = 'square' | 'portrait' | 'landscape';

export type Post = {
  id: string;
  title?: string;
  href: string;
  image: string;
  aspect?: PostAspect;
  featured?: boolean;
};

export const posts: Post[] = [
  {
    id: 'costume-challenge',
    title: 'Costume Game on YouWare',
    href: 'https://youware.app/project/costume-pw0bpp6zpo?enter_from=share&invite_code=4NDCU7RVOK',
    image: 'posts/post-1.jpg',
    aspect: 'square',
    featured: true
  },
  {
    id: 'live-stream',
    title: 'Live Stream Highlights',
    href: 'https://example.com/stream',
    image: 'posts/post-2.jpg',
    aspect: 'portrait'
  },
  {
    id: 'daily-clips',
    title: 'Daily Clips Playlist',
    href: 'https://example.com/clips',
    image: 'posts/post-3.jpg',
    aspect: 'square'
  },
  {
    id: 'community-events',
    title: 'Community Events Recap',
    href: 'https://example.com/events',
    image: 'posts/post-4.jpg',
    aspect: 'landscape'
  },
  {
    id: 'strategy-tips',
    title: 'Strategy Tips Carousel',
    href: 'https://example.com/tips',
    image: 'posts/post-5.jpg',
    aspect: 'square'
  },
  {
    id: 'match-replays',
    title: 'Match Replays',
    href: 'https://example.com/replays',
    image: 'posts/post-6.jpg',
    aspect: 'portrait'
  }
];
