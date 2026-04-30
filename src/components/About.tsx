import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase, Heart, Activity, Brain, Shield, Sword } from "lucide-react";
import { usePortfolioContent } from "@/hooks/useCommandData";

const About = () => {
  const { about } = usePortfolioContent();

  // Helper to colorize the bio prefixes (e.g. CURRENT_QUEST, BACKGROUND)
  const formatBioLine = (line: string, index: number) => {
    if (!line.trim()) return null;
    const colors = ["text-pink-400", "text-cyan-400", "text-purple-400", "text-green-400"];
    const color = colors[index % colors.length];
    
    // Check if the line starts with "> PREFIX:"
    const match = line.match(/^(> \w+:|>[A-Z_]+:)/);
    if (match) {
      const prefix = match[0];
      const rest = line.substring(prefix.length);
      return (
        <p key={index}>
          <span className={color}>{prefix}</span>{rest}
        </p>
      );
    }
    return <p key={index}>{line}</p>;
  };

  return (
    <section id="about" className="py-20 bg-slate-950 relative overflow-hidden font-mono">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-4xl font-orbitron font-bold text-cyan-400 mb-2 relative glitch-text" data-text="CHARACTER_SHEET">
            CHARACTER_SHEET
          </h2>
          <p className="text-pink-400 text-lg">&gt; VIEWING_PROFILE: ARPIT_TRIPATHI</p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-6xl mx-auto">
          {/* Avatar and Vital Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex flex-col gap-6"
          >
            <div className="bg-slate-900 border-2 border-cyan-500 p-4 pixel-corners shadow-[0_0_15px_#00f3ff] h-full flex flex-col relative">
              <div className="absolute top-0 right-0 bg-cyan-500 text-black font-orbitron font-bold px-3 py-1 text-xs">
                LVL {about?.stats?.Level || "99"}
              </div>
              
              <div className="w-full aspect-square border-2 border-slate-700 bg-slate-800 mb-4 overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                  alt="Avatar"
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                />
                <div className="absolute inset-0 bg-cyan-500/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute inset-0 scanlines opacity-50"></div>
                
                {/* Targeting Reticle */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
              </div>

              <div className="flex-1 flex flex-col justify-end">
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-cyan-400 mb-1">
                    <span>HP</span>
                    <span>{about?.stats?.HP || "100/100"}</span>
                  </div>
                  <div className="h-2 bg-slate-800 border border-slate-600 w-full relative">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-green-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-purple-400 mb-1">
                    <span>MANA (COFFEE)</span>
                    <span>999/999</span>
                  </div>
                  <div className="h-2 bg-slate-800 border border-slate-600 w-full relative">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                    />
                  </div>
                </div>
                
                <div className="bg-slate-950 border border-slate-700 p-2 text-center text-xs text-slate-400">
                  CLASS: <span className="text-cyan-400">{about?.stats?.Class || "Product Architect"}</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Lore and Base Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 flex flex-col gap-6"
          >
            {/* Lore Terminal */}
            <div className="bg-slate-900 border border-slate-700 p-6 flex-1 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
              <h3 className="text-xl font-orbitron font-bold text-white mb-4 border-b-2 border-purple-900 pb-2 flex items-center gap-2">
                <Shield className="text-purple-400" /> CHARACTER_LORE
              </h3>
              <div className="text-slate-300 space-y-4 text-sm leading-relaxed">
                {(about?.bio || "").split("\n").map((line: string, index: number) => formatBioLine(line, index))}
              </div>
            </div>

            {/* Base Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-slate-700 p-4 text-center hover:border-cyan-400 transition-colors cursor-default">
                <Sword className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-orbitron font-bold text-white">95</div>
                <div className="text-[10px] text-slate-400 uppercase">Strategy (STR)</div>
              </div>
              <div className="bg-slate-900 border border-slate-700 p-4 text-center hover:border-pink-400 transition-colors cursor-default">
                <Shield className="h-6 w-6 text-pink-400 mx-auto mb-2" />
                <div className="text-3xl font-orbitron font-bold text-white">90</div>
                <div className="text-[10px] text-slate-400 uppercase">Leadership (DEF)</div>
              </div>
              <div className="bg-slate-900 border border-slate-700 p-4 text-center hover:border-yellow-400 transition-colors cursor-default">
                <Activity className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-orbitron font-bold text-white">88</div>
                <div className="text-[10px] text-slate-400 uppercase">Agility (AGI)</div>
              </div>
              <div className="bg-slate-900 border border-slate-700 p-4 text-center hover:border-green-400 transition-colors cursor-default">
                <Brain className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-orbitron font-bold text-white">96</div>
                <div className="text-[10px] text-slate-400 uppercase">Systems (INT)</div>
              </div>
            </div>

            {/* Contact Inventory */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 bg-slate-900 border border-slate-700 p-3 hover:bg-slate-800 transition-colors">
                <div className="bg-slate-950 p-2 border border-slate-800"><MapPin size={16} className="text-purple-400" /></div>
                <div>
                  <div className="text-[10px] text-slate-500">BASE_CAMP</div>
                  <div className="text-sm text-slate-300">India</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-900 border border-slate-700 p-3 hover:bg-slate-800 transition-colors">
                <div className="bg-slate-950 p-2 border border-slate-800"><Mail size={16} className="text-cyan-400" /></div>
                <div>
                  <div className="text-[10px] text-slate-500">COMMS_LINK</div>
                  <div className="text-sm text-slate-300">arpit01999@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-900 border border-slate-700 p-3 hover:bg-slate-800 transition-colors">
                <div className="bg-slate-950 p-2 border border-slate-800"><Briefcase size={16} className="text-pink-400" /></div>
                <div>
                  <div className="text-[10px] text-slate-500">GUILD_ROLE</div>
                  <div className="text-sm text-slate-300">Head of Product</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-900 border border-slate-700 p-3 hover:bg-slate-800 transition-colors">
                <div className="bg-slate-950 p-2 border border-slate-800"><Heart size={16} className="text-red-400" /></div>
                <div>
                  <div className="text-[10px] text-slate-500">FAVORITE_ITEM</div>
                  <div className="text-sm text-slate-300">Gaming Mechanics</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
