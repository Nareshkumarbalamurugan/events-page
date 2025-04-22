import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email is required");
      return false;
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      // Handle password reset logic
      console.log("Password reset requested for:", email);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="auth-container">
        <h2>Password Reset</h2>
        <div className="success-message">
          <p>
            If an account exists for {email}, we've sent a password reset link.
          </p>
          <Link to="/login" className="auth-button">
            Back to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <span className="error">{error}</span>}
        </div>

        <button type="submit" className="auth-button">
          Reset Password
        </button>

        <div className="auth-footer">
          Remember your password? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
