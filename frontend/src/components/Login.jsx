import React, { useState } from "react";
import { loginUser } from "../api"; // Import the loginUser function from api.js
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // Add error state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData); // Use the loginUser function from api.js
      localStorage.setItem("token", res.data.token); // Store the token
      onLogin(res.data.token, formData.email); // Pass token and email to App.jsx
      navigate("/");
    } catch (err) {
      setError("Invalid credentials. Please try again."); // Set error message
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;