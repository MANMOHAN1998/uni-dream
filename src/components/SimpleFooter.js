import React from 'react';
import './SimpleFooter.css';
import logo from './UNI.png';
const SimpleFooter = () => {
  return (
    <footer className="simple-footer" role="contentinfo">
      <div className="footer-gradient-line" aria-hidden="true"></div>
      
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and Company */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="UNI Dream Solutions" width={70} height={70} />
            </div>
            <p className="footer-tagline">Empowering Tech Through Innovation</p>
          </div>

          {/* Quick Links */}
          <nav className="footer-links" aria-label="Footer">
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#services" className="footer-link">Services</a>
            <a href="#contact" className="footer-link">Contact</a>
          </nav>

          {/* Social & Contact */}
          <div className="footer-social">
            <div className="social-icons" role="group" aria-label="Social links">
              <a href="#" className="social-icon" aria-label="LinkedIn">💼</a>
              <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
              <a href="#" className="social-icon" aria-label="Facebook">📘</a>
            </div>
            <p className="contact-info">
              📧 <a href="mailto:info@unidreamsolutions.com">info@unidreamsolutions.com</a> | 📞 <a href="tel:+918287109325">+91(828) 710-9325</a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-divider" aria-hidden="true"></div>
          <div className="copyright">
            <span>© 2024 UNI Dream Solutions. Crafted with 💜 for education.</span>
            <div className="footer-dots" aria-hidden="true">
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