import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Importation de tes composants (Assure-toi que les chemins sont corrects)
import SplashScreen from './components/SplashScreen.jsx';
import LocationPage from './components/LocationPage.jsx';
import Homepage from './components/Homepage.jsx';
import Header from './components/Header.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import FloatingCart from './components/FloatingCart.jsx';
import Footer from './components/Footer.jsx';
import Checkout from './components/Checkout.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const [theme, setTheme] = useState('dark'); // 'dark' ou 'light'
  const [cartCount, setCartCount] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Synchronisation du thème avec le document HTML
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // On force la couleur de fond du body pour éviter les flashs visuels
    document.body.style.backgroundColor = theme === 'dark' ? '#050505' : '#ffffff';
  }, [theme]);

  // Fonction de bascule du thème
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden selection:bg-[#c5a059] selection:text-white">
      
      {/* 1. COUCHE VISUELLE PERMANENTE (Grain & Curseur) */}
      <div className="film-grain" />
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading ? (
          /* 2. SPLASH SCREEN : L'entrée en scène (Durée ~3s) */
          <SplashScreen key="splash" finishLoading={() => setLoading(false)} />
        ) : !userLocation ? (
          /* 3. LOCATION PAGE : Personnalisation par la ville */
          <LocationPage key="loc" onDiscover={setUserLocation} theme={theme} />
        ) : (
          /* 4. MAIN EXPERIENCE : Le site complet */
          <motion.div 
            key="main-experience" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Header reçoit le thème et la fonction toggle */}
            <Header theme={theme} toggleTheme={toggleTheme} />
            
            <main>
              <Homepage 
                location={userLocation} 
                theme={theme} 
                onAddToCart={() => setCartCount(prev => prev + 1)} 
              />
            </main>

            <Footer theme={theme} />

            {/* Panier flottant pour déclencher le checkout */}
            <FloatingCart 
              cartCount={cartCount} 
              theme={theme}
              onOpenCheckout={() => setShowCheckout(true)} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. OVERLAY DE PAIEMENT (Sorti du flux pour rester au-dessus) */}
      <AnimatePresence>
        {showCheckout && (
          <Checkout 
            location={userLocation} 
            theme={theme}
            onClose={() => setShowCheckout(false)} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
  {selectedProduct && (
    <ProductDrawer 
      product={selectedProduct} 
      onClose={() => setSelectedProduct(null)} 
      theme={theme}
    />
  )}
</AnimatePresence>
      
    </div>
  );
}