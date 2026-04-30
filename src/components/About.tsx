import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase, Heart, Activity, Brain, Shield, Sword } from "lucide-react";

const About = () => {
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
              <div className="absolute top-0 right-0 bg-cyan-500 text-black font-orbitron font-bold px-3 py-1 text-xs">LVL 99</div>
              
              <div className="w-full aspect-square border-2 border-slate-700 bg-slate-800 mb-4 overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                  alt="Avatar"
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                />
                <div className="absolute inset-0 bg-cyan-500/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute bottom-2 left-2 font-orbitron text-xl font-bold text-white tracking-widest drop-shadow-[0_2px_2px_#000]">
                  ARPIT T.
                </div>
              </div>

              <div className="space-y-4 flex-grow">
                {/* HP Bar */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-red-400 font-bold flex items-center gap-1"><Heart size={12}/> HP (STAMINA)</span>
                    <span className="text-red-400">999/999</span>
                  </div>
                  <div className="h-4 bg-slate-800 border border-slate-600 p-[2px]">
                    <motion.div className="h-full bg-red-500" initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1 }} />
                  </div>
                </div>

                {/* MP Bar */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-blue-400 font-bold flex items-center gap-1"><Activity size={12}/> MP (CREATIVITY)</span>
                    <span className="text-blue-400">850/999</span>
                  </div>
                  <div className="h-4 bg-slate-800 border border-slate-600 p-[2px]">
                    <motion.div className="h-full bg-blue-500" initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1, delay: 0.2 }} />
                  </div>
                </div>

                {/* SP Bar */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-yellow-400 font-bold flex items-center gap-1"><Brain size={12}/> SP (INTELLECT)</span>
                    <span className="text-yellow-400">920/999</span>
                  </div>
                  <div className="h-4 bg-slate-800 border border-slate-600 p-[2px]">
                    <motion.div className="h-full bg-yellow-500" initial={{ width: 0 }} whileInView={{ width: "92%" }} transition={{ duration: 1, delay: 0.4 }} />
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-slate-800 text-cyan-400 border border-cyan-900 px-2 py-1 text-[10px] uppercase font-bold">Product_Owner</span>
                <span className="bg-slate-800 text-pink-400 border border-pink-900 px-2 py-1 text-[10px] uppercase font-bold">Tech_Lead</span>
                <span className="bg-slate-800 text-purple-400 border border-purple-900 px-2 py-1 text-[10px] uppercase font-bold">Game_Dev</span>
              </div>
            </div>
          </motion.div>
          
          {/* Inventory and Bio */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 flex flex-col gap-6"
          >
            {/* Bio Terminal */}
            <div className="bg-slate-900/80 border-2 border-purple-500 p-6 pixel-corners shadow-[0_0_15px_#b535f6]">
              <h3 className="text-xl font-orbitron font-bold text-white mb-4 border-b-2 border-purple-900 pb-2 flex items-center gap-2">
                <Shield className="text-purple-400" /> CHARACTER_LORE
              </h3>
              <div className="text-slate-300 space-y-4 text-sm leading-relaxed">
                <p>
                  &gt; <span className="text-pink-400">CURRENT_QUEST:</span> Heading product at Celestial IT Verse Pvt. Ltd. Leading the vision and execution of a social fantasy gaming platform from ground zero.
                </p>
                <p>
                  &gt; <span className="text-cyan-400">BACKGROUND:</span> Specialized in connecting dots across users, tech, design, and business. Equipped with a versatile skillset spanning Gaming, Healthcare Tech, and Fintech.
                </p>
                <p>
                  &gt; <span className="text-purple-400">PASSIVE_ABILITY:</span> Creates digital experiences that not only solve real-world problems but also scale fast and generate high revenue multipliers.
                </p>
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
