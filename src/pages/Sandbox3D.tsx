import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const CyberDrone = () => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const eyeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    // Make the entire drone float slightly
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 2) * 0.1;
    }

    // Make the head and eye track the mouse
    if (headRef.current && eyeRef.current) {
      // state.pointer.x and y are normalized coordinates from -1 to 1
      const targetX = state.pointer.x * Math.PI * 0.25;
      const targetY = state.pointer.y * Math.PI * 0.25;

      // Smoothly interpolate current rotation to target rotation
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.1);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetY, 0.1);
    }
  });

  return (
    <group ref={groupRef} dispose={null} scale={1.5}>
      {/* Main Body (Floating Diamond/Octahedron shape) */}
      <mesh position={[0, -0.5, 0]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="#1e293b" wireframe={true} />
      </mesh>

      <mesh position={[0, -0.5, 0]}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Floating Head / Sensor Unit */}
      <group ref={headRef} position={[0, 0.8, 0]}>
        {/* Head Base */}
        <mesh>
          <cylinderGeometry args={[0.4, 0.3, 0.5, 8]} />
          <meshStandardMaterial color="#1e293b" roughness={0.5} metalness={0.5} />
        </mesh>

        {/* Glowing Eye */}
        <mesh ref={eyeRef} position={[0, 0, 0.35]}>
          <boxGeometry args={[0.4, 0.15, 0.1]} />
          <meshStandardMaterial 
            color="#00f3ff" 
            emissive="#00f3ff" 
            emissiveIntensity={2} 
            toneMapped={false} 
          />
        </mesh>

        {/* Side Antennas */}
        <mesh position={[-0.45, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 0.2]} />
          <meshStandardMaterial color="#ff003c" emissive="#ff003c" emissiveIntensity={1} />
        </mesh>
        <mesh position={[0.45, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 0.2]} />
          <meshStandardMaterial color="#ff003c" emissive="#ff003c" emissiveIntensity={1} />
        </mesh>
      </group>

      {/* Energy Rings around the drone */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.01, 16, 100]} />
        <meshStandardMaterial color="#b535f6" emissive="#b535f6" emissiveIntensity={1} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0.2, 0]} position={[0, -0.5, 0]}>
        <torusGeometry args={[0.9, 0.01, 16, 100]} />
        <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

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
        </Canvas>
      </div>
      
      <a href="/" className="absolute bottom-10 left-10 z-10 px-6 py-2 bg-slate-900 border border-slate-700 text-white hover:border-cyan-400 transition-colors">
        RETURN TO BASE
      </a>
    </div>
  );
};

export default Sandbox3D;
