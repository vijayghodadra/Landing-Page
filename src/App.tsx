import { useState, useEffect } from 'react';
// @ts-ignore
import Lenis from 'lenis';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import FeaturedCollection from './components/FeaturedCollection';
import Benefits from './components/Benefits';
import BrandStory from './components/BrandStory';
import DetailsGrid from './components/DetailsGrid';
import Comparison from './components/Comparison';
import Reviews from './components/Reviews';
import CartDrawer from './components/CartDrawer';
import type { CartItem } from './components/CartDrawer';
import Footer from './components/Footer';

import { productData } from './data/productData';
import type { ProductBundle } from './data/productData';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleAddToCart = (bundle: ProductBundle, quantity: number) => {
    const qtyToAdd = quantity > 0 ? quantity : 1;
    setCartItems((prevItems) => {
      const existingIdx = prevItems.findIndex((item) => item.bundle.id === bundle.id);
      if (existingIdx > -1) {
        return prevItems.map((item, idx) => 
          idx === existingIdx 
            ? { ...item, quantity: item.quantity + qtyToAdd }
            : item
        );
      } else {
        return [...prevItems, { bundle, quantity: qtyToAdd }];
      }
    });
    setIsCartOpen(true);
  };

  const handleBuyNow = (bundle: ProductBundle, quantity: number) => {
    handleAddToCart(bundle, quantity);
  };

  const handleQuickBuy = () => {
    const defaultBundle = productData.bundles[1] || productData.bundles[0];
    handleAddToCart(defaultBundle, 1);
  };

  const handleUpdateQty = (bundleId: string, delta: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.bundle.id === bundleId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (bundleId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.bundle.id !== bundleId));
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navigation 
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onQuickBuy={handleQuickBuy}
      />

      <main>
        <Hero 
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
        <TrustBar />
        <Benefits />
        <FeaturedCollection 
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
        <BrandStory />
        <DetailsGrid />
        <Comparison />
        <Reviews />
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
      />
    </>
  );
}

export default App;
