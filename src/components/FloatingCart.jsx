import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function FloatingCart({ cartCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-[200]">
      <motion.div 
        layout
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative flex flex-col items-end"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="mb-6 w-72 bg-white text-black p-8 rounded-sm shadow-2xl"
            >
              <h4 className="font-serif italic text-2xl mb-4">Votre Sélection</h4>
              {cartCount === 0 ? (
                <p className="text-[10px] tracking-widest uppercase opacity-40">Le panier est vide</p>
              ) : (
                <div className="flex justify-between items-center">
                  <p className="text-sm font-light">{cartCount} objet(s) ajouté(s)</p>
                  <button className="flex items-center gap-2 group text-[10px] tracking-widest uppercase font-bold">
                    Checkout <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative h-16 w-16 bg-white flex items-center justify-center rounded-full shadow-white/10 shadow-2xl overflow-hidden group"
        >
          <motion.div 
            className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" 
          />
          <ShoppingBag 
            size={20} 
            strokeWidth={1.5} 
            className="relative z-10 text-black group-hover:text-white transition-colors duration-500" 
          />
          
          {cartCount > 0 && (
            <span className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full" />
          )}
        </motion.button>
      </motion.div>
    </div>
  );
}