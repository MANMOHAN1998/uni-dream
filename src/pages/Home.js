import React from 'react';
import './Home.css';
import ServicesSection from '../components/ServicesSection';
import AboutCompany from '../components/AboutCompany';
import ContactUs from '../components/ContactUs';
import SimpleFooter from '../components/SimpleFooter';

const Home = () => {
      const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
        <div className="home">
            {/* Hero Section */}
            <section id="home" className="hero-section">
                <div className="hero-background">
                    <div className="hero-gradient"></div>
                    <div className="hero-pattern"></div>
                </div>
                
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            {/* <div className="hero-badge fade-in-up delay-100">
                                <span className="badge-icon">✨</span>
                                <span>Transform Your Future Today</span>
                            </div> */}
                            
                            <h1 className="hero-title fade-in-up delay-200">
                                <span className="title-line-1"></span>
                                <span className="title-line-2 text-gradient">Unlocking Dreams</span>
                                <span className="title-line-3">Crafting Digital Solutions</span>
                            </h1>
                            
                            <p className="hero-subtitle fade-in-up delay-300">
                                <span className="subtitle-highlight">At UNI Dream Solutions</span>, we believe in unlocking dreams and
crafting solutions through innovative education technology.
Join us on a journey of empowerment and discovery.
                            </p>
                            
                            <div className="hero-actions fade-in-up delay-400">
                                <a href="#services" className="btn btn-primary btn-xl hero-cta">
                                    <span className="btn-text">Services</span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-down-icon lucide-chevrons-down"><path d="m7 6 5 5 5-5"/><path d="m7 13 5 5 5-5"/></svg>
                                </a>
                                
                                <a href="#about" className="btn btn-outline btn-xl hero-secondary">
                                    <span className="btn-text">Know More</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-arrow-out-down-right-icon lucide-square-arrow-out-down-right"><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/><path d="m21 21-9-9"/><path d="M21 15v6h-6"/></svg>
                                </a>
                            </div>
                        </div>
                        
                        <div className="hero-visual fade-in-right delay-300">
                            <div className="hero-image-wrapper">
                                <div className="hero-main-card">
                                    <img
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                                        alt="Students learning together"
                                        className="hero-image"
                                    />
                                    <div className="hero-overlay"></div>
                                </div>
                                
                                {/* Floating Cards */}
                                {/* <div className="hero-floating-card card-1">
                                    <div className="floating-icon">📊</div>
                                    <div className="floating-content">
                                        <div className="floating-title">Live Progress</div>
                                        <div className="floating-subtitle">Real-time Analytics</div>
                                        <div className="floating-progress">
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: '85%'}}></div>
                                            </div>
                                            <span className="progress-text">85% Complete</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="hero-floating-card card-2">
                                    <div className="floating-icon">🎯</div>
                                    <div className="floating-content">
                                        <div className="floating-title">Achievement</div>
                                        <div className="floating-badge">
                                            <span>+500 XP</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="hero-floating-card card-3">
                                    <div className="floating-icon">👥</div>
                                    <div className="floating-content">
                                        <div className="floating-title">Community</div>
                                        <div className="floating-avatars">
                                            <div className="avatar"></div>
                                            <div className="avatar"></div>
                                            <div className="avatar"></div>
                                            <span className="avatar-count">+2.5K</span>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                       
                    </div>
                     
                </div>
                <div className="scroll-down" onClick={() => scrollToSection('services')}>
        <svg width="32" height="54" viewBox="0 0 32 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.5" y="1.5" width="29" height="51" rx="14.5" stroke="#00fff7" strokeWidth="3"/>
          <circle className="mouse-wheel" cx="16" cy="14" r="3" fill="#00fff7"/>
        </svg>
      </div>
            </section>

            {/* Services Section */}
            <div id="services">
                <ServicesSection />
            </div>
            
            {/* About Section */}
            <div id="about">
                <AboutCompany />
            </div>
            
            {/* Contact Us Section */}
            <div id="contact">
                <ContactUs />
            </div>
            
            {/* Simple Footer */}
            <SimpleFooter />
        </div>
    );
};

export default Home; 