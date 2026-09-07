import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { productData } from '../data/productData';
import './FAQ.css';

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="section-container">
        
        <div className="faq-header">
          <span className="section-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="section-title">Got questions? We have answers.</h2>
          <p className="section-subtitle">
            Everything you need to know about Earthora formulations, usage, and orders.
          </p>
        </div>

        <div className="faq-accordion-list">
          {productData.faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown size={20} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="faq-answer-wrapper"
                    >
                      <p className="faq-answer-text">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
