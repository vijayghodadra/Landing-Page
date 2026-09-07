import { motion } from 'framer-motion';
import { productData } from '../data/productData';
import './HowToUse.css';

const HowToUse = () => {
  return (
    <section id="routine" className="how-to-use-section">
      <div className="section-container">
        
        <div className="how-header">
          <span className="section-eyebrow">SIMPLE DAILY RITUAL</span>
          <h2 className="section-title">How to use?</h2>
          <p className="section-subtitle">
            For external use only. Can be used once or twice daily as part of a massage or skincare routine.
          </p>
        </div>

        <div className="steps-grid">
          {productData.usageSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              className="step-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="step-number">{step.step}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowToUse;
