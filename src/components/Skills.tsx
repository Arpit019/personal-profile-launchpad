import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layout, Code2, Database, Shield, Zap } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // out of 10
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: SkillItem[];
  color: string;
}

const SegmentedExpBar = ({ level, colorClass }: { level: number, colorClass: string }) => {
  return (
    <div className="flex gap-1 mt-1">
      {[...Array(10)].map((_, i) => (
        <div 
          key={i} 
          className={`h-3 flex-1 border border-slate-800 transition-all duration-500 ${i < level ? colorClass : 'bg-slate-900'}`}
          style={{ transitionDelay: `${i * 50}ms` }}
        />
      ))}
    </div>
  );
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "PRODUCT_STRATEGY",
      icon: Shield,
      color: "bg-cyan-400",
      skills: [
        { name: "Product Roadmapping", level: 9 },
        { name: "Go-to-Market (GTM)", level: 8 },
        { name: "Agile/Scrum", level: 9 },
        { name: "Stakeholder Mgmt", level: 9 },
        { name: "A/B Testing", level: 8 },
        { name: "Revenue Optimization", level: 8 }
      ]
    },
    {
      title: "DATA_&_UX",
      icon: Database,
      color: "bg-purple-500",
      skills: [
        { name: "User Journey Mapping", level: 9 },
        { name: "Prototyping", level: 8 },
        { name: "Data Analytics (SQL)", level: 7 },
        { name: "Market Research", level: 8 },
        { name: "Mixpanel / GA", level: 8 }
      ]
    },
    {
      title: "PLATFORM_&_AI",
      icon: Cpu,
      color: "bg-pink-500",
      skills: [
        { name: "System Architecture", level: 7 },
        { name: "API Integrations", level: 8 },
        { name: "Generative AI Tools", level: 9 },
        { name: "Prompt Engineering", level: 9 },
        { name: "Web/Mobile Delivery", level: 8 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 relative font-mono overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-4xl font-orbitron font-bold text-white mb-2 relative tracking-widest">
            SKILL_TREE
          </h2>
          <p className="text-slate-400 mt-2">&gt; ASSESSING COMBAT CAPABILITIES...</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-slate-900 border-2 border-slate-700 p-6 pixel-corners hover:border-slate-500 transition-all relative group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${category.color} opacity-50 group-hover:opacity-100`} />
              
              <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
                <category.icon className={`h-8 w-8 ${category.color.replace('bg-', 'text-')}`} />
                <h3 className="text-xl font-orbitron font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-sm font-bold text-slate-300">{skill.name}</span>
                      <span className="text-[10px] text-slate-500">LVL {skill.level}</span>
                    </div>
                    <SegmentedExpBar level={skill.level} colorClass={category.color} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
