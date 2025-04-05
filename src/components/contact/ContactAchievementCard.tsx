
import React from "react";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

const ContactAchievementCard = () => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }} 
      className="mt-10 bg-slate-800/70 backdrop-blur-sm p-6 rounded-lg border border-purple-900/30 shadow-lg"
    >
      <h4 className="text-lg font-medium text-white mb-4 flex items-center">
        <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
        Achievement Unlocked
      </h4>
      <div className="space-y-3">
        <div className="flex items-center gap-3 bg-slate-700/50 p-3 rounded-md border border-purple-900/20">
          <div className="text-yellow-500 text-xl">🏆</div>
          <div>
            <p className="text-white font-medium">Most Innovative Employee</p>
            <p className="text-slate-400 text-sm">2024 • Celestial IT Verse</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-slate-700/50 p-3 rounded-md border border-purple-900/20">
          <div className="text-yellow-500 text-xl">🚀</div>
          <div>
            <p className="text-white font-medium">Product Milestone Achiever</p>
            <p className="text-slate-400 text-sm">2024 • Tap for Tech</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-slate-700/50 p-3 rounded-md border border-purple-900/20">
          <div className="text-yellow-500 text-xl">🎓</div>
          <div>
            <p className="text-white font-medium">B.E. in Computer Science</p>
            <p className="text-slate-400 text-sm">AKTU</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactAchievementCard;
