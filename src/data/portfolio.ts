// All copy below is taken verbatim (or near-verbatim) from the Stitch export's
// two `code.html` files. Swap these values out for real content — the
// components themselves don't need to change.

export const site = {
  name: 'EMMA_DEV',
  title: 'EMMA_DEV | Full Stack Engineer Portfolio',
  logoInitial: 'E',
  resumeHref: '/EMMA_DEV.pdf',
  email: 'echukwuma561@gmail.com',
};

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Process', href: '#process' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Connect', href: '#connect' },
];

export const heroBadges = [
  { label: 'Open to Work', pulse: true },
  { label: 'Available for Freelance', pulse: false },
];

export const hero = {
  heading: ['Architecting', 'Digital Excellence.'],
  description:
    "Full Stack Engineer specializing in high-performance web applications and cinematic user experiences. I bridge the gap between complex backend systems and pixel-perfect frontends.",
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBRwi31Stz9ZvYtsTCw0cOqKCIClfM4C6k450fBKkrWatXVp_imrq1ijz8j_T8cDT5uqyzGFcSqnrGV8dgHKbbg-AE18R24gVsbzRvEtObC0P8YEPF1FCrW4tJgQstl-WhUq0Ghgghb0F7Mk4Uo-I-fR-WdZNVql4NIhSGCBgg_2tnhPTi_9a34PRafVccyO4AbTbwC1N7bQiWDiWdqHBsK_tqyXcsKSZLx6EUF8rh_sjG6tDrpwTxDd4jVCa56aY5cOaXBprTjMvk',
};

export const about = {
  eyebrow: 'The Architect',
  heading: 'Crafting experiences with technical precision.',
  paragraphs: [
    'Based in the intersection of design and logic, I spent the last decade building high-stakes digital products. From fintech platforms handling millions in transactions to immersive WebGL experiences that push browser limits.',
    'My approach is rooted in the "Engineering as Craft" philosophy—where every line of code is intentional, every interface is intuitive, and every system is built to outlast its current requirements.',
  ],
  portraitImage:
    '/me.png',
};

export interface Project {
  title: string;
  category: string;
  description: string;
  stack: string[];
  image: string;
  href: string;
}

export const featuredProject = {
  tag: '01 / CASE STUDY',
  title: 'Kudora Marketplace',
  description:
    'A modern multi-vendor marketplace that allows users to browse products, manage favorites, complete secure checkouts, and provides administrators with tools to manage products, orders, and customers.',
  stack: ['Next.js 14', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST API', 'Tailwind CSS'],
  image: 'https://chukwuma-emmanuel-seven.vercel.app/images/Kudora.png',
  href: 'https://kudora.vercel.app/',
};

// Every other real project. Add as many as you like — the homepage strip
// and the /work grid both read from this one array, so nothing else needs
// to change as this list grows.
export const moreProjects: Project[] = [
  {
    title: 'K.A.V Textiles',
    category: 'Storefront',
    description: 'E-commerce site built for a fabric and textiles business client.',
    stack: ['Next.js', 'Stripe', 'PostgreSQL'],
    image: 'https://chukwuma-emmanuel-seven.vercel.app/images/kav-textile.png',
    href: 'https://kav-textile.vercel.app/',
  },
   {
    title: "StreamFlix",
    category: "Entertainment",
    description:
      "A modern movie streaming platform featuring movie discovery, detailed information, responsive layouts, and an immersive viewing experience.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    image: "/images/streamflix.png",
    href: "https://streamflix-app-rho.vercel.app/waitlist",
  },
  {
    title: "Uche's Gadget Hub",
    category: 'E-commerce',
    description:
      'A modern electronics e-commerce platform featuring product browsing, secure checkout, Paystack integration, and an admin dashboard.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    image: 'https://chukwuma-emmanuel-seven.vercel.app/images/uche-gadgetsHub.png',
    href: 'https://uche-s.vercel.app/',
  },
  {
    title: "L'Essence Fragrances",
    category: 'Luxury Brand Website',
    description:
      'A premium fragrance brand website showcasing luxury perfumes with elegant UI, responsive layouts, and engaging user interactions.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: "/images/lessence.png",
    href: 'https://l-essence-ten.vercel.app/',
  },
  {
    title: 'Inventory Management System',
    category: 'Business Management',
    description:
      'An inventory management solution designed to help businesses manage products, stock levels, suppliers, and sales efficiently.',
    stack: ['React', 'TypeScript'],
    image: '/images/inventory-management.png',
    href: 'https://freshmart-delta.vercel.app/',
  },
  {
    title: 'The Verdant Hotel',
    category: 'Hospitality',
    description:
      'A hotel booking platform with room listings, reservation workflows, and seamless frontend integration with backend APIs.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    image: '/images/verdant.png',
    href: '#',
  },
];

// How many of `moreProjects` show in the homepage strip before it hands off
// to a "View All Work" card linking to /work. Keeps the homepage compact
// no matter how many projects you add.
export const HOMEPAGE_PROJECT_LIMIT = 2;

// Optional honest teaser card at the end of the strip — shows you're
// actively building outside e-commerce without claiming a finished project
// you don't have yet. Set to `null` to hide it.
export const buildingNow: { title: string; description: string } | null = {
  title: 'Currently Building',
  description: 'A new project outside e-commerce — details coming soon as it takes shape.',
};
export const bentoProjects = [
  {
    title: 'DevTools Engine',
    description: 'A custom VS Code extension suite for architectural automation.',
    icons: ['terminal', 'code'] as const,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSyqse69ossMwld9dy0x933RFlSlI1yLsNhAQTm4GJI4nXWCWojoPmImEhBQHTV9bpA7KAJzvrAZYnu_oI15o7KlHwUUFzP3_iaDZ5XfxunvVHOHyqxjvKP-as6joHqtzMQ4Ekv69tP6Lf6emwwM-VU92FX8RqjVQeaz_2AmBT6nO7JzAFNtS5vcVggJdIGdkSrooKdbZpH0jU9L3LYEox3hWmNYD0bssxcTXaWXbgFQYYNmqT2-ngHi5qX1WR7_Xm3Cb8BqdHrPA',
  },
  {
    title: 'Quantico AI',
    description: 'LLM-integrated data modeling tool for quantitative research.',
    icons: ['sparkles', 'database'] as const,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBDCc-HWG12JXhFb23CEnpPtQbmXNmrIAL0RMBh2q9Ev53YXy-6h6QnaO1wnF-utYklsy6iF2tEOvtsd-j887SbLGuXq0Vm9mK-raSluKAWsFjSzN6_RGdLbRob7ZPSREpC1_7CY1s6feg8-iBLoS-5tUQfe_a0jBUsdnT8JBMMlUvvbcok5Tq7yttO_gp7RNpSPTVPViwNkc1KP1zeX_vRCK5BDhNwE6uuSLi16rcMSa35vG9OOgFGShk4bDq3xQcga82mPUZkyQ4',
  },
];

export const techStack = [
  {
    title: 'Frontend',
    icon: 'layers' as const,
    color: 'primary' as const,
    items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: 'server' as const,
    color: 'tertiary' as const,
    items: ['Node.js / Express', 'PostgreSQL / Redis', 'GraphQL / REST', 'Prisma / Drizzle'],
  },
  {
    title: 'Infrastructure',
    icon: 'cloud' as const,
    color: 'secondary' as const,
    items: [ 'Deployment (Vercel & Render)',
    'Version Control (Git/GitHub)',
    'RESTful API Integration',
    'PostgreSQL Databases',
    'Cloud Asset Management',],
  },
];

export const evolution = [
  {
    year: '2023',
    title: 'The Genesis',
    description:
      'Started with JavaScript. Built custom Web themes and static landing pages. Learned the basics of the web.',
  },
  {
    year: '2024',
    title: 'The Shift to Scale',
    description:
      'Adopted React and Node.js. Moved from monoliths to early microservices. Focused on state management and performance.',
  },
  {
    year: '2024',
    title: 'Architecture First',
    description:
      'Specializing in Cloud Architecture and Platform Engineering. Leveraging AI and WebGPU for modern experiences.',
  },
];

export const philosophy = {
  heading: ['Built for ', 'Scalability.'],
  description:
    'Design is not just what it looks like and feels like. Design is how it works under high load and adverse conditions.',
  pillars: [
    {
      title: 'Modular by Default',
      description:
        'I believe in atomic design and clean architecture. Every line of code is written with the expectation that it will need to evolve and scale.',
    },
    {
      title: 'Performance Obsession',
      description:
        'Milliseconds matter. From Core Web Vitals to database query optimization, I ensure that performance is a first-class citizen in every build.',
    },
    {
      title: 'User-Centric Logic',
      description:
        'Even the most complex backend system exists to serve a human need. I prioritize accessibility and intuitive workflows in everything I build.',
    },
  ],
};

export const commitToCode = {
  heading: 'Commitment to Code',
  description: 'A visualization of my consistent contribution to open source and proprietary systems.',
};

export const processSteps = [
  {
    step: 'STEP 01',
    title: 'Discovery & Blueprint',
    description:
      'Deep dive into requirements, technical constraints, and competitive landscape. Output: Architecture diagrams and PRD.',
  },
  {
    step: 'STEP 02',
    title: 'Rapid Prototyping',
    description: 'Low-fidelity interaction models and schema validation. We fail fast and iterate quickly at this stage.',
  },
  {
    step: 'STEP 03',
    title: 'Scale Build',
    description: 'Full-stack implementation using robust testing (Unit, E2E) and continuous integration pipelines.',
  },
];

export const playground = [
  {
    tag: '01 / SHADER UI',
    title: 'Audio Visualizer',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAccwKw4aNxd68jOthKV-6DHTbQJx6x73gAgc5IaSl7SCR-RPodSaeBZ61Q19JdnyvW67EnsCXHkfcjz9p4X0EaNh4lLgkx3DH_JPgkmDvDI0NyOqwxZB92flpnCOtN8K7MpceG0GMWu46k-kr3g-WpydZrcbo1W3dEwYb-1vkhRDEVqlDudgxVEnLv4ZQ72meSW_4PjTCt0OqZM_FrTWyQ3yI22-uQlOxkCasRKs66zrgR99dXg8mcQwi_XlRSLYuz0SbA6RNry5c',
  },
  {
    tag: '02 / WEBGL',
    title: 'Crystal Refraction',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqVYjT9zMFccwphzEyR3N4CpnfAcJcQ1h9s-HL-q_bThP0Frb7aGq8cKc2PISL_ESjoxO32B3iFWaG2st5TIANyzlM4QTr-ttcf8P2vCHGrvkm1l-KhX0VxcdOSPeUQNEc9A447hyekugJEsHid7yYRJ9Mw9-3_1IBBQ54C2iBZIRsYmOHgHiS8AMlBZQZ-iLTBOHoVgnNIjIMWY_-nCDTCABqBz_L3aL_bicev4Kla2gfiMG4cvZNJUYLHTKKWiH4XsSRfUH7O-o',
  },
  {
    tag: '03 / PRODUCT',
    title: 'Obsidian Wallet',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSm9IDlAc7ct9vQeB_WhASft7LfD76-tV1Lhjrj-1n-Jbvk-VE8GA2b4xqiIKI2DkWMJf1g2EaFQ4Bj1AP84U7sY_989vVmoiJAX_V6URAnHCELt0rxHylF1LFgKJWnhuXyta_Fc9xWGxrZ6sIxkyhlbVNcvPdrYiLxbW9K9ZDKWv3PgcbyKCe6sGdViD1dmYna6zb5syQmEzFOWQhhUgOn7qBYeMxpzv0SoL06ZBsdQbrGS6lHeY38pt6mVNqpb62sZUhnY_jdLY',
  },
];

export const testimonials = [
  {
    quote:
      "The level of technical detail and product intuition that EMMA_DEV brings to the table is unmatched. He doesn't just build features; He build's experiences that scale.",
    name: 'Victor Ugwu',
    role: 'CEO, K.A.V Textiles',
    image: "/images/testimonials/victor-ugwu.png",
  },
  {
    quote:
      'Rarely do you find a frontend developer who combines exceptional UI craftsmanship with deep expertise in React, Next.js, and modern frontend architecture.',
    name: 'Kingsley Achumie',
    role: 'CEO, Boffins Technology',
    image: "https://www.boffinstechnology.com.ng/images/logo.png",
  },
];

export const faqs = [
  {
    question: 'What is your typical engagement model?',
    answer:
      'I typically work on a project-basis for specialized builds or as a fractional Lead/Senior contributor for teams looking to level up their architecture and frontend excellence.',
  },
  {
    question: 'Do you work with early-stage startups?',
    answer:
      "Yes, I love the 0-to-1 phase. I help startups build scalable MVPs that don't need a complete rewrite when they reach series A.",
  },
];

export const connectCTA = {
  heading: ['Ready to Build ', 'Something Great?'],
  description:
    "Whether it's a high-performance web app, a complex technical integration, or a new venture, let's talk about how I can help.",
};

// The five contact options called for on the homepage Connect section.
export const connectOptions = [
  { label: 'Start a Project', kind: 'route' as const, href: '/contact', icon: 'rocket' as const, primary: true },
  // { label: 'Send an Email', kind: 'external' as const, href: `mailto:${site.email}`, icon: 'mail' as const },
  { label: 'LinkedIn', kind: 'external' as const, href: 'https://www.linkedin.com/in/chukwuma-emmanuel-53386236b/', icon: 'linkedin' as const },
  { label: 'GitHub', kind: 'external' as const, href: 'https://github.com/Chukwwumaemmannuel233', icon: 'github' as const },
  { label: 'Read.cv', kind: 'external' as const, href: site.resumeHref, icon: 'download' as const },
];

export const footerLinks = ['GitHub', 'LinkedIn', 'Read.cv', 'Source'];

// ---- Contact / Start a Project page ----

export const contactPage = {
  badge: 'Availability: Open for Q3 2024',
  heading: ["Let's build ", 'something ', 'exceptional', ' together.'],
  description:
    'My approach begins with deep discovery. We start with a focused call to align on goals, followed by a rigorous technical blueprint covering architecture, scale, and performance.',
  waysToConnect: [
    { label: `${site.email}`, icon: 'at-sign' as const, href: `mailto:${site.email}` },
    { label: 'LinkedIn Profile', icon: 'share' as const, href: '#' },
    { label: 'GitHub Repositories', icon: 'code' as const, href: '#' },
  ],
  respondCopy: 'I usually respond within 24–48 business hours.',
  blueprints: {
    heading: 'Previous Blueprints',
    description: 'Peek into the depth of technical planning provided to every client.',
    code: `const architecture = {
    layers: ["Infrastructure", "Data Store", "Auth Service", "Core API"],
    scalability: "Horizontal pod autoscaling via K8s",
    caching: "Redis Global Strategy",
    deployment: "Blue-Green CI/CD Pipeline"
};

function analyzeLatency() {
    // High-performance analysis script
    return metrics.map(m => m.p99 < 100);
}`,
  },
  scalability: {
    heading: 'Guaranteed Scalability',
    description: 'Every project is built on the foundations of production-grade engineering.',
  },
};

export const projectTypeOptions = [
  { value: 'web-app', label: 'Web Application' },
  { value: 'mobile-app', label: 'Mobile Application' },
  { value: 'ai-integration', label: 'AI Integration' },
  { value: 'system-architecture', label: 'System Architecture' },
  { value: 'other', label: 'Other Technical Need' },
];

export const budgetOptions = [
  { value: '10-25k', label: '$10k – $25k' },
  { value: '25-50k', label: '$25k – $50k' },
  { value: '50-100k', label: '$50k – $100k' },
  { value: '100k+', label: '$100k+' },
];

export const timelineOptions = [
  { value: '1-2-months', label: '1-2 Months' },
  { value: '3-6-months', label: '3-6 Months' },
  { value: 'ongoing', label: 'Ongoing Partnership' },
];
