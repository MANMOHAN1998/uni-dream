import React, { useState, useEffect } from 'react';
import logo from './UNI.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 10;
      
      // Determine if navbar should be hidden
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isOpen) {
        // Scrolling down & past 100px & menu not open
        setHidden(true);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        // Scrolling up or near top
        setHidden(false);
      }
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'about', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      let currentActive = 'home';
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentActive = sections[index];
          }
        }
      });
      
      if (currentScrollY < 100) {
        currentActive = 'home';
      }
      
      setActiveSection(currentActive);
      setScrolled(isScrolled);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${hidden ? 'navbar-hidden' : ''}`} role="navigation" aria-label="Primary">
      <div className="navbar-container">
        <button
          className="navbar-logo"
          onClick={handleLogoClick}
          aria-label="Go to top"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          <img src={logo} alt="UNI Dream Solutions logo" width={70} height={70} />
        </button>

        <div id="primary-navigation" className={`navbar-menu ${isOpen ? 'active' : ''}`} role="menubar" aria-label="Primary navigation">
          <button 
            className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => scrollToSection('home')}
            role="menuitem"
          >
            Home
          </button>
          <button 
            className={`navbar-link ${activeSection === 'services' ? 'active' : ''}`}
            onClick={() => scrollToSection('services')}
            role="menuitem"
          >
            Services
          </button>
          <button 
            className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
            role="menuitem"
          >
            About
          </button>
          <button 
            className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
            role="menuitem"
          >
            Contact
          </button>
        </div>

        <button 
          className={`navbar-toggle ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;