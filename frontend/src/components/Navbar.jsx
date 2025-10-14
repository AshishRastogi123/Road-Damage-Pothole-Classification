import React from "react";
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
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/about">About</a>
        </div>

        {/* Buttons */}
        <div className="nav-buttons">
          <button className="btn signup-btn">Signup</button>
          <button className="btn login-btn">Login</button>
        </div>
      </nav>
      <UploadSection />
    </>
  );
}

export default Navbar;
