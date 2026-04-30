import React, { useRef, useState } from "react";
import { ExternalLink, Github, Star, Gamepad, Shield, Code, X, Activity } from "lucide-react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  level: string;
  role: string;
}

const ProjectModal: React.FC<{ project: Project | null, isOpen: boolean, onClose: () => void }> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="bg-slate-900 border border-cyan-900/50 text-white max-w-3xl shadow-[0_0_30px_rgba(0,243,255,0.2)]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-orbitron font-bold text-white flex items-center">
            {project.title.includes("Gaming") ? <Gamepad className="mr-3 text-purple-400" /> : 
             project.title.includes("Hospital") ? <Shield className="mr-3 text-cyan-400" /> : 
             <Code className="mr-3 text-pink-400" />}
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-slate-400 font-mono mt-2">
            CLASS: {project.level} | CLEARANCE: {project.role}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4 border border-slate-700" />
          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed">{project.description}</p>
            <div>
              <h4 className="text-cyan-400 font-orbitron mb-2 tracking-widest text-sm">TECH_STACK</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-slate-800 text-purple-300 px-3 py-1 text-xs rounded border border-purple-800/30 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 pt-4 border-t border-slate-800">
              {project.liveLink && (
                <Button variant="outline" className="flex gap-2 items-center bg-cyan-950/30 hover:bg-cyan-900/50 border-cyan-800 text-cyan-300 transition-all shadow-[0_0_10px_rgba(0,243,255,0.1)]" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} /> LAUNCH_LIVE
                  </a>
                </Button>
              )}
              {project.githubLink && (
                <Button variant="outline" className="flex gap-2 items-center bg-purple-950/30 hover:bg-purple-900/50 border-purple-800 text-purple-300 transition-all shadow-[0_0_10px_rgba(181,53,246,0.1)]" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} /> VIEW_SOURCE
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 text-slate-400 hover:text-white">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'deployed' | 'github'>('deployed');

  const deployedProjects: Project[] = [
    {
      title: "AAG App (Fantasy Gaming)",
      description: "A comprehensive social and fantasy gaming platform with multiple game modes (Ludo, Fruit Ninja, Snake & Ladders), real-money gaming wallets, and creator monetization.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
      technologies: ["React Native", "Node.js", "Payment Gateways", "Socket.io"],
      liveLink: "#",
      level: "ENTERPRISE",
      role: "PRODUCT_OWNER"
    },
    {
      title: "Hospital Management System",
      description: "A full-featured HMS covering admissions, referrals, prescriptions, diagnostics, and analytics. Reduced operational costs by 45%.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
      technologies: ["React", "Python", "PostgreSQL", "Healthcare API"],
      liveLink: "#",
      level: "ENTERPRISE",
      role: "PRODUCT_MANAGER"
    },
    {
      title: "Zippee Delivery Engine",
      description: "Optimized non-deliverable returns (NDR) and built a prepaid wallet + ERP integration for billing. Grew revenue by 85% via efficient routing.",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80",
      technologies: ["Shopify API", "Logistics SDK", "Automations", "Data Analytics"],
      liveLink: "#",
      level: "ENTERPRISE",
      role: "PRODUCT_ANALYST"
    }
  ];

  const githubProjects: Project[] = [
    {
      title: "MedPredict",
      description: "Multiple Disease Prediction Solution utilizing machine learning algorithms to assess patient health risks based on varied input vectors.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
      technologies: ["Python", "Scikit-Learn", "Flask", "Pandas"],
      githubLink: "https://github.com/Arpit019/MedPredict",
      level: "OPEN_SOURCE",
      role: "LEAD_DEV"
    },
    {
      title: "Personal Profile Launchpad",
      description: "The very portfolio you are viewing. Built with a futuristic space theme, glassmorphism, and a custom Lightsaber Bot.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      technologies: ["React", "Vite", "TailwindCSS", "Framer Motion"],
      githubLink: "https://github.com/Arpit019/personal-profile-launchpad",
      level: "OPEN_SOURCE",
      role: "ARCHITECT"
    }
  ];

  const currentProjects = activeTab === 'deployed' ? deployedProjects : githubProjects;

  return (
    <section id="projects" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-purple-900/20 to-slate-900" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="inline-block text-3xl md:text-5xl font-orbitron font-bold text-white mb-2 relative tracking-wider">
            PROJECT ARCHIVES
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_15px_rgba(181,53,246,0.6)]" />
          </h2>
          <p className="text-cyan-400 text-lg font-mono mt-6">&gt; ACCESSING_DATABANKS...</p>
        </motion.div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-1 rounded-lg flex gap-2 border border-slate-700 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <button
              onClick={() => setActiveTab('deployed')}
              className={`px-6 py-3 font-orbitron text-sm tracking-wider rounded transition-all duration-300 ${activeTab === 'deployed' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_10px_rgba(0,243,255,0.2)]' : 'text-slate-400 hover:text-slate-200'}`}
            >
              DEPLOYED_PRODUCTS
            </button>
            <button
              onClick={() => setActiveTab('github')}
              className={`px-6 py-3 font-orbitron text-sm tracking-wider rounded transition-all duration-300 ${activeTab === 'github' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50 shadow-[0_0_10px_rgba(181,53,246,0.2)]' : 'text-slate-400 hover:text-slate-200'}`}
            >
              GITHUB_PROJECTS
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => { setSelectedProject(project); setModalOpen(true); }}
                className="glass-card rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 cursor-pointer group transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.15)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/60 z-10 group-hover:bg-slate-900/20 transition-colors duration-300" />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-3 right-3 z-20 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded border border-slate-700 text-xs font-mono text-slate-300">
                    {project.level}
                  </div>
                </div>
                <div className="p-6 relative">
                  {/* Scanline */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <h3 className="text-xl font-orbitron font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-purple-400 bg-purple-950/30 px-2 py-1 rounded border border-purple-900/30">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs font-mono text-slate-500 px-2 py-1">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <ProjectModal project={selectedProject} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Projects;
