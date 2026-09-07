import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShieldCheck, ArrowRight, ShoppingBag } from 'lucide-react';
import type { ProductBundle } from '../data/productData';
import img1 from '../assets/skincare.jpg';
import './CartDrawer.css';

export interface CartItem {
  bundle: ProductBundle;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (bundleId: string, delta: number) => void;
  onRemoveItem: (bundleId: string) => void;
}

const CartDrawer = ({ isOpen, onClose, items, onUpdateQty, onRemoveItem }: CartDrawerProps) => {
  const subtotal = items.reduce((sum, item) => sum + item.bundle.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="cart-overlay-container">
          <motion.div 
            className="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="cart-drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          >
            <div className="cart-header">
              <div className="cart-title">
                <ShoppingBag size={20} />
                <span>Your Order Cart</span>
              </div>
              <button className="cart-close-btn" onClick={onClose}>
                <X size={22} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="empty-cart-view">
                <ShoppingBag size={48} className="empty-icon" />
                <h3>Your cart is empty</h3>
                <p>Select a supply package from the product page to begin your ritual.</p>
                <button className="btn-primary" onClick={onClose}>
                  Browse Product Packages
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items-list">
                  {items.map((item) => (
                    <div key={item.bundle.id} className="cart-item-row">
                      <div className="cart-item-thumb">
                        <img src={img1} alt="Earthora Aura Elixir" />
                      </div>

                      <div className="cart-item-details">
                        <div className="cart-item-name">Earthora Aura Elixir</div>
                        <div className="cart-item-bundle">{item.bundle.name} ({item.bundle.size})</div>
                        <div className="cart-item-price">₹{item.bundle.price.toLocaleString()}</div>

                        <div className="cart-qty-row">
                          <div className="cart-qty-picker">
                            <button onClick={() => onUpdateQty(item.bundle.id, -1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => onUpdateQty(item.bundle.id, 1)}>+</button>
                          </div>
                          <button 
                            className="remove-item-btn"
                            onClick={() => onRemoveItem(item.bundle.id)}
                            title="Remove"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-summary-footer">
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="summary-row">
                    <span>Shipping</span>
                    <span className="free-shipping">FREE Express</span>
                  </div>
                  <div className="summary-row total-row">
                    <span>Total</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>

                  <button 
                    className="btn-primary checkout-btn"
                    onClick={() => alert(`Proceeding to checkout for ₹${subtotal.toLocaleString()}. Thank you for choosing Earthora!`)}
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight size={18} />
                  </button>

                  <div className="cart-security-badge">
                    <ShieldCheck size={16} />
                    <span>256-bit SSL Encrypted & 100% Secure Checkout</span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
