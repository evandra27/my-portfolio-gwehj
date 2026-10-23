import type { Stat } from '~/types';

export const stats: Stat[] = [
  { value: '3.85', label: 'Current GPA' },
  { value: 10, suffix: '+', label: 'Projects & Case Studies' },
  { value: 3, label: 'Core Roles (BA, SA, UI/UX)' },
];

/** Headline above the stats band, split so the tail can be dimmed. */
export const statsHeading = {
  lead: 'Great digital solutions bridge business goals,',
  tail: 'with intuitive design and reliable system architecture.',
};

/**
 * Poster frame for the studio reel. Set `embedUrl` to a YouTube/Vimeo
 * privacy-friendly embed to make the play button load a real video;
 * leave it empty and the button is hidden.
 */
export const reel = {
  image: '/images/reel-poster.webp',
  alt: 'Two people reviewing notes and sketches at a studio table',
  width: 1000,
  height: 625,
  embedUrl: '',
  label: 'Play the studio reel',
};
