import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Delivering Happiness</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            We are a passionate team dedicated to bringing fresh, healthy, and delicious meals
            directly to your doorstep. Our mission is to make mealtime convenient and enjoyable,
            offering options for every lifestyle, including vegan, vegetarian, and pescatarian meals.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Commitment</h2>
          <p>
            We prioritize quality and customer satisfaction. All our meals are crafted using the
            finest ingredients, sourced responsibly from trusted suppliers. Whether you're looking
            for a quick bite or a gourmet experience, we've got you covered.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Wide variety of meal options</li>
            <li>Fresh and locally sourced ingredients</li>
            <li>Convenient delivery to your doorstep</li>
            <li>Eco-friendly and sustainable practices</li>
            <li>Easy-to-use platform for ordering</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
