import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventList from "./components/EventList";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import "./App.css";

function App() {
  const [selectedSession, setSelectedSession] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem("registeredUsers");
    if (savedUsers) {
      setRegisteredUsers(JSON.parse(savedUsers));
    }
  }, []);

  const handleRegister = (userData) => {
    const updatedUsers = [...registeredUsers, userData];
    setRegisteredUsers(updatedUsers);
    localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
  };

  const handleSessionSelect = (session) => {
    setSelectedSession(session);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <EventList onSessionSelect={handleSessionSelect} />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <RegistrationForm
                selectedSession={selectedSession}
                onRegister={handleRegister}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
