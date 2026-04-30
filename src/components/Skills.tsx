import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Skill {
  name: string;
  level: number;
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.2,
    margin: "-100px 0px" 
  });

  const productSkills: Skill[] = [
    { name: "Productboard & Miro", level: 90 },
    { name: "Google Analytics & Mixpanel", level: 85 },
    { name: "Jira & Confluence", level: 95 },
    { name: "Product Strategy", level: 95 },
  ];

  const dataSkills: Skill[] = [
    { name: "Tableau", level: 85 },
    { name: "Power BI", level: 80 },
    { name: "SQL", level: 85 },
    { name: "Figma & UX/UI", level: 90 },
  ];

  const platformSkills: Skill[] = [
    { name: "Shopify & E-commerce", level: 95 },
    { name: "API Integration & REST", level: 90 },
    { name: "Claude, Gemini, Ollama", level: 85 },
    { name: "Lovable & Emergent AI", level: 80 },
  ];

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardAnimation = {
    hidden: { 
      y: 50, 
      opacity: 0,
    },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.1 * index,
        ease: "easeOut",
      }
    })
  };

  const renderSkillCard = (
    title: string, 
    skills: Skill[], 
    index: number, 
    iconPath: JSX.Element
  ) => (
    <motion.div
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardAnimation}
      className="glass-card p-8 rounded-xl border border-purple-900/30 hover:border-cyan-500/50 transition-all duration-300 relative group"
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-bl-full pointer-events-none transition-colors group-hover:bg-cyan-500/10" />
      
      <h3 className="text-xl font-orbitron font-semibold mb-6 text-cyan-400 flex items-center tracking-wide">
        <span className="w-10 h-10 bg-slate-900 border border-cyan-800 rounded-lg flex items-center justify-center mr-3 shadow-[0_0_10px_rgba(0,243,255,0.2)]">
          {iconPath}
        </span>
        {title}
      </h3>
      
      <div className="space-y-6">
        {skills.map((skill, skillIndex) => (
          <motion.div 
            key={skillIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: 0.5 + index * 0.1 + skillIndex * 0.1, duration: 0.4 }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-slate-200 font-medium tracking-wide">{skill.name}</span>
              <span className="text-purple-400 font-mono text-sm">{skill.level}%</span>
            </div>
            <div className="relative h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={isInView ? { width: `${skill.level}%` } : { width: "0%" }}
                transition={{ 
                  duration: 1.5, 
                  delay: 0.8 + index * 0.1 + skillIndex * 0.1,
                  ease: "easeOut" 
                }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-[0_0_10px_#00f3ff]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-950 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerAnimation}
          className="text-center mb-16"
        >
          <motion.h2 
            className="inline-block text-3xl md:text-5xl font-orbitron font-bold text-white mb-2 relative"
          >
            TECH SPECS
            <motion.div 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-cyan-500 shadow-[0_0_15px_#ff003c]"
            />
          </motion.h2>
          <motion.p
            className="text-pink-400 text-lg font-mono mt-6"
          >
            &gt; SYSTEM_CAPABILITIES_DETECTED...
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderSkillCard(
            "Product & Strategy", 
            productSkills, 
            0, 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          )}

          {renderSkillCard(
            "Data & UX", 
            dataSkills, 
            1, 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
          )}

          {renderSkillCard(
            "Platform & AI", 
            platformSkills, 
            2, 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
