
import React, { useRef } from "react";
import { Briefcase, Calendar, Building, Trophy } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const experiences = [
    {
      position: "Head of Product",
      company: "Celestial IT Verse Pvt. Ltd.",
      period: "Current",
      description: "Leading the firm's innovation division to bring bold ideas to life with product strategy, design systems, and full-stack implementation. Managing CRM development, marketplace integrations, hospital apps, and influencer tools. Driving adoption of agile, microservices, and cloud-native architecture.",
      achievement: "Built scalable ecosystem of interconnected products"
    },
    {
      position: "Head of Product - AAG App",
      company: "Celestial IT Verse Pvt. Ltd.",
      period: "2024",
      description: "Led development of a social + fantasy gaming platform from scratch. Built architecture for multi-game logic (Ludo, Fruit Ninja, Snake & Ladders), enabled real-money gaming with secure wallet systems, designed vendor monetization models, and managed hiring for backend, Android, and design teams.",
      achievement: "Launched platform with impressive user acquisition"
    },
    {
      position: "Product Manager",
      company: "Tap for Tech Pvt Ltd",
      period: "2023-2024",
      description: "Built Hospital Management System (HMS) covering admissions, referrals, prescriptions, diagnostics, and analytics. Launched Pinak Adventure Farms with influencer engagement, ticketing and operations. Delivered various service-based products for internal clients.",
      achievement: "Reduced operational costs by 45% with HMS"
    },
    {
      position: "Product Analyst",
      company: "Zippee",
      period: "2023",
      description: "Developed prepaid wallet + ERP integration for billing and COD reconciliation. Built a Zipcode Validator App for Shopify. Automated workflows using Arigato, Mesa, and Thrive. Worked on QCF, P2P, SDD, and Hyperlocal delivery models to increase margins.",
      achievement: "Grew revenue by 85% through delivery optimization"
    },
    {
      position: "Script Developer",
      company: "Uplers",
      period: "2022-2023",
      description: "Led projects in CRM integration, campaign performance dashboards, and WordPress marketplaces. Delivered solutions for US, UK, and Australian clients. Built strength in product consulting, scope management, and digital transformation.",
      achievement: "Created innovative solutions used by global clients"
    },
    {
      position: "Associate Mission Control GTM",
      company: "State Street",
      period: "2021-2022",
      description: "Gained exposure to financial services and asset management sector. Worked on tools used by global institutional investors. Learned risk frameworks, compliance mapping, and automation in large systems.",
      achievement: "Contributed to process optimization and requirement gathering"
    },
    {
      position: "ARO",
      company: "Wiley",
      period: "2020-2021",
      description: "Developed understanding of structured corporate workflows and educational product landscapes. Worked on product lifecycle understanding in educational content. Learned project planning and customer journey design.",
      achievement: "Built foundation in data-driven decision making"
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900 overflow-hidden relative">
      {/* Gaming UI Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="grid-pattern">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-blue-600/20"
              style={{ top: `${i * 10}%` }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <div
              key={i + 'v'}
              className="absolute h-full w-px bg-blue-600/20"
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        <motion.div className="text-center mb-12">
          <motion.h2 
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block text-3xl font-bold text-white mb-2 relative"
          >
            Career Quests
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-purple-300 text-lg font-mono mb-4"
          >
            Professional Journey & Achievements
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto" ref={containerRef}>
          <div className="relative pl-8 border-l-2 border-purple-500/50 space-y-10">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div 
                  className="absolute -left-[41px] mt-1 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  <Briefcase size={16} className="text-white" />
                </motion.div>
                <motion.div 
                  className="bg-slate-800/90 backdrop-blur-sm p-6 rounded-lg border border-purple-800/30 shadow-lg shadow-purple-900/10 hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.15), 0 10px 10px -5px rgba(139, 92, 246, 0.1)"
                  }}
                >
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {exp.position}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1 mb-3">
                    <span className="flex items-center text-purple-400 font-medium">
                      <Building size={14} className="mr-1" /> {exp.company}
                    </span>
                    <span className="flex items-center bg-slate-700/50 text-blue-300 px-2 py-1 text-xs rounded-md border border-blue-800/30">
                      <Calendar size={12} className="mr-1" /> {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-300 mb-3">{exp.description}</p>
                  <div className="flex items-center text-green-400 text-sm font-medium">
                    <Trophy size={14} className="mr-2" />
                    <span className="bg-green-900/30 px-2 py-1 rounded-md border border-green-800/30">
                      {exp.achievement}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
            
            <motion.div 
              className="absolute h-full left-[-1px] w-0.5 bg-gradient-to-b from-purple-400 via-blue-500 to-purple-600"
              style={{ 
                scaleY: scrollYProgress,
                originY: 0
              }}
            />
          </div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a 
            href="#projects" 
            className="inline-flex items-center px-6 py-3 bg-transparent text-purple-400 border border-purple-500 rounded-md hover:bg-purple-900/20 transition-colors relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-purple-800/40 to-blue-800/40 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative">Next Mission: Projects</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
