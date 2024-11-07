import React, { useState } from "react";
import "./styles.css";

const Navbar: React.FC = () => {
const [isOpen, setIsOpen] = useState(false);

  // toggle nav open/close state
 const toggleNavbar = () => setIsOpen(!isOpen);

  // close the navbar if clicked on overlay
const closeNavBar = () => setIsOpen(false)
  return (
    <>
      <div className="navbar-container">
        <div className="nav-alignment">
            <div className="adjustment">
          <img
            onClick={toggleNavbar}
            className="toggle-btn"
            src="./images/hamburger.png"
            alt="toogle-btn"
            style={{ display: isOpen ? 'none' : '' }}
          />
          <h2 className="logo">Exclusive</h2>
          </div>
          <div className={`nav-links-container ${isOpen ? 'open': ''}`}>
            <p className="overlay-close-btn" onClick={closeNavBar}>x</p>
            <h2 className="logo2">Exclusive</h2>
            <ul className="nav-test">Home</ul>
            <ul className="nav-test">Contact</ul>
            <ul className="nav-test">About</ul>
            <ul className="nav-test">Sign Up</ul>
          </div>

          <div className="nav-input-box-container1">
            <input
              className="nav-input-box1"
              type="text"
              placeholder="What are you looking for?"
            />
            <img className="nav-magnify1" src="./images/Magnify.png" alt="" />
          </div>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={closeNavBar}></div>}
      <hr className="nav-horizontal-line" />
    </>
  );
};
export default Navbar;
