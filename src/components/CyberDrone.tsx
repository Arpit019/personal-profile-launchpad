import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CyberDrone = () => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
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
    <group ref={groupRef} dispose={null} scale={1.8}>
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

export default CyberDrone;
