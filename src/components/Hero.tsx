import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Truck, Plus, Minus, Check } from 'lucide-react';
import { productData } from '../data/productData';
import type { ProductBundle } from '../data/productData';
import './Hero.css';

interface HeroProps {
  onAddToCart: (bundle: ProductBundle, quantity: number) => void;
  onBuyNow: (bundle: ProductBundle, quantity: number) => void;
}

const Hero = ({ onAddToCart, onBuyNow }: HeroProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedBundle, setSelectedBundle] = useState<ProductBundle>(productData.bundles[1] || productData.bundles[0]);
  const [quantity, setQuantity] = useState(1);

  const incrementQty = () => setQuantity((prev) => prev + 1);
  const decrementQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <section id="hero" className="hero-section">
      <div className="section-container hero-grid">
        
        {/* Left Column - Image Gallery */}
        <motion.div 
          className="hero-media-col"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="main-image-container">
            <span className="badge-featured">FLAGSHIP FORMULA</span>
            <motion.img 
              key={activeImageIndex}
              src={productData.galleryImages[activeImageIndex]} 
              alt={productData.name}
              className="main-product-img"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Gallery Thumbnails */}
          <div className="gallery-thumbnails">
            {productData.galleryImages.map((img, idx) => (
              <button
                key={idx}
                className={`thumbnail-btn ${activeImageIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveImageIndex(idx)}
                aria-label={`View image ${idx + 1}`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Product Purchase Panel */}
        <motion.div 
          className="hero-content-col"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <span className="section-eyebrow">{productData.category}</span>
          <h1 className="hero-product-title">{productData.name}</h1>

          {/* Rating Summary */}
          <div className="hero-rating-bar">
            <div className="stars-wrapper">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#e5b95f" color="#e5b95f" />
              ))}
            </div>
            <span className="rating-num">{productData.rating}</span>
            <span className="rating-dot">•</span>
            <a href="#reviews" className="reviews-link">
              {productData.reviewCount.toLocaleString()} verified reviews
            </a>
          </div>

          <p className="hero-description">{productData.tagline}</p>

          {/* Bundle Options Selector */}
          <div className="bundle-selector-group">
            <label className="group-label">Select Supply Package:</label>
            <div className="bundles-grid">
              {productData.bundles.map((bundle) => {
                const isSelected = selectedBundle.id === bundle.id;
                return (
                  <div
                    key={bundle.id}
                    className={`bundle-card ${isSelected ? 'selected' : ''} ${bundle.bestValue ? 'best-value-card' : ''}`}
                    onClick={() => setSelectedBundle(bundle)}
                  >
                    {bundle.badge && <span className="bundle-badge">{bundle.badge}</span>}
                    <div className="bundle-radio">
                      <div className={`radio-circle ${isSelected ? 'checked' : ''}`}>
                        {isSelected && <div className="radio-dot" />}
                      </div>
                      <div className="bundle-info">
                        <div className="bundle-name">{bundle.name}</div>
                        <div className="bundle-size">{bundle.size}</div>
                      </div>
                    </div>

                    <div className="bundle-pricing">
                      <span className="current-price">₹{bundle.price.toLocaleString()}</span>
                      <span className="original-price">₹{bundle.originalPrice.toLocaleString()}</span>
                      <span className="discount-tag">{bundle.discount}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quantity & CTAs */}
          <div className="cta-purchase-container">
            <div className="quantity-controls">
              <span className="qty-label">Qty:</span>
              <div className="qty-picker">
                <button onClick={decrementQty} aria-label="Decrease quantity">
                  <Minus size={14} />
                </button>
                <span className="qty-value">{quantity}</span>
                <button onClick={incrementQty} aria-label="Increase quantity">
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <div className="cta-buttons-row">
              <button 
                className="btn-primary add-cart-btn"
                onClick={() => onAddToCart(selectedBundle, quantity)}
              >
                Add to Cart — ₹{(selectedBundle.price * quantity).toLocaleString()}
              </button>
              <button 
                className="btn-green buy-now-btn"
                onClick={() => onBuyNow(selectedBundle, quantity)}
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Trust Highlights Checklist */}
          <div className="hero-trust-checklist">
            <div className="trust-item">
              <Check size={16} className="check-icon" />
              <span>Free Express Shipping across India</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={16} className="check-icon" />
              <span>100% Authentic Botanical Assurance</span>
            </div>
            <div className="trust-item">
              <Truck size={16} className="check-icon" />
              <span>Cash on Delivery (COD) Available</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
