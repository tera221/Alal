import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="pt-48 pb-32 px-8 md:px-24 max-w-5xl mx-auto"
    >
      <motion.div variants={itemVariants} className="space-y-6 mb-24">
        <span className="text-[10px] tracking-[0.5em] text-zinc-500 uppercase font-body">Origine du Système</span>
        <h1 className="text-7xl md:text-9xl font-heading uppercase tracking-tighter leading-none">
          Le Silence <br /> <span className="italic">Visuel</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <motion.div variants={itemVariants} className="space-y-8">
          <p className="text-2xl md:text-3xl font-accent italic text-zinc-300 leading-relaxed">
            "ALAL n'est pas une réponse au besoin, mais une proposition d'effacement."
          </p>
          <div className="font-body text-zinc-500 space-y-6 text-lg leading-relaxed">
            <p>
              Dans un monde saturé par l'information et l'esthétique du bruit, nous cultivons l'absence. 
              Chaque module ALAL est conçu comme une extension de l'individu, fusionnant avec l'environnement 
              plutôt que de le dominer.
            </p>
            <p>
              Nos laboratoires travaillent sur la matérialité de l'invisible. Nous utilisons des polymères 
              à réfraction contrôlée et des alliages bio-organiques pour créer des objets qui défient 
              la perception immédiate.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="aspect-[3/4] bg-zinc-900 overflow-hidden grayscale">
          <img 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000" 
            alt="Abstraction ALAL"
            className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-[3s]"
          />
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mt-32 pt-24 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="font-heading uppercase text-sm mb-4">Éthique</h4>
          <p className="text-xs text-zinc-600 font-body uppercase tracking-widest leading-loose">
            Production limitée. <br /> Traçabilité cryptographique. <br /> Impact environnemental neutre.
          </p>
        </div>
        <div>
          <h4 className="font-heading uppercase text-sm mb-4">Lieu</h4>
          <p className="text-xs text-zinc-600 font-body uppercase tracking-widest leading-loose">
            Studio furtif. <br /> Secteur 07. <br /> Genève, CH.
          </p>
        </div>
        <div>
          <h4 className="font-heading uppercase text-sm mb-4">Contact</h4>
          <p className="text-xs text-zinc-600 font-body uppercase tracking-widest leading-loose hover:text-white transition-colors cursor-pointer">
            liaison@alal.system
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;