import { motion } from 'framer-motion';
import { Sparkles, Droplets, Shield, Sun } from 'lucide-react';
import { productData } from '../data/productData';
import './Benefits.css';

const iconMap = {
  sparkles: Sparkles,
  droplets: Droplets,
  shield: Shield,
  sun: Sun,
};

const Benefits = () => {
  return (
    <section id="benefits" className="benefits-section">
      <div className="section-container">
        
        <div className="benefits-header">
          <span className="section-eyebrow">WHY EARTHORA?</span>
          <h2 className="section-title">Gentle botanical support for everyday radiance</h2>
          <p className="section-subtitle">
            Rooted in centuries of botanical wisdom, formulated for your modern daily routine.
          </p>
        </div>

        <div className="benefits-grid">
          {productData.benefits.map((benefit, idx) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap] || Sparkles;
            return (
              <motion.div
                key={benefit.id}
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="benefit-icon-wrapper">
                  <IconComponent size={24} className="benefit-icon" />
                </div>
                <h3 className="benefit-card-title">{benefit.title}</h3>
                <p className="benefit-card-desc">{benefit.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Benefits;
