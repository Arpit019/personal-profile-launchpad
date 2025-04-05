
import React from "react";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

type ContactAchievementCardProps = {
  inView?: boolean;
};

const ContactAchievementCard = ({ inView = false }: ContactAchievementCardProps) => {
  return (
    <motion.div 
      style={{ 
        transform: inView ? "translateY(0px)" : "translateY(-10px)",
        opacity: inView ? 1 : 0,
        transition: "transform 0.5s ease 0.6s, opacity 0.5s ease 0.6s"
      }}
      className="mt-10 bg-slate-800/70 backdrop-blur-sm p-6 rounded-lg border border-purple-900/30 shadow-lg"
    >
      <h4 className="text-lg font-medium text-white mb-4 flex items-center">
        <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
        Achievement Unlocked
      </h4>
      <div className="space-y-3">
        {[
          {
            icon: "🏆",
            title: "Most Innovative Employee",
            subtitle: "2024 • Celestial IT Verse",
            delay: 0.7
          },
          {
            icon: "🚀",
            title: "Product Milestone Achiever",
            subtitle: "2024 • Tap for Tech",
            delay: 0.8
          },
          {
            icon: "🎓",
            title: "B.E. in Computer Science",
            subtitle: "AKTU",
            delay: 0.9
          }
        ].map((achievement, index) => (
          <motion.div 
            key={index}
            className="flex items-center gap-3 bg-slate-700/50 p-3 rounded-md border border-purple-900/20"
            style={{ 
              transform: inView ? "translateY(0px)" : "translateY(10px)",
              opacity: inView ? 1 : 0,
              transition: `transform 0.5s ease ${achievement.delay}s, opacity 0.5s ease ${achievement.delay}s`
            }}
          >
            <div className="text-yellow-500 text-xl">{achievement.icon}</div>
            <div>
              <p className="text-white font-medium">{achievement.title}</p>
              <p className="text-slate-400 text-sm">{achievement.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactAchievementCard;
