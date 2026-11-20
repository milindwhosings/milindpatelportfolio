export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  tilt: number;
  shape: 'circle' | 'square' | 'triangle' | 'diamond';
  bannerFrom: string;
  bannerTo: string;
  wireframeColors: [string, string];
  filterCategory: string;
}

export interface ArchivePoster {
  id: string;
  title: string;
  category: string;
  year: string;
  tools: string;
  description: string;
  speed: number;
  positionClass: string;
  aspectClass: string;
  variant:
    | 'solar-catalogue'
    | 'paaji-instagram'
    | 'agriflow-ui'
    | 'poetry-reel'
    | 'offer-sheet'
    | 'acoustic-gig'
    | 'monograph-type';
}

export interface FolderItem {
  id: string;
  label: string;
  count: string;
  speed: number;
  tilt: number;
  positionClass: string;
  targetCategory: string;
}

export interface ToolkitItem {
  id: string;
  name: string;
  caption: string;
  bg: string;
  accent: string;
  tilt: number;
  initialOffset: { x: number; y: number };
  iconType:
    | 'canva'
    | 'htmlcss'
    | 'clang'
    | 'excel'
    | 'layout'
    | 'reels'
    | 'guitar'
    | 'vocals';
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  client: string;
  year: string;
  role: string;
  tools: string[];
  summary: string;
  challenge: string;
  execution: string;
  outcomes: string[];
  mockupVariant:
    | 'agriflow-web'
    | 'agriflow-multilang'
    | 'sunlight-portal'
    | 'vinyl-portfolio'
    | 'solar-catalogue'
    | 'commercial-offers'
    | 'campus-posters'
    | 'paaji-reels'
    | 'academic-carousel'
    | 'poetry-reels'
    | 'campus-ensemble'
    | 'original-songs'
    | 'acoustic-mixes';
}

export const PROFILE = {
  fullName: 'Milind Patel',
  firstName: 'MILIND',
  displayFirstName: 'Milind',
  roleTitle: 'Creative Designer, Marketer & CS Engineer',
  heroTaglineLine1: 'I Design to Get Noticed.',
  heroTaglineLine2: 'And Build to Be Chosen.',
  aboutStatement:
    'I’m a Computer Science student, digital designer, and acoustic musician bridging structured engineering with visual storytelling—crafting brand catalogues, high-retention social reels, and multilingual web prototypes built to connect.',
  email: 'milind.patel1648@gmail.com',
  phone: '+91 92270 30311',
  linkedinUrl: 'https://www.linkedin.com/in/milind-patel-343bb0406',
  linkedinHandle: 'linkedin.com/in/milind-patel-343bb0406',
  city: 'Ahmedabad, Gujarat',
  university: 'B.Tech CSE (Core) · Karnavati University, Gandhinagar',
  portraitPath: '/assets/aistudio/WhatsApp_Image_2026-11-20_at_6.28.57_PM_704d1be2.jpeg',
  languages: ['English', 'Hindi', 'Gujarati'],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'service-1',
    title: 'Digital Layout & Print Design',
    subtitle: 'Product catalogues, commercial offer sheets & visual brochures',
    tilt: -4,
    shape: 'circle',
    bannerFrom: '#0044CC',
    bannerTo: '#00B2FF',
    wireframeColors: ['#00B2FF', '#0044CC'],
    filterCategory: 'Catalogues & Print Design',
  },
  {
    id: 'service-2',
    title: 'Web Prototyping & UI Design',
    subtitle: 'HTML/CSS interfaces, C logic & multi-language accessibility',
    tilt: 2,
    shape: 'square',
    bannerFrom: '#00A86B',
    bannerTo: '#00C2CB',
    wireframeColors: ['#00C2CB', '#00A86B'],
    filterCategory: 'Web & Hackathon Projects',
  },
  {
    id: 'service-3',
    title: 'Social Media & Reel Editing',
    subtitle: 'Educational carousels, short-form video reels & channel growth',
    tilt: -3,
    shape: 'triangle',
    bannerFrom: '#FF007F',
    bannerTo: '#FF5E3A',
    wireframeColors: ['#FF007F', '#FF5E3A'],
    filterCategory: 'Social Media & Reels',
  },
  {
    id: 'service-4',
    title: 'Music, Vocals & Audio-Visual',
    subtitle: 'Acoustic guitar, live vocals, Hindi & Gujarati poetry reels',
    tilt: 3,
    shape: 'diamond',
    bannerFrom: '#FFE600',
    bannerTo: '#FF5500',
    wireframeColors: ['#FFE600', '#FF5500'],
    filterCategory: 'Music & Audio-Visual',
  },
];

export const ARCHIVE_POSTERS: ArchivePoster[] = [
  {
    id: 'poster-1',
    title: 'Sunlight Infra — Solar On-Grid Catalogue',
    category: 'Commercial Brochure',
    year: '2026',
    tools: 'Canva · Digital Layout · MS Excel',
    description:
      'Structured residential and commercial solar on-grid energy catalogue turning technical kW specs and pricing tables into clean, client-ready spreads.',
    speed: 1.15,
    positionClass: 'md:col-start-1 md:col-span-5 md:mt-8',
    aspectClass: 'aspect-[4/5]',
    variant: 'solar-catalogue',
  },
  {
    id: 'poster-2',
    title: 'Paaji Ki Kaksha — Educational Reel Series',
    category: 'Social Media Frame',
    year: '2026',
    tools: 'Video Editing · Canva · Content Strategy',
    description:
      'Instagram educational post and reel frame crafted to boost student engagement, retention, and organic reach across academic themes.',
    speed: 0.88,
    positionClass: 'md:col-start-8 md:col-span-4 md:mt-24',
    aspectClass: 'aspect-[4/5]',
    variant: 'paaji-instagram',
  },
  {
    id: 'poster-3',
    title: 'AgriFlow — Live Queue & Slot Booking',
    category: 'Hackathon Prototype',
    year: '2026',
    tools: 'HTML/CSS · Multi-Language UI',
    description:
      'First-semester B.Tech engineering hackathon prototype streamlining agricultural procurement with localized English, Hindi, and Gujarati interfaces.',
    speed: 1.32,
    positionClass: 'md:col-start-7 md:col-span-5 md:mt-16',
    aspectClass: 'aspect-[16/11]',
    variant: 'agriflow-ui',
  },
  {
    id: 'poster-4',
    title: 'Shaam-e-Sukoon — Poetry & Acoustic Reel',
    category: 'Audio-Visual Art',
    year: '2026',
    tools: 'Vocals · Acoustic Guitar · Reel Edit',
    description:
      'Minimalist visual sleeve for original Hindi and Gujarati poetry paired with live fingerstyle acoustic guitar accompaniment.',
    speed: 0.94,
    positionClass: 'md:col-start-2 md:col-span-5 md:-mt-10',
    aspectClass: 'aspect-[4/5]',
    variant: 'poetry-reel',
  },
  {
    id: 'poster-5',
    title: 'Residential Solar Commercial Offer Sheet',
    category: 'Pricing & Layout',
    year: '2026',
    tools: 'Digital Layout · MS Excel',
    description:
      'Customer-friendly commercial proposal layout organizing inverter ratings, subsidy slabs, and ROI projections at a glance.',
    speed: 1.24,
    positionClass: 'md:col-start-8 md:col-span-4 md:mt-10',
    aspectClass: 'aspect-[3/4]',
    variant: 'offer-sheet',
  },
  {
    id: 'poster-6',
    title: 'Karnavati Campus Ensemble — Live Session',
    category: 'Event Poster',
    year: '2026',
    tools: 'Canva · Typography · Live Music',
    description:
      'Editorial poster identity for campus acoustic evenings featuring live vocals, rhythm guitar, and collaborative student sets.',
    speed: 1.05,
    positionClass: 'md:col-start-4 md:col-span-4 md:mt-12',
    aspectClass: 'aspect-[4/5]',
    variant: 'acoustic-gig',
  },
  {
    id: 'poster-7',
    title: 'Trilingual Typography Specimen (EN / HI / GU)',
    category: 'UI Accessibility Study',
    year: '2026',
    tools: 'HTML/CSS · Type Hierarchy',
    description:
      'Cross-script typographic balance study ensuring regional farmers and mandi operators read booking alerts effortlessly across three languages.',
    speed: 1.38,
    positionClass: 'md:col-start-8 md:col-span-5 md:-mt-6',
    aspectClass: 'aspect-[16/10]',
    variant: 'monograph-type',
  },
];

export const FOLDERS: FolderItem[] = [
  {
    id: 'folder-1',
    label: 'Brochures & Solar',
    count: '03 Projects',
    speed: 1.45,
    tilt: -8,
    positionClass: 'md:col-start-6 md:col-span-2 md:mt-16',
    targetCategory: 'Catalogues & Print Design',
  },
  {
    id: 'folder-2',
    label: 'Reels & Social',
    count: '03 Projects',
    speed: 0.85,
    tilt: 7,
    positionClass: 'md:col-start-2 md:col-span-2 md:mt-20',
    targetCategory: 'Social Media & Reels',
  },
  {
    id: 'folder-3',
    label: 'Code & Audio',
    count: '07 Projects',
    speed: 1.3,
    tilt: -6,
    positionClass: 'md:col-start-9 md:col-span-2 md:mt-20',
    targetCategory: 'Web & Hackathon Projects',
  },
];

export const TOOLKIT_ITEMS: ToolkitItem[] = [
  {
    id: 'tool-canva',
    name: 'Canva',
    caption: 'Catalogues & Posts',
    bg: '#E8F7FA',
    accent: '#00C4CC',
    tilt: -7,
    initialOffset: { x: 0, y: 0 },
    iconType: 'canva',
  },
  {
    id: 'tool-html',
    name: 'HTML5 & CSS3',
    caption: 'Responsive UI',
    bg: '#FFF0E6',
    accent: '#FF6B00',
    tilt: 5,
    initialOffset: { x: 0, y: 14 },
    iconType: 'htmlcss',
  },
  {
    id: 'tool-c',
    name: 'C Programming',
    caption: 'Core Logic & CSE',
    bg: '#EAF0FF',
    accent: '#2563EB',
    tilt: -4,
    initialOffset: { x: 0, y: -8 },
    iconType: 'clang',
  },
  {
    id: 'tool-excel',
    name: 'MS Excel',
    caption: 'Pricing & Specs',
    bg: '#E8F7EE',
    accent: '#15803D',
    tilt: 6,
    initialOffset: { x: 0, y: 10 },
    iconType: 'excel',
  },
  {
    id: 'tool-layout',
    name: 'Digital Layout',
    caption: 'Offer Sheets',
    bg: '#F5ECE2',
    accent: '#3D230A',
    tilt: -5,
    initialOffset: { x: 0, y: 16 },
    iconType: 'layout',
  },
  {
    id: 'tool-reels',
    name: 'Video & Reels',
    caption: 'Social Storytelling',
    bg: '#FCE8F3',
    accent: '#DB2777',
    tilt: 4,
    initialOffset: { x: 0, y: -6 },
    iconType: 'reels',
  },
  {
    id: 'tool-guitar',
    name: 'Acoustic Guitar',
    caption: 'Live Ensembles',
    bg: '#FFF7E0',
    accent: '#D97706',
    tilt: -6,
    initialOffset: { x: 0, y: 8 },
    iconType: 'guitar',
  },
  {
    id: 'tool-vocals',
    name: 'Lead Vocals',
    caption: 'Poetry & Originals',
    bg: '#F3E8FF',
    accent: '#7C3AED',
    tilt: 7,
    initialOffset: { x: 0, y: -12 },
    iconType: 'vocals',
  },
];

export const PROJECT_CATEGORIES = [
  'Web & Hackathon Projects',
  'Catalogues & Print Design',
  'Social Media & Reels',
  'Music & Audio-Visual',
] as const;

export const CASE_STUDIES: CaseStudy[] = [
  // Category 1: Web & Hackathon Projects (4 cards)
  {
    id: 'cs-agriflow-web',
    category: 'Web & Hackathon Projects',
    title: 'AgriFlow — Agricultural Procurement Web App',
    client: 'Karnavati University Hackathon',
    year: '2026',
    role: 'Web Prototype Developer & UI Designer',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Slot Queue Logic'],
    summary:
      'Built and pitched a functional agricultural procurement web prototype featuring time-slot booking and live queue tracking to eliminate mandi congestion.',
    challenge:
      'Farmers frequently face unpredictable wait times at procurement centers due to manual paper tokens and lack of real-time queue visibility.',
    execution:
      'Designed a clean, high-contrast booking flow where farmers reserve unloading slots in advance and track live token movement from mobile browsers.',
    outcomes: [
      'Delivered and pitched a working prototype during a 1st-semester B.Tech engineering hackathon.',
      'Simplified 5-step paper registration into a 3-tap digital slot confirmation flow.',
      'Engineered responsive layouts tested across low-bandwidth mobile viewports.',
    ],
    mockupVariant: 'agriflow-web',
  },
  {
    id: 'cs-agriflow-multilang',
    category: 'Web & Hackathon Projects',
    title: 'Multi-Language Accessibility Module (EN / HI / GU)',
    client: 'AgriFlow Platform',
    year: '2026',
    role: 'Localization & Frontend Architect',
    tools: ['HTML/CSS', 'Unicode Script Layout', 'UI Systems'],
    summary:
      'Implemented instant trilingual switching across English, Hindi, and Gujarati inside AgriFlow so regional farmers and operators navigate comfortably.',
    challenge:
      'English-only civic interfaces exclude rural stakeholders; Devanagari and Gujarati scripts also require careful line-height and button-width accommodation.',
    execution:
      'Constructed a structured language dictionary and fluid typographic containers that preserve clean alignment without clipping across all three scripts.',
    outcomes: [
      'Enabled seamless instant switching between English, Hindi, and Gujarati interfaces.',
      'Maintained 100% layout integrity across Devanagari and Gujarati vowel marks.',
      'Highlighted as the standout usability differentiator during hackathon judging.',
    ],
    mockupVariant: 'agriflow-multilang',
  },
  {
    id: 'cs-sunlight-portal',
    category: 'Web & Hackathon Projects',
    title: 'Solar On-Grid Spec & ROI Matrix',
    client: 'Sunlight Infra Energy Pvt. Ltd.',
    year: '2026',
    role: 'Marketing & Digital Layout Contributor',
    tools: ['MS Excel', 'HTML/CSS', 'Pricing Architecture'],
    summary:
      'Translated complex kW capacities, inverter specifications, and tiered residential/commercial pricing into structured digital-first offer breakdowns.',
    challenge:
      'Prospective solar clients struggled to compare 3kW–50kW on-grid configurations when technical datasheets were scattered across dense spreadsheets.',
    execution:
      'Standardized spec sheets into modular comparison matrices pairing technical efficiency numbers with clear payback timelines.',
    outcomes: [
      'Streamlined client outreach conversations for residential and commercial sales teams.',
      'Reduced quotation formatting turnaround with reusable Excel-to-layout templates.',
    ],
    mockupVariant: 'sunlight-portal',
  },
  {
    id: 'cs-vinyl-portfolio',
    category: 'Web & Hackathon Projects',
    title: 'Interactive Editorial & Vinyl Portfolio System',
    client: 'Personal Brand · Ahmedabad',
    year: '2026',
    role: 'Designer & Frontend Developer',
    tools: ['React', 'Tailwind CSS', 'GSAP ScrollTrigger', 'SVG Craft'],
    summary:
      'Designed a multi-sensory portfolio unifying CS engineering, commercial layout work, and acoustic vinyl identity with smooth scroll physics.',
    challenge:
      'Unite technical engineering, brand marketing, and live music into a single cohesive visual narrative without feeling fragmented.',
    execution:
      'Built custom parallax vinyl records, draggable toolkit Polaroids, and interactive case-study drawers anchored by bold geometric typography.',
    outcomes: [
      'Crafted 100% custom vector artwork and tactile micro-interactions.',
      'Structured clear category filtering across engineering, print, social, and music.',
    ],
    mockupVariant: 'vinyl-portfolio',
  },

  // Category 2: Catalogues & Print Design (3 cards)
  {
    id: 'cs-solar-catalogue',
    category: 'Catalogues & Print Design',
    title: 'Solar On-Grid Systems Product Catalogue',
    client: 'Sunlight Infra Energy Pvt. Ltd.',
    year: 'Mar – Apr 2026',
    role: 'Marketing & Design Contributor',
    tools: ['Canva', 'Digital Layout Design', 'Brand Hierarchy'],
    summary:
      'Designed promotional marketing catalogues showcasing residential and commercial solar on-grid systems with crisp technical clarity.',
    challenge:
      'Industrial energy brochures often feel overly dense or visually dated, hurting first impressions during B2B and homeowner pitches.',
    execution:
      'Established clean grid margins, bold energy-focused color accents, and scannable component callouts for panels, inverters, and mounting structures.',
    outcomes: [
      'Delivered print- and WhatsApp-ready product catalogues for field sales teams.',
      'Elevated visual consistency across residential and commercial product lines.',
    ],
    mockupVariant: 'solar-catalogue',
  },
  {
    id: 'cs-commercial-offers',
    category: 'Catalogues & Print Design',
    title: 'Commercial Offer Sheets & Pricing Breakdowns',
    client: 'Sunlight Infra Energy Pvt. Ltd.',
    year: '2026',
    role: 'Layout & Pricing Designer',
    tools: ['Digital Layout', 'MS Excel', 'Typography'],
    summary:
      'Organized technical specifications, warranty terms, and itemized pricing breakdowns into clear, customer-friendly commercial offer documents.',
    challenge:
      'Decision-makers needed transparent cost-per-watt breakdowns and subsidy clarity on a single clean page before approving installations.',
    execution:
      'Built a modular two-column quotation template separating executive summary metrics from itemized bill-of-materials tables.',
    outcomes: [
      'Improved readability of multi-tier pricing proposals for commercial clients.',
      'Created a repeatable template adopted for rapid client outreach.',
    ],
    mockupVariant: 'commercial-offers',
  },
  {
    id: 'cs-campus-posters',
    category: 'Catalogues & Print Design',
    title: 'Campus Ensemble & Acoustic Night Posters',
    client: 'Karnavati University Cultural Events',
    year: '2026',
    role: 'Poster Designer & Performer',
    tools: ['Canva', 'Editorial Typography', 'Print Spec'],
    summary:
      'Series of high-contrast print and digital posters promoting live acoustic nights, songwriting showcases, and campus music ensembles.',
    challenge:
      'Capture the warmth and intimacy of live acoustic music so student audiences stop scrolling and show up in person.',
    execution:
      'Paired bold condensed display type with vinyl and acoustic motifs, balanced negative space, and clear venue/time hierarchy.',
    outcomes: [
      'Shared across campus notice boards and student community channels.',
      'Set a recognizable visual tone for live acoustic gatherings.',
    ],
    mockupVariant: 'campus-posters',
  },

  // Category 3: Social Media & Reels (3 cards)
  {
    id: 'cs-paaji-reels',
    category: 'Social Media & Reels',
    title: 'Paaji Ki Kaksha — Social Channel & Video Reels',
    client: 'Paaji Ki Kaksha, Ahmedabad',
    year: '2026',
    role: 'Social Media Manager & Video Editor',
    tools: ['Reel Editing', 'Canva', 'Content Scheduling'],
    summary:
      'Managed end-to-end social media channels and edited dynamic educational video reels and graphic posts to grow student engagement.',
    challenge:
      'Educational content often struggles to hold attention in fast-paced short-form feeds without losing academic clarity.',
    execution:
      'Edited punchy hook-driven video reels with clean kinetic captions, consistent visual branding, and scheduled release calendars aligned with academic themes.',
    outcomes: [
      'Boosted student engagement and brand visibility across Ahmedabad learner communities.',
      'Maintained consistent weekly publishing cadence across posts, reels, and captions.',
    ],
    mockupVariant: 'paaji-reels',
  },
  {
    id: 'cs-academic-carousel',
    category: 'Social Media & Reels',
    title: 'Academic Theme Carousel & Post System',
    client: 'Paaji Ki Kaksha, Ahmedabad',
    year: '2026',
    role: 'Graphic Designer & Content Strategist',
    tools: ['Canva', 'Layout Systems', 'Copywriting'],
    summary:
      'Built modular Instagram carousel templates translating academic concepts and announcements into save-worthy visual slides.',
    challenge:
      'Needed a fast, repeatable design system capable of turning dense study notes into crisp 5–7 slide carousels.',
    execution:
      'Designed color-coded cover hooks, numbered insight cards, and clear CTA end-slides tailored for student saves and shares.',
    outcomes: [
      'Cut graphic turnaround time while keeping feed aesthetics cohesive.',
      'Increased shareability of exam tips and classroom updates.',
    ],
    mockupVariant: 'academic-carousel',
  },
  {
    id: 'cs-poetry-reels',
    category: 'Social Media & Reels',
    title: 'Hindi & Gujarati Poetry Audio-Visual Reels',
    client: 'Independent Creator Series',
    year: '2026',
    role: 'Writer, Vocalist & Video Editor',
    tools: ['Acoustic Audio', 'Reel Editing', 'Bilingual Typography'],
    summary:
      'Produced original audio-visual music and poetry reels blending spoken Hindi/Gujarati verse with acoustic guitar melodies for digital audiences.',
    challenge:
      'Translate intimate stage poetry and acoustic music into a vertical mobile format that feels soulful rather than over-produced.',
    execution:
      'Combined warm color grading, synchronized lyric subtitles, and clean acoustic mic takes for high-retention storytelling.',
    outcomes: [
      'Built an authentic creative bridge between original songwriting and digital storytelling.',
      'Expanded audience engagement across bilingual regional listeners.',
    ],
    mockupVariant: 'poetry-reels',
  },

  // Category 4: Music & Audio-Visual (3 cards)
  {
    id: 'cs-campus-ensemble',
    category: 'Music & Audio-Visual',
    title: 'Live Acoustic Vocals & Campus Ensembles',
    client: 'Karnavati University & Ahmedabad Events',
    year: '2025 – 2026',
    role: 'Professional Vocalist & Rhythm Guitarist',
    tools: ['Acoustic Guitar', 'Lead Vocals', 'Stage Coordination'],
    summary:
      'Performed live acoustic vocals and guitar sets as a featured artist and band member across campus ensembles and local Ahmedabad events.',
    challenge:
      'Command live outdoor and auditorium stages while coordinating multi-instrument arrangements with fellow student musicians.',
    execution:
      'Curated dynamic setlists blending soulful acoustic ballads with high-energy crowd favorites, handling vocal harmonies and rhythm guitar.',
    outcomes: [
      'Performed across multiple university cultural nights and local live venues.',
      'Strengthened stage presence, public speaking, and ensemble leadership.',
    ],
    mockupVariant: 'campus-ensemble',
  },
  {
    id: 'cs-original-songs',
    category: 'Music & Audio-Visual',
    title: 'Original Songwriting & Bilingual Lyricism',
    client: 'Original Compositions',
    year: '2026',
    role: 'Songwriter, Composer & Vocalist',
    tools: ['Guitar Composition', 'Hindi & Gujarati Poetry', 'Arrangement'],
    summary:
      'Composed original acoustic songs rooted in contemporary Hindi and Gujarati poetry, pairing narrative lyrics with warm chord progressions.',
    challenge:
      'Balance poetic depth in regional languages with memorable melodic hooks that resonate with modern college and digital audiences.',
    execution:
      'Drafted rhythmic verse structures, tested melodies on acoustic guitar, and refined arrangements through live feedback.',
    outcomes: [
      'Built an original repertoire spanning Hindi and Gujarati acoustic compositions.',
      'Featured original pieces within digital audio-visual reel releases.',
    ],
    mockupVariant: 'original-songs',
  },
  {
    id: 'cs-acoustic-mixes',
    category: 'Music & Audio-Visual',
    title: 'Audio-Visual Live Session Production',
    client: 'Digital Music Showcase',
    year: '2026',
    role: 'Producer, Editor & Artist',
    tools: ['Audio Sync', 'Video Editing', 'Visual Direction'],
    summary:
      'Directed and edited stripped-down live acoustic session videos uniting warm visual framing with clean vocal-guitar balance.',
    challenge:
      'Deliver studio-like intimacy in DIY acoustic video shoots without losing the raw emotion of a single live take.',
    execution:
      'Paired careful acoustic room placement with crisp cutaways, rhythmic pacing, and minimal typographic title cards.',
    outcomes: [
      'Published cohesive audio-visual sessions tailored for Instagram and portfolio reels.',
      'Demonstrated dual fluency in creative direction and musical performance.',
    ],
    mockupVariant: 'acoustic-mixes',
  },
];

export const RESUME_DETAILS = {
  education: [
    {
      degree: 'B.Tech, Computer Science & Engineering (Core)',
      school: 'Karnavati University, Gandhinagar',
      period: 'Expected 2030',
      detail: 'First-year CSE student combining algorithmic foundations with creative design.',
    },
    {
      degree: 'Senior Secondary Education (CBSE) — Science (PCM)',
      school: 'Nirman High School, Ahmedabad',
      period: 'May 2026',
      detail: 'Class XII: 65%',
    },
    {
      degree: 'Secondary Education (CBSE)',
      school: 'Kalorex Future School, Ahmedabad',
      period: 'May 2024',
      detail: 'Class X: 78%',
    },
  ],
  experience: [
    {
      role: 'Social Media Manager & Editor',
      org: 'Paaji Ki Kaksha, Ahmedabad',
      period: '2026',
      bullets: [
        'Managed social media channels and edited video and graphic content to boost student engagement and brand visibility.',
        'Created and scheduled educational posts, reels, and captions aligned with academic themes.',
      ],
    },
    {
      role: 'Marketing & Design Contributor',
      org: 'Sunlight Infra Energy Pvt. Ltd., Ahmedabad',
      period: 'Mar 2026 – Apr 2026',
      bullets: [
        'Designed promotional marketing catalogues and commercial offer sheets for residential and commercial solar on-grid systems.',
        'Organized technical specifications and pricing breakdowns into clear, customer-friendly layouts.',
      ],
    },
  ],
  accomplishments: [
    'Built and pitched a functional multi-language web prototype (AgriFlow) at a first-semester B.Tech engineering hackathon at Karnavati University.',
    'Performed acoustic vocals and guitar as a live musical artist and band member across campus ensembles and local events.',
    'Wrote original songs alongside Hindi and Gujarati poetry, producing audio-visual music reels for digital audiences.',
  ],
};
