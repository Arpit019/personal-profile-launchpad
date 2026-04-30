import React from "react";
import { motion } from "framer-motion";
import { Database, Terminal, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DynamicCursorCharacter from "@/components/CursorCharacter";
import LightsaberBot from "@/components/LightsaberBot";

import { dataLogs } from "@/data/blogData";

const Blog: React.FC = () => {

  return (
    <div className="min-h-screen bg-slate-950 font-mono relative">
      <div className="scanlines" />
      <DynamicCursorCharacter />
      <LightsaberBot />
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 md:px-6 relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 border-b-2 border-slate-800 pb-6 flex items-end justify-between"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white uppercase glitch-text" data-text="DATA_LOGS">
              DATA_LOGS
            </h1>
            <p className="text-cyan-400 mt-2 flex items-center gap-2">
              <Database size={16} /> ACCESSING_MAIN_DATABANKS...
            </p>
          </div>
          <Link to="/" className="hidden md:flex items-center gap-2 text-pink-400 hover:text-white transition-colors bg-slate-900 border border-slate-700 px-4 py-2 pixel-corners">
            RETURN_TO_BASE
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataLogs.map((log, index) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-900 border-2 border-slate-700 p-6 pixel-corners group hover:border-pink-500 hover:shadow-[0_0_20px_#ff003c] transition-all cursor-pointer relative"
            >
              <div className="absolute top-0 right-0 bg-slate-800 text-slate-500 text-[10px] px-2 py-1 group-hover:bg-pink-500 group-hover:text-black transition-colors">
                {log.id}
              </div>
              
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-bold border-b border-slate-800 pb-2">
                <Terminal size={14} className="text-cyan-400" /> {log.date} // {log.category}
              </div>
              
              <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                {log.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {log.summary}
              </p>
              
              <div className="flex items-center text-cyan-400 text-xs font-bold uppercase group-hover:text-white transition-colors">
                DECRYPT_FILE <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 bg-slate-900 border border-slate-700 p-8 text-center pixel-corners"
        >
          <FileText size={32} className="mx-auto text-purple-400 mb-4" />
          <h3 className="text-2xl font-orbitron font-bold text-white mb-2">SUBSCRIBE_TO_LOGS</h3>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">Receive encrypted transmissions regarding product strategy, tech leadership, and AI evolution.</p>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="ENTER_COMM_LINK..."
              className="flex-1 bg-slate-950 border-2 border-slate-700 text-white px-4 py-3 font-mono focus:outline-none focus:border-cyan-400 pixel-corners"
            />
            <button className="bg-cyan-500 text-black font-orbitron font-bold px-8 py-3 hover:bg-white transition-colors pixel-corners">
              TRANSMIT
            </button>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
