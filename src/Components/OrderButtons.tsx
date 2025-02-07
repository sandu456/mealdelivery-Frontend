import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderButtons.css';

interface OrderButtonsProps {
  onOrder: () => void;
  onPurchase: () => void;
  onReview: () => void; // Review prop should be typed
}

const OrderButtons: React.FC<OrderButtonsProps> = ({ onOrder, onPurchase, onReview }) => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    onOrder(); // Trigger the passed-in onOrder function
    navigate('/order-meal'); // Navigates to the OrderMeal page
  };

  const handlePurchaseRecipe = () => {
    onPurchase(); // Trigger the passed-in onPurchase function
    alert('Feature to purchase recipes coming soon!');
  };

  const handleReview = () => {
    onReview(); // Trigger the passed-in onReview function
    navigate('/review'); // Navigate to the review page (adjust the route accordingly)
  };

  return (
    <div className="button-group">
      <button className="order-button" onClick={handleOrderNow}>
        Order Now
      </button>
      <button className="purchase-button" onClick={handlePurchaseRecipe}>
        Purchase Recipe
      </button>
      <button className="review-button" onClick={handleReview}> 
        Review Recipe
      </button>
    </div>
  );
};

export default OrderButtons;
