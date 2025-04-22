import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Tech Conference 2023</h1>
        <p>Join the biggest gathering of tech enthusiasts and experts</p>
        <Link to="/register" className="cta-button">
          Register Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
