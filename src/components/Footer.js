import React from 'react';
import './Footer.css';
import logo from './UNI.png';
const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <section className="footer-main">
        <div className="footer-container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-section company-info">
              <div className="footer-logo">
                <div className="logo-wrapper">
                  <div className="logo-icon">
                    <img src={logo} alt="Uni Dreams Solutions" width={70} height={70} /> 
                  </div>
                  <div className="logo-text-wrapper">
                    <span className="logo-text">UNI Dream Solutions</span>
                    <span className="logo-tagline">Empowering Technology</span>
                  </div>
                </div>
              </div>
              <p className="footer-description">
                Your trusted partner in educational technology innovation. 
                Working hand-in-hand to drive positive outcomes for your institution.
              </p>
              <div className="company-stats">
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">40+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Running</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section quick-links">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home" className="footer-link">Home</a></li>
                <li><a href="#about" className="footer-link">About Us</a></li>
                <li><a href="#services" className="footer-link">Services</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section services-links">
              <h4 className="footer-title">Our Services</h4>
              <ul className="footer-links">
                <li><a href="#web-development" className="footer-link">Web Development</a></li>
                <li><a href="#consulting" className="footer-link">Educational Consulting</a></li>
                <li><a href="#management" className="footer-link">Student Management</a></li>
                <li><a href="#quality" className="footer-link">Quality Assurance</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section contact-section">
              <h4 className="footer-title">Get In Touch</h4>
              <div className="contact-items">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span className="contact-value">info@unidreamsolutions.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span className="contact-value">+91(828) 710-9325</span>
                </div>
              </div>
              <div className="contact-process">
                <p className="process-title">What's Next?</p>
                <ul className="process-list">
                  <li>📧 Email and phone call from our team</li>
                  <li>💰 Time & cost estimation</li>
                  <li>🤝 In-person meeting</li>
                </ul>
              </div>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
                <a href="#" className="social-link" aria-label="Twitter">🐦</a>
                <a href="#" className="social-link" aria-label="Facebook">📘</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <section className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <span>© 2024 UNI Dream Solutions. Your dedicated partner since 2020.</span>
            </div>
            <div className="footer-bottom-links">
              <a href="#privacy" className="policy-link">Privacy</a>
              <a href="#terms" className="policy-link">Terms</a>
              <button 
                className="back-to-top-btn"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                ↑ Top
              </button>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;