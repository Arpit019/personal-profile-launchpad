
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GhoulLoader = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate angle to look at cursor
  const calculateAngle = () => {
    // Get center of the ghoul
    const ghoulX = window.innerWidth - 100;
    const ghoulY = window.innerHeight - 100;
    
    // Calculate angle between ghoul and cursor
    const deltaX = mousePosition.x - ghoulX;
    const deltaY = mousePosition.y - ghoulY;
    
    return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  };

  return (
    <div className="fixed bottom-12 right-12 z-50 pointer-events-none">
      <motion.div 
        className="w-24 h-24 flex items-center justify-center"
        animate={{
          rotate: calculateAngle(),
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center relative overflow-hidden border-2 border-gray-400">
          {/* Eyes - black visor */}
          <div className="absolute w-14 h-4 bg-black rounded-full top-7 transform translate-y-[-2px]"></div>
          
          {/* Helmet details */}
          <div className="absolute w-20 h-10 bg-white rounded-t-full top-0"></div>
          
          {/* Lightsaber handle */}
          <motion.div 
            className="absolute right-0 bottom-0 transform translate-y-1 translate-x-7 w-3 h-10 bg-gradient-to-b from-gray-800 to-gray-600 rounded-md"
            initial={{ y: 0 }}
            animate={{ y: [0, -2, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {/* Lightsaber blade */}
            <motion.div 
              className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-2.5 h-14 bg-red-600 rounded-full"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                scaleY: [0, 1, 1, 0],
                boxShadow: [
                  "0 0 0px rgba(220, 38, 38, 0)",
                  "0 0 10px rgba(220, 38, 38, 0.7)",
                  "0 0 10px rgba(220, 38, 38, 0.7)",
                  "0 0 0px rgba(220, 38, 38, 0)"
                ]
              }}
              transition={{ 
                duration: 3,
                times: [0, 0.1, 0.9, 1],
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default GhoulLoader;
