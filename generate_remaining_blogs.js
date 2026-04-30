import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Re-defining the subset of dataLogs we need to generate (11 through 33)
const remainingTitles = [
  "The Fall of the Feature Factory", "Rethinking User Onboarding", "Designing for Scale",
  "Ethical AI in Product Design", "The Art of the 'No'", "Product Led Growth (PLG)",
  "Managing Tech Debt", "Voice UI & Conversational Commerce", "Building for Accessibility",
  "Pricing Strategies", "Hardware vs Software PM", "The Role of Product Ops",
  "Embedded Finance", "Zero to One: Navigating Chaos", "Data Privacy as a Feature",
  "Platform Product Management", "The Psychology of Pricing Tiers", "Managing Remote Product Teams",
  "A/B Testing Pitfalls", "The Evolution of Search", "Emotional Design",
  "The 'Buy vs Build' Dilemma", "Crisis Management for PMs"
];

const images = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
];

const generateContent = (title, id, index) => {
  const imageUrl = images[index % images.length];
  
  return `## ${title}

In the rapidly evolving landscape of modern tech, Product Managers must shift their focus from mere execution to strategic architectural thinking. The concepts behind ${title.toLowerCase()} represent a fundamental pillar in building scalable, user-centric systems that outlast market fluctuations.

![Strategic Workflow](${imageUrl})

### The Strategic Shift

We have observed that traditional methodologies often fall short when dealing with hyper-growth. Instead of relying on legacy metrics, elite product teams are pivoting toward outcome-driven development. 

<div style="background-color: rgba(6, 182, 212, 0.1); border-left: 4px solid #06b6d4; padding: 1rem; margin: 2rem 0; border-radius: 4px;">
  <h4 style="color: #06b6d4; margin-top: 0;">System Alert: Execution vs Strategy</h4>
  <p style="margin-bottom: 0;">It is no longer enough to simply deliver a feature on time. The feature must demonstrably move the needle on core business metrics. If you are building without measuring, you are building blind.</p>
</div>

### Implementation Strategies

To effectively integrate these principles, we implemented a robust feedback loop across engineering, design, and sales. 

1. **Phase 1: Discovery** - Leveraging continuous interviews to ensure we are solving a real pain point, not an imagined one.
2. **Phase 2: Architecture** - Decoupling systems to ensure that frontend experiments do not compromise backend stability.
3. **Phase 3: Deployment** - Utilizing feature flags and staggered rollouts to minimize blast radius.

<div style="background-color: rgba(236, 72, 153, 0.1); border-left: 4px solid #ec4899; padding: 1rem; margin: 2rem 0; border-radius: 4px;">
  <h4 style="color: #ec4899; margin-top: 0;">Optimization Checkpoint</h4>
  <p style="margin-bottom: 0;">Always establish your baseline metrics before initiating Phase 3. If the delta is negative after 7 days, trigger the rollback protocol immediately.</p>
</div>

### Conclusion

The evolution of ${title.toLowerCase()} requires relentless cross-functional empathy and a deep understanding of the underlying technical architecture. By embracing these frameworks, we transition from being administrators of a backlog to actual architects of the business.`;
};

const outputDir = path.join(__dirname, 'public', 'content', 'blogs');

// Ensure directory exists
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

// Generate the remaining 23 files
remainingTitles.forEach((title, index) => {
  const idNum = index + 11;
  const id = `LOG_0${idNum}`;
  const content = generateContent(title, id, index);
  const filePath = path.join(outputDir, `${id}.md`);
  
  fs.writeFileSync(filePath, content);
  console.log(`Generated ${id}.md`);
});

console.log('All remaining blogs generated successfully.');
