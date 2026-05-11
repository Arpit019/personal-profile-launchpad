import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ArrowRight, X, ExternalLink, Target, Lightbulb, Activity, CheckCircle, Award, Globe, Smartphone, Crosshair, Users, TrendingUp, Zap } from "lucide-react";
import { useProjectsData, ProjectCaseStudy } from "../hooks/useProjectsData";

// --- WIDGET COMPONENTS ---
const MetricsWidget = ({ impact }: { impact: string[] }) => {
  // Try to extract numbers for visual metrics
  const extractMetric = (text: string) => {
    const match = text.match(/([\d,\.]+%?|\$[\d,\.]+[KMB]?|₹[\d,\.]+\s?[Lakhs|Crores]*)/i);
    return match ? match[1] : "KPI";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      {impact.map((item, idx) => (
        <div key={idx} className="bg-slate-900 border-l-2 border-cyan-500 p-4 pixel-corners flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-2xl font-bold text-white font-orbitron">{extractMetric(item)}</span>
            {idx === 0 ? <Users size={16} className="text-slate-500" /> : idx === 1 ? <TrendingUp size={16} className="text-slate-500" /> : <Zap size={16} className="text-slate-500" />}
          </div>
          <p className="text-xs text-slate-400 mt-2">{item.replace(/([\d,\.]+%?|\$[\d,\.]+[KMB]?|₹[\d,\.]+\s?[Lakhs|Crores]*)/i, '').trim()}</p>
        </div>
      ))}
    </div>
  );
};

const UserFlowWidget = ({ processText }: { processText: string }) => {
  // Create a simplified generic flow based on text length to simulate a diagram
  const steps = [
    { title: "Discovery & Scope", icon: <Target size={14} className="text-blue-400" /> },
    { title: "Architecture & Design", icon: <Lightbulb size={14} className="text-amber-400" /> },
    { title: "Development Phase", icon: <Activity size={14} className="text-purple-400" /> },
    { title: "Launch & Iterate", icon: <CheckCircle size={14} className="text-green-400" /> }
  ];

  return (
    <div className="my-8 bg-slate-950 border border-slate-800 p-6 pixel-corners">
      <h4 className="text-xs font-bold tracking-widest text-slate-500 mb-6 uppercase">Execution Flow</h4>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -z-10 -translate-y-1/2"></div>
        
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-row md:flex-col items-center gap-4 md:gap-2 bg-slate-950 p-2 z-10 w-full md:w-auto mb-4 md:mb-0">
            <div className="w-10 h-10 rounded-full border-2 border-slate-700 bg-slate-900 flex items-center justify-center relative">
              {step.icon}
            </div>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">{step.title}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-slate-900/50 border-l-2 border-slate-700 text-sm text-slate-300 leading-relaxed">
        {processText}
      </div>
    </div>
  );
};

const Projects = () => {
  const { caseStudies } = useProjectsData();
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  if (selectedProject) {
    return (
      <section id="projects" className="py-20 bg-slate-900 relative font-mono min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ProjectDetailView project={selectedProject} onBack={() => setSelectedProject(null)} />
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-slate-900 relative font-mono">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-orbitron font-bold text-white mb-2 uppercase tracking-widest">
            <Crosshair className="inline-block mb-1 mr-2 text-cyan-400" />
            PROOF_OF_WORK
          </h2>
          <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest">Product School Grade Case Studies & Executed Deliverables</p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative bg-slate-900 border-2 border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer overflow-hidden pixel-corners hover:shadow-[0_0_20px_rgba(0,243,255,0.15)] flex flex-col h-full"
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute top-0 right-0 bg-slate-800 text-slate-400 font-bold px-3 py-1 text-xs group-hover:bg-cyan-500 group-hover:text-black transition-colors z-20 flex items-center shadow-lg">
                DEEP_DIVE <Target size={12} className="ml-1" />
              </div>

              {/* Image Section - Real Screenshots Support */}
              <div className="w-full h-56 relative overflow-hidden bg-slate-950 flex-shrink-0 flex justify-center items-center p-4">
                <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className={`w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ${project.imageUrl.includes('images.unsplash') ? '' : 'rounded-lg shadow-xl border border-slate-800 object-contain max-w-[80%]'}`}
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow justify-between border-t border-slate-800">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors font-orbitron tracking-wide line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-xs mb-6 leading-relaxed line-clamp-3">{project.tagline}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.slice(0, 3).map(skill => (
                      <span key={skill} className="text-[9px] bg-slate-950 text-slate-500 px-2 py-1 border border-slate-800 uppercase tracking-widest">
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 3 && (
                      <span className="text-[9px] bg-slate-950 text-slate-500 px-2 py-1 border border-slate-800">
                        +{project.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center text-cyan-400 text-xs font-bold tracking-widest uppercase mt-auto">
                  VIEW CASE STUDY <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectDetailView: React.FC<{ project: ProjectCaseStudy; onBack: () => void }> = ({ project, onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="pb-10 max-w-6xl mx-auto bg-slate-950 border border-slate-800 shadow-2xl"
    >
      {/* Top Bar - Slide Header Simulation */}
      <div className="bg-slate-900 border-b border-slate-800 px-8 py-4 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Briefcase size={20} className="text-cyan-400" />
          <span className="text-white font-orbitron font-bold tracking-widest uppercase">{project.company} // Case Study</span>
        </div>
        <button onClick={onBack} className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 font-bold flex items-center tracking-widest text-xs transition-colors pixel-corners">
          <X size={14} className="mr-2" /> CLOSE PRESENTATION
        </button>
      </div>

      {/* Hero Slide */}
      <div className="relative w-full border-b border-slate-800 overflow-hidden bg-slate-900 flex flex-col md:flex-row">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center z-20">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-xs bg-cyan-900/50 text-cyan-400 px-3 py-1 border border-cyan-800/50 uppercase tracking-widest font-bold">
              {project.role}
            </span>
            <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 border border-slate-700 uppercase tracking-widest">
              {project.duration}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide leading-tight" style={{ fontFamily: "'Orbitron',sans-serif" }}>
            {project.title}
          </h1>
          <p className="text-base text-slate-400 leading-relaxed border-l-2 border-cyan-500 pl-4">{project.tagline}</p>
        </div>

        {/* Right: Graphic/App Mockup */}
        <div className="w-full md:w-1/2 relative bg-slate-950 flex items-center justify-center p-8 overflow-hidden min-h-[300px]">
           <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay z-10" />
           <img 
            src={project.imageUrl} 
            alt={project.title} 
            className={`relative z-20 ${project.imageUrl.includes('images.unsplash') ? 'w-full h-full object-cover opacity-50' : 'w-auto max-h-[400px] object-contain rounded-lg shadow-2xl border border-slate-800'}`}
          />
        </div>
      </div>

      {/* Case Study Slides Content */}
      <div className="p-8 md:p-12">
        
        {/* Row 1: Problem & Context */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-900 border border-slate-800 p-8 pixel-corners">
            <h3 className="text-sm font-orbitron font-bold text-cyan-400 tracking-widest mb-4 flex items-center uppercase">
              <Target size={16} className="mr-2" /> 01. Context
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">{project.context}</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 pixel-corners">
            <h3 className="text-sm font-orbitron font-bold text-red-400 tracking-widest mb-4 flex items-center uppercase">
              <AlertTriangleIcon size={16} className="mr-2" /> 02. Core Problem
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">{project.problem}</p>
          </div>
        </div>

        {/* Row 2: Flow Diagram (Process) */}
        <div className="mb-16">
          <h3 className="text-xl font-orbitron font-bold text-white tracking-widest mb-6 border-b border-slate-800 pb-2">
            03. STRATEGY & EXECUTION
          </h3>
          <UserFlowWidget processText={project.process} />
        </div>

        {/* Row 3: Solution & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          <div className="lg:col-span-2">
             <h3 className="text-xl font-orbitron font-bold text-white tracking-widest mb-6 border-b border-slate-800 pb-2">
              04. SHIPPED SOLUTION
            </h3>
            <p className="text-base text-slate-300 leading-relaxed mb-8">{project.solution}</p>
            
            <h3 className="text-xl font-orbitron font-bold text-white tracking-widest mb-6 border-b border-slate-800 pb-2 mt-12">
              05. BUSINESS IMPACT
            </h3>
            <MetricsWidget impact={project.impact} />
            <ul className="space-y-4 mt-6">
              {project.impact.map((item, idx) => (
                <li key={idx} className="text-sm text-slate-300 flex items-start leading-relaxed">
                  <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar: Skills, Learnings, Links */}
          <div className="space-y-8">
            
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-cyan-500 hover:bg-cyan-400 text-black text-center font-orbitron font-bold py-4 pixel-corners transition-colors shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)]">
                <span className="flex items-center justify-center tracking-widest text-sm">
                  LAUNCH DEPLOYMENT <ExternalLink size={16} className="ml-2" />
                </span>
              </a>
            )}

            <div className="bg-slate-900 border border-slate-800 p-6 pixel-corners">
              <h3 className="text-xs font-orbitron font-bold text-white tracking-widest mb-4 flex items-center">
                <Lightbulb size={14} className="mr-2 text-amber-400" /> KEY_LEARNINGS
              </h3>
              <p className="text-sm text-slate-400 italic leading-relaxed border-l-2 border-slate-700 pl-3">"{project.learnings}"</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 pixel-corners">
              <h3 className="text-xs font-orbitron font-bold text-white tracking-widest mb-4">TECHNOLOGY_STACK</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map(skill => (
                  <span key={skill} className="text-[10px] font-mono bg-slate-950 text-slate-400 px-2 py-1 border border-slate-800">
                    [{skill}]
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Helper icon
const AlertTriangleIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

export default Projects;
