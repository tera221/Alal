import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCard({ product, theme, onOpenQuickView, parallax }) {
  const isDark = theme === 'dark';

  return (
    <motion.div 
      style={{ y: parallax }}
      className="group relative cursor-crosshair"
      onClick={() => onOpenQuickView(product)}
    >
      {/* IMAGE CONTAINER */}
      <div className="relative overflow-hidden aspect-[4/5] bg-neutral-200">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        
        {/* BADGE CATEGORIE AU SURVOL */}
        <div className="absolute top-6 left-6 overflow-hidden">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            className="text-[8px] uppercase tracking-widest bg-white text-black px-3 py-1"
          >
            {product.category}
          </motion.p>
        </div>

        {/* OVERLAY APERÇU */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end justify-center pb-10">
          <span className="text-white text-[9px] uppercase tracking-[0.4em] backdrop-blur-md px-6 py-3 border border-white/20">
            Aperçu
          </span>
        </div>
      </div>

      {/* TEXT DETAILS */}
      <div className="mt-8 flex flex-col items-start space-y-2">
        <div className="w-full flex justify-between items-baseline">
          <h3 className="text-lg md:text-2xl font-serif font-light">{product.name}</h3>
          <span className="text-[10px] uppercase tracking-widest opacity-40">{product.price}</span>
        </div>
        <div className={`h-[1px] w-0 group-hover:w-full transition-all duration-700 ${isDark ? 'bg-white/20' : 'bg-black/20'}`} />
      </div>
    </motion.div>
  );
}