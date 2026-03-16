import React from 'react';
import { motion } from 'framer-motion';

// Mise à jour de ton tableau de produits dans ProductSection.jsx
const products = [
  {
    id: 1,
    name: "L'Essence Pure",
    category: "Prêt-à-porter",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800",
    price: "850 €",
    layout: "col-span-2 row-span-2",
  },
  {
    id: 2,
    name: "Noir Absolu",
    category: "Accessoires",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
    price: "320 €",
    layout: "col-span-1 row-span-1",
  },
  {
    id: 3,
    name: "Sérénité",
    category: "Horlogerie",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    price: "2400 €",
    layout: "col-span-1 row-span-2 mt-40",
  },
  {
    id: 4,
    name: "L'Infini",
    category: "Parfums",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800",
    price: "195 €",
    layout: "col-span-1 row-span-1 -mt-20",
  }
];

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      className={`relative group cursor-none ${product.layout}`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {/* Conteneur 3D */}
      <motion.div 
        whileHover={{ 
          rotateX: 5, 
          rotateY: -5,
          scale: 1.02
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className="relative overflow-hidden bg-[#111] rounded-sm aspect-[3/4]"
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        
        {/* Glow doux au hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </motion.div>

      {/* Détails du produit - Typographie discrète */}
      <div className="mt-6 flex justify-between items-start">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-1">{product.category}</p>
          <h4 className="text-xl font-serif italic text-white/90">{product.name}</h4>
        </div>
        <span className="text-sm font-light text-white/60">{product.price}</span>
      </div>

      {/* Bouton Emotionnel (Invisible par défaut) */}
      <motion.button 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="mt-4 text-[10px] tracking-widest uppercase border-b border-white/20 pb-1 hover:border-white transition-colors"
      >
        Explorer l'histoire
      </motion.button>
    </motion.div>
  );
};

export default function ProductSection() {
  return (
    <section className="py-32 px-10 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 items-start">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}