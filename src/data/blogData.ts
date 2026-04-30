export interface LogEntry {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
}

export const dataLogs: LogEntry[] = [
  {
    id: "LOG_001",
    title: "The Hierarchy of AI Knowledge: Evolution in 2024",
    summary: "Exploring the difference between knowledge discovery and generative AI. How models are changing product management problem-solving.",
    date: "2024.05.10",
    category: "ARTIFICIAL_INTELLIGENCE"
  },
  {
    id: "LOG_002",
    title: "Architecting a Real-Money Gaming Platform (AAG App)",
    summary: "A deep dive into the design choices behind a multi-game ecosystem and secure payment wallet integration.",
    date: "2024.04.15",
    category: "PLATFORM_ARCHITECTURE"
  },
  {
    id: "LOG_003",
    title: "Streamlining Healthcare Operations: A 45% More Efficient HMS",
    summary: "Mapping user journeys in hospitals to achieve a breakthrough in Hospital Management Systems. Lessons learned from reducing operational costs.",
    date: "2024.03.20",
    category: "PRODUCT_MANAGEMENT"
  },
  {
    id: "LOG_004",
    title: "AI-Driven Backlog Grooming",
    summary: "How LLMs are automating feature prioritization and helping teams focus on high-impact user stories.",
    date: "2024.06.01",
    category: "PRODUCT_STRATEGY"
  },
  {
    id: "LOG_005",
    title: "Metrics That Matter in 2026",
    summary: "Moving beyond DAU/MAU to measure true user engagement and product-market fit.",
    date: "2024.06.15",
    category: "ANALYTICS"
  },
  {
    id: "LOG_006",
    title: "The Rise of No-Code MVPs",
    summary: "Validating product-market fit without engineering resources using modern no-code stacks.",
    date: "2024.07.02",
    category: "INNOVATION"
  },
  {
    id: "LOG_007",
    title: "Gamification in Non-Gaming Apps",
    summary: "Driving retention through behavioral psychology, leaderboards, and meaningful rewards.",
    date: "2024.07.20",
    category: "UX_DESIGN"
  },
  {
    id: "LOG_008",
    title: "Product Strategy in the Age of Generative AI",
    summary: "Adapting roadmaps to exponential tech curves and avoiding the 'AI-wrapper' trap.",
    date: "2024.08.05",
    category: "ARTIFICIAL_INTELLIGENCE"
  },
  {
    id: "LOG_009",
    title: "Cross-Functional Empathy",
    summary: "The secret weapon of elite Product Managers in aligning engineering, design, and sales.",
    date: "2024.08.22",
    category: "LEADERSHIP"
  },
  {
    id: "LOG_010",
    title: "Continuous Discovery Habits",
    summary: "Building products *with* users, not just *for* them, through weekly touchpoints.",
    date: "2024.09.10",
    category: "USER_RESEARCH"
  },
  {
    id: "LOG_011",
    title: "The Fall of the Feature Factory",
    summary: "Shifting from output-focused to outcome-focused product teams.",
    date: "2024.09.28",
    category: "PRODUCT_MANAGEMENT"
  },
  {
    id: "LOG_012",
    title: "Rethinking User Onboarding",
    summary: "Optimizing the first 5 minutes of a user's journey to drastically reduce churn.",
    date: "2024.10.12",
    category: "GROWTH"
  },
  {
    id: "LOG_013",
    title: "Designing for Scale",
    summary: "Microservices vs Monoliths from a Product Manager's strategic perspective.",
    date: "2024.10.30",
    category: "PLATFORM_ARCHITECTURE"
  },
  {
    id: "LOG_014",
    title: "Ethical AI in Product Design",
    summary: "Navigating algorithmic bias, transparency, and user trust in intelligent systems.",
    date: "2024.11.15",
    category: "ARTIFICIAL_INTELLIGENCE"
  },
  {
    id: "LOG_015",
    title: "The Art of the 'No'",
    summary: "How to say no to stakeholder feature requests without burning bridges.",
    date: "2024.12.02",
    category: "LEADERSHIP"
  },
  {
    id: "LOG_016",
    title: "Product Led Growth (PLG) in B2B SaaS",
    summary: "Why traditional enterprise sales motions are being replaced by self-serve product loops.",
    date: "2024.12.18",
    category: "GROWTH"
  },
  {
    id: "LOG_017",
    title: "Managing Tech Debt",
    summary: "A Product Manager's guide to balancing technical tradeoffs with feature velocity.",
    date: "2025.01.05",
    category: "ENGINEERING"
  },
  {
    id: "LOG_018",
    title: "Voice UI and Conversational Commerce",
    summary: "Preparing for the next frontier of human-computer interaction.",
    date: "2025.01.20",
    category: "UX_DESIGN"
  },
  {
    id: "LOG_019",
    title: "Building for Accessibility",
    summary: "Why inclusive design is not just a compliance checkbox, but a competitive advantage.",
    date: "2025.02.08",
    category: "PRODUCT_MANAGEMENT"
  },
  {
    id: "LOG_020",
    title: "Pricing Strategies in a Subscription Economy",
    summary: "How to find the optimal price point and package features for maximum ARR.",
    date: "2025.02.25",
    category: "BUSINESS_STRATEGY"
  },
  {
    id: "LOG_021",
    title: "Hardware vs Software PM",
    summary: "Bridging the physical and digital gap in IoT and consumer electronics.",
    date: "2025.03.12",
    category: "PRODUCT_STRATEGY"
  },
  {
    id: "LOG_022",
    title: "The Role of Product Ops",
    summary: "Scaling product organizations through standardized tools, data, and processes.",
    date: "2025.03.28",
    category: "OPERATIONS"
  },
  {
    id: "LOG_023",
    title: "Fintech Innovations: Embedded Finance",
    summary: "How non-financial products are monetizing through embedded payments and lending.",
    date: "2025.04.14",
    category: "FINTECH"
  },
  {
    id: "LOG_024",
    title: "Zero to One: Navigating Chaos",
    summary: "The unique skillset required to launch a V1 product versus optimizing a mature one.",
    date: "2025.05.02",
    category: "INNOVATION"
  },
  {
    id: "LOG_025",
    title: "Data Privacy as a Feature",
    summary: "Building trust and competitive moats in the age of GDPR, CCPA, and AI scraping.",
    date: "2025.05.18",
    category: "SECURITY"
  },
  {
    id: "LOG_026",
    title: "Platform Product Management",
    summary: "The unique challenges of building APIs and SDKs for other developers.",
    date: "2025.06.05",
    category: "PLATFORM_ARCHITECTURE"
  },
  {
    id: "LOG_027",
    title: "The Psychology of Pricing Tiers",
    summary: "Anchoring, decoy effects, and how to effectively position your SaaS plans.",
    date: "2025.06.22",
    category: "BUSINESS_STRATEGY"
  },
  {
    id: "LOG_028",
    title: "Managing Remote Product Teams",
    summary: "Fostering asynchronous communication and async decision-making.",
    date: "2025.07.10",
    category: "LEADERSHIP"
  },
  {
    id: "LOG_029",
    title: "A/B Testing Pitfalls",
    summary: "Why your experiments might be lying to you: statistical significance and peeking.",
    date: "2025.07.28",
    category: "ANALYTICS"
  },
  {
    id: "LOG_030",
    title: "The Evolution of Search",
    summary: "How semantic search and vector databases are transforming user discovery.",
    date: "2025.08.14",
    category: "ARTIFICIAL_INTELLIGENCE"
  },
  {
    id: "LOG_031",
    title: "Emotional Design",
    summary: "Engineering micro-interactions that make users fall in love with your product.",
    date: "2025.08.30",
    category: "UX_DESIGN"
  },
  {
    id: "LOG_032",
    title: "The 'Buy vs Build' Dilemma",
    summary: "Strategic decision-making frameworks for core features and infrastructure.",
    date: "2025.09.15",
    category: "PRODUCT_STRATEGY"
  },
  {
    id: "LOG_033",
    title: "Crisis Management for PMs",
    summary: "How to communicate and prioritize during a major severity-1 production outage.",
    date: "2025.10.02",
    category: "OPERATIONS"
  }
];
