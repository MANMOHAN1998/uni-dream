import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-us" id="contact">
      <div className="container">
        <div className="contact-header">
          <div className="section-badge">
            <span className="badge-icon">📧</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Ready to Transform Your <span className="text-gradient">Technical Journey?</span>
          </h2>
          <p className="section-description">
            Let's discuss how we can help your institution achieve excellence through innovative technology solutions.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-wrapper">
              <h3 className="form-title">Send Us a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXX XXX XXXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="btn-spinner">⏳</span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="btn-icon">🚀</span>
                    </>
                  )}
                </button>
                {submitStatus === 'success' && (
                  <div className="status-message success">
                    <span className="status-icon">✅</span>
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="status-message error">
                    <span className="status-icon">❌</span>
                    <span>Failed to send message. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <div className="info-wrapper">
              <h3 className="info-title">Let's Connect</h3>
              <p className="info-description">
                Ready to start your project? Get in touch with our team for a personalized consultation.
              </p>

              <div className="contact-details">
                <div className="detail-item">
                  <div className="detail-icon">📧</div>
                  <div className="detail-content">
                    <span className="detail-label">Email</span>
                    <a href="mailto:info@unidreamsolutions.com" className="detail-value">
                      info@unidreamsolutions.com
                    </a>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon">📞</div>
                  <div className="detail-content">
                    <span className="detail-label">Phone</span>
                    <a href="tel:+918287109325" className="detail-value">
                      +91(828) 710-9325
                    </a>
                  </div>
                </div>
                {/* <div className="detail-item">
                  <div className="detail-icon">🌍</div>
                  <div className="detail-content">
                    <span className="detail-label">Service Area</span>
                    <span className="detail-value">Global Remote Services</span>
                  </div>
                </div> */}
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;