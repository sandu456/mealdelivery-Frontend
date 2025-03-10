import React, { useState } from 'react';
import './Signup.css';

const Signup: React.FC = () => {
  const [user, setUser] = useState({ username: '', email: '', role: 'customer', password: '' });

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          roles: [user.role],
          password: user.password 
        }),
      });

      if (response.ok) {
        alert('Signup successful! You can now log in.');
        setUser({ username: '', email: '', role: 'customer', password: '' });
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Signup failed. Please try again.');
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
          Username:
          <input
            type="text"
            placeholder="Enter your username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </label>
        <label>
          Role:
          <select
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
            required
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter a password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
