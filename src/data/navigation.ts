import type { NavItem } from '~/types';

/**
 * Primary navigation.
 *
 * `anchor` is used only on the homepage: when the visitor is already on
 * `/`, the link jumps to that section instead of reloading the page.
 */
export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/', anchor: '#about' },
  { label: 'Services', href: '/services/', anchor: '#services' },
  { label: 'Certifications', href: '/#certifications', anchor: '#certifications' },
];
/** Extra links shown only in the mobile drawer. */
export const mobileExtraNav: NavItem[] = [
  { label: 'Toolkit', href: '/about/#toolkit' },
  { label: 'Process', href: '/about/#process' },
  { label: 'Testimonials', href: '/about/#testimonials' },
];

export const footerNav = {
  explore: [
    { label: 'About', href: '/about/' },
    { label: 'Services', href: '/#services' }, // Diubah agar scroll ke #services
    { label: 'Certifications', href: '/#certifications' }, // Menambahkan link Certifications jika mau
  ] satisfies NavItem[],
  legal: [
    { label: 'Privacy', href: '/privacy/' },
    { label: 'Terms', href: '/terms/' },
  ] satisfies NavItem[],
};