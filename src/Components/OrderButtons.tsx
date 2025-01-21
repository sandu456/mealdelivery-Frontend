import React, { useState } from 'react';
import './OrderButtons.css';


type OrderButtonsProps = {
  onOrder?: () => void; // Make the functions optional
  onPurchase?: () => void; // Make the functions optional
};

const OrderButtons: React.FC<OrderButtonsProps> = ({ onOrder = () => {}, onPurchase = () => {} }) => {
  const [showOrderMeal, setShowOrderMeal] = useState(false);

  const handleOrderClick = () => {
    setShowOrderMeal(true); // Show the OrderMeal form when "Order Now" is clicked
    onOrder(); // Optionally you can invoke additional actions here
  };

  return (
    <div className="button-group">
      <button className="order-button" onClick={handleOrderClick}>
        Order Now
      </button>
      <button className="purchase-button" onClick={onPurchase}>
        Purchase Recipe
      </button>

     
    </div>
  );
};

export default OrderButtons;