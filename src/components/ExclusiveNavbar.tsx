import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Cart } from "./Cart";
import "./styles.css";

export const ExclusiveNavbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  //state to track whether the nav-magnify or input box should be displayed
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // function to  toggle d Navbar
  const toggleNavbar = () => setIsNavOpen(!isNavOpen);
  //function to close the navbar
  const closeNavBar = () => setIsNavOpen(false);

  // Function to toggle to the input box
  const handleImageClick = () => {
    setIsEditing(true);
  };
  // Function to handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Function to handle "Enter" key press or losing focus
  const handleInputBlur = () => {
    setIsEditing(false);
  };
  // function to handle "Enter" key press
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };
  return (
    <>
      <div className="exclusive-nav-wrapper">
        <div className="exclusive-nav-container">
          <img
            onClick={toggleNavbar}
            className="toggle-btn"
            src="./images/hamburger.png"
            alt="toogle-btn"
            style={{ display: isNavOpen ? "none" : "" }}
          />
          <h2 className="logo">Exclusive</h2>
          <div className={`exclusive-nav-links  ${isNavOpen ? "open" : ""}`}>
            <p className="overlay-close-btn" onClick={closeNavBar}>
              x
            </p>
            <h2 className="logo2">Exclusive</h2>
            <p className="exclusive-nav-link">Home</p>
            <p className="exclusive-nav-link">Contact</p>
            <p className="exclusive-nav-link">About</p>
            <p className="exclusive-nav-link">Sign Up</p>
            <hr className="horizontal-rule" />

            <div className="exclusive-nav-items">
              <nav className="exclusive-nav-link">Woman's Fashoin</nav>
              <nav className="exclusive-nav-link">Men's Fashion</nav>
              <nav className="exclusive-nav-link">Electronics</nav>
              <nav className="exclusive-nav-link"> Home & Lifestyle</nav>
              <nav className="exclusive-nav-link">Medicine</nav>
              <nav className="exclusive-nav-link">Sports & Outdoor</nav>
              <nav className="exclusive-nav-link">Baby's & Toys</nav>
              <nav className="exclusive-nav-link">Groceries & Pets</nav>
              <nav className="exclusive-nav-link">Health & Beauty</nav>
            </div>
          </div>
        </div>
        <div className="exclusive-input-container">
          <div className="exclusive-input-wrapper">
            <input
              className="exclusive-nav-input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleKeyPress}
              placeholder="What are you looking for?"
            />
            <img
              className="nav-magnify"
              src="./images/Magnify.png"
              alt="s"
              onClick={handleImageClick}
            />
          </div>
          <div className="user-actions-container">
            {/* wish-list */}
            <div className="action-wrapper">
              <img className="action-img" src="./images/Wishlist.png" alt="w" />
              <span className="action-count">2</span>
            </div>
            {/* Cart */}
            <div className="action-wrapper">
              <Link to="/cart">
                {" "}
                <img className="action-img" src="./images/Cart.png" alt="w" />
              </Link>
              <span className="action-count">4</span>
            </div>

            <div className="action-wrapper">
              <img className="action-img" src="./images/User.png" alt="w" />
            </div>
            {isNavOpen && <div className="overlay" onClick={closeNavBar}></div>}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
