
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
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

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400 border-b border-slate-700 pb-3">
              Product Leadership
            </h3>
            <div className="space-y-5">
              {productSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400 border-b border-slate-700 pb-3">
              Technical Skills
            </h3>
            <div className="space-y-5">
              {techSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400 border-b border-slate-700 pb-3">
              Tools & Software
            </h3>
            <div className="space-y-5">
              {toolsSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
