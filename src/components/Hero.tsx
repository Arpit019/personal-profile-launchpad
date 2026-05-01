import React from "react";
import { ArrowDown, Code, Shield, Gamepad } from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolioContent } from "@/hooks/useCommandData";
import { Canvas } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
const CyberDrone = React.lazy(() => import("./CyberDrone"));

const Hero = () => {
  const { hero } = usePortfolioContent();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.8, staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-950 pt-16 relative overflow-hidden">
      {/* Retrowave Grid Background */}
      <div className="absolute inset-0 perspective-[1000px] overflow-hidden">
        <div className="absolute w-full h-[200%] bottom-[-50%] bg-[linear-gradient(transparent_95%,rgba(181,53,246,0.5)_100%),linear-gradient(90deg,transparent_95%,rgba(181,53,246,0.5)_100%)] bg-[length:40px_40px] animate-[grid-move_10s_linear_infinite]" style={{ transform: 'rotateX(60deg)' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full">
          
          {/* Left Column: Text Content */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="relative mb-6 mt-10 lg:mt-0">
              <motion.div 
                className="inline-block text-xs font-orbitron font-bold text-black bg-cyan-400 px-4 py-1 pixel-corners shadow-[0_0_10px_#00f3ff] animate-pulse"
                whileHover={{ scale: 1.1, backgroundColor: "#ff003c", color: "#fff", boxShadow: "0 0 15px #ff003c" }}
              >
                ► INSERT COIN
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative mb-2">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-white leading-tight uppercase glitch-text" data-text="ARPIT TRIPATHI">
                ARPIT TRIPATHI
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="text-xl md:text-2xl text-purple-400 font-orbitron font-medium mb-8 tracking-widest">
                {hero?.title || "PRODUCT_ARCHITECT // TECH_LEADER // GAMER"}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-slate-300 max-w-2xl mb-12 text-lg font-mono leading-relaxed border-l-4 border-cyan-400 pl-4 bg-slate-900/50 p-4 pixel-corners">
                <span className="text-pink-400">&gt;</span> SYSTEM STATUS: {hero?.status || "ONLINE"}<br/>
                <span className="text-pink-400">&gt;</span> MISSION: {hero?.tagline || "Craft digital experiences that solve real-world problems and scale fast."}<br/>
                <span className="text-cyan-400 animate-pulse">_</span>
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-6 justify-center lg:justify-start mb-12"
            >
              <div className="flex flex-col items-center group cursor-crosshair">
                <div className="w-16 h-16 bg-slate-900 border-2 border-cyan-500 pixel-corners flex items-center justify-center mb-2 group-hover:bg-cyan-500 group-hover:shadow-[0_0_20px_#00f3ff] transition-all">
                  <Code className="h-8 w-8 text-cyan-400 group-hover:text-black transition-colors" />
                </div>
                <span className="text-cyan-400 font-mono text-xs">STRATEGY</span>
              </div>
              <div className="flex flex-col items-center group cursor-crosshair">
                <div className="w-16 h-16 bg-slate-900 border-2 border-purple-500 pixel-corners flex items-center justify-center mb-2 group-hover:bg-purple-500 group-hover:shadow-[0_0_20px_#b535f6] transition-all">
                  <Shield className="h-8 w-8 text-purple-400 group-hover:text-black transition-colors" />
                </div>
                <span className="text-purple-400 font-mono text-xs">LEADERSHIP</span>
              </div>
              <div className="flex flex-col items-center group cursor-crosshair">
                <div className="w-16 h-16 bg-slate-900 border-2 border-pink-500 pixel-corners flex items-center justify-center mb-2 group-hover:bg-pink-500 group-hover:shadow-[0_0_20px_#ff003c] transition-all">
                  <Gamepad className="h-8 w-8 text-pink-400 group-hover:text-black transition-colors" />
                </div>
                <span className="text-pink-400 font-mono text-xs">GAMING</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-cyan-500 text-black font-orbitron font-bold pixel-corners hover:bg-white hover:shadow-[0_0_20px_#fff] transition-all"
              >
                START_GAME
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent text-pink-400 border-2 border-pink-500 font-orbitron font-bold pixel-corners hover:bg-pink-500 hover:text-black hover:shadow-[0_0_20px_#ff003c] transition-all"
              >
                MULTIPLAYER
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Character Canvas */}
          <motion.div 
            className="lg:w-1/2 w-full h-[400px] lg:h-[600px] relative z-0 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <React.Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b535f6" />
                <pointLight position={[10, -10, 10]} intensity={0.5} color="#00f3ff" />
                
                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                  <CyberDrone />
                </Float>

                <Environment preset="city" />
                <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#00f3ff" />
              </React.Suspense>
            </Canvas>
          </motion.div>

        </div>
      </div>
      
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-crosshair z-20"
      >
        <ArrowDown className="text-cyan-400 h-8 w-8 drop-shadow-[0_0_5px_#00f3ff]" />
      </motion.a>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes grid-move {
          0% { transform: rotateX(60deg) translateY(0); }
          100% { transform: rotateX(60deg) translateY(40px); }
        }
      `}} />
    </section>
  );
};

export default Hero;
