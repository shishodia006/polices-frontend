import React, { useState } from "react";
import "./Header.css";
import logoimg from "../assets/images/Politics-for-Impact.png";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [active, setActive] = useState(window.location.pathname);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="logo-section">
           <a href="/"><img src={logoimg} alt="Politics for Impact" className="logo" /></a>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links desktop-menu">
          <a href="/" className={active === "/" ? "active" : ""}>Home</a>
          <a href="/about" className={active === "/about" ? "active" : ""}>About Us</a>
          <a href="/our-work" className={active === "/our-work" ? "active" : ""}>Our Work</a>
          <a href="/reports" className={active === "/reports" ? "active" : ""}>Reports</a>
          <a href="/join-us" className={active === "/join-us" ? "active" : ""}>Join Us</a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={() => setIsOpen(true)}>
          <FiMenu size={28} />
        </div>
      </header>

      {/* Offcanvas Mobile Menu */}
      <div className={`offcanvas ${isOpen ? "show" : ""}`}>
        <div className="offcanvas-header">
          <img src={logoimg} alt="Politics for Impact" className="logo" />
          <FiX size={28} className="close-btn" onClick={() => setIsOpen(false)} />
        </div>
        <nav className="offcanvas-links">
          <a href="/" onClick={() => setIsOpen(false)} className={active === "/" ? "active" : ""}>Home</a>
          <a href="/about" onClick={() => setIsOpen(false)} className={active === "/about" ? "active" : ""}>About us</a>
          <a href="/our-work" onClick={() => setIsOpen(false)} className={active === "/our-work" ? "active" : ""}>Our Work</a>
          <a href="/reports" onClick={() => setIsOpen(false)} className={active === "/reports" ? "active" : ""}>Reports</a>
          <a href="/join-us" onClick={() => setIsOpen(false)} className={active === "/join-us" ? "active" : ""}>Join Us</a>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Header;
