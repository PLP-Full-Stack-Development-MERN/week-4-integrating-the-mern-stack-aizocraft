import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { checkAuth } from "./api";
import "./index.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  // Check if the user is authenticated on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && checkAuth()) {
      setIsAuthenticated(true);
      // Fetch user details if needed (e.g., from an API)
    }
  }, []);

  // Handle login
  const handleLogin = (token, name) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    setUserName(name);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUserName("");
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar isAuthenticated={isAuthenticated} userName={userName} onLogout={handleLogout} />
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            path="/register"
            element={<Register onRegister={handleLogin} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;