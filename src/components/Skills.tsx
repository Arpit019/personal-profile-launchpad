
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const frontendSkills = [
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Redux", level: 80 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Next.js", level: 85 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "Python", level: 75 },
    { name: "Django", level: 70 },
    { name: "RESTful APIs", level: 90 },
    { name: "GraphQL", level: 80 },
    { name: "MongoDB", level: 85 },
  ];

  const otherSkills = [
    { name: "Git & GitHub", level: 90 },
    { name: "CI/CD", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Docker", level: 80 },
    { name: "Jest & RTL", level: 85 },
    { name: "Agile/Scrum", level: 90 },
    { name: "UI/UX Design", level: 80 },
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
              Frontend Development
            </h3>
            <div className="space-y-5">
              {frontendSkills.map((skill, index) => (
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
              Backend Development
            </h3>
            <div className="space-y-5">
              {backendSkills.map((skill, index) => (
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
              Other Skills
            </h3>
            <div className="space-y-5">
              {otherSkills.map((skill, index) => (
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
