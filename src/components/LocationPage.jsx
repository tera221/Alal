import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function LocationPage({ onDiscover }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.length > 2) onDiscover({ city });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)" }}
      transition={{ duration: 1.5 }}
      className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Vidéo de fond - Ultra lente */}
      <video 
        autoPlay loop muted playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105"
      >
        <source src="/abstract-city.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 w-full max-w-md px-10">
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-[10px] tracking-[0.4em] uppercase mb-8 text-white/40 text-center"
        >
          Bienvenue chez ALAL BUSINESS
        </motion.p>
        
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="relative group">
            <input 
              autoFocus
              type="text" 
              placeholder="Où habitez-vous ?" 
              className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-light outline-none focus:border-white transition-all duration-700 text-center"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          
          <motion.p className="text-xs font-light text-white/30 text-center italic">
            Pour personnaliser votre expérience
          </motion.p>
        </form>
      </div>
    </motion.div>
  );
}