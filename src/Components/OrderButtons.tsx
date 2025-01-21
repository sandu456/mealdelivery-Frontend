import React, { useState } from 'react';
import './OrderButtons.css';
import OrderMeal from './OrderMeal';

type OrderButtonsProps = {
  onOrder: () => void;
  onPurchase: () => void;
};

const OrderButtons: React.FC<OrderButtonsProps> = ({ onOrder, onPurchase }) => {
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

      {/* Show OrderMeal form only if showOrderMeal is true */}
      {showOrderMeal && <OrderMeal />}
    </div>
  );
};

export default OrderButtons;