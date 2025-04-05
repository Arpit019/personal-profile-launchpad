
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.2,
    margin: "-100px 0px" 
  });

  const productSkills = [
    { name: "Product Strategy", level: 95 },
    { name: "UX/UI Design", level: 85 },
    { name: "Roadmapping", level: 90 },
    { name: "Cross-functional Leadership", level: 90 },
    { name: "Go-to-Market Execution", level: 85 },
    { name: "System Design", level: 90 },
    { name: "Workflow Automation", level: 85 },
  ];

  const techSkills = [
    { name: "Java", level: 80 },
    { name: "C++", level: 75 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Shopify", level: 85 },
    { name: "WordPress", level: 80 },
  ];

  const toolsSkills = [
    { name: "Jira", level: 90 },
    { name: "ProductPlan", level: 85 },
    { name: "Figma", level: 80 },
    { name: "Adobe XD", level: 85 },
    { name: "Power BI", level: 80 },
    { name: "Tableau", level: 75 },
    { name: "Google Analytics", level: 85 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const progressAnimation = {
    initial: { width: 0 },
    animate: (level) => ({
      width: `${level}%`,
      transition: { 
        duration: 1.2, 
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  const cardAnimation = {
    initial: { 
      y: 50, 
      opacity: 0,
      rotateY: 15,
      rotateX: -10
    },
    animate: (index) => ({
      y: 0,
      opacity: 1,
      rotateY: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: 0.1 * index,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-slate-900" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-purple-300 text-lg font-mono mt-4"
          >
            &lt; const skills = loadExpertise() /&gt;
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            custom={0}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={cardAnimation}
            className="bg-slate-800 p-8 rounded-xl shadow-lg border border-purple-900/20 hover:border-purple-500/30 transition-all duration-300"
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)" 
            }}
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400 border-b border-slate-700 pb-3">
              Product Leadership
            </h3>
            <div className="space-y-5">
              {productSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2.5 rounded-full"
                      custom={skill.level}
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      variants={progressAnimation}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={1}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={cardAnimation}
            className="bg-slate-800 p-8 rounded-xl shadow-lg border border-purple-900/20 hover:border-purple-500/30 transition-all duration-300"
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)" 
            }}
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400 border-b border-slate-700 pb-3">
              Technical Skills
            </h3>
            <div className="space-y-5">
              {techSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2.5 rounded-full"
                      custom={skill.level}
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      variants={progressAnimation}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={2}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={cardAnimation}
            className="bg-slate-800 p-8 rounded-xl shadow-lg border border-purple-900/20 hover:border-purple-500/30 transition-all duration-300"
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)" 
            }}
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400 border-b border-slate-700 pb-3">
              Tools & Software
            </h3>
            <div className="space-y-5">
              {toolsSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2.5 rounded-full"
                      custom={skill.level}
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      variants={progressAnimation}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
