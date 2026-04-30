import React, { useState } from "react";
import { ExternalLink, Github, Target, Crosshair, Terminal, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Mission {
  title: string;
  objective: string;
  image: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
  class: string;
  rank: string;
}

const MissionModal = ({ mission, isOpen, onClose }: { mission: Mission | null, isOpen: boolean, onClose: () => void }) => {
  if (!mission) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-slate-900 border-2 border-cyan-500 max-w-3xl w-full pixel-corners shadow-[0_0_30px_rgba(0,243,255,0.3)] z-10"
          >
            <div className="bg-cyan-500 text-black px-4 py-2 font-orbitron font-bold flex justify-between items-center">
              <span>MISSION_BRIEFING // {mission.class}</span>
              <button onClick={onClose} className="hover:text-white">X</button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-pink-400 h-8 w-8" />
                <h2 className="text-2xl font-orbitron font-bold text-white uppercase">{mission.title}</h2>
              </div>
              
              <div className="bg-slate-950 border border-slate-800 p-4 mb-6 font-mono text-sm text-slate-300">
                <p className="text-cyan-400 mb-2">&gt; OBJECTIVE_SUMMARY:</p>
                <p className="leading-relaxed">{mission.objective}</p>
                
                <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-yellow-400">RANK: {mission.rank}</span>
                  <div className="flex gap-2">
                    {mission.tech.map((t, i) => (
                      <span key={i} className="text-slate-500">[{t}]</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {mission.liveLink && (
                  <a href={mission.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-black font-orbitron font-bold py-3 pixel-corners transition-colors">
                    <ExternalLink size={18} /> EXECUTE_LIVE
                  </a>
                )}
                {mission.githubLink && (
                  <a href={mission.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-transparent border-2 border-cyan-500 hover:bg-cyan-500 text-cyan-400 hover:text-black font-orbitron font-bold py-3 pixel-corners transition-colors">
                    <Github size={18} /> VIEW_SOURCE
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [activeTab, setActiveTab] = useState<'DEPLOYED' | 'GITHUB'>('DEPLOYED');

  const deployedMissions: Mission[] = [
    {
      title: "AAG App (Fantasy Gaming)",
      objective: "Architect a comprehensive social and fantasy gaming platform with multiple game modes (Ludo, Fruit Ninja), real-money wallets, and creator monetization loops.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
      tech: ["React Native", "Node.js", "Socket.io"],
      class: "ENTERPRISE",
      rank: "S-CLASS"
    },
    {
      title: "Hospital Management System",
      objective: "Deploy a full-featured HMS covering admissions, referrals, prescriptions, and analytics. Successfully reduced operational costs by 45%.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
      tech: ["React", "Python", "PostgreSQL"],
      class: "ENTERPRISE",
      rank: "A-CLASS"
    },
    {
      title: "Zippee Delivery Engine",
      objective: "Optimize non-deliverable returns (NDR) and build a prepaid wallet + ERP integration for billing. Grew revenue by 85% via efficient routing.",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80",
      tech: ["Shopify API", "Logistics SDK", "Analytics"],
      class: "ENTERPRISE",
      rank: "A-CLASS"
    }
  ];

  const githubMissions: Mission[] = [
    {
      title: "MedPredict",
      objective: "Multiple Disease Prediction Solution utilizing varied input vectors to assess patient health risks.",
      image: "",
      tech: ["TypeScript", "Machine Learning"],
      githubLink: "https://github.com/Arpit019/MedPredict",
      class: "OPEN_SOURCE",
      rank: "S-CLASS"
    },
    {
      title: "photawn-speedometer",
      objective: "Speed metrics tracking application.",
      image: "",
      tech: ["TypeScript"],
      githubLink: "https://github.com/Arpit019/photawn-speedometer",
      class: "OPEN_SOURCE",
      rank: "A-CLASS"
    },
    {
      title: "Photawn-Dashboard",
      objective: "Speed metrics and operational dashboard for Photawn system monitoring and analysis.",
      image: "",
      tech: ["Dashboard Analytics"],
      githubLink: "https://github.com/Arpit019/Photawn-Dashboard",
      class: "OPEN_SOURCE",
      rank: "B-CLASS"
    },
    {
      title: "Automated_bulk_mailer_from_sheet",
      objective: "Python script to automate bulk emailing directly from spreadsheet data.",
      image: "",
      tech: ["Python", "Automation"],
      githubLink: "https://github.com/Arpit019/Automated_bulk_mailer_from_sheet",
      class: "OPEN_SOURCE",
      rank: "C-CLASS"
    }
  ];

  const currentMissions = activeTab === 'DEPLOYED' ? deployedMissions : githubMissions;

  return (
    <section id="projects" className="py-20 bg-slate-900 relative font-mono">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="inline-block text-4xl font-orbitron font-bold text-white mb-2 uppercase tracking-widest">
            <Crosshair className="inline-block mb-1 mr-2 text-pink-400" />
            MISSION_LOGS
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-slate-950 p-1 border-2 border-slate-700 flex">
            <button
              onClick={() => setActiveTab('DEPLOYED')}
              className={`px-8 py-3 font-orbitron font-bold text-sm transition-all ${activeTab === 'DEPLOYED' ? 'bg-cyan-500 text-black shadow-[0_0_15px_#00f3ff]' : 'text-slate-400 hover:text-white'}`}
            >
              DEPLOYED_CAMPAIGNS
            </button>
            <button
              onClick={() => setActiveTab('GITHUB')}
              className={`px-8 py-3 font-orbitron font-bold text-sm transition-all ${activeTab === 'GITHUB' ? 'bg-pink-500 text-black shadow-[0_0_15px_#ff003c]' : 'text-slate-400 hover:text-white'}`}
            >
              GITHUB_REPOSITORIES
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {currentMissions.map((mission, index) => (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                onClick={() => setSelectedMission(mission)}
                className="bg-slate-900 border border-slate-700 p-6 pixel-corners cursor-pointer group hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-slate-800 text-slate-400 font-bold px-2 py-1 text-[10px] group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                  {mission.class}
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-slate-950 border border-slate-800 p-3 group-hover:border-cyan-500 transition-colors">
                    {activeTab === 'DEPLOYED' ? <Terminal className="text-cyan-400" /> : <Code2 className="text-pink-400" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {mission.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                      {mission.objective}
                    </p>
                    <div className="flex gap-2 text-xs">
                      {mission.tech.slice(0, 2).map((t, i) => (
                        <span key={i} className="text-slate-500 bg-slate-950 px-2 py-1 border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <MissionModal 
        mission={selectedMission} 
        isOpen={!!selectedMission} 
        onClose={() => setSelectedMission(null)} 
      />
    </section>
  );
};

export default Projects;
