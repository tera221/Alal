import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import ProductCard from './ProductCard.jsx';

export default function Homepage({ location, theme }) {
  const { scrollYProgress } = useScroll();
  
  // Effet de parallaxe sur les grands titres
  const xLeft = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const xRight = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  return (
    <div className={`transition-colors duration-1000 ${theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-white text-black'}`}>
      
      {/* SECTION 1 : HERO MONUMENTAL */}
      <section className="relative h-[120vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="z-10 text-center pointer-events-none">
          <motion.h1 style={{ x: xLeft }} className="text-giant font-serif italic italic-text">
            L'Équilibre
          </motion.h1>
          <motion.h1 style={{ x: xRight }} className="text-giant font-serif ml-20 md:ml-40">
            Parfait
          </motion.h1>
        </div>

        {/* Image de fond en parallaxe légère */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1550639524-a6f58345a2ca?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Hero Background"
          />
        </motion.div>
      </section>

      {/* SECTION 2 : LA RÉVÉLATION (Diptique) */}
      <section className="py-40 px-6 md:px-20 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-5 mb-20 md:mb-0">
          <RevealImage 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000" 
            caption="01. La Coupe"
          />
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-8 self-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-xs"
          >
            <p className="text-[10px] uppercase tracking-[0.5em] mb-6 opacity-40">L'Atelier</p>
            <h2 className="text-3xl font-serif italic mb-6">Une quête de l'essentiel, façonnée à {location.city}.</h2>
            <p className="text-xs font-light leading-relaxed opacity-60">
              Nos artisans travaillent le tissu comme une seconde peau. Chaque couture est une promesse de durabilité et de confort absolu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 : LE LOOKBOOK (Horizontal Scroll Effect) */}
      <section className="py-40 border-t border-current/5">
        <div className="px-6 md:px-20 mb-20 flex justify-between items-end">
          <h3 className="text-5xl md:text-8xl font-serif">Saison I</h3>
          <p className="text-[10px] uppercase tracking-widest pb-4">Scroll pour explorer</p>
        </div>
        
        <div className="flex gap-10 overflow-x-auto px-6 md:px-20 no-scrollbar pb-20">
          <div className="min-w-[300px] md:min-w-[450px]">
            <ProductCard product={{name: "Veste Lazare", price: "850€", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80"}} />
          </div>
          <div className="min-w-[300px] md:min-w-[450px] mt-20">
            <ProductCard product={{name: "Pantalon Épure", price: "420€", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80"}} />
          </div>
          <div className="min-w-[300px] md:min-w-[450px]">
            <ProductCard product={{name: "Manteau Signature", price: "1200€", image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80"}} />
          </div>
        </div>
      </section>

      {/* SECTION 4 : PLEIN ÉCRAN IMMERSIF */}
      <section className="h-[100vh] w-full relative reveal-mask-container">
        <RevealImage 
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000" 
          fullScreen 
        />
        <div className="absolute inset-0 flex items-center justify-center text-white mix-blend-difference">
          <h2 className="text-center text-4xl md:text-6xl font-serif italic">
            "Le style est une manière de dire <br/> qui vous êtes sans parler."
          </h2>
        </div>
      </section>
    </div>
  );
}

// COMPOSANT INTERNE POUR L'EFFET DE RÉVÉLATION
function RevealImage({ src, caption, fullScreen = false }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className={`reveal-mask ${isInView ? 'is-in-view' : ''} ${fullScreen ? 'h-full w-full' : 'aspect-[3/4]'}`}>
      <motion.img 
        src={src}
        initial={{ scale: 1.2 }}
        animate={isInView ? { scale: 1 } : { scale: 1.2 }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
        className="w-full h-full object-cover"
        alt="Reveal"
      />
      {caption && <p className="text-[9px] uppercase tracking-[0.4em] mt-4 opacity-40">{caption}</p>}
    </div>
  );
}