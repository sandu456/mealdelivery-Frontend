import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us with your questions, feedback, or suggestions.</p>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" rows={5} required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-details">
          <h2>Our Contact Details</h2>
          <p>
            <strong>Email:</strong> support@mealdelivery.com
          </p>
          <p>
            <strong>Phone:</strong> +94 702345678
          </p>
          <p>
            <strong>Address:</strong> 123 Meal Street, Food City, SriLanka
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
