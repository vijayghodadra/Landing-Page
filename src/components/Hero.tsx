import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="hero">
      <motion.div 
        className="hero-bg"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <img 
          src="https://images.unsplash.com/photo-1615397323145-2b48950c4064?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Abstract Background" 
        />
      </motion.div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-eyebrow" variants={itemVariants}>
          The Art of Refined Luxury
        </motion.div>
        
        <motion.h1 className="hero-title" variants={itemVariants}>
          Curated For Those Who Appreciate The Extraordinary.
        </motion.h1>
        
        <motion.p className="hero-subtitle" variants={itemVariants}>
          A carefully selected collection of timeless luxury, crafted for those who value elegance, detail and distinction.
        </motion.p>
        
        <motion.div className="hero-ctas" variants={itemVariants}>
          <button className="btn-primary">Explore Collection</button>
          <button className="btn-secondary">Discover Earthora</button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
