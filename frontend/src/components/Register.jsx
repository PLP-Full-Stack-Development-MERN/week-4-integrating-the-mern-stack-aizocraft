import React, { useState } from "react";
import { registerUser } from "../api"; // Import the registerUser function from api.js
import { useNavigate } from "react-router-dom";

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(""); // Add error state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(formData); // Use the registerUser function from api.js
      localStorage.setItem("token", res.data.token); // Store the token
      onRegister(res.data.token, formData.name); // Pass token and name to App.jsx
      navigate("/");
    } catch (err) {
      setError("Registration failed. Please try again."); // Set error message
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;