import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { productData } from '../data/productData';
import heroImg from '../assets/images6.jpg';
import './LifestyleStory.css';

const LifestyleStory = () => {
  return (
    <section className="lifestyle-section">
      <div className="section-container lifestyle-grid">
        
        {/* Left Column - Lifestyle Copy */}
        <motion.div 
          className="lifestyle-content-col"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-eyebrow">{productData.lifestyle.eyebrow}</span>
          <h2 className="section-title lifestyle-heading">{productData.lifestyle.title}</h2>
          <p className="lifestyle-desc">{productData.lifestyle.description}</p>

          <div className="lifestyle-bullets">
            {productData.lifestyle.bullets.map((bullet, idx) => (
              <div key={idx} className="lifestyle-bullet">
                <CheckCircle2 size={18} className="check-icon" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Lifestyle Image */}
        <motion.div 
          className="lifestyle-media-col"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="lifestyle-img-container">
            <img src={heroImg} alt="Earthora Daily Ritual Lifestyle" className="lifestyle-img" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LifestyleStory;
