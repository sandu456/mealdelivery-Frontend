import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-content">
        <div className="contact-details">
          <h2>Our Contact Details</h2>
          <p>
            <strong>Email:</strong> mealdelivery@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> 0778765179
          </p>
          <p>
            <strong>Address:</strong> Fransis Lane, Kelaniya, SriLanka
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
