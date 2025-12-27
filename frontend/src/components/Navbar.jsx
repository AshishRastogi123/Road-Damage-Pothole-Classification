import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import UploadSection from "./UploadSection";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

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

        {/* Right Section */}
        <div className="nav-buttons">
          {user ? (
            <div className="user-info">
              <img
                src={
                  user.avatar ||
                  `https://ui-avatars.com/api/?name=${user.name}`
                }
                alt="profile"
                className="profile-icon"
              />
              <span className="username">{user.name}</span>
              <button className="btn logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/signup" className="btn signup-btn">
                Signup
              </Link>
              <Link to="/login" className="btn login-btn">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>

      <UploadSection />
    </>
  );
}

export default Navbar;
