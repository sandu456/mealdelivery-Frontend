import React, { useState } from 'react';
import './OrderMeal.css';

const OrderMeal: React.FC = () => {
  const [meal, setMeal] = useState('');
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiry: '', cvv: '' });
  const [customerId, setCustomerId] = useState(''); // Assuming customerId is required
  const [status, setStatus] = useState('Pending');

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Order payload
    const orderData = {
      customerId,
      items: [{ name: meal, quantity: 1, price: 10.0 }], // Example price
      total: 10.0, // Example total
      status,
      paymentInfo,
    };

    try {
      // Make a POST request to the API
      const response = await fetch('http://localhost:8080/orders/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(`Order placed successfully! Order ID: ${result.id}`);
        // Clear form
        setMeal('');
        setPaymentInfo({ cardNumber: '', expiry: '', cvv: '' });
        setCustomerId('');
      } else {
        alert('Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred while placing the order.');
    }
  };

  return (
    <div className="order-meal">
      <h2>Order Your Meal</h2>
      <form onSubmit={handleOrderSubmit}>
        <label>
          Customer ID:
          <input
            type="text"
            placeholder="Customer ID"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            required
          />
        </label>
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
