export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  client: string;
  year: string;
  services: string[];
  url: string;
}

export const projects: Project[] = [
  {
    id: 'solaris-fintech',
    title: 'Solaris Fintech',
    category: 'Brand Strategy • Growth',
    description: 'Redefining digital banking for the next generation of investors.',
    fullDescription: 'Solaris Fintech approached us with a challenge: their existing brand felt clinical and disconnected from the younger demographic they were targeting. We completely overhauled their visual identity, focusing on a "Human-First Finance" narrative. By simplifying the user journey and implementing a more vibrant yet professional color palette, we helped them achieve a 40% increase in mobile app registrations within the first quarter.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2389&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2340&auto=format&fit=crop'
    ],
    client: 'Solaris Group',
    year: '2026',
    services: ['Strategic Consulting', 'Brand Identity', 'UI/UX Design', 'Performance Marketing'],
    url: 'https://example.com/solaris'
  },
  {
    id: 'nova-healthcare',
    title: 'Nova Healthcare',
    category: 'Market Intelligence',
    description: 'Using data to illuminate the future of digital health diagnostics.',
    fullDescription: 'Nova Healthcare is at the forefront of AI-driven diagnostics. Our role was to translate their complex technical capabilities into a digestible market narrative. We conducted extensive market analysis to identify key whitespace opportunities, leading to a pivot in their B2B messaging that secured their Series C funding.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512418490979-92798ccc1380?q=80&w=2340&auto=format&fit=crop'
    ],
    client: 'Nova Systems',
    year: '2025',
    services: ['Market Intelligence', 'Competitive Analysis', 'Strategic Roadmapping'],
    url: 'https://example.com/nova'
  },
  {
    id: 'aero-logistics',
    title: 'Aero Logistics',
    category: 'Digital Transformation',
    description: 'Transforming global logistics through precision tracking and AI.',
    fullDescription: 'Global logistics is a game of centimeters and seconds. Aero Logistics needed a digital transformation that reflected their precision. We built a comprehensive digital ecosystem that allowed their clients to visualize supply chain data in real-time, reducing customer churn by 15%.',
    image: 'https://images.unsplash.com/photo-1512418490979-92798ccc1380?q=80&w=2340&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2389&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop'
    ],
    client: 'Aero Global',
    year: '2026',
    services: ['Digital Strategy', 'Product Design', 'Analytics Integration'],
    url: 'https://example.com/aero'
  },
  {
    id: 'echo-commerce',
    title: 'Echo Commerce',
    category: 'E-commerce Optimization',
    description: 'Scaling independent retailers to global marketplaces.',
    fullDescription: 'Echo Commerce helps niche retailers scale. We implemented a data-driven optimization strategy for their core platform, focusing on personalized headless commerce experiences that increased average order value by 22%.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2389&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512418490979-92798ccc1380?q=80&w=2340&auto=format&fit=crop'
    ],
    client: 'Echo Direct',
    year: '2025',
    services: ['E-commerce Strategy', 'Conversion Optimization', 'Growth Hacking'],
    url: 'https://example.com/echo'
  }
];
