import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Phone, Mail, ShoppingBag, User, ChevronDown, Menu, X } from 'lucide-react';

export default function Header({ theme, toggleTheme, cartCount = 0 }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const borderColor = isDark ? 'border-white/10' : 'border-black/10';
  const dropdownBg = isDark ? 'bg-[#050505]' : 'bg-white';

  const categories = [
    { name: "Hommes", sub: ["Tailoring", "Souliers", "Accessoires"], isNew: false },
    { name: "Femmes", sub: ["Robes", "Sacs", "Bijoux"], isNew: true }, // Badge sur Femmes
    { name: "Enfants", sub: ["Bébé", "Garçon", "Fille"], isNew: false },
    { name: "Archives", sub: ["Saison 2025", "Ventes Privées"], isNew: false }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-[100] transition-colors duration-700 ${isDark ? 'bg-transparent' : 'bg-white/90 backdrop-blur-md'}`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {/* 1. TOP BAR */}
      <div className={`hidden md:flex justify-between items-center px-10 py-2 border-b ${borderColor} text-[9px] uppercase tracking-[0.2em] ${textColor} opacity-80 transition-colors duration-700`}>
        <div className="flex gap-6">
          <a href="tel:+33123456789" className="hover:opacity-50 transition-opacity flex items-center gap-2">
            <Phone size={10} /> +33 1 23 45 67 89
          </a>
          <a href="mailto:contact@alal.business" className="hover:opacity-50 transition-opacity flex items-center gap-2">
            <Mail size={10} /> contact@alal.business
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="opacity-50 italic">Collection Hiver 2026</span>
          <button onClick={toggleTheme} className={`p-1.5 rounded-full border ${borderColor} hover:scale-110 transition-all`}>
            {isDark ? <Sun size={12} /> : <Moon size={12} />}
          </button>
        </div>
      </div>

      {/* 2. MAIN NAV */}
      <nav className={`relative flex justify-between items-center px-6 md:px-10 py-6 ${textColor} transition-colors duration-700`}>
        
        {/* Navigation avec Badges */}
        <div className="hidden md:flex gap-10 items-center">
          {categories.map((cat) => (
            <div 
              key={cat.name} 
              onMouseEnter={() => setActiveDropdown(cat.name)}
              className="relative py-2 cursor-pointer flex items-center gap-2"
            >
              <div className="flex items-center gap-1 text-[11px] uppercase tracking-[0.3em] font-light">
                {cat.name}
                <ChevronDown size={8} className={`transition-transform duration-300 ${activeDropdown === cat.name ? 'rotate-180' : ''}`} />
              </div>

              {/* Point Doré Animé pour "Femmes" ou toute catégorie New */}
              {cat.isNew && (
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a059] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#c5a059]"></span>
                </span>
              )}
            </div>
          ))}
        </div>

        {/* LOGO (Devient noir en mode clair) */}
        <div className="absolute left-1/2 -translate-x-1/2 text-2xl tracking-[1.2em] font-light select-none">
          ALAL
        </div>

        {/* Actions Icons */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block group cursor-pointer overflow-hidden">
            <p className="text-[9px] uppercase tracking-widest group-hover:-translate-y-full transition-transform duration-300">Rechercher</p>
            <p className="text-[9px] uppercase tracking-widest translate-y-full group-hover:-translate-y-full transition-transform duration-300 absolute text-[#c5a059]">Catalogue</p>
          </div>
          <User size={18} strokeWidth={1} className="cursor-pointer hover:opacity-50" />
          <div className="relative cursor-pointer">
            <ShoppingBag size={18} strokeWidth={1} />
            {cartCount > 0 && (
              <span className={`absolute -top-1 -right-2 text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                {cartCount}
              </span>
            )}
          </div>
        </div>

        {/* 3. MEGA MENU DROPDOWN */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`absolute top-full left-0 w-full ${dropdownBg} ${textColor} border-t ${borderColor} py-16 px-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)]`}
            >
              <div className="max-w-7xl mx-auto grid grid-cols-4 gap-20">
                <div className="col-span-1">
                  <h5 className="text-[9px] uppercase tracking-[0.6em] opacity-30 mb-8">Sélection</h5>
                  <ul className="space-y-5">
                    {categories.find(c => c.name === activeDropdown)?.sub.map((item, idx) => (
                      <li key={item} className="group flex items-center gap-3 text-lg font-serif italic cursor-pointer">
                        <span className="text-[10px] font-sans not-italic opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                        <span className="group-hover:translate-x-3 transition-transform duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Visual Banner in Menu */}
                <div className={`col-span-3 h-72 ${isDark ? 'bg-white/5' : 'bg-black/5'} relative flex items-center justify-center group overflow-hidden`}>
                  <div className="text-center z-10">
                    <p className="text-[10px] uppercase tracking-[1em] mb-4">The {activeDropdown} Lookbook</p>
                    <button className={`px-8 py-3 border ${borderColor} text-[9px] uppercase tracking-widest hover:bg-current hover:text-reverse transition-all`}>
                      Découvrir
                    </button>
                  </div>
                  {/* Effet de lueur en fond */}
                  <div className="absolute w-64 h-64 bg-[#c5a059]/10 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}