import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Make sure to install axios for HTTP requests

const SuperAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/authenticate', {
        email,
        password
      });

      // Extract the JWT token from the response
      const { token } = response.data;

      // Store the token in localStorage or sessionStorage
      localStorage.setItem('jwtToken', token);

      // Navigate to the Admin Dashboard
      navigate('/AdminDashBoard');
    } catch (error) {
      console.error("Login failed:", error);
      // Handle errors (e.g., show error message to the user)
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Super Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SuperAdmin;
