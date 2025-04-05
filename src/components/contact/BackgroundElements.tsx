
import React from "react";
import { motion } from "framer-motion";

const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="grid-lines">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-purple-900/20"
            style={{ top: `${i * 5}%` }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={i + 'v'}
            className="absolute h-full w-px bg-purple-900/20"
            style={{ left: `${i * 5}%` }}
          />
        ))}
      </div>
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 70%, rgba(0, 0, 0, 0) 100%)`,
          }}
          animate={{
            y: [0, Math.random() * 30, 0],
            transition: {
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse" as const
            }
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundElements;
