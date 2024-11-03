// Contact.jsx
import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateField(e.target.name, e.target.value); // Validate field on change
  };

  const handleBlur = (e) => {
    validateField(e.target.name, e.target.value); // Validate field on blur
  };

  const validateField = (fieldName, value) => {
    let error = '';
    if (!value.trim()) {
      error = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    } else if (fieldName === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please enter a valid email address';
    }
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (!formData[field]) {
        validationErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
