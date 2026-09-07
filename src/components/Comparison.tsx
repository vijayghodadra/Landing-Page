import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { productData } from '../data/productData';
import './Comparison.css';

const Comparison = () => {
  return (
    <section id="comparison" className="comparison-section">
      <div className="section-container">
        
        <div className="comparison-header">
          <span className="section-eyebrow">UNCOMPROMISING DIFFERENCE</span>
          <h2 className="section-title">Why choose Earthora?</h2>
          <p className="section-subtitle">
            See how our botanical formulation stands apart from mass-produced commercial alternatives.
          </p>
        </div>

        <motion.div 
          className="comparison-table-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="th-feature">Feature / Quality</th>
                <th className="th-others">Standard Oils & Lotions</th>
                <th className="th-earthora">
                  <span>Earthora Elixir</span>
                  <span className="table-highlight-badge">SUPERIOR</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {productData.comparison.map((item, idx) => (
                <tr key={idx}>
                  <td className="td-feature">{item.feature}</td>
                  <td className="td-others">
                    {item.others ? (
                      <span className="check-yes"><Check size={18} /></span>
                    ) : (
                      <span className="cross-no"><X size={18} /></span>
                    )}
                  </td>
                  <td className="td-earthora">
                    {item.earthora ? (
                      <span className="check-earthora"><Check size={20} /></span>
                    ) : (
                      <span className="cross-no"><X size={18} /></span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  );
};

export default Comparison;
