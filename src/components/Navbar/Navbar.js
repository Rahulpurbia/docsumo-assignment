import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Hamburger from "../../Images/hamburger.svg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = (e) => {
    if (e.target.className.includes("company-navlink")) {
      e.target.classList.toggle("open-dropdown");
    } else if (e.target.className.includes("dropdown-link")) {
      e.target.parentElement.classList.toggle("open-dropdown");
    } else {
      setOpenMenu((prev) => !prev);
    }
  };

  return (
    <nav className="navbar bg-primary">
      <div className="logo">
        <Link to="/">
          <span>Logo</span>
          <span>Docsumo</span>
        </Link>
      </div>
      <img
        src={Hamburger}
        height={"30px"}
        alt="menu"
        className="hamburger-menu pointer"
        onClick={toggleMenu}
      />
      <div className={`navbar-links-container ${openMenu ? "open-menu" : ""}`}>
        <div className="alignment-placeholder"></div>
        <div className="navbar-links h-100">
          <ul onClick={toggleMenu} className="h-100">
            <li>
              <Link to="/products">Product</Link>
            </li>
            <li>
              <Link to="/">Solutions</Link>
            </li>
            <li>
              <Link to="/">Tools</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li className="company-navlink">
              <div className="flex-center dropdown-link">
                Company <span className="dropdown-icon"></span>
              </div>
              <div className="company-dropdown">
                <Link to="/about" className="dropdown-navlink flex-center">
                  <span className="dropdown-navlink-icon flex-center">A</span>
                  <div className="flex-column d-flex justify-content-center">
                    <span className="dropdown-navlink-title font-bold">
                      About Us
                    </span>
                    <span className="dropdown-navlink-subtitle">
                      Enabling Enterprises to become digital and Efficient
                    </span>
                  </div>
                </Link>
              </div>
            </li>
            <li>
              <Link to="/">Resources</Link>
            </li>
          </ul>
        </div>
        <div className="cta-buttons">
          <button className="btn bg-secondary text-white font-bold">
            Start free 14-day trial
          </button>
          <button className="btn font-bold bg-default text-secondary">
            Schedule Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
