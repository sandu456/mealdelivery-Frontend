import React, { useState } from "react";
import "./OrderMeal.css";

const OrderMeal: React.FC = () => {
  const [customerId, setCustomerId] = useState("");
  const [mealId, setMealId] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card"); 
  const [paymentAmount, setPaymentAmount] = useState(0);
  // const [paymentAmount, setPaymentAmount] = useState<number | null>(null);

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

  
    const orderData = {
      customerId,
      mealId,
      totalAmount,
      deliveryAddress,
      paymentMethod
    };

    try {
      
      const token = localStorage.getItem("token"); 
      // console.log(orderData, token);
      
      const response = await fetch("http://localhost:8080/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify(orderData),
      });
      

      if (response.ok) {
        const result = await response.json();
        setPaymentAmount(result.paymentAmount); 
        alert(`Order placed successfully! Order ID: ${result.id}\nTotal Bill: $${result.paymentAmount}`);
        

      
       
        setCustomerId("");
        setMealId("");
        setTotalAmount(0);
        setDeliveryAddress("");
        setPaymentMethod("Credit Card");
        setPaymentAmount(0);
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred while placing the order.");
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
            placeholder="Enter Customer ID"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            required
          />
        </label>
        <label>
          Meal ID:
          <input
            type="text"
            placeholder="Enter Meal ID"
            value={mealId}
            onChange={(e) => setMealId(e.target.value)}
            required
          />
        </label>
        <label>
          Total Amount:
          <input
            type="number"
            placeholder="Enter Total Amount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(parseFloat(e.target.value))}
            required
          />
        </label>
        <label>
          Delivery Address:
          <textarea
            placeholder="Enter Delivery Address"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Payment Method:
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>
        </label>
       
        <label>
          Total Payment:
          <input
            type="text"
            placeholder="Auto-calculated"
            value={paymentAmount !== 0 ? `$${paymentAmount.toFixed(2)}` : ""}
            readOnly
          />
        </label>


        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderMeal;




