import React from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen({ finishLoading }) {
  return (
    <motion.div 
      className="fixed inset-0 z-[500] bg-black flex items-center justify-center"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, letterSpacing: "0.2em" }}
        animate={{ opacity: 1, letterSpacing: "1.5em" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        onAnimationComplete={finishLoading}
        className="text-white text-2xl md:text-5xl font-serif italic"
      >
        ALAL
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-20 text-[10px] tracking-[0.5em] text-white/30 uppercase"
      >
        L'expérience se prépare
      </motion.div>
    </motion.div>
  );
}