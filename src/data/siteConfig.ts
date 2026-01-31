import avigilanteImage from '../assets/images/about/Avigilante2.jpg';
import awellsImage from '../assets/images/about/Awells.jpg';
import placeholderImage from '../assets/images/about/Placeholder.jpg';
import chefAlanImage from '../assets/images/about/ChefAlan.png';

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

  // Make team typeface with link to social media profiles
  team: Array<{
    name: string;
    title: string;
    description: string;
    image: string;
    socials: Array<{ platform: string; href: string; icon: string }>;
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
    title: 'The Rising Man Retreat',
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
    headline: 'The Rising Man Retreat',
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
      title: '3 Days / 3 Nights Stay',
      description:
        'A fully guided, in-person initiation held in a private mountain home designed for depth, focus, and embodiment.',
    },
    {
      icon: 'TBD',
      title: 'Chef-Prepared Premium Meals',
      description:
        'All meals included. Fresh, nourishing, performance-focused food prepared daily to support recovery and clarity.',
    },
    {
      icon: 'TBD',
      title: 'Embodied Masculinity Training',
      description:
        'Practices rooted in presence, grounding, movement, and nervous system regulation.',
    },
    {
      icon: 'TBD',
      title: 'Breathwork & Regulation Workshops',
      description:
        'Dynamic and sonic neural breathwork to release tension and access deeper awareness.',
    },
    {
      icon: 'TBD',
      title: 'Facilitated Shadow Work + Integration',
      description:
        'IFS‑informed exploration of patterns, stories, and inner drivers shaping behavior.',
    },
    {
      icon: 'TBD',
      title: 'Brotherhood & Accountability',
      description: 'Sacred men’s council and accountability containers for integration and growth.',
    },
    {
      icon: 'TBD',
      title: 'Post Integration Support Circle ( optional, virtual  )',
      description: 'Sacred men’s council and accountability containers for integration and growth.',
    },
    {
      icon: 'TBD',
      title: 'Private Mountain Accommodations',
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
    heading: 'What You Will Experience',
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
    heading: 'The Modalities',
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
      day: 'Thur',
      time: '4:00 PM – 10:00 PM',
      title: 'Arrival & Initiation',
      description:
        'Arrival, introductions, opening dinner, facilitator initiation share, movement, breathwork, and sacred men’s council.',
    },
    {
      day: 'Fri',
      time: '8:00 AM – 10:00 PM',
      title: 'Regulation & Shadow',
      description:
        'Morning practices, nervous system education, shadow work, free time, sonic neural breathwork, and parts work.',
    },
    {
      day: 'Sat',
      time: '8:00 AM – 10:00 PM',
      title: 'Embodiment & Expression',
      description:
        'Masculine embodiment practices, conscious communication, journaling, sonic neural breathwork, and integration circles.',
    },
    {
      day: 'Sun',
      time: '6:00 AM – 10:30 AM',
      title: 'Integration & Return',
      description:
        'Sunrise silence hike, intention setting, integration guidance, and closing facilitator remarks.',
    },
  ],
  team: [
    {
      name: 'Alex Vigilante',
      title: 'Facilitator',
      description:
        'Alex is the founder of Vigilante Rising and a facilitator devoted to embodied leadership, nervous-system health, and men’s work. He bridges modern neuroscience with lived experience, creating grounded spaces for clarity, accountability, and self-mastery. Alex also leads the Charlotte Men’s Wellness Club, supporting men in moving from overthinking into embodied action and alignment.',
      image: avigilanteImage.src,
      socials: [
        {
          platform: 'Instagram',
          href: 'https://www.instagram.com/vigilante_rising/',
          icon: 'Instagram',
        },
        {
          platform: 'LinkedIn',
          href: 'https://www.linkedin.com/in/alexvigilante/',
          icon: 'LinkedIn',
        },
      ],
    },
    {
      name: 'Anthony "AJay" Wells',
      title: 'Facilitator',
      description:
        'AJay is a men’s wellness guide, breathwork facilitator, and founder of Axis Ori. His work is rooted in nervous system regulation, disciplined self-leadership, and inner alignment. Drawing from lived experience, ancient practices, and modern science, AJay creates spaces for men to slow down, confront their patterns, and build a life led from clarity rather than impulse. His mission is simple: help men return to themselves and lead with intention.',
      image: awellsImage.src,
      socials: [
        { platform: 'Instagram', href: 'https://www.instagram.com/a.wells/', icon: 'Instagram' },
        {
          platform: 'LinkedIn',
          href: 'https://www.linkedin.com/in/awells91/',
          icon: 'LinkedIn',
        },
        { platform: 'Website', href: 'https://axisori.com/', icon: 'Web' },
      ],
    },
    {
      name: 'Chef Alan',
      title: 'Private Chef',
      description:
        'Alan is a private chef who prepares all meals for the retreat. From Austin, Texas he is a master of all things food and nutrition.',
      image: chefAlanImage.src,
      socials: [
        {
          platform: 'Instagram',
          href: 'https://www.instagram.com/eat.with.alan/',
          icon: 'Instagram',
        },
      ],
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
