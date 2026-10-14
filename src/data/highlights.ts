/**
 * Copy blocks for the homepage sections that are one-of-a-kind.
 * Longer, repeating content lives in its own data file or content
 * collection instead.  
 */

export const hero = {
  greeting: 'Hello. The name is',
  /** Rendered on two lines. */
  nameLines: ['Evandra', 'Santoso'],
  intro:
    'Information Systems student at Bina Nusantara University bridging UI/UX design with Business & System Analysis. Experienced in crafting user-centered digital products and optimizing workflows with UiPath automation.',
  ctaLabel: 'Contact me',
  ctaHref: '/contact/',
  photo: {
    src: '/images/foto-evan.png',
    alt: 'Robin Vale, art director, photographed against a plain studio wall',
    width: 960,
    height: 1210,
  },
  aside: {
    roleLine: ['Information Systems Student / BINUS University', 'BA, SA & UI/UX Design'],
    title: ['Analysts', 'UI/UX'],
    /** Small avatar stack — decorative, so the images carry empty alt text. */
    stack: ['/images/avatar-02.webp', '/images/avatar-01.webp', '/images/avatar-03.webp'],
    stackBadge: '98%',
    kpi: '10+',
    kpiLabel: 'Academic & Personal Project',
    note: 'Based in Greater Jakarta, Indonesia',
  },
};

export const collaborate = {
  eyebrow: 'LET\'S CONNECT',
  title: 'Looking for a dedicated intern to help analyze, design, and optimize your systems?',
  body: 'I am currently open for internship opportunities. Let\'s discuss how my skills in Business Analysis, System Analysis, and UI/UX Design can contribute to your team\'s goals.',
  badge: 'Independent since 2011',
  ctaLabel: 'Send me the brief',
  ctaHref: '/contact/',
  /**
   * The staggered pair beside the copy. Swap these for the bundled SVG
   * mockups (`BookletMock`, `TabletMock` in src/components/art/) if you would
   * rather show artwork than photography — see the README.
   */
};

export const about = {
  eyebrow: 'Background',
  title: 'Forty projects taught me the same lesson forty times.',
  body: 'I spent my twenties inside agencies making things look expensive. Somewhere around the fourth rebrand that never shipped, I started asking what the work was actually for. These days I take fewer clients, ask the awkward questions in week one, and stay until the thing is live.',
  points: [
    'I read your support inbox before I open a design file.',
    'One senior person on the work from first call to launch — nothing gets passed down.',
    'If I think the project is the wrong project, you hear it before you pay me.',
  ],
  image: {
    src: '/images/about-studio.webp',
    alt: 'Designers arranging sticky notes and printed layouts across a studio table',
    width: 900,
    height: 954,
  },
  badge: {
    value: '15',
    label: 'Years working independently, almost always with teams of under twenty people.',
  },
  ctaLabel: 'See the work',
  ctaHref: '/work/',
};

export const servicesHeading = {
  eyebrow: 'Engagements',
  title: 'Six ways to put me to work.',
  ctaLabel: 'Ask for a scope',
  ctaHref: '/contact/',
};

export const workHeading = {
  eyebrow: 'Selected work',
  title: 'Six projects, six different arguments.',
};

export const journalHeading = {
  eyebrow: 'Notebook',
  title: 'Things I keep having to explain.',
  ctaLabel: 'Every article',
  ctaHref: '/journal/',
};

export const cta = {
  title: 'Have you got something that deserves doing properly?',
  body: 'Tell me what is broken, who it is breaking for, and what happens if it stays that way. That is enough for me to come back with a scope and a number.',
  primaryLabel: 'Send the brief',
};
