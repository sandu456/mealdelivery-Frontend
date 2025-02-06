
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
