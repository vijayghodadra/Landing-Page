import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">Earthora</div>
          <p className="footer-tagline">Curated Luxury. Timeless Presence.</p>
        </div>
        
        <div className="footer-links-grid">
          <div className="footer-col">
            <div className="footer-col-title">Navigation</div>
            <a href="#collection">Collection</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-col">
            <div className="footer-col-title">Social</div>
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">Journal</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div>&copy; {new Date().getFullYear()} Earthora Luxury. All rights reserved.</div>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
