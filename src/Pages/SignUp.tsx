import React, { useState } from 'react';
import './Signup.css';

const Signup: React.FC = () => {
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '', password: '' });

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/customers/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer),
      });

      if (response.ok) {
        alert('Signup successful! You can now log in.');
        setCustomer({ name: '', email: '', phone: '', password: '' });
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="signup">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter your name"
            value={customer.name}
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            value={customer.email}
            onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            placeholder="Enter your phone number"
            value={customer.phone}
            onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter a password"
            value={customer.password}
            onChange={(e) => setCustomer({ ...customer, password: e.target.value })}
            required
          />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
