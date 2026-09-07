import { motion } from 'framer-motion';
import { productData } from '../data/productData';
import './DetailsGrid.css';

const DetailsGrid = () => {
  return (
    <section id="formula" className="details-section">
      <div className="section-container">
        
        <div className="details-header">
          <span className="section-eyebrow">INSIDE THE FORMULA</span>
          <h2 className="section-title">Botanical Blend of 6 Core Ingredients</h2>
          <p className="section-subtitle">
            Every ingredient is traditionally valued for skin radiance, deep hydration, and sensory relaxation.
          </p>
        </div>

        <div className="ingredients-grid">
          {productData.ingredients.map((item, idx) => (
            <motion.div
              key={item.id}
              className="ingredient-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="ingredient-img-wrapper">
                <img src={item.image} alt={item.name} className="ingredient-img" />
              </div>
              <div className="ingredient-info">
                <h3 className="ingredient-name">{item.name}</h3>
                <span className="ingredient-botanical">{item.botanicalName}</span>
                <p className="ingredient-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DetailsGrid;
