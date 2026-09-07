import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { productData } from '../data/productData';
import img1 from '../assets/skincare.jpg';
import './FinalCTA.css';

interface FinalCTAProps {
  onQuickBuy: () => void;
}

const FinalCTA = ({ onQuickBuy }: FinalCTAProps) => {
  return (
    <section className="final-cta-section">
      <div className="section-container">
        
        <motion.div 
          className="final-cta-card"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="final-cta-grid">
            
            <div className="final-cta-content">
              <span className="section-eyebrow">BEGIN YOUR RITUAL TODAY</span>
              <h2 className="final-cta-title">Elevate Your Everyday Self-Care</h2>
              <p className="final-cta-desc">
                Experience the transformative power of Earthora Aura Radiance Elixir. 100% natural, ethically sourced, and crafted for your daily well-being.
              </p>

              <div className="final-cta-pricing">
                <span className="price-label">Starting at only</span>
                <span className="price-val">₹{productData.bundles[0].price.toLocaleString()}</span>
                <span className="price-orig">₹{productData.bundles[0].originalPrice.toLocaleString()}</span>
                <span className="price-badge">Free Shipping</span>
              </div>

              <div className="final-cta-actions">
                <button className="btn-primary final-buy-btn" onClick={onQuickBuy}>
                  <span>Order Now</span>
                  <ArrowRight size={18} />
                </button>
                <button 
                  className="btn-secondary" 
                  onClick={() => {
                    const heroEl = document.getElementById('hero');
                    heroEl?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <ShoppingBag size={18} />
                  <span>Choose Package</span>
                </button>
              </div>

              <div className="final-cta-guarantees">
                <span><ShieldCheck size={16} className="icon" /> 100% Satisfaction Guarantee</span>
                <span><Truck size={16} className="icon" /> Fast Express Shipping</span>
              </div>
            </div>

            <div className="final-cta-media">
              <div className="final-img-frame">
                <img src={img1} alt="Earthora Aura Elixir" className="final-img" />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;
