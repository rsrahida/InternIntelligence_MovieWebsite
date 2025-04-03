import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.length < 10) {
      formErrors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Your message has been sent!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-page-info">
        <h2 className="contact-page-info-title">Get in Touch</h2>
        <p className="contact-page-info-text">
          Have a question or suggestion? You can fill out the form below to get
          in touch with us.
        </p>
        <p className="contact-page-info-item">
          <i
            className="fas fa-phone-alt contact-page-info-icon"
            style={{ color: "red" }}
          ></i>
          <strong className="contact-page-info-item-title"> Phone:</strong> +99
          999 99 99
        </p>
        <p className="contact-page-info-item">
          <i
            className="fas fa-envelope contact-page-info-icon"
            style={{ color: "red" }}
          ></i>
          <strong className="contact-page-info-item-title"> Email:</strong>{" "}
          info@cinemastercard.az
        </p>
        <p className="contact-page-info-item">
          <i
            className="fas fa-map-marker-alt contact-page-info-icon"
            style={{ color: "red" }}
          ></i>
          <strong className="contact-page-info-item-title"> Address:</strong>{" "}
          Baku, Azerbaijan
        </p>
      </section>

      <section className="contact-page-form">
        <h2 className="contact-page-form-title">Write to Us</h2>
        <form className="contact-page-form-container" onSubmit={handleSubmit}>
          <label htmlFor="name" className="contact-page-form-label">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-page-form-input"
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="email" className="contact-page-form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-page-form-input"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="message" className="contact-page-form-label">
            Your Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contact-page-form-textarea"
          />
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit" className="contact-page-form-submit-btn">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
