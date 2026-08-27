import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './BrandStory.css';

const BrandStory = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="about" className="story" ref={containerRef}>
      <motion.div className="story-bg" style={{ y }}>
        <img src="https://images.unsplash.com/photo-1600180758890-7b58797f7fa2?q=80&w=2000&auto=format&fit=crop" alt="Abstract Brand Texture" />
      </motion.div>
      
      <div className="story-content">
        <motion.div 
          className="story-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
        >
          <motion.h2 
            className="story-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 }}
          >
            The Essence of <br /> Raw Elegance
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.6 }}
          >
            Founded on the principle that true luxury is whispered, not shouted, Earthora brings you a collection of objects that speak to the soul. Every piece is a testament to the uncompromising standards we hold.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.8 }}
          >
            We traverse the globe to source materials of unparalleled quality, working with master artisans who have honed their craft over generations.
          </motion.p>
        </motion.div>

        <motion.div 
          className="story-image"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]) }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 }}
        >
          <p>
            At Earthora, we believe that true luxury is not defined by excess, but by the relentless pursuit of perfection. Every piece is a testament to uncompromising craftsmanship, rarity, and timeless design.
          </p>
          <p>
            Our creations are not simply made; they are carefully cultivated. We invite you to experience a new standard of elegance—where attention to detail transforms the ordinary into the extraordinary.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
