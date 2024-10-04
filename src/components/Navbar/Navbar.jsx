import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import logo from "/home/user/Practice/Ecomposer/Free_Plant/src/assets/images/NavbarImage/logo-text.png";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Website Logo" />
      </div>
      <div className="navbar-links">
        <p className="navbar-para">EComposer Templates</p>
        <button className="dropdown-button" onClick={toggleDropdown}>
          All Categories <RiArrowDownSLine />
        </button>
        {dropdownOpen && (
          <div className="dropdown-content">
            <Link className="link" to="/">
              All Categories
            </Link>
            <Link className="link" to="/leadGeneration">
              Lead Generation
            </Link>
            <Link className="link" to="/contact">
              Contact Us
            </Link>
            <Link className="link" to="/landing">
              Landing Pages
            </Link>
          </div>
        )}
        <div className="searchbar-navbar">
          <input
            className="navbar-search"
            type="text"
            placeholder="Type Something to find template"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
