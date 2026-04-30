import React, { useRef, useEffect, lazy, Suspense, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import DynamicCursorCharacter from "@/components/CursorCharacter";
import LightsaberBot from "@/components/LightsaberBot";

const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Experience = lazy(() => import("@/components/Experience"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));
const CTA = lazy(() => import("@/components/CTA"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900">
    <div className="text-center">
      <div className="text-cyan-400 font-mono text-xl animate-pulse">&gt; LOADING_MODULE...</div>
    </div>
  </div>
);

const Index = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [bootSequence, setBootSequence] = useState<string[]>([]);
  const [bootComplete, setBootComplete] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.05 && !hasScrolled) {
      setHasScrolled(true);
    }
  });

  useEffect(() => {
    // BIOS Boot Sequence Simulation
    const sequence = [
      "ARPIT_OS v2.0.26 (C) Copyright 2026",
      "BIOS Date 04/30/26 19:40:00 Ver 9.04",
      "CPU: Product Strategist Processor @ 3.4GHz",
      "Memory Test: 64000K OK",
      " ",
      "Loading System Drivers...",
      "  [OK] Product_Leadership.sys",
      "  [OK] Technical_Architecture.sys",
      "  [OK] UX_Strategy.dll",
      "  [OK] Gamification_Engine.exe",
      " ",
      "Mounting File Systems...",
      "  /usr/projects/AAG_App ... MOUNTED",
      "  /usr/projects/HMS ... MOUNTED",
      "  /usr/projects/GitHub ... MOUNTED",
      " ",
      "Executing sequence: INTRODUCE_PLAYER_ONE",
      "SYSTEM READY."
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < sequence.length) {
        setBootSequence(prev => [...prev, sequence[currentStep]]);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => setBootComplete(true), 800);
      }
    }, 150); // Fast but readable

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans" ref={containerRef} id="home">
      {/* Global CRT Scanlines */}
      <div className="scanlines" />

      {/* BIOS Boot Overlay */}
      {!bootComplete && (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col p-8 font-mono text-cyan-400">
          {bootSequence.map((line, i) => (
            <div key={i} className="mb-1 text-sm md:text-base">
              {line}
            </div>
          ))}
          {bootSequence.length < 18 && (
            <div className="w-3 h-5 bg-cyan-400 animate-pulse mt-1" />
          )}
        </div>
      )}

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <DynamicCursorCharacter />
      <LightsaberBot />

      <Navbar />
      <Hero />
      
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Experience />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <CTA />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<div className="h-20 bg-slate-900" />}>
        <Footer />
      </Suspense>
      
      <motion.button
        className="fixed bottom-6 right-6 w-12 h-12 rounded-none pixel-corners bg-purple-600 text-white flex items-center justify-center shadow-[0_0_15px_#b535f6] z-40 border border-purple-400"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollYProgress.get() > 0.2 ? 1 : 0,
          scale: scrollYProgress.get() > 0.2 ? 1 : 0,
        }}
        whileHover={{ scale: 1.1, backgroundColor: '#00f3ff', borderColor: '#fff', boxShadow: '0 0 20px #00f3ff', color: '#000' }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </motion.button>
    </div>
  );
};

export default Index;
