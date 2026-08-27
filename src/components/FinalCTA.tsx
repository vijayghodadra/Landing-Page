import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './FinalCTA.css';

const FinalCTA = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section id="contact" className="final-cta" ref={ref}>
      <motion.div 
        className="final-bg"
        style={{ scale: bgScale }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <img src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=2000&auto=format&fit=crop" alt="Abstract dark texture" />
      </motion.div>
      
      <div className="final-content">
        <motion.h2 
          className="final-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 }}
        >
          Elevate Your Everyday
        </motion.h2>
        
        <motion.p 
          className="final-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.6 }}
        >
          Join a community of connoisseurs. Discover pieces that transcend time.
        </motion.p>
        
        <motion.div 
          className="final-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.8 }}
        >
          <button className="btn-primary">Explore Collection</button>
          <button className="btn-secondary">Enquire Privately</button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
