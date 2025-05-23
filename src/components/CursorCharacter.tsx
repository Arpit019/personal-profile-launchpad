
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import GhoulLoader from './GhoulLoader';

// Define proper types for THREE.js objects
type GroupProps = {
  ref: React.RefObject<THREE.Group>;
};

// Character component that follows the cursor
const Character = ({ mousePosition }: { mousePosition: { x: number, y: number } }) => {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const [activating, setActivating] = useState(false);
  const [idleTimer, setIdleTimer] = useState<NodeJS.Timeout | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  // Set up the Stormtrooper character with dimensions
  useEffect(() => {
    if (group.current) {
      // Scale to approximate 7cm x 5cm
      group.current.scale.set(0.6, 0.6, 0.6);
      // Position it further from the corner for better visibility
      group.current.position.set(1.2, -0.8, 0);
    }
  }, []);

  // Listen for mouse clicks to activate lightsaber
  useEffect(() => {
    const handleMouseClick = () => {
      setClicked(true);
      setActivating(true);
      
      // Reset click state after animation
      setTimeout(() => {
        setClicked(false);
      }, 1500);
    };
    
    window.addEventListener('click', handleMouseClick);
    
    return () => {
      window.removeEventListener('click', handleMouseClick);
    };
  }, []);

  // Animation for movement
  useFrame((state) => {
    if (!group.current) return;

    // Convert mouse position to 3D space
    const x = (mousePosition.x / window.innerWidth) * 2 - 1;
    const y = -(mousePosition.y / window.innerHeight) * 2 + 1;
    
    // Smooth rotation to follow cursor
    const targetRotationY = x * 1.2; // Increased rotation range
    const targetRotationX = y * 0.5; // Increased rotation range
    
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y || 0,
      targetRotationY,
      0.1 // Slightly faster tracking
    );
    
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x || 0,
      targetRotationX,
      0.1
    );
    
    // Gentle hovering motion when idle
    if (!activating) {
      group.current.position.y = -0.8 + Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  // Handle activation (lightsaber effect)
  useEffect(() => {
    if (activating) {
      // Lightsaber activation animation
      const timer = setTimeout(() => {
        setActivating(false);
      }, 2000); // Longer activation period
      return () => clearTimeout(timer);
    }
  }, [activating]);

  // Track when mouse stops moving
  useEffect(() => {
    clearTimeout(idleTimer as NodeJS.Timeout);
    
    const timer = setTimeout(() => {
      setActivating(true);
    }, 3000);
    
    setIdleTimer(timer);
    
    return () => clearTimeout(timer);
  }, [mousePosition]);

  return (
    <group ref={group}>
      {/* Stormtrooper helmet */}
      <mesh position={[0, 0.2, 0]}>
        {/* Main white helmet */}
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={0xffffff} />
      </mesh>
      
      {/* Black visor area */}
      <mesh position={[0, 0.2, 0.3]}>
        <boxGeometry args={[0.7, 0.2, 0.1]} />
        <meshStandardMaterial color={0x111111} />
      </mesh>
      
      {/* Side helmet details - dark gray */}
      <mesh position={[-0.35, 0.2, 0]}>
        <boxGeometry args={[0.1, 0.3, 0.5]} />
        <meshStandardMaterial color={0x333333} />
      </mesh>
      
      <mesh position={[0.35, 0.2, 0]}>
        <boxGeometry args={[0.1, 0.3, 0.5]} />
        <meshStandardMaterial color={0x333333} />
      </mesh>
      
      {/* Back of helmet */}
      <mesh position={[0, 0.2, -0.25]}>
        <sphereGeometry args={[0.45, 32, 32, 0, Math.PI]} />
        <meshStandardMaterial color={0xffffff} />
      </mesh>
      
      {/* Mouth area detail */}
      <mesh position={[0, -0.05, 0.3]}>
        <boxGeometry args={[0.3, 0.1, 0.1]} />
        <meshStandardMaterial color={0x333333} />
      </mesh>
      
      {/* Body - just hint of neck/shoulders */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 0.4, 32]} />
        <meshStandardMaterial color={0xffffff} />
      </mesh>
      
      {/* Lightsaber handle */}
      <mesh position={[0.3, -0.4, 0.6]} rotation={[0, 0, Math.PI / 5]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
        <meshStandardMaterial color={0x555555} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Red lightsaber blade - always present but changes opacity based on activation */}
      <mesh position={[0.7, 0, 0.8]} rotation={[0, 0, Math.PI / 5]}>
        <cylinderGeometry args={[0.07, 0.07, 2.8, 16]} /> 
        <meshStandardMaterial 
          color={0xff0000} 
          emissive={0xff0000}
          emissiveIntensity={activating || clicked ? 5 : 0.2} 
          transparent={true}
          opacity={activating || clicked ? 0.9 : 0.3}
        />
        {/* Inner glow core - intensity changes with activation */}
        <pointLight 
          color={0xff0000} 
          intensity={activating || clicked ? 4 : 0} 
          distance={3} 
          decay={2} 
          position={[0, 0, 0]} 
        />
      </mesh>
    </group>
  );
};

// Main component that tracks mouse and renders the 3D scene
const ThreeDCharacter = ({ mousePosition }: { mousePosition: { x: number, y: number } }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <Character mousePosition={mousePosition} />
    </Canvas>
  );
};

// Properly typed ErrorBoundary component
interface ErrorBoundaryProps {
  children: React.ReactNode;
  onError?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Simple error boundary component
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error in 3D character:", error, errorInfo);
    if (this.props.onError) {
      this.props.onError();
    }
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

// Main component wrapper with error handling
const CursorCharacter = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [hasError, setHasError] = useState(false);
  
  // Track mouse position
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

  // Position and size adjustments - larger size and better position for visibility
  return (
    <div className="fixed bottom-5 right-5 w-80 h-80 z-40 pointer-events-none">
      <Suspense fallback={<GhoulLoader />}>
        {!hasError ? (
          <ErrorBoundary onError={() => setHasError(true)}>
            <ThreeDCharacter mousePosition={mousePosition} />
          </ErrorBoundary>
        ) : (
          <GhoulLoader />
        )}
      </Suspense>
    </div>
  );
};

// Dynamically load the component to avoid SSR issues
const DynamicCursorCharacter = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  
  return <CursorCharacter />;
};

export default DynamicCursorCharacter;
