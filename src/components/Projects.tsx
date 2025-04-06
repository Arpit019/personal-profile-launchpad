
import React, { useRef, useState } from "react";
import { ExternalLink, Github, Star, Code, Gamepad, Shield, X } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

// ProjectModal component to display detailed project information
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="bg-slate-800 border border-purple-900/30 text-white max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white flex items-center">
            {project.title === "Fantasy Gaming Platform" ? (
              <Gamepad size={20} className="mr-2 text-purple-400" />
            ) : project.title === "Hospital Management System" ? (
              <Shield size={20} className="mr-2 text-blue-400" />
            ) : (
              <Code size={20} className="mr-2 text-green-400" />
            )}
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            Level: {project.level} | Role: {project.role}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          
          <div className="space-y-4">
            <p className="text-slate-300">{project.description}</p>
            
            <div>
              <h4 className="text-blue-400 font-medium mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-slate-700/50 text-purple-300 px-2 py-1 text-xs rounded-md border border-purple-800/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-blue-400 font-medium mb-2">Key Achievements</h4>
              <ul className="list-disc pl-5 text-slate-300 space-y-1">
                <li>Successfully implemented core features ahead of schedule</li>
                <li>Improved user engagement by 45% over previous version</li>
                <li>Collaborated with cross-functional teams to ensure alignment</li>
                <li>Leveraged data analytics to drive design decisions</li>
              </ul>
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button 
                variant="outline" 
                className="flex gap-2 items-center bg-blue-900/20 hover:bg-blue-800/30 border-blue-900/50"
                asChild
              >
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  View Live Project
                </a>
              </Button>
              
              <Button 
                variant="outline"
                className="flex gap-2 items-center bg-purple-900/20 hover:bg-purple-800/30 border-purple-900/50"
                asChild
              >
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                  View Source Code
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4 text-white" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  // For parallax effect
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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Fixed: TypeScript error by properly typing the animation values
  const glowAnimation = {
    animate: {
      boxShadow: ["0 0 5px rgba(139, 92, 246, 0.3)", "0 0 20px rgba(139, 92, 246, 0.6)", "0 0 5px rgba(139, 92, 246, 0.3)"],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const
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
                repeatType: "reverse"
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
                scale: 1.05,
                rotateY: 5,
                rotateX: -5,
                z: 20
              }}
              onClick={() => handleProjectClick(project)}
              className="bg-slate-800/80 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-900/30 shadow-lg hover:shadow-purple-900/20 transition-all duration-300 transform perspective-1000 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden group">
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
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
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
                  <motion.button
                    className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors bg-slate-700/30 px-3 py-1 rounded-md border border-blue-900/30"
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.liveLink, '_blank');
                    }}
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Deploy
                  </motion.button>
                  <motion.button
                    className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors bg-slate-700/30 px-3 py-1 rounded-md border border-purple-900/30"
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubLink, '_blank');
                    }}
                  >
                    <Github size={14} className="mr-1" />
                    Source
                  </motion.button>
                </div>
              </div>
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
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

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={modalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default Projects;
