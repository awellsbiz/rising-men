export interface SiteConfig {
  meta: {
    title: string;
    description: string;
    ogImage: string;
    themeColor: string;
  };

  brand: {
    name: string;
    logo: string;
    tagline: string;
  };

  nav: Array<{
    label: string;
    href: string;
  }>;

  hero: {
    headline: string;
    subheadline: string;
    backgroundImage: string;
    cta: {
      primary: { label: string; href: string };
      secondary?: { label: string; href: string };
    };
  };

  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  about: {
    heading: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };

  outcomes: {
    heading: string;
    items: string[];
  };

  modalities: {
    heading: string;
    items: string[];
  };

  schedule: Array<{
    time: string;
    title: string;
    description: string;
    day?: string;
  }>;

  contact: {
    heading: string;
    subheading: string;
    tallyFormId: string;
  };

  footer: {
    copyright: string;
    links: Array<{ label: string; href: string }>;
    socials: Array<{ platform: string; href: string; icon: string }>;
  };

  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    baseColor: string;
    darkColor: string;
  };
}

export const siteConfig: SiteConfig = {
  meta: {
    title: 'The Rising Retreat',
    description:
      'Awaken the inner man. Reclaim your purpose. Become the man you were designed to be and step into your power.',
    ogImage: 'TBD',
    themeColor: 'TBD',
  },
  brand: {
    name: 'Vigilante Rising',
    logo: 'TBD',
    tagline: 'Awaken the inner man. Reclaim your purpose.',
  },
  nav: [{ label: 'TBD', href: '#tbd' }],
  hero: {
    headline: 'The Rising Retreat',
    subheadline:
      'A rite of passage for the modern man ready to shed old patterns, face himself fully, and embody true masculinity.',
    backgroundImage: 'TBD',
    cta: {
      primary: { label: 'TBD', href: '#tbd' },
      secondary: { label: 'TBD', href: '#tbd' },
    },
  },
  features: [
    {
      icon: 'TBD',
      title: 'Embodied Masculinity',
      description:
        'Practices rooted in presence, grounding, movement, and nervous system regulation.',
    },
    {
      icon: 'TBD',
      title: 'Breathwork & Regulation',
      description:
        'Dynamic and sonic neural breathwork to release tension and access deeper awareness.',
    },
    {
      icon: 'TBD',
      title: 'Shadow & Parts Work',
      description:
        'IFS‑informed exploration of patterns, stories, and inner drivers shaping behavior.',
    },
    {
      icon: 'TBD',
      title: 'Brotherhood & Accountability',
      description: 'Sacred men’s council and accountability containers for integration and growth.',
    },
  ],
  about: {
    heading: 'About The Rising Retreat',
    paragraphs: [
      'The Rising Retreat is a thematic rite of passage designed for highly successful men who are ready to shed old identities, face every part of themselves, and step into their potential.',
      'Through embodiment practices, breathwork, shadow work, and brotherhood, men leave grounded, clear, and equipped with a roadmap for self‑mastery and integration.',
    ],
    image: 'TBD',
    imageAlt: 'Men participating in a masculine embodiment retreat',
  },
  outcomes: {
    heading: 'Intended Outcomes',
    items: [
      'Deeper sense of personal power, purpose, and emotional ownership',
      'Clear understanding of personal patterns, behaviors, and life potential',
      'Renewed confidence in embodied masculinity',
      'Practical tools for breathwork and nervous system regulation',
      'Brotherhood and accountability with aligned men',
      'A roadmap for momentum and self‑mastery',
    ],
  },
  modalities: {
    heading: 'Modalities & Key Experiences',
    items: [
      'Dynamic breathwork and sonic neural breathwork',
      'Masculine embodiment practices',
      'IFS‑informed parts work and shadow work',
      'Cold exposure and breath‑body regulation',
      'Conscious communication and sacred men’s council',
      'Silence and solitude practices',
      'Integration mapping and accountability containers',
    ],
  },
  schedule: [
    {
      day: 'Thursday',
      time: '4:00 PM – 10:00 PM',
      title: 'Arrival & Initiation',
      description:
        'Arrival, introductions, opening dinner, facilitator initiation share, movement, breathwork, and sacred men’s council.',
    },
    {
      day: 'Friday',
      time: '8:00 AM – 10:00 PM',
      title: 'Regulation & Shadow',
      description:
        'Morning practices, nervous system education, shadow work, free time, sonic neural breathwork, and parts work.',
    },
    {
      day: 'Saturday',
      time: '8:00 AM – 10:00 PM',
      title: 'Embodiment & Expression',
      description:
        'Masculine embodiment practices, conscious communication, journaling, sonic neural breathwork, and integration circles.',
    },
    {
      day: 'Sunday',
      time: '6:00 AM – 10:30 AM',
      title: 'Integration & Return',
      description:
        'Sunrise silence hike, intention setting, integration guidance, and closing facilitator remarks.',
    },
  ],
  contact: {
    heading: 'Apply for The Rising Retreat',
    subheading: 'This is an initiation. Apply if you are ready to meet yourself fully.',
    tallyFormId: 'TBD',
  },
  footer: {
    copyright: 'TBD',
    links: [{ label: 'TBD', href: '#tbd' }],
    socials: [{ platform: 'TBD', href: 'TBD', icon: 'TBD' }],
  },
  theme: {
    primaryColor: 'primary',
    secondaryColor: 'secondary',
    accentColor: 'accent',
    baseColor: 'base',
    darkColor: 'dark',
  },
};
