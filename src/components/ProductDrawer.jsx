import React from 'react';
import { motion } from 'framer-motion';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';

export default function ProductDrawer({ product, onClose, theme }) {
  const isDark = theme === 'dark';
  
  return (
    <>
      {/* Overlay sombre en arrière-plan */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
      />

      {/* Le Tiroir */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] z-[201] shadow-2xl p-8 md:p-12 flex flex-col
          ${isDark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black'}`}
      >
        <button onClick={onClose} className="self-end mb-12 opacity-50 hover:opacity-100 transition-opacity">
          <X size={30} strokeWidth={1} />
        </button>

        <div className="flex-1 overflow-y-auto no-scrollbar">
          {/* Image de présentation */}
          <div className="aspect-[3/4] overflow-hidden mb-10">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Détails */}
          <p className="text-[10px] uppercase tracking-[0.5em] opacity-40 mb-2">{product.category}</p>
          <h2 className="text-4xl font-serif italic mb-4">{product.name}</h2>
          <p className="text-xl font-light mb-8">{product.price}</p>

          <div className={`h-[1px] w-full mb-8 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />

          <p className="text-sm font-light leading-relaxed opacity-70 mb-10">
            Confectionnée à partir d'un drap de laine italien d'exception, cette pièce incarne l'ADN de la Maison ALAL. Une coupe architecturale pensée pour le mouvement.
          </p>

          {/* Sélection de Taille */}
          <div className="mb-12">
            <p className="text-[9px] uppercase tracking-widest mb-4">Sélectionner Taille</p>
            <div className="flex gap-4">
              {['S', 'M', 'L', 'XL'].map(size => (
                <button 
                  key={size}
                  className={`w-12 h-12 border text-[10px] flex items-center justify-center transition-all
                    ${isDark ? 'border-white/20 hover:border-white' : 'border-black/20 hover:border-black'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bouton d'action fixe en bas */}
        <button className={`w-full py-6 flex items-center justify-center gap-4 group transition-colors
          ${isDark ? 'bg-white text-black hover:bg-[#c5a059]' : 'bg-black text-white hover:bg-[#c5a059]'}`}>
          <span className="text-[10px] uppercase tracking-[0.3em]">Ajouter au Panier</span>
          <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </motion.div>
    </>
  );
}