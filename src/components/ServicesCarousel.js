import React, { useState, useEffect } from 'react';
import './ServicesCarousel.css';

const ServicesCarousel = () => {
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const [isVisible, setIsVisible] = useState({});
    
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: true
                    }));
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Enhanced services data
    const services = [
        {
            id: 1,
            icon: "🎓",
            emoji: "📚",
            title: "Educational Consulting",
            subtitle: "Strategic Academic Guidance",
            description: "Expert guidance for academic planning, course selection, and career development strategies with personalized roadmaps.",
            features: ["Academic Planning", "Career Guidance", "Course Selection", "Study Abroad"],
            stats: { projects: "200+", satisfaction: "98%", expertise: "10+" },
            color: "from-blue-500 to-purple-600"
        },
        {
            id: 2,
            icon: "💻",
            emoji: "⚡",
            title: "Web Development",
            subtitle: "Modern Web Solutions",
            description: "Custom web solutions built with cutting-edge technologies for optimal performance and exceptional user experience.",
            features: ["Responsive Design", "Modern Tech Stack", "SEO Optimized", "Performance Focus"],
            stats: { projects: "150+", satisfaction: "99%", expertise: "8+" },
            color: "from-green-500 to-teal-600"
        },
        {
            id: 3,
            icon: "📱",
            emoji: "🚀",
            title: "Mobile App Development",
            subtitle: "Cross-Platform Excellence",
            description: "Native and cross-platform mobile applications that engage users and drive business growth with stunning interfaces.",
            features: ["iOS & Android", "Cross-Platform", "User-Centric Design", "App Store Ready"],
            stats: { projects: "100+", satisfaction: "97%", expertise: "6+" },
            color: "from-pink-500 to-orange-600"
        },
        {
            id: 4,
            icon: "🎨",
            emoji: "✨",
            title: "UI/UX Design",
            subtitle: "Design That Converts",
            description: "Beautiful, intuitive designs that enhance user experience, drive engagement, and convert visitors into customers.",
            features: ["User Research", "Prototyping", "Visual Design", "Usability Testing"],
            stats: { projects: "300+", satisfaction: "99%", expertise: "12+" },
            color: "from-purple-500 to-pink-600"
        },
        {
            id: 5,
            icon: "📊",
            emoji: "📈",
            title: "Digital Marketing",
            subtitle: "Growth-Driven Marketing",
            description: "Comprehensive digital marketing strategies to boost your online presence, reach target audiences, and drive conversions.",
            features: ["SEO/SEM", "Social Media", "Content Strategy", "Analytics & ROI"],
            stats: { projects: "250+", satisfaction: "96%", expertise: "9+" },
            color: "from-orange-500 to-red-600"
        },
        {
            id: 6,
            icon: "☁️",
            emoji: "🔒",
            title: "Cloud Solutions",
            subtitle: "Scalable Infrastructure",
            description: "Scalable cloud infrastructure and migration services for modern business needs with enterprise-grade security.",
            features: ["Cloud Migration", "Infrastructure", "Security", "Cost Optimization"],
            stats: { projects: "180+", satisfaction: "98%", expertise: "7+" },
            color: "from-cyan-500 to-blue-600"
        }
    ];

    // Services carousel auto-rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentServiceIndex((prevIndex) => 
                prevIndex + 3 >= services.length ? 0 : prevIndex + 3
            );
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [services.length]);

    return (
        <section className="services-carousel-section">
            <div className="section-background">
                <div className="section-gradient"></div>
                <div className="floating-particles">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                </div>
            </div>
            <div className="container">
                <div className="services-header text-center" data-animate id="services-header">
                    <div className="section-badge">
                        <span className="badge-icon">⚡</span>
                        <span>Our Expertise</span>
                    </div>
                    <h2 className="section-title">
                        Comprehensive <span className="text-gradient">EdTech Solutions</span>
                    </h2>
                    <p className="section-subtitle">
                        Transform your digital presence and educational journey with our <span className="highlight">comprehensive solutions</span> 
                        designed to drive growth, engagement, and success in the digital age.
                    </p>
                </div>
                
                <div className="services-carousel" data-animate id="services-carousel">
                    <div className="services-track" style={{
                        transform: `translateX(-${(currentServiceIndex / 3) * 100}%)`
                    }}>
                        {services.map((service, index) => (
                            <div key={service.id} className="service-card">
                                <div className="card-background">
                                    <div className="card-gradient"></div>
                                    <div className="card-pattern"></div>
                                </div>
                                <div className="service-header">
                                    <div className="service-icon-wrapper">
                                        <div className="service-icon">{service.icon}</div>
                                        <div className="service-emoji">{service.emoji}</div>
                                        <div className="icon-glow"></div>
                                    </div>
                                    <div className="service-badge">
                                        <span>Premium</span>
                                    </div>
                                </div>
                                <div className="service-content">
                                    <div className="service-title-wrapper">
                                        <h3 className="service-title">{service.title}</h3>
                                        <p className="service-subtitle">{service.subtitle}</p>
                                    </div>
                                    <div className="service-stats">
                                        <div className="stat-item">
                                            <span className="stat-value">{service.stats.projects}</span>
                                            <span className="stat-label">Projects</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-value">{service.stats.satisfaction}</span>
                                            <span className="stat-label">Success</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-value">{service.stats.expertise}</span>
                                            <span className="stat-label">Years</span>
                                        </div>
                                    </div>
                                    <p className="service-description">{service.description}</p>
                                    <div className="service-features">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="service-feature">
                                                <span className="feature-check">✨</span>
                                                <span className="feature-text">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="service-actions">
                                        <button className="service-btn primary">
                                            <span className="btn-text">Get Started</span>
                                            <span className="btn-icon">🚀</span>
                                            <div className="btn-glow"></div>
                                        </button>
                                        <button className="service-btn secondary">
                                            <span className="btn-text">Learn More</span>
                                            <span className="btn-icon">→</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-glow"></div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="carousel-controls" data-animate id="carousel-controls">
                    <div className="services-indicators">
                        {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${currentServiceIndex === index * 3 ? 'active' : ''}`}
                                onClick={() => setCurrentServiceIndex(index * 3)}
                                aria-label={`Go to slide ${index + 1}`}
                            >
                                <div className="indicator-fill"></div>
                            </button>
                        ))}
                    </div>
                    <div className="carousel-nav">
                        <button
                            className="nav-btn prev"
                            onClick={() => setCurrentServiceIndex(
                                currentServiceIndex - 3 < 0 
                                    ? Math.floor((services.length - 1) / 3) * 3 
                                    : currentServiceIndex - 3
                            )}
                            aria-label="Previous services"
                        >
                            <span className="nav-icon">←</span>
                        </button>
                        <button
                            className="nav-btn next"
                            onClick={() => setCurrentServiceIndex(
                                currentServiceIndex + 3 >= services.length 
                                    ? 0 
                                    : currentServiceIndex + 3
                            )}
                            aria-label="Next services"
                        >
                            <span className="nav-icon">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesCarousel;