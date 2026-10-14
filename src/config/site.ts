import type { SiteConfig } from '~/types';

/**
 * ============================================================
 *  THE ONE FILE TO EDIT FIRST
 * ============================================================
 *
 * Everything here is demo content. Replace it with your own and the
 * header, footer, hero, contact page, metadata, structured data, RSS
 * feed and sitemap all follow.
 *
 * The canonical URL lives in `astro.config.mjs` (`site`) and is read
 * back here through `import.meta.env.SITE`.
 */
export const siteConfig: SiteConfig = {
  name: 'SWP Freelancer Portfolio',

  logo: {
    header: { src: '/images/header-logo.webp', width: 164, height: 58 },
    footer: { src: '/images/footer-logo.webp', width: 164, height: 58 },
  },

  author: 'Evandra Santoso',
  role: 'Business Analyst, System Analyst & UI/UX Designer',
  title: 'SWP Freelancer Portfolio — Art direction & interface design',
  description:
    'Portfolio of Evandra Santoso, an Information Systems student skilled in UI/UX Design, Business Process Mapping, System Analysis, and UiPath Automation.',
  url: import.meta.env.SITE ?? 'https://swp-freelancer-portfolio.vercel.app',
  ogImage: '/og-default.png',
  locale: 'en',
  themeColor: '#c8f14d',

  contact: {
    email: 'evandra2710@gmail.com',
    phone: '+6281297123209',
    phoneHref: '+6281297123209',
    location: 'Greater Jakarta, Indonesia',
    availability: 'Open for Internship Opportunities (BA / SA / UI/UX)',
    // Paste a Formspree / Web3Forms / Netlify endpoint here to make the
    // contact form live. See "Contact form" in the README.
    formEndpoint: '',
  },

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/evandra-santoso-77a094326/', icon: 'linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com/evandra2710/', icon: 'instagram' },
  ],

  about:
    'Personal portfolio of Evandra Santoso, Information Systems student at Bina Nusantara University specializing in Business Analysis, System Analysis, and UI/UX Design.',

  copyrightHolder: 'SWP Frelancer Portfolio',
};

export default siteConfig;
