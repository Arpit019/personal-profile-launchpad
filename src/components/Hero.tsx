
import React from "react";
import { ArrowDown, Code, Globe, Laptop } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900 pt-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/10 animate-pulse"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Arpit Tripathi
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-3xl text-blue-400 font-medium mb-6">
              Product Strategist • Builder • Tech Leader
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-slate-300 max-w-2xl mb-8 text-lg">
              I'm a dynamic and impact-driven product leader with a strong engineering foundation. 
              From gaming to healthcare tech and fintech, I craft digital experiences that 
              solve real-world problems, delight users, and scale fast.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-6 justify-center mb-12"
          >
            <div className="flex flex-col items-center p-4">
              <Code className="h-8 w-8 text-blue-400 mb-2" />
              <span className="text-white text-sm">Strategy</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <Globe className="h-8 w-8 text-blue-400 mb-2" />
              <span className="text-white text-sm">Leadership</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <Laptop className="h-8 w-8 text-blue-400 mb-2" />
              <span className="text-white text-sm">Technology</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/20"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-transparent text-blue-400 border border-blue-400 rounded-md hover:bg-blue-900/30 transition-colors"
            >
              View Projects
            </a>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ 
              duration: 0.5, 
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}
            href="#about"
            className="absolute bottom-10"
            aria-label="Scroll down"
          >
            <ArrowDown className="text-blue-400" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
