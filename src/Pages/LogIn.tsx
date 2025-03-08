import React, { useState } from 'react';
import './LogIn.css';
import axios from "axios";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:8080/api/auth/signin", {
        username,
        password,
      });

      // Save the token in localStorage (for future authenticated requests)
      localStorage.setItem("token", response.data.token);

      setMessage("Login successful! Redirecting...");
      // Redirect user after successful login (modify as needed)
      setTimeout(() => {
        window.location.href = "/dashboard"; // Change '/dashboard' to your actual route
      }, 2000);
      
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Invalid credentials. Try again.");
    }
  };


  return (
    <div className="login">
      <h2>Log In</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;