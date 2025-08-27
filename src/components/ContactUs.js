import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'I am interested in your services.'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let error = '';
    if (name === 'name') {
      if (!/^[A-Za-z\s]+$/.test(value)) {
        error = 'Name should only contain letters and spaces.';
      } else if (value.length < 2) {
        error = 'Name must be at least 2 characters.';
      } else if (value.length > 50) {
        error = 'Name must be less than 50 characters.';
      }
    }
    if (name === 'email') {
      if (!/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(value)) {
        error = 'Enter a valid email address.';
      } else if (value.length < 6) {
        error = 'Email must be at least 6 characters.';
      } else if (value.length > 50) {
        error = 'Email must be less than 50 characters.';
      }
    }
    if (name === 'phone') {
      if (value.length > 0 && !/^([+]?\d{1,3}[\s-]?)?(\d{10,15})$/.test(value.replace(/\s/g, ''))) {
        error = 'Enter a valid phone number.';
      } else if (value.length > 0 && (value.length < 10 || value.length > 15)) {
        error = 'Phone number must be 10-15 digits.';
      }
    }
    if (name === 'message') {
      if (value.length < 10) {
        error = 'Message must be at least 10 characters.';
      } else if (value.length > 500) {
        error = 'Message must be less than 500 characters.';
      }
    }
    setErrors(prev => ({ ...prev, [name]: error }));
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  React.useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields before submit
    const newErrors = {};
    if (!formData.name || !/^[A-Za-z\s]+$/.test(formData.name) || formData.name.length < 2 || formData.name.length > 50) {
      newErrors.name = 'Name should only contain letters and spaces (2-50 chars).';
    }
    if (!formData.email || !/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(formData.email) || formData.email.length < 6 || formData.email.length > 50) {
      newErrors.email = 'Enter a valid email address (6-50 chars).';
    }
    if (formData.phone.length > 0 && (!/^([+]?\d{1,3}[\s-]?)?(\d{10,15})$/.test(formData.phone.replace(/\s/g, '')) || formData.phone.length < 10 || formData.phone.length > 15)) {
      newErrors.phone = 'Enter a valid phone number (10-15 digits).';
    }
    if (!formData.message || formData.message.length < 10 || formData.message.length > 500) {
      newErrors.message = 'Message must be 10-500 characters.';
    }
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    // Redirect to mail client
    const subject = encodeURIComponent('Contact Form Submission from ' + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:info@unidreamsolutions.com?subject=${subject}&body=${body}`;
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
                      minLength={2}
                      maxLength={50}
                      pattern="^[A-Za-z\s]+$"
                    />
                    {errors.name && (
                      <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.name}</div>
                    )}
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
                      minLength={6}
                      maxLength={50}
                    />
                    {errors.email && (
                      <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.email}</div>
                    )}
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
                    minLength={10}
                    maxLength={15}
                    pattern="([+]?\d{1,3}[\s-]?)?(\d{10,15})"
                  />
                  {errors.phone && (
                    <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.phone}</div>
                  )}
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
                    minLength={10}
                    maxLength={500}
                  ></textarea>
                  {errors.message && (
                    <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.message}</div>
                  )}
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
                      +918287109325
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