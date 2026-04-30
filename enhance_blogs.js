import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const palettes = [
  { name: 'Neon Yellow', hex: '#facc15', rgba: 'rgba(250, 204, 21, 0.1)' },
  { name: 'Matrix Green', hex: '#22c55e', rgba: 'rgba(34, 197, 94, 0.1)' },
  { name: 'Crimson Red', hex: '#ef4444', rgba: 'rgba(239, 68, 68, 0.1)' },
  { name: 'Deep Purple', hex: '#a855f7', rgba: 'rgba(168, 85, 247, 0.1)' },
  { name: 'Cyber Cyan', hex: '#06b6d4', rgba: 'rgba(6, 182, 212, 0.1)' },
  { name: 'Hot Pink', hex: '#ec4899', rgba: 'rgba(236, 72, 153, 0.1)' }
];

const blogConfigs = [
  { title: "The Hierarchy of AI Knowledge: Evolution in 2024", keyword: "artificial-intelligence,abstract", ref: "OpenAI Cookbook & LangChain Docs" },
  { title: "Architecting a Real-Money Gaming Platform (AAG App)", keyword: "server,casino", ref: "Event Sourcing Patterns (Martin Fowler)" },
  { title: "Streamlining Healthcare Operations: A 45% More Efficient HMS", keyword: "hospital,technology", ref: "HL7 FHIR Standards" },
  { title: "AI-Driven Backlog Grooming", keyword: "code,data", ref: "Atlassian Agile Coach Guidelines" },
  { title: "Metrics That Matter in 2026", keyword: "analytics,graph", ref: "Google HEART Framework" },
  { title: "The Rise of No-Code MVPs", keyword: "prototype,design", ref: "Lean Startup Methodology" },
  { title: "Gamification in Non-Gaming Apps", keyword: "videogame,ui", ref: "Octalysis Framework by Yu-kai Chou" },
  { title: "Product Strategy in the Age of Generative AI", keyword: "robot,circuit", ref: "Stanford AI Index Report" },
  { title: "Cross-Functional Empathy", keyword: "teamwork,neon", ref: "Radical Candor Framework" },
  { title: "Continuous Discovery Habits", keyword: "research,data", ref: "Continuous Discovery by Teresa Torres" },
  { title: "The Fall of the Feature Factory", keyword: "factory,abandoned", ref: "Marty Cagan's Inspired" },
  { title: "Rethinking User Onboarding", keyword: "welcome,door", ref: "Nielsen Norman Group UX Guidelines" },
  { title: "Designing for Scale", keyword: "cloud,network", ref: "CNCF (Cloud Native Computing Foundation) Landscape" },
  { title: "Ethical AI in Product Design", keyword: "justice,scale", ref: "IEEE Ethically Aligned Design" },
  { title: "The Art of the 'No'", keyword: "stop,red", ref: "Intercom's RICE Scoring Model" },
  { title: "Product Led Growth (PLG)", keyword: "growth,plant", ref: "OpenView PLG Index" },
  { title: "Managing Tech Debt", keyword: "debt,tangled", ref: "Google's DORA Metrics" },
  { title: "Voice UI & Conversational Commerce", keyword: "voice,soundwave", ref: "Amazon Alexa Design Guide" },
  { title: "Building for Accessibility", keyword: "wheelchair,accessibility", ref: "WCAG 2.2 Guidelines" },
  { title: "Pricing Strategies", keyword: "money,chart", ref: "Van Westendorp Pricing Model" },
  { title: "Hardware vs Software PM", keyword: "hardware,cpu", ref: "IEEE Standards Association" },
  { title: "The Role of Product Ops", keyword: "operations,gears", ref: "Product-Led Alliance Standards" },
  { title: "Embedded Finance", keyword: "finance,digital", ref: "Plaid API Documentation" },
  { title: "Zero to One: Navigating Chaos", keyword: "chaos,storm", ref: "Y Combinator Startup Playbook" },
  { title: "Data Privacy as a Feature", keyword: "privacy,lock", ref: "OWASP Top 10 & GDPR Framework" },
  { title: "Platform Product Management", keyword: "platform,architecture", ref: "Stripe API Design Principles" },
  { title: "The Psychology of Pricing Tiers", keyword: "stairs,levels", ref: "Behavioral Economics (Kahneman)" },
  { title: "Managing Remote Product Teams", keyword: "remote,laptop", ref: "GitLab Remote Playbook" },
  { title: "A/B Testing Pitfalls", keyword: "split,crossroads", ref: "Optimizely Statistical Engine" },
  { title: "The Evolution of Search", keyword: "search,magnifying", ref: "Elasticsearch Architecture Guidelines" },
  { title: "Emotional Design", keyword: "emotion,face", ref: "Don Norman's Emotional Design" },
  { title: "The 'Buy vs Build' Dilemma", keyword: "crossroads,construction", ref: "AWS Well-Architected Framework" },
  { title: "Crisis Management for PMs", keyword: "crisis,fire", ref: "PagerDuty Incident Response Documentation" }
];

const generateContent = (config, index) => {
  const idNum = index + 1;
  const id = `LOG_${String(idNum).padStart(3, '0')}`;
  const imageUrl = `https://images.unsplash.com/featured/?${config.keyword}`;
  
  // Assign two different colors to each blog for visual diversity
  const primaryColor = palettes[index % palettes.length];
  const secondaryColor = palettes[(index + 3) % palettes.length];

  return `## ${config.title}

In the rapidly evolving landscape of modern tech, Product Managers must shift their focus from mere execution to strategic architectural thinking. The concepts behind **${config.title}** represent a fundamental pillar in building scalable, user-centric systems that outlast market fluctuations.

![Strategic Workflow - ${config.keyword}](${imageUrl})

### The Strategic Framework

We have observed that traditional methodologies often fall short when dealing with hyper-growth. Elite product teams are pivoting toward outcome-driven development, heavily relying on open-source standards to avoid reinventing the wheel.

<div style="background-color: ${primaryColor.rgba}; border-left: 4px solid ${primaryColor.hex}; padding: 1rem; margin: 2rem 0; border-radius: 4px;">
  <h4 style="color: ${primaryColor.hex}; margin-top: 0;">Industry Standard Integration</h4>
  <p style="margin-bottom: 0;">By aligning our product strategy with the <strong>${config.ref}</strong>, we ensure compliance, scalability, and adherence to proven architectural patterns. Do not build proprietary systems for solved problems.</p>
</div>

### Implementation & Workflows

To effectively integrate these principles, we must map out the workflow. Visualizing the data flow allows cross-functional teams to identify bottlenecks before a single line of code is written.

1. **Phase 1: Discovery** - Leverage continuous interviews and the frameworks defined in ${config.ref}.
2. **Phase 2: Architecture** - Decouple systems to ensure frontend experiments do not compromise backend stability.
3. **Phase 3: Deployment** - Utilize feature flags and staggered rollouts.

<div style="background-color: ${secondaryColor.rgba}; border-left: 4px solid ${secondaryColor.hex}; padding: 1rem; margin: 2rem 0; border-radius: 4px;">
  <h4 style="color: ${secondaryColor.hex}; margin-top: 0;">Optimization Checkpoint</h4>
  <p style="margin-bottom: 0;">Always establish your baseline metrics before initiating Phase 3. If the delta is negative after 7 days, trigger the rollback protocol immediately. Speed is a feature, but reliability is a requirement.</p>
</div>

### Conclusion

The evolution of this discipline requires relentless cross-functional empathy and a deep understanding of the underlying technical architecture. By embracing open-source standards like the ${config.ref}, we transition from being administrators of a backlog to actual architects of the business.`;
};

const outputDir = path.join(__dirname, 'public', 'content', 'blogs');

// Ensure directory exists
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

// Generate all 33 files
blogConfigs.forEach((config, index) => {
  const content = generateContent(config, index);
  const idNum = index + 1;
  const id = `LOG_${String(idNum).padStart(3, '0')}`;
  const filePath = path.join(outputDir, `${id}.md`);
  
  fs.writeFileSync(filePath, content);
  console.log(`Enhanced ${id}.md with unique image [${config.keyword}] and ref [${config.ref}]`);
});

console.log('All 33 blogs enhanced successfully.');
