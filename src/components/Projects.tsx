
import React, { useRef } from "react";
import { ExternalLink, Github, Star, Code, Gamepad, Shield } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const projects = [
    {
      title: "Fantasy Gaming Platform",
      description: "A comprehensive social and fantasy gaming platform with multiple game modes, monetization strategies, and social features.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["Product Strategy", "Game Development", "UX Design", "Monetization"],
      liveLink: "#",
      githubLink: "#",
      level: "Legendary",
      role: "Game Master"
    },
    {
      title: "Hospital Management System",
      description: "A full-featured HMS that improved operational efficiency by 30%, streamlining patient management, billing, and inventory tracking.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["Healthcare Tech", "Data Management", "User Experience", "Process Automation"],
      liveLink: "#",
      githubLink: "#",
      level: "Epic",
      role: "System Architect"
    },
    {
      title: "E-commerce Delivery Optimization",
      description: "Reduced NDR from 70% to 25% through innovative delivery models and prepaid wallet systems for better cash flow management.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Shopify", "Logistics", "Workflow Automation", "Analytics"],
      liveLink: "#",
      githubLink: "#",
      level: "Rare",
      role: "Tech Leader"
    },
  ];

  const glowAnimation = {
    animate: {
      boxShadow: ["0 0 5px rgba(139, 92, 246, 0.3)", "0 0 20px rgba(139, 92, 246, 0.6)", "0 0 5px rgba(139, 92, 246, 0.3)"],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section id="projects" className="py-20 bg-slate-900 overflow-hidden relative">
      {/* Animated Tech Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 70%, rgba(0, 0, 0, 0) 100%)`,
            }}
            animate={{
              y: [0, 30, 0],
              transition: {
                duration: Math.random() * 5 + 10,
                repeat: Infinity,
                repeatType: "reverse" as const
              }
            }}
          />
        ))}
      </div>

      <motion.div 
        ref={containerRef}
        style={{ opacity, scale }}
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-3xl font-bold text-white mb-2 relative"
          >
            Project Arsenal
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-purple-300 text-lg font-mono mb-4"
          >
            &lt; Projects.filter(quality =&gt; "exceptional") /&gt;
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 50 
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                rotateX: -5,
              }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-900/30 shadow-lg hover:shadow-xl transition-all duration-300 transform perspective-1000"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80 z-10" />
                <motion.div
                  className="absolute top-2 right-2 z-20 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-md border border-purple-800/30 text-xs font-mono text-purple-400 flex items-center"
                  animate={glowAnimation.animate}
                >
                  <span className="mr-1">LVL:</span> {project.level}
                </motion.div>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute bottom-2 left-2 z-20 bg-blue-900/60 backdrop-blur-sm px-2 py-1 rounded-md border border-blue-800/30 text-xs font-mono text-blue-300 flex items-center">
                  <Star size={12} className="mr-1 text-yellow-500" />
                  {project.role}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                  {project.title === "Fantasy Gaming Platform" ? (
                    <Gamepad size={16} className="mr-2 text-purple-400" />
                  ) : project.title === "Hospital Management System" ? (
                    <Shield size={16} className="mr-2 text-blue-400" />
                  ) : (
                    <Code size={16} className="mr-2 text-green-400" />
                  )}
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="bg-slate-700/50 text-purple-300 px-2 py-1 text-xs rounded-md border border-purple-800/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveLink}
                    className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors bg-slate-700/30 px-3 py-1 rounded-md border border-blue-900/30"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Deploy
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors bg-slate-700/30 px-3 py-1 rounded-md border border-purple-900/30"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={14} className="mr-1" />
                    Source
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-700 to-blue-700 text-white rounded-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-purple-900/30"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px -5px rgba(139, 92, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact Quest</span>
            <motion.span 
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
