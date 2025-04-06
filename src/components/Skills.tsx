
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Progress } from "@/components/ui/progress";

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
    { name: "Product Strategy", level: 95 },
    { name: "UX/UI Design", level: 85 },
    { name: "Roadmapping", level: 90 },
    { name: "Cross-functional Leadership", level: 90 },
    { name: "Go-to-Market Execution", level: 85 },
    { name: "System Design", level: 90 },
    { name: "Workflow Automation", level: 85 },
  ];

  const techSkills: Skill[] = [
    { name: "Java", level: 80 },
    { name: "C++", level: 75 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Shopify", level: 85 },
    { name: "WordPress", level: 80 },
  ];

  const toolsSkills: Skill[] = [
    { name: "Jira", level: 90 },
    { name: "ProductPlan", level: 85 },
    { name: "Figma", level: 80 },
    { name: "Adobe XD", level: 85 },
    { name: "Power BI", level: 80 },
    { name: "Tableau", level: 75 },
    { name: "Google Analytics", level: 85 },
  ];

  // Animation variants
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
      rotateY: 15,
      rotateX: -10 
    },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      rotateY: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: 0.1 * index,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    })
  };

  const titleAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const lineAnimation = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const codeTextAnimation = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.4
      }
    }
  };

  // Function to render a skill category card
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
      className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-purple-900/20 hover:border-purple-500/30 transition-all duration-300"
      whileHover={{ 
        scale: 1.02, 
        rotateY: 2,
        rotateX: -2,
        boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)" 
      }}
    >
      <h3 className="text-xl font-semibold mb-6 text-blue-400 border-b border-slate-700 pb-3 flex items-center">
        <span className={`${index === 0 ? "bg-blue-500/20" : index === 1 ? "bg-purple-500/20" : "bg-green-500/20"} w-8 h-8 rounded-lg flex items-center justify-center mr-2`}>
          <motion.div
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
          >
            {iconPath}
          </motion.div>
        </span>
        {title}
      </h3>
      <div className="space-y-5">
        {skills.map((skill, skillIndex) => (
          <motion.div 
            key={skillIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: 0.7 + index * 0.1 + skillIndex * 0.1, duration: 0.4 }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-white">{skill.name}</span>
              <span className="text-blue-400">{skill.level}%</span>
            </div>
            <Progress 
              value={0} 
              className="h-2 bg-slate-700" 
            />
            <motion.div 
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full -mt-2"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ delay: 0.8 + index * 0.1 + skillIndex * 0.1, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-900" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerAnimation}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={titleAnimation}
            className="inline-block text-3xl font-bold text-white mb-4 relative"
          >
            Skills & Expertise
            <motion.div 
              variants={lineAnimation}
              className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600"
            />
          </motion.h2>
          <motion.p
            variants={codeTextAnimation}
            className="text-purple-300 text-lg font-mono mt-4"
          >
            &lt; const skills = loadExpertise() /&gt;
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Leadership Card */}
          {renderSkillCard(
            "Product Leadership", 
            productSkills, 
            0, 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          )}

          {/* Technical Skills Card */}
          {renderSkillCard(
            "Technical Skills", 
            techSkills, 
            1, 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
              <path d="M2 20h20"></path>
              <path d="M14 12v.01"></path>
            </svg>
          )}

          {/* Tools & Software Card */}
          {renderSkillCard(
            "Tools & Software", 
            toolsSkills, 
            2, 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
