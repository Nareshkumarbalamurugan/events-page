import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.css";

const RegistrationForm = ({ selectedSession, onRegister }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    session: selectedSession ? selectedSession.title : "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedSession) {
      setFormData((prev) => ({
        ...prev,
        session: selectedSession.title,
      }));
    }
  }, [selectedSession]);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.session) newErrors.session = "Please select a session";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onRegister(formData);
      setIsSubmitted(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="registration-success">
        <h2>Registration Successful!</h2>
        <p>
          Thank you for registering. We've sent a confirmation to your email.
        </p>
      </div>
    );
  }

  return (
    <section className="registration-form">
      <h2>Event Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="session">Session</label>
          <input
            type="text"
            id="session"
            name="session"
            value={formData.session}
            onChange={handleChange}
            readOnly={!!selectedSession}
          />
          {errors.session && <span className="error">{errors.session}</span>}
        </div>

        <button type="submit" className="submit-button">
          Complete Registration
        </button>
      </form>
    </section>
  );
};

export default RegistrationForm;
