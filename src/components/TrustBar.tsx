import { motion } from 'framer-motion';
import { productData } from '../data/productData';
import './TrustBar.css';

const TrustBar = () => {
  return (
    <section className="trust-bar-section">
      <div className="section-container">
        <motion.div 
          className="trust-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {productData.trustHighlights.map((item, idx) => (
            <div key={idx} className="trust-card">
              <div className="trust-metric">{item.title}</div>
              <div className="trust-label">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
