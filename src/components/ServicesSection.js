import React, { useState, useEffect } from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'development', name: 'Development' },
    { id: 'testing', name: 'Testing & QA' },
    { id: 'content', name: 'Content' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'consulting', name: 'Consulting' }
  ];

  const services = [
    {
      id: 1,
      category: 'testing',
      icon: '🔍',
      title: 'QA Services',
      description: 'Comprehensive testing and quality assurance solutions for educational platforms.',
      duration: 'Ongoing Support',
      fullDescription: 'Our QA Services provide comprehensive testing solutions including manual testing, automated testing, accessibility testing, and copy editing. We ensure your educational platforms meet the highest quality standards with thorough testing processes, bug tracking, and continuous quality improvement.',
      features: [
        'Manual & Automated Testing',
        'Accessibility Testing (WCAG Compliance)',
        'Copy Editing & Proofreading',
        'Bug Tracking & Reporting',
        'Performance Testing',
        'User Acceptance Testing'
      ],
      deliverables: [
        'Test Plans & Test Cases',
        'Bug Reports & Documentation',
        'Accessibility Audit Reports',
        'Performance Test Results',
        'Final Quality Assurance Certificate'
      ]
    },
    {
      id: 2,
      category: 'development',
      icon: '💻',
      title: 'Web Development',
      description: 'Custom website development tailored for educational institutions.',
      duration: '2-4 Months',
      fullDescription: 'Custom web development services specifically designed for educational institutions. We create responsive, user-friendly websites that enhance student engagement and streamline administrative processes using modern technologies.',
      features: [
        'Responsive Web Design',
        'Custom CMS Development',
        'Student Portal Integration',
        'Learning Management Systems',
        'Payment Gateway Integration',
        'SEO Optimization'
      ],
      deliverables: [
        'Fully Responsive Website',
        'Admin Dashboard',
        'Content Management System',
        'Technical Documentation',
        'Training Materials',
        '3 Months Free Support'
      ]
    },
    {
      id: 3,
      category: 'content',
      icon: '📚',
      title: 'Publishing Services',
      description: 'Digital publishing and content conversion for educational materials.',
      duration: '1-3 Months',
      fullDescription: 'Professional digital publishing services that transform traditional educational content into engaging digital formats. We handle everything from content conversion to interactive multimedia integration.',
      features: [
        'Content Digitization',
        'Interactive eBook Creation',
        'Multimedia Integration',
        'Cross-Platform Compatibility',
        'Accessibility Features',
        'Version Control Systems'
      ],
      deliverables: [
        'Digital Publications',
        'Interactive Content',
        'Multi-format Outputs (PDF, ePUB, HTML)',
        'Content Management Guidelines',
        'Distribution Ready Files'
      ]
    },
    {
      id: 4,
      category: 'marketing',
      icon: '📈',
      title: 'SEO Services',
      description: 'Search engine optimization to increase your online presence.',
      duration: '3-6 Months',
      fullDescription: 'Comprehensive SEO services designed to improve your educational institution\'s online visibility and attract more students. We focus on education-specific keywords and local search optimization.',
      features: [
        'Keyword Research & Analysis',
        'On-Page SEO Optimization',
        'Technical SEO Audit',
        'Local SEO for Education',
        'Content Strategy Development',
        'Performance Monitoring'
      ],
      deliverables: [
        'SEO Strategy Document',
        'Optimized Website Content',
        'Monthly Performance Reports',
        'Keyword Ranking Improvements',
        'Google Analytics Setup',
        'SEO Best Practices Guide'
      ]
    },
    {
      id: 5,
      category: 'consulting',
      icon: '👥',
      title: 'Recruitment Services',
      description: 'Specialized recruitment services for educational institutions.',
      duration: '1-2 Months',
      fullDescription: 'Specialized recruitment services for educational institutions seeking qualified faculty, administrative staff, and technical personnel. We understand the unique requirements of the education sector.',
      features: [
        'Faculty Recruitment',
        'Administrative Staff Placement',
        'Technical Role Filling',
        'Candidate Screening',
        'Interview Coordination',
        'Background Verification'
      ],
      deliverables: [
        'Qualified Candidate Pool',
        'Detailed Candidate Profiles',
        'Interview Scheduling',
        'Reference Checks',
        'Placement Reports',
        '90 Days Replacement Guarantee'
      ]
    },
    {
      id: 6,
      category: 'content',
      icon: '🌐',
      title: 'Translation Services',
      description: 'Professional translation and localization services.',
      duration: '2-4 Weeks',
      fullDescription: 'Professional translation and localization services for educational content, making your materials accessible to diverse audiences while maintaining academic accuracy and cultural sensitivity.',
      features: [
        'Academic Content Translation',
        'Cultural Localization',
        'Multilingual Website Development',
        'Document Translation',
        'Subtitle & Caption Services',
        'Quality Assurance Reviews'
      ],
      deliverables: [
        'Translated Educational Materials',
        'Localized Website Content',
        'Multilingual Documentation',
        'Cultural Adaptation Reports',
        'Quality Assurance Certificates'
      ]
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : '';
  };

  const getServiceImage = (category) => {
    const imageMap = {
      'development': 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop&auto=format',
      'testing': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&auto=format', 
      'content': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop&auto=format',
      'marketing': 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=250&fit=crop&auto=format',
      'consulting': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop&auto=format',
      'all': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop&auto=format'
    };
    return imageMap[category] || imageMap['all'];
  };

  // Carousel functionality
  const itemsPerSlide = 3; // Show 3 cards at once
  const maxSlides = Math.ceil(filteredServices.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + maxSlides) % maxSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide, maxSlides]);

  // Reset slide when category changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeCategory]);

  // Handle body scroll when modal opens/closes
  useEffect(() => {
    if (selectedService) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedService]);

  // Handle scroll to top button visibility and progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const scrollDegrees = (scrollPercent / 100) * 360;
      
      setScrollProgress(scrollDegrees);
      setShowScrollTop(scrollTop > 300);
      
      // Update CSS custom property for progress ring
      const scrollButton = document.querySelector('.scroll-to-top');
      if (scrollButton) {
        scrollButton.style.setProperty('--scroll-progress', `${scrollDegrees}deg`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Unlimited access to <span className="text-gradient">Our solutions</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive technology services designed specifically for educational institutions and EdTech companies.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`tab-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Carousel */}
        <div className="carousel-container">
          {/* Side Navigation Buttons */}
          {maxSlides > 1 && (
            <>
              <button 
                className="carousel-side-btn prev-btn" 
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              
              <button 
                className="carousel-side-btn next-btn" 
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </>
          )}

          <div className="carousel-wrapper">
            <div 
              className="services-carousel"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {Array.from({ length: maxSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="carousel-slide">
                  {filteredServices
                    .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                    .map((service, index) => (
                      <div 
                        key={service.id} 
                        className="service-card"
                        onClick={() => setSelectedService(service)}
                        style={{
                          animationDelay: `${index * 0.1}s`
                        }}
                      >
                        <div className="card-header">
                          <div className="service-image">
                            <div className="image-placeholder"></div>
                            <img 
                              src={getServiceImage(service.category)}
                              alt={service.title}
                              className="service-bg-image"
                              onLoad={(e) => {
                                e.target.style.opacity = '1';
                                e.target.parentElement.querySelector('.image-placeholder').style.opacity = '0';
                              }}
                              onError={(e) => {
                                e.target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop&auto=format';
                                e.target.onerror = null; // Prevent infinite loop
                              }}
                              style={{ opacity: 0 }}
                            />
                            <div className="image-overlay"></div>
                            <div className="service-icon">
                              {service.icon}
                            </div>
                            <div className="service-category-badge">
                              {getCategoryName(service.category)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="card-body">
                          <div className="service-header">
                            <h3 className="service-title">{service.title}</h3>
                            <div className="service-rating">
                              <div className="stars">
                                ⭐⭐⭐⭐⭐
                              </div>
                              <span className="rating-text">5.0</span>
                            </div>
                          </div>
                          
                          <p className="service-description">{service.description}</p>
                          
                          
                          
                          <div className="service-actions">
                            <button 
                              className="know-more-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedService(service);
                              }}
                            >
                              <span>Know More</span>
                              <span className="btn-arrow">→</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
          
          
        </div>

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="modal-overlay" onClick={() => setSelectedService(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-icon">
                  {selectedService.icon}
                </div>
                <div className="modal-title-section">
                  <div className="modal-category">
                    {getCategoryName(selectedService.category)}
                  </div>
                  <h2 className="modal-title">{selectedService.title}</h2>
                  <div className="modal-duration">{selectedService.duration}</div>
                </div>
                <button 
                  className="modal-close"
                  onClick={() => setSelectedService(null)}
                >
                  ×
                </button>
              </div>
              
              <div className="modal-body">
                <div className="modal-description">
                  <p>{selectedService.fullDescription}</p>
                </div>
                
                <div className="modal-sections">
                  <div className="modal-section">
                    <h3>What's Included</h3>
                    <ul className="feature-list">
                      {selectedService.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="modal-section">
                    <h3>Deliverables</h3>
                    <ul className="deliverable-list">
                      {selectedService.deliverables.map((deliverable, index) => (
                        <li key={index}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
          {/* <div className="services-cta">
            <h3 className="cta-title">
              Get the skills you need for success
            </h3>
            <p className="cta-subtitle">
              The modern educational landscape demands innovative solutions. Partner with us to stay ahead of the curve.
            </p>
            <div className="cta-actions">
              <button className="btn btn-primary">
                <span>Start Your Project</span>
              </button>
              <button className="btn btn-outline">
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div> */}
      </div>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <div className="arrow">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 4L12 20M12 4L6 10M12 4L18 10" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    </section>
  );
};

export default ServicesSection;