import React from 'react';
import './customer.css';

const CustomerPage = () => {
  return (
    <div className="customer-page">
      <h1>Welcome, Customer!</h1>
      <p>Explore delicious recipes and place your orders here.</p>
      <button>View Recipes</button>
      <button>My Orders</button>
      <button>Contact Support</button>
    </div>
  );
};

export default CustomerPage;
