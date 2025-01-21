import React from 'react';
import './OrderButtons.css';

type OrderButtonsProps = {
  onOrder: () => void;
  onPurchase: () => void;
};

const OrderButtons: React.FC<OrderButtonsProps> = ({ onOrder, onPurchase }) => {
  return (
    <div className="button-group">
      <button className="order-button" onClick={onOrder}>
        Order Now
      </button>
      <button className="purchase-button" onClick={onPurchase}>
        Purchase Recipe
      </button>
    </div>
  );
};

export default OrderButtons;