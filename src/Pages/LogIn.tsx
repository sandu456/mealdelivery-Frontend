import React, { useState } from 'react';
import './LogIn.css';
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:8080/api/auth/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userRole", data.role);

          // Redirect based on role
          if (data.role === "ROLE_ADMIN") {
              navigate("/admin");
          } else {
              navigate("/order");
          }
      } else {
          alert("Login failed: " + data.message);
      }
  } catch (error) {
      console.error("Login error:", error);
  }
};

  return (
    <div className="login">
      <h2>Log In</h2>
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