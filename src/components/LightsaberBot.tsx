import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LightsaberBot = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClashing, setIsClashing] = useState(false);
  const [clashPos, setClashPos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      setIsClashing(true);
      setClashPos({ x: e.clientX, y: e.clientY });
      
      setTimeout(() => {
        setIsClashing(false);
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  // Calculate angle between bot (bottom left) and mouse
  const botX = 50; // approximate bot center X
  const botY = window.innerHeight - 50; // approximate bot center Y
  
  const angle = Math.atan2(mousePos.y - botY, mousePos.x - botX) * (180 / Math.PI);

  return (
    <>
      {/* The Bot */}
      <motion.div 
        className="fixed bottom-6 left-6 z-40 pointer-events-none flex flex-col items-center justify-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className="relative">
          {/* Bot Body */}
          <div className="w-16 h-16 bg-slate-800 rounded-2xl border-2 border-cyan-500 shadow-[0_0_15px_rgba(0,243,255,0.5)] flex items-center justify-center relative z-10 overflow-hidden">
            {/* Bot Eye tracking mouse */}
            <motion.div 
              className="w-8 h-4 bg-black rounded-full flex items-center justify-center"
              animate={{
                x: (mousePos.x - window.innerWidth / 2) * 0.01,
                y: (mousePos.y - window.innerHeight / 2) * 0.01,
              }}
            >
              <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(255,0,0,0.8)] animate-pulse" />
            </motion.div>
          </div>
          
          {/* Bot's Lightsaber */}
          <motion.div 
            className="absolute top-1/2 left-1/2 origin-left z-0"
            style={{ 
              rotate: angle,
              transformOrigin: "0 50%",
            }}
          >
            <div className="h-2 bg-white rounded-r-full shadow-[0_0_15px_#ff003c,0_0_30px_#ff003c] transition-all duration-200"
                 style={{ 
                   width: isClashing ? Math.sqrt(Math.pow(mousePos.x - botX, 2) + Math.pow(mousePos.y - botY, 2)) - 20 : 60 
                 }}
            />
          </motion.div>
        </div>
        <div className="mt-2 text-xs font-orbitron text-cyan-500 bg-slate-900/80 px-2 py-1 rounded border border-cyan-900/50">
          DEFENDER BOT
        </div>
      </motion.div>

      {/* Clash Particles */}
      <AnimatePresence>
        {isClashing && (
          <motion.div 
            className="fixed pointer-events-none z-50 rounded-full bg-white shadow-[0_0_30px_20px_#ff003c,0_0_50px_30px_#00f3ff]"
            style={{ left: clashPos.x, top: clashPos.y, width: 4, height: 4 }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-1 h-6 bg-yellow-300 rounded-full shadow-[0_0_10px_#fff]"
                style={{ 
                  transformOrigin: "0 0",
                  rotate: (i * 45) + "deg"
                }}
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LightsaberBot;
