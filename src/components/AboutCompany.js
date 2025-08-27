import React from 'react';
import './AboutCompany.css';
const AboutCompany = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <div className="section-badge">
                        <span className="badge-icon">🚀</span>
                        <span>Our Story</span>
                    </div>
                    <h2 className="section-title">
                        We're Your <span className="text-gradient">Partner in Your Success</span>
                    </h2>
                    <p className="section-subtitle">
                        At UNI Dream Solutions, we understand that success in the education sector isn't just about individual achievements; it's about collective progress. We position ourselves as your dedicated partner in achieving your educational goals.
                    </p>
                </div>

                {/* Hero Story Section */}
                <div className="hero-story">
                    <div className="story-content">
                        <div className="story-left">
                            <div className="story-card main-story">
                                <div className="story-icon">
                                    <span>🎯</span>
                                </div>
                                <h3>Our Vision at UNI Dream Solutions</h3>
                                <p>
                                    Our mission is to be the <strong>trusted partner</strong> of educational institutions in their journey towards academic excellence. We are committed to providing innovative, scalable, and cost-effective solutions that address the challenges faced by educators and administrators alike.
                                </p>
                                <p>
                                    With a focus on leveraging technology to drive efficiency, engagement, and student success, we strive to <strong>empower educational institutions</strong> to achieve their goals and fulfill their mission of providing quality education to all.
                                </p>
                            </div>
                        </div>
                        <div className="story-right">
                            <div className="impact-metrics">
                                <div className="metric-item">
                                    <div className="metric-number">20+</div>
                                    <div className="metric-label">Happy Clients</div>
                                </div>
                                <div className="metric-item">
                                    <div className="metric-number">40+</div>
                                    <div className="metric-label">Projects Completed</div>
                                </div>
                                <div className="metric-item">
                                    <div className="metric-number">15+</div>
                                    <div className="metric-label">Running Projects</div>
                                </div>
                                <div className="metric-item">
                                    <div className="metric-number">24/7</div>
                                    <div className="metric-label">Dedicated Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="core-values">
                    <h3 className="section-heading">Our Core Values Drive Everything We Do</h3>
                    <div className="values-grid">
                        {/* <div className="value-card featured">
                            <div className="value-icon">
                                <span>🎯</span>
                            </div>
                            <h4 className="value-title">Student-Centric Innovation</h4>
                            <p className="value-description">
                                Every solution we create puts students first. We design technology that enhances learning experiences, 
                                improves engagement, and prepares students for tomorrow's challenges.
                            </p>
                            <div className="value-highlight">
                                ✨ <span>Making learning more accessible and engaging</span>
                            </div>
                        </div> */}
{/*                         
                        <div className="value-card">
                            <div className="value-icon">
                                <span>🔬</span>
                            </div>
                            <h4 className="value-title">Quality Excellence</h4>
                            <p className="value-description">
                                Our rigorous QA processes ensure every solution meets the highest standards of reliability and performance.
                            </p>
                        </div>
                         */}
                        <div className="value-card">
                            <div className="value-icon">
                                <span>🤝</span>
                            </div>
                            <h4 className="value-title">Your Dedicated Partner</h4>
                            <p className="value-description">
                                We're more than just a vendor – we're an extension of your team, working hand-in-hand to drive positive outcomes for your institution. With deep commitment to collaboration, innovation, and excellence.
                            </p>
                            <div className="value-highlight">
                                ✨ <span>Partnership that drives collective progress</span>
                            </div>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">
                                <span>⚡</span>
                            </div>
                            <h4 className="value-title">Agile Innovation</h4>
                            <p className="value-description">
                                Rapid adaptation to changing educational needs with cutting-edge technology solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Success Stories Showcase */}
                {/* <div className="success-showcase">
                    <div className="showcase-header">
                        <h3 className="section-heading">Transforming Education, One Institution at a Time</h3>
                        <p className="showcase-subtitle">Real results from real institutions who trusted us with their digital transformation</p>
                    </div>
                    
                    <div className="showcase-grid">
                        <div className="showcase-card primary">
                            <div className="showcase-icon">
                                <span>🏛️</span>
                            </div>
                            <div className="showcase-badge">University</div>
                            <h4>Leading State University</h4>
                            <p className="showcase-description">
                                Streamlined their entire student management system, reducing administrative overhead by 
                                <strong> 65%</strong> and improving student satisfaction scores dramatically.
                            </p>
                            <div className="showcase-metrics">
                                <span className="metric">65% ↓ Admin Time</span>
                                <span className="metric">94% ↑ Satisfaction</span>
                            </div>
                        </div>
                        
                        <div className="showcase-card secondary">
                            <div className="showcase-icon">
                                <span>🎓</span>
                            </div>
                            <div className="showcase-badge">College</div>
                            <h4>Private Technical College</h4>
                            <p className="showcase-description">
                                Custom e-learning platform that increased student engagement and course completion rates significantly.
                            </p>
                            <div className="showcase-metrics">
                                <span className="metric">85% ↑ Engagement</span>
                                <span className="metric">92% Completion</span>
                            </div>
                        </div>
                        
                        <div className="showcase-card secondary">
                            <div className="showcase-icon">
                                <span>🏫</span>
                            </div>
                            <div className="showcase-badge">Institute</div>
                            <h4>Training Institute Network</h4>
                            <p className="showcase-description">
                                Unified platform across 12 campuses, enabling seamless resource sharing and collaboration.
                            </p>
                            <div className="showcase-metrics">
                                <span className="metric">12 Campuses</span>
                                <span className="metric">100% Uptime</span>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Technology Excellence */}
                <div className="tech-excellence">
                    <div className="tech-content">
                        <div className="tech-left">
                            <h3 className="tech-title">Built with <span className="text-gradient">Cutting-Edge Technology</span></h3>
                            <p className="tech-description">
                                We don't just follow trends - we set them. Our technology stack is carefully chosen to deliver 
                                exceptional performance, security, and scalability for educational environments.
                            </p>
                            
                            <div className="tech-features">
                                <div className="tech-feature">
                                    <div className="feature-icon">⚡</div>
                                    <div>
                                        <h5>Lightning Fast Performance</h5>
                                        <p>Optimized code and infrastructure for instant response times</p>
                                    </div>
                                </div>
                                <div className="tech-feature">
                                    <div className="feature-icon">🛡️</div>
                                    <div>
                                        <h5>Bank-Level Security</h5>
                                        <p>Advanced encryption and security protocols protect sensitive data</p>
                                    </div>
                                </div>
                                <div className="tech-feature">
                                    <div className="feature-icon">📱</div>
                                    <div>
                                        <h5>Mobile-First Design</h5>
                                        <p>Perfect experience across all devices and screen sizes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tech-right">
                            <div className="tech-stack">
                                <div className="stack-category">
                                    <h5>Frontend Excellence</h5>
                                    <div className="tech-badges">
                                        <span className="tech-badge">React</span>
                                        <span className="tech-badge">Next.js</span>
                                        <span className="tech-badge">TypeScript</span>
                                    </div>
                                </div>
                                <div className="stack-category">
                                    <h5>Backend Power</h5>
                                    <div className="tech-badges">
                                        <span className="tech-badge">Node.js</span>
                                        <span className="tech-badge">Python</span>
                                        <span className="tech-badge">PostgreSQL</span>
                                    </div>
                                </div>
                                <div className="stack-category">
                                    <h5>Quality Assurance</h5>
                                    <div className="tech-badges">
                                        <span className="tech-badge">Automated Testing</span>
                                        <span className="tech-badge">CI/CD Pipeline</span>
                                        <span className="tech-badge">Performance Monitoring</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                {/* <div className="final-cta">
                    <div className="cta-background">
                        <div className="cta-content">
                            <div className="cta-header">
                                <h3 className="cta-title">Your Educational Revolution Starts Now</h3>
                                <p className="cta-subtitle">
                                    Don't let outdated systems hold back your institution's potential. Join the digital transformation 
                                    that's already changing education for thousands of students.
                                </p>
                            </div>
                            
                            <div className="cta-action">
                                <div className="cta-buttons">
                                    <button className="btn-primary">
                                        <span>Start Your Project</span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7"/>
                                        </svg>
                                    </button>
                                    
                                </div>
                                
                                
                            </div>
                            
                            
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default AboutCompany;