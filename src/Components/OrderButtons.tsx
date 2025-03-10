import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderButtons.css';

interface OrderButtonsProps {
  onOrder: () => void;
  onPurchase: () => void;
  onReview: () => void; 
}

const OrderButtons: React.FC<OrderButtonsProps> = ({ onOrder, onPurchase, onReview }) => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    onOrder(); 
    navigate('/order-meal'); 
  };

  const handlePurchaseRecipe = () =>
    onPurchase(); // Trigger the passed-in onPurchase function
    navigate('/purchase-recipe'); // Navigates to the OrderMeal page
    alert('Feature to purchase recipes coming soon!');
  };

  const handleReview = () => {
    onReview(); // Trigger the passed-in onReview function
    navigate('/reviews'); // Navigate to the review page (adjust the route accordingly)
    onPurchase(); 
    navigate('/purchase-recipe'); 
  };

  const handleReview = () => {
    onReview(); 
    navigate('/reviews-container'); 
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
