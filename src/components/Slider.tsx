import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Slider() {
  const [counter, setCounter] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const radioButton = document.getElementById(
        `radio${counter}`
      ) as HTMLInputElement | null;
      if (radioButton) {
        radioButton.checked = true;
      }

      setCounter((prevCounter) => (prevCounter >= 4 ? 1 : prevCounter + 1));
    }, 4000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [counter]);
  return (
   
      <div className="order-side-menu">
        <div className="nav-items">
          <nav className="nav-item">Woman's Fashoin</nav>
          <nav className="nav-item">Men's Fashion</nav>
          <nav className="nav-item">Electronics</nav>
          <nav className="nav-item"> Home & Lifestyle</nav>
          <nav className="nav-item">Medicine</nav>
          <nav className="nav-item">Sports & Outdoor</nav>
          <nav className="nav-item">Baby's & Toys</nav>
          <nav className="nav-item">Groceries & Pets</nav>
          <nav className="nav-item">Health & Beauty</nav>
          <hr className="horizontal-line" />
        </div>
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />
            <div className="slide first">
              <img className="slide-img" src="./images/Slide1.png" alt="" />
            </div>
            <div className="slide">
              <img className="slide-img" src="./images/Slide2.png" alt="" />
            </div>
            <div className="slide">
              <img className="slide-img" src="./images/Slide3.png" alt="" />
            </div>
            <div className="slide">
              <img className="slide-img" src="./images/Slide4.png" alt="" />
            </div>

            {/* automatic navigation */}
            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>
            {/* end */}
          </div>
          {/* manual navigation */}
          <div className="navigation-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
          </div>
          <img className="slider-images" src="./images/Iphone14.png" alt="" />
          <div className="iphone-logo-container">
            <img src="./images/Apple-logo.png" alt="apple" />
            <p className="apple-text">Iphone 14 Series</p>
          </div>
          <div className="advert-container">
            <h2 className="advert-text">Up to 10% off Voucher</h2>
          </div>
          <div className="shopnow-btn-container">
            <button className="shopnow-btn">Shop Now</button>
            <img src="./images/Arrow-btn.png" alt="" />
          </div>
        </div>
        {/* {mobile advert} */}
        <div className="mobile-slide-container">
          <div className="mobile-slide-wrapper">
            <Link to={"/mobile-advert1"}>
              {" "}
              <img
                className="mobile-slide-img"
                src="./images/Iphone14Pro.png"
                alt=""
              />
            </Link>
         <Link to={"/mobile-advert2"}>  <img
              className="mobile-slide-img"
              src="./images/Samsung.png"
              alt=""
            />
            </Link> 
          </div>
        </div>
      </div>
   
  );
}
