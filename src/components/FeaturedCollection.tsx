import { useState } from 'react';
import { motion } from 'framer-motion';
import { MoveRight, Plus } from 'lucide-react';
import ProductModal from './ProductModal.tsx';
import './FeaturedCollection.css';

import img1 from '../assets/skincare.jpg';
import img2 from '../assets/skincare1.jpg';
import img3 from '../assets/images.jpg';
import img4 from '../assets/ghf.jpg';
import img5 from '../assets/fef.jpg';

const products = [
  {
    id: 1,
    name: 'AURA CLEANSING DUO',
    category: 'BODY CARE',
    desc: 'A refined daily ritual for\nluminous, deeply refreshed skin.',
    price: '₹2,490',
    image: img1,
    className: 'item-1'
  },
  {
    id: 2,
    name: 'RADIANCE SERUM',
    category: 'FACE CARE',
    desc: 'Brightening elixir that restores\nclarity and youthful glow.',
    price: '₹3,290',
    image: img2,
    className: 'item-2'
  },
  {
    id: 3,
    name: 'NOURISHING CREAM',
    category: 'MOISTURIZER',
    desc: 'Deep hydration with natural botanicals\nfor soft, supple and protected skin.',
    price: '₹2,990',
    image: img3,
    className: 'item-3'
  },
  {
    id: 4,
    name: 'REVITALIZING OIL',
    category: 'HAIR CARE',
    desc: 'Nourishes, strengthens and\nrestores natural shine.',
    price: '₹2,390',
    image: img4,
    className: 'item-4'
  },
  {
    id: 5,
    name: 'SANTAL NOIR',
    category: 'HOME FRAGRANCE',
    desc: 'A warm, grounding scent\nfor mindful spaces.',
    price: '₹3,190',
    image: img5,
    className: 'item-5'
  }
];

const FeaturedCollection = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <>
      <section id="collection" className="collection">
        <div className="collection-grid">
          
          <div className="intro-block">
            <div className="intro-eyebrow">THE COLLECTION</div>
            <h2 className="intro-title">Selected<br/>Pieces</h2>
            <p className="intro-desc">Five exceptional pieces.<br/>One uncompromising<br/>standard of luxury.</p>
          </div>

          {products.map((product, index) => (
            <motion.div 
              key={product.id} 
              className={`product-card ${product.className}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 + (index * 0.1) }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="card-top">
                <div className="card-number">
                  <span>0{product.id}</span>
                  <span className="divider">/</span>
                  <span>05</span>
                </div>
                <div className="card-image-wrapper">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <div className="circle-plus"><Plus size={16} /></div>
                </div>
              </div>
              <div className="card-bottom">
                <div className="card-bottom-flex">
                  <div className="text-stack">
                    <div className="card-category">{product.category}</div>
                    <h3 className="card-title">{product.name}</h3>
                    <p className="card-desc">
                      {product.desc.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
                    </p>
                  </div>
                  <div className="price-stack">
                    <span className="card-price">{product.price}</span>
                  </div>
                </div>
                <button className="view-btn">
                  VIEW PIECE <MoveRight strokeWidth={1} size={32} className="arrow-icon" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="collection-footer">
          <div className="footer-left">
            <div className="footer-line"></div>
            <p>Five pieces. Chosen with intention.</p>
          </div>
          <button className="footer-btn">EXPLORE THE COLLECTION <MoveRight strokeWidth={1} size={32} /></button>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </>
  );
};

export default FeaturedCollection;
