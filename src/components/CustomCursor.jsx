import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor({ theme }) {
  const [isMobile, setIsMobile] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] border 
        ${theme === 'dark' ? 'border-white bg-white/10' : 'border-black bg-black/10'}`}
    >
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full 
        ${theme === 'dark' ? 'bg-white' : 'bg-black'}`} 
      />
    </motion.div>
  );
}