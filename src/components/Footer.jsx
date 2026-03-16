import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

export default function Footer({ theme }) {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const borderColor = isDark ? 'border-white/10' : 'border-black/10';

  const footerLinks = [
    { title: "Boutique", links: ["Hommes", "Femmes", "Enfants", "Archives"] },
    { title: "Maison ALAL", links: ["Notre Histoire", "Artisanat", "Carrières", "Contact"] },
    { title: "Aide", links: ["Livraisons", "Retours", "Suivi de commande", "FAQ"] }
  ];

  return (
    <footer className={`relative w-full px-6 md:px-20 pt-32 pb-12 border-t ${borderColor} transition-colors duration-700`}>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
        
        {/* 1. NEWSLETTER SECTION */}
        <div className="col-span-1 md:col-span-1">
          <p className="text-[10px] uppercase tracking-[0.4em] mb-8 opacity-50">Newsletter</p>
          <p className="text-sm font-light mb-6 opacity-70">
            Inscrivez-vous pour recevoir les invitations aux ventes privées et les nouvelles collections.
          </p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="votre@email.com"
              className={`w-full bg-transparent border-b ${borderColor} py-3 text-xs outline-none focus:border-[#c5a059] transition-colors`}
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 group-hover:translate-x-1 transition-transform">
              <ArrowUpRight size={16} strokeWidth={1} />
            </button>
          </div>
        </div>

        {/* 2. NAVIGATION LINKS */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <p className="text-[10px] uppercase tracking-[0.4em] mb-8 opacity-30">{section.title}</p>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[11px] uppercase tracking-widest hover:opacity-50 transition-opacity">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3. SOCIAL & CONTACT */}
        <div className="col-span-1 text-right flex flex-col items-end">
          <p className="text-[10px] uppercase tracking-[0.4em] mb-8 opacity-30">Suivez-nous</p>
          <div className="flex gap-6 mb-12">
            <Instagram size={18} strokeWidth={1} className="cursor-pointer hover:text-[#c5a059] transition-colors" />
            <Twitter size={18} strokeWidth={1} className="cursor-pointer hover:text-[#c5a059] transition-colors" />
            <Facebook size={18} strokeWidth={1} className="cursor-pointer hover:text-[#c5a059] transition-colors" />
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] leading-relaxed opacity-50">
            ALAL Business HQ<br />
            Dakar, Sénégal
          </div>
        </div>
      </div>

      {/* 4. BOTTOM BAR */}
      <div className={`pt-12 border-t ${borderColor} flex flex-col md:flex-row justify-between items-center gap-6`}>
        <div className="text-[8px] uppercase tracking-[0.5em] opacity-40">
          © 2026 ALAL Business. Tous droits réservés.
        </div>
        
        {/* LOGO DE RAPPEL */}
        <div className="text-xl tracking-[1em] font-light opacity-20">ALAL</div>
        
        <div className="flex gap-8 text-[8px] uppercase tracking-[0.4em] opacity-40">
          <a href="#" className="hover:opacity-100">Mentions Légales</a>
          <a href="#" className="hover:opacity-100">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}