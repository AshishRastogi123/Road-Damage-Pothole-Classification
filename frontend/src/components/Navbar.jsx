import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import UploadSection from "./UploadSection";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">Potholix</div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/about">About</Link>
        </div>

        {/* Buttons */}
        <div className="nav-buttons">
          <Link to="/signup" className="btn signup-btn">
            Signup
          </Link>
          <Link to="/login" className="btn login-btn">
            Login
          </Link>
        </div>
      </nav>

      <UploadSection />
    </>
  );
}

export default Navbar;
