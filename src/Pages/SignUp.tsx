import React, { useState } from 'react';
import './SignUp.css';

const SignUp: React.FC = () => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value
    }));
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/customers/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Welcome, ${data.name}!`);
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="sign-up">
      <h2>Create an Account</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSignUp}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={customer.phone}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={customer.address}
            onChange={handleInputChange}
            required
          />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
