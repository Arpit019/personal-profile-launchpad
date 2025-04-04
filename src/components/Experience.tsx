
import React, { useRef } from "react";
import { Briefcase, Calendar, Building } from "lucide-react";
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
      period: "Oct 2024 - Present",
      description: "Spearheading the creation of a Winzo/MPL-style gaming ecosystem from scratch. Built and scaled a full product + dev team for end-to-end game development. Defined architecture, tech stack, and monetization strategy. Leading vendor onboarding, gameplay UX, and backend scalability.",
    },
    {
      position: "Product Manager",
      company: "Tap for Tech Pvt Ltd",
      period: "July 2024 - Oct 2024",
      description: "Launched a full-scale Hospital Management System (HMS) boosting operational efficiency by 30%. Designed and deployed adventure booking & event systems for Pinak Adventure Park. Rolled out custom enterprise software, automating operations and improving productivity by 40%.",
    },
    {
      position: "Product Analyst",
      company: "Zippee",
      period: "March 2023 - July 2024",
      description: "Reduced NDR from 70% to 25% and transitioned to a prepaid model, improving cash flow. Designed a prepaid wallet system, optimized delivery using QCF + hyperlocal models. Created a Shopify zipcode validator, introduced automated workflows (Arigato, Mesa, Thrive).",
    },
    {
      position: "Script Developer",
      company: "Uplers",
      period: "Dec 2022 - Mar 2023",
      description: "Boosted email open rates by 25% and CTR by 35% via AMP innovations. Reduced email production time by 30% with streamlined development.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 md:px-6"
      >
        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-center text-slate-800 mb-4"
        >
          Work Experience
        </motion.h2>
        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-20 h-1 bg-blue-600 mx-auto mb-16"
        ></motion.div>

        <div className="max-w-3xl mx-auto" ref={containerRef}>
          <div className="relative pl-8 border-l-2 border-blue-200 space-y-10">
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
                  className="absolute -left-[41px] mt-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
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
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {exp.position}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1 mb-3">
                    <span className="flex items-center text-blue-600 font-medium">
                      <Building size={14} className="mr-1" /> {exp.company}
                    </span>
                    <span className="flex items-center bg-slate-100 text-slate-700 px-2 py-1 text-xs rounded">
                      <Calendar size={12} className="mr-1" /> {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-600">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
            
            <motion.div 
              className="absolute h-full left-[-1px] w-0.5 bg-gradient-to-b from-blue-300 via-blue-600 to-blue-900"
              style={{ 
                scaleY: scrollYProgress,
                originY: 0
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
