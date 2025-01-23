import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderButtons.css';

const OrderButtons: React.FC = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/order-meal'); // Navigates to the OrderMeal page
  };

  const handlePurchaseRecipe = () => {
    alert('Feature to purchase recipes coming soon!');
  };

  return (
    <div className="button-group">
      <button className="order-button" onClick={handleOrderNow}>
        Order Now
      </button>
      <button className="purchase-button" onClick={handlePurchaseRecipe}>
        Purchase Recipe
      </button>
    </div>
  );
};

export default OrderButtons;
