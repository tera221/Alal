import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function ProductStory({ product, onClose }) {
  if (!product) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black overflow-y-auto"
    >
      {/* Bouton Fermer Minimaliste */}
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-[110] p-4 text-white/50 hover:text-white transition-colors"
      >
        <X size={32} strokeWidth={1} />
      </button>

      {/* Story Content */}
      <div className="relative">
        
        {/* Scène 1 : L'Image Narrative */}
        <section className="h-screen w-full relative">
          <motion.img 
            layoutId={`img-${product.id}`}
            src={product.image}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
          
          <div className="absolute bottom-20 left-10 md:left-20">
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[10px] tracking-[0.5em] uppercase text-white/60 mb-4"
            >
              L'Histoire
            </motion.p>
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-5xl md:text-8xl font-serif italic"
            >
              {product.name}
            </motion.h2>
          </div>
        </section>

        {/* Scène 2 : Le Détail Technique (Respiration) */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h3 className="text-sm tracking-widest uppercase text-white/40">Bénéfice</h3>
              <p className="text-2xl font-light leading-relaxed">
                Une texture pensée pour le confort absolu, une coupe qui respecte le mouvement naturel du corps.
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-white/50 font-light italic border-l border-white/20 pl-6">
                "ALAL BUSINESS ne propose pas d'objets, mais des compagnons de vie."
              </p>
            </div>
          </div>
        </section>

        {/* Scène 3 : Appel à l'action (Le panier discret) */}
        <section className="h-[60vh] flex flex-col items-center justify-center space-y-12">
          <div className="text-center">
            <p className="text-4xl font-serif mb-2">{product.price}</p>
            <p className="text-[10px] tracking-widest text-white/40 uppercase font-sans">TVA incluse — Livraison offerte à {product.city || 'votre adresse'}</p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-6 bg-white text-black text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-opacity-90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            Ajouter à l'expérience
          </motion.button>
        </section>

      </div>
    </motion.div>
  );
}