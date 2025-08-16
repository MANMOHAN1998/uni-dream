import React from 'react';
import './SimpleFooter.css';
import logo from './UNI.png';
const SimpleFooter = () => {
  return (
    <footer className="simple-footer">
      <div className="footer-gradient-line"></div>
      
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and Company */}
          <div className="footer-brand">
            <div className="footer-logo">
                        <img src={logo} alt="Uni Dreams Solutions" width={70} height={70} />
             
            </div>
            <p className="footer-tagline">Empowering Tech Through Innovation</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#services" className="footer-link">Services</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          {/* Social & Contact */}
          <div className="footer-social">
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="LinkedIn">💼</a>
              <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
              <a href="#" className="social-icon" aria-label="Facebook">📘</a>
            </div>
            <p className="contact-info">
              📧 info@unidreamsolutions.com | 📞 +91(828) 710-9325
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="copyright">
            <span>© 2024 UNI Dream Solutions. Crafted with 💜 for education.</span>
            <div className="footer-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;