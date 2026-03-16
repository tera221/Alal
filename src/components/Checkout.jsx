import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Checkout({ location, onClose }) {
  const [step, setStep] = useState(1);

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[300] bg-white text-black p-6 md:p-20 flex flex-col md:flex-row gap-20"
    >
      {/* SECTION GAUCHE : FORMULAIRE */}
      <div className="flex-1 max-w-2xl space-y-12">
        <header className="space-y-4">
          <button onClick={onClose} className="text-[10px] tracking-widest uppercase opacity-40 hover:opacity-100 transition-opacity">← Retourner à la collection</button>
          <h2 className="text-5xl font-serif italic text-black">Finaliser l'expérience.</h2>
        </header>

        <form className="space-y-10 font-light">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col border-b border-black/10 py-2 focus-within:border-black transition-colors">
              <label className="text-[9px] uppercase tracking-widest opacity-40">Nom Complet</label>
              <input type="text" className="bg-transparent outline-none text-lg py-2" placeholder="Jean Dupont" />
            </div>
            <div className="flex flex-col border-b border-black/10 py-2 focus-within:border-black transition-colors">
              <label className="text-[9px] uppercase tracking-widest opacity-40">Email</label>
              <input type="email" className="bg-transparent outline-none text-lg py-2" placeholder="jean@email.com" />
            </div>
          </div>

          <div className="flex flex-col border-b border-black/10 py-2 bg-black/5 p-4 rounded-sm">
            <label className="text-[9px] uppercase tracking-widest opacity-40">Destination de livraison</label>
            <input 
              type="text" 
              disabled 
              value={`${location.city}, ${location.country || 'Sénégal'}`} 
              className="bg-transparent outline-none text-lg py-2 font-medium opacity-80" 
            />
            <p className="text-[9px] italic opacity-40 mt-1">Personnalisé selon votre choix initial.</p>
          </div>

          <div className="space-y-6 pt-10">
            <h3 className="flex items-center gap-2 text-sm font-serif italic uppercase tracking-wider">
              <CreditCard size={18} /> Paiement Sécurisé
            </h3>
            <div className="border border-black/10 p-6 rounded-sm space-y-4">
              <input type="text" placeholder="Numéro de carte" className="w-full bg-transparent border-b border-black/5 py-2 outline-none" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" className="bg-transparent border-b border-black/5 py-2 outline-none" />
                <input type="text" placeholder="CVC" className="bg-transparent border-b border-black/5 py-2 outline-none" />
              </div>
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-black text-white py-6 flex items-center justify-center gap-4 group"
          >
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold">Confirmer la commande</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </form>
      </div>

      {/* SECTION DROITE : RÉSUMÉ (DESIGN MAGAZINE) */}
      <div className="hidden md:flex flex-col w-80 bg-[#f9f9f9] p-10 justify-between">
        <div className="space-y-8">
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-40">Votre Panier</p>
          <div className="space-y-4">
            <div className="flex justify-between items-end border-b border-black/5 pb-4">
              <p className="font-serif italic text-lg leading-none">L'Essence Pure</p>
              <p className="text-sm">240 €</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between text-xs opacity-60">
            <span>Livraison</span>
            <span>Offerte</span>
          </div>
          <div className="flex justify-between text-2xl font-serif italic border-t border-black pt-4">
            <span>Total</span>
            <span>240 €</span>
          </div>
          <div className="flex items-center gap-2 opacity-30 text-[9px] tracking-tighter uppercase mt-4">
            <ShieldCheck size={12} /> Cryptage SSL 256-bit
          </div>
        </div>
      </div>
    </motion.div>
  );
}