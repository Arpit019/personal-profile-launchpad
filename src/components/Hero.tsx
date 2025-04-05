import React from "react";
import { ArrowDown, Code, Globe, Laptop, Gamepad } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Floating animation for background elements
  const floatingAnimation = {
    initial: {},
    animate: {
      y: [0, 15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-900 pt-16 relative overflow-hidden"
    >
      {/* 3D Grid Background */}
      <div className="absolute inset-0 perspective-1000">
        <div className="grid-lines">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-purple-900/30"
              style={{ top: `${i * 5}%`, transform: `translateZ(${i * -5}px)` }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={i + 'v'}
              className="absolute h-full w-px bg-purple-900/30"
              style={{ left: `${i * 5}%`, transform: `translateZ(${i * -5}px)` }}
            />
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 70%, rgba(0, 0, 0, 0) 100%)`,
            }}
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            custom={i}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono text-purple-500 bg-slate-950/70 px-3 py-1 rounded-full border border-purple-800/50">
              PLAYER ONE
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight relative">
              Arpit Tripathi
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-500"></span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-xl md:text-2xl text-purple-400 font-medium mb-6 font-mono tracking-wide">
              <span className="text-blue-400">Product Strategist</span> • 
              <span className="text-green-400"> Builder</span> • 
              <span className="text-pink-400"> Tech Leader</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-slate-300 max-w-2xl mb-8 text-lg">
              I'm a dynamic and impact-driven product leader with a strong engineering foundation. 
              From gaming to healthcare tech and fintech, I craft digital experiences that 
              solve real-world problems, delight users, and scale fast.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center mb-12"
          >
            <motion.div 
              className="flex flex-col items-center p-4 relative"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-purple-900/20 rounded-lg -z-10 blur-md"></div>
              <Code className="h-8 w-8 text-purple-400 mb-2" />
              <span className="text-white text-sm">Strategy</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center p-4 relative"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-blue-900/20 rounded-lg -z-10 blur-md"></div>
              <Globe className="h-8 w-8 text-blue-400 mb-2" />
              <span className="text-white text-sm">Leadership</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center p-4 relative"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-green-900/20 rounded-lg -z-10 blur-md"></div>
              <Gamepad className="h-8 w-8 text-green-400 mb-2" />
              <span className="text-white text-sm">Gaming</span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Contact Me</span>
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-transparent text-purple-400 border border-purple-500 rounded-md hover:bg-purple-900/30 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-0 bg-purple-900/40 group-hover:w-full transition-all duration-300"></span>
              <span className="relative">View Projects</span>
            </motion.a>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 1, 
              y: [0, 10, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }
            }}
            href="#about"
            className="absolute bottom-10"
            aria-label="Scroll down"
          >
            <ArrowDown className="text-purple-400" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
