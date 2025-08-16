import React from 'react';
import './Home.css';
import ServicesSection from '../components/ServicesSection';
import AboutCompany from '../components/AboutCompany';
import ContactUs from '../components/ContactUs';
import SimpleFooter from '../components/SimpleFooter';

const Home = () => {
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
                                <span className="title-line-2 text-gradient">Unlocking Dreams,</span>
                                <span className="title-line-3">Crafting Digital Solutions</span>
                            </h1>
                            
                            <p className="hero-subtitle fade-in-up delay-300">
                                <span className="subtitle-highlight">At UNI Dream Solutions</span>, we believe in unlocking dreams and
crafting solutions through innovative education technology.
Join us on a journey of empowerment and discovery.
                            </p>
                            
                            <div className="hero-actions fade-in-up delay-400">
                                <a href="#contact" className="btn btn-primary btn-xl hero-cta">
                                    <span className="btn-text">Services</span>
                                    <span className="btn-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="m9 18 6-6-6-6"/>
                                        </svg>
                                    </span>
                                    <div className="btn-glow"></div>
                                </a>
                                
                                <a href="#about" className="btn btn-outline btn-xl hero-secondary">
                                    <span className="btn-text">Learn More</span>
                                    <span className="btn-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10"/>
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                                            <path d="M12 17h.01"/>
                                        </svg>
                                    </span>
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
                                <div className="hero-floating-card card-1">
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
                                </div>
                            </div>
                        </div>
                    </div>
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