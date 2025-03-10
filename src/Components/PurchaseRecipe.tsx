import React, { useState } from 'react';
import './PurchaseRecipe.css';

const PurchaseRecipe: React.FC = () => {
  const [recipe, setRecipe] = useState('');
  const [email, setEmail] = useState('');
  // const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiry: '', cvv: '' });

  const handlePurchaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process payment and send recipe email
    alert(`Recipe purchased: ${recipe}. It will be sent to ${email}`);
    // Clear form
    setRecipe('');
    setEmail('');
    // setPaymentInfo({ cardNumber: '', expiry: '', cvv: '' });
  };

  return (
    <div className="purchase-recipe">
      <h2>Purchase a Recipe</h2>
      <form onSubmit={handlePurchaseSubmit}>
        <label>
          Select Recipe:
          <select value={recipe} onChange={(e) => setRecipe(e.target.value)} required>
            <option value="">--Select--</option>
            <option value="Vegan Recipe">Vegan Recipe</option>
            <option value="Vegetarian Recipe">Vegetarian Recipe</option>
            <option value="Pescatarian Recipe">Pescatarian Recipe</option>
          </select>
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {/* <label>
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
        </label> */}
        <button type="submit">Purchase Recipe</button>
      </form>
    </div>
  );
};

export default PurchaseRecipe;
