import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const CyberDrone = React.lazy(() => import('../components/CyberDrone'));

const Sandbox3D = () => {
  return (
    <div className="w-full h-screen bg-slate-950 flex flex-col items-center justify-center relative font-mono overflow-hidden">
      <div className="absolute top-10 left-10 z-10 text-cyan-400">
        <h1 className="text-3xl font-bold tracking-widest mb-2 font-orbitron">3D_SANDBOX</h1>
        <p className="text-sm opacity-80">&gt; Testing procedural mesh with cursor tracking...</p>
        <p className="text-sm opacity-80 mt-4 text-pink-400">Move your mouse to interact with the drone's optical sensor.</p>
      </div>

      <div className="w-full h-full relative z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <React.Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b535f6" />
            <pointLight position={[10, -10, 10]} intensity={0.5} color="#00f3ff" />
            
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
              <CyberDrone />
            </Float>

            {/* Environment for nice reflections */}
            <Environment preset="city" />
            
            {/* Ground shadow */}
            <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#00f3ff" />
            
            {/* Allow user to rotate the camera slightly for fun in sandbox */}
            <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
          </React.Suspense>
        </Canvas>
      </div>
      
      <a href="/" className="absolute bottom-10 left-10 z-10 px-6 py-2 bg-slate-900 border border-slate-700 text-white hover:border-cyan-400 transition-colors">
        RETURN TO BASE
      </a>
    </div>
  );
};

export default Sandbox3D;
