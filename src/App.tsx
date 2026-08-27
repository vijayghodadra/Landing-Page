import { useEffect } from 'react';
// @ts-ignore
import Lenis from 'lenis';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import FeaturedCollection from './components/FeaturedCollection.tsx';
import BrandStory from './components/BrandStory.tsx';
import SignatureStatement from './components/SignatureStatement.tsx';
import FinalCTA from './components/FinalCTA.tsx';
import Footer from './components/Footer.tsx';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0,
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

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FeaturedCollection />
        <BrandStory />
        <SignatureStatement />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
