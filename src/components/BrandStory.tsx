import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';
import { productData } from '../data/productData';
import img2 from '../assets/images (2).jpg';
import heroImg from '../assets/images6.jpg';
import './BrandStory.css';

const BrandStory = () => {
  return (
    <section id="story" className="product-story-section">
      <div className="section-container story-grid">
        
        {/* Left Column - Product Showcase Image */}
        <motion.div 
          className="story-media-col"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="story-image-card">
            <img src={img2} alt="Earthora Botanical Craftsmanship" className="story-main-img" />
            <div className="story-floating-badge">
              <img src={heroImg} alt="Earthora Bottle" className="badge-thumb" />
              <div>
                <div className="badge-title">Pure Botanical Base</div>
                <div className="badge-sub">Cold-Pressed Cold Formulation</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Story Copy & Bullets */}
        <motion.div 
          className="story-content-col"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="section-eyebrow">{productData.story.eyebrow}</span>
          <h2 className="section-title story-heading">{productData.story.title}</h2>

          <p className="story-paragraph">{productData.story.paragraph1}</p>
          <p className="story-paragraph">{productData.story.paragraph2}</p>

          <div className="story-bullets-list">
            {productData.story.bullets.map((bullet, idx) => (
              <div key={idx} className="story-bullet-item">
                <Sparkle size={16} className="bullet-icon" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BrandStory;
