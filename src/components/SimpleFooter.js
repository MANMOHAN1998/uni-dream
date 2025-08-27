import React from 'react';
import './SimpleFooter.css';
import logo from './UNI.png';
  
const SimpleFooter = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="simple-footer">
      <div className="footer-gradient-line"></div>
      
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and Company */}
          <div className="footer-brand">
            <div className="footer-logo" onClick={handleLogoClick}>
                        <img src={logo} alt="UNI Dreams Solutions" width={70} height={70} />
             
            </div>
            <p className="footer-tagline">Unlocking Dreams Crafting Digital Solutions</p>
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
              <a href="https://www.linkedin.com/company/uni-dream-solutions/" target='_blank' className="social-icon" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/></svg>
                <span className="social-tooltip">LinkedIn</span>
              </a>
              <a href="https://x.com/UNI_Dream_Sol" target='_blank' className="social-icon" aria-label="X">
  {/* X Logo */}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="black" style={{"margin": "5px"}}>
    <path d="M714.163 519.284L1160.89 0H1050.46L669.547 441.163L356.329 0H0L468.901 681.297L0 1226.31H110.432L512.652 762.706L843.671 1226.31H1200L714.137 519.284H714.163ZM562.491 700.092L518.318 637.393L150.597 79.694H306.565L603.27 505.174L647.443 567.873L1034.44 1150.92H878.474L562.491 700.092Z"/>
  </svg>
  <span className="social-tooltip">X</span>
</a>

<a href="https://www.instagram.com/unidreamsolutions" target='_blank' className="social-icon" aria-label="Instagram">
  {/* Instagram Logo */}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="black" style={{"margin": "4px"}}>
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 
             339 319.5 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 
             0-71.7-32.1-71.7-71.7s32.1-71.7 
             71.7-71.7 71.7 32.1 71.7 71.7-32.1 
             71.7-71.7 71.7zm146.4-194.3c0 
             14.9-12 26.9-26.9 
             26.9s-26.9-12-26.9-26.9 12-26.9 
             26.9-26.9 26.9 12 26.9 
             26.9zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 
             0-35.9 1.7-67.7 9.9-93.9 
             36.2s-34.4 58-36.2 93.9c-2.1 
             37-2.1 147.9 0 184.9 1.7 
             35.9 9.9 67.7 36.2 93.9 26.2 
             26.2 58 34.4 93.9 36.2 37 
             2.1 147.9 2.1 184.9 0 35.9-1.7 
             67.7-9.9 93.9-36.2 26.2-26.2 
             34.4-58 36.2-93.9 2.1-37 
             2.1-147.8 0-184.8zM398.8 
             388c-7.8 19.6-22.9 34.7-42.6 
             42.6-29.5 11.7-99.5 9-132.1 
             9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 
             9-132.1c7.8-19.6 22.9-34.7 
             42.6-42.6 29.5-11.7 99.5-9 
             132.1-9s102.7-2.6 
             132.1 9c19.6 7.8 34.7 22.9 
             42.6 42.6 11.7 29.5 9 
             99.5 9 132.1s2.6 102.7-9 
             132.1z"/>
  </svg>
  <span className="social-tooltip">Instagram</span>
</a>

            </div>
            <p className="contact-info">
              📧 info@unidreamsolutions.com | 📞 +918287109325
            </p>
          </div>
        </div>

        {/* Copyright */}
        {/* <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="copyright">
            <span>© 2024 UNI Dream Solutions. Crafted with 💜 for education.</span>
            <div className="footer-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default SimpleFooter;