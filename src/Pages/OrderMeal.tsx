import React, { useState } from 'react';
import './OrderMeal.css';

const OrderMeal: React.FC = () => {
  const [meal, setMeal] = useState('');
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiry: '', cvv: '' });

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process order and payment
    alert(`Order placed for meal: ${meal}`);
    // Clear form
    setMeal('');
    setPaymentInfo({ cardNumber: '', expiry: '', cvv: '' });
  };

  return (
    <div className="order-meal">
      <h2>Order Your Meal</h2>
      <form onSubmit={handleOrderSubmit}>
        <label>
          Select Meal:
          <select value={meal} onChange={(e) => setMeal(e.target.value)} required>
            <option value="">--Select--</option>
            <option value="Vegan Meal">Vegan Meal</option>
            <option value="Vegetarian Meal">Vegetarian Meal</option>
            <option value="Pescatarian Meal">Pescatarian Meal</option>
          </select>
        </label>
        <label>
          Card Number:
          <input
            type="text"
            placeholder="Card Number"
            value={paymentInfo.cardNumber}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
            required
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            placeholder="MM/YY"
            value={paymentInfo.expiry}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, expiry: e.target.value })}
            required
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            placeholder="CVV"
            value={paymentInfo.cvv}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
            required
          />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderMeal;
