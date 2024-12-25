// Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setShowForm(false);
  };

  return (
    <div id="contact" className="contact-section">
      {/* Button to toggle form */}
      <div className="contact-header">
        <span>GET IN TOUCH</span>
        <button className="contact-button" onClick={handleToggleForm}>
          CONTACT ME
        </button>
      </div>

      {/* Contact form */}
      {showForm && (
        <div className="contact-form-container">
          <button className="close-button" onClick={handleToggleForm}>
            ✖
          </button>
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
            />

            <button type="submit" className="send-button">
              SEND
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;