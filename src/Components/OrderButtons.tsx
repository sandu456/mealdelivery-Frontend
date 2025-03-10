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

  const handlePurchaseRecipe = () => {
    onPurchase(); 
    navigate('/purchase-recipe');
    alert('Feature to purchase recipes coming soon!');
  };

  const handleReview = () => {
    onReview(); 
    navigate('/reviews'); 
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
