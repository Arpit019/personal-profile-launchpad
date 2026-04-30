import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const DynamicCursorCharacter = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth springing for the trailing ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(0, springConfig);
  const cursorYSpring = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorXSpring.set(e.clientX - 16); // Center the 32x32 ring
      cursorYSpring.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorXSpring, cursorYSpring]);

  return (
    <>
      {/* Small dot cursor (instant) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[100] shadow-[0_0_10px_#00f3ff]"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Trailing ring (spring) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-500/50 pointer-events-none z-[99]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(0, 243, 255, 0.8)' : 'rgba(0, 243, 255, 0.3)',
          backgroundColor: isHovering ? 'rgba(0, 243, 255, 0.1)' : 'transparent',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default DynamicCursorCharacter;
