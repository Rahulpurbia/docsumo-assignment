import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Hamburger from "../../Images/hamburger.svg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
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
        <div className="navbar-links">
          <ul onClick={toggleMenu}>
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
            <li>
              <Link to="/">Company</Link>
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
