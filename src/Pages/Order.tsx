import React from 'react';
import { Link } from 'react-router-dom';
import './order.css';

const CustomerPage: React.FC = () => {
  return (
    <div className="customer-page">
      <h1>Welcome!</h1>
      <p>Explore delicious recipes and place your orders here.</p>

      <div className="meal-categories">
                  <div className="category">
                    <h2>Vegan</h2>
                    <p>Discover our delicious vegan recipes.</p>
                    <Link to="/vegan" className="category-link">
                      Explore Vegan
                    </Link>
                  </div>
                  <div className="category">
                    <h2>Vegetarian</h2>
                    <p>Taste our wide variety of vegetarian meals.</p>
                    <Link to="/vegetarian" className="category-link">
                      Explore Vegetarian
                    </Link>
                  </div>
                  <div className="category">
                    <h2>Pescatarian</h2>
                    <p>Enjoy fresh pescatarian dishes.</p>
                    <Link to="/pescatarian" className="category-link">
                      Explore Pescatarian
                    </Link>
                  </div>
                </div> 
      
      <div className="options-container">
        {/* <div className="option">
          <h2>View Recipes</h2>
          <p>View your favorite recipes.</p>
          <Link to="recipies" className="option-link">
            View Recipes
          </Link>
        </div> */}
        {/* <div className="option">
          <h2>Order Meals</h2>
          <p>Choose your favorite meals and have them delivered.</p>
          <Link to="/order-meal" className="option-link">
            Order Meals
          </Link>
        </div> */}
        {/* <div className="option">
          <h2>Purchase Recipes</h2>
          <p>Get our exclusive recipes delivered to your email.</p>
          <Link to="/purchase-recipe" className="option-link">
            Purchase Recipes
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default CustomerPage;
