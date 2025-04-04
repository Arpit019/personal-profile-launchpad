
import React, { useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Index = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  // Monitor scroll progress to trigger animations
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.05 && !hasScrolled) {
      setHasScrolled(true);
    }
  });

  return (
    <div className="min-h-screen bg-slate-900" ref={containerRef}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Game Loading Overlay - Shows only on initial load */}
      <motion.div 
        className="fixed inset-0 bg-slate-900 z-[100] flex flex-col items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <motion.div 
          className="text-3xl md:text-5xl font-bold text-purple-500 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          PLAYER ONE: ARPIT TRIPATHI
        </motion.div>
        
        <motion.div 
          className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden"
          initial={{ width: "64px", opacity: 0 }}
          animate={{ width: "256px", opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <motion.div 
            className="h-full bg-purple-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.7 }}
          />
        </motion.div>
        
        <motion.div 
          className="text-sm text-slate-400 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        >
          Loading experience...
        </motion.div>
      </motion.div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      
      {/* Scroll To Top Button with gaming theme */}
      <motion.button
        className="fixed bottom-6 right-6 w-12 h-12 rounded-lg bg-purple-700 text-white flex items-center justify-center shadow-lg z-40 border-2 border-purple-500"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollYProgress.get() > 0.2 ? 1 : 0,
          scale: scrollYProgress.get() > 0.2 ? 1 : 0,
        }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(139, 92, 246, 0.7)" }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </motion.button>
    </div>
  );
};

export default Index;
