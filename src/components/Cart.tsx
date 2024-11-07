import React from "react";
import { ExclusiveNavbar } from "./ExclusiveNavbar";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import "./styles.css"

export function Cart() {
  return (
    <>
      <Header />
      <ExclusiveNavbar />
      <div className="not-found-wrapper">
        <div className="four-error-container">
          <p className="home-error">Home</p>
          <p className="home-slash">/</p>
          <p>Cart</p>
        </div>
        <div className="products-container">
          <div className="product-items-container">
            <div className="products-item">
              <div className="product-item-headings">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>
            </div>

            <div className="products-item">
              <div className="product-item-headings">
                <div className="added-item-container">
                  <img
                    className="cancel-btn"
                    src="./images/CancelBtn.png"
                    alt="delete"
                  />
                  <img
                    className="added-img"
                    src="./images/AddedImg1.png"
                    alt=""
                  />
                  <div className="product-name-container">
                    <p className="product-name">LCD Monitor</p>
                  </div>
                </div>

                <p className="price">$950</p>
                <div className="quantity-container">
                  <div quantity-wrapper>
                    <div className="quantity-alignment">
                      <p>01</p>
                      <div className="add-sub-container">
                        <img src="./images/DropUp.png" alt="" />
                        <img src="./images/DropDown.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="sub-total">$950</p>
              </div>
            </div>

            {/* second */}
            <div className="products-item">
              <div className="product-item-headings">
                <div className="added-item-container">
                  <img
                    className="cancel-btn"
                    src="./images/CancelBtn.png"
                    alt="delete"
                  />
                  <img
                    className="added-img"
                    src="./images/USBGamePad.png"
                    alt=""
                  />
                  <div className="product-name-container">
                    <p className="product-name">GP11 USB Gamepad</p>
                  </div>
                </div>

                <p className="price">$550</p>
                <div className="quantity-container">
                  <div quantity-wrapper>
                    <div className="quantity-alignment">
                      <p>01</p>
                      <div className="add-sub-container">
                        <img className="increase-item-quantity" src="./images/DropUp.png" alt="" />
                        <img className="decrease-item-quantity" src="./images/DropDown.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="sub-total">$550</p>
              </div>
            </div>
          </div>
          <div className="products-btn">
            <Link to={"/exclusive"}>
              {" "}
              <button className="return-to-shop-btn">Return To Shop </button>
            </Link>
            <Link to={"/product-display"}>
              <button className="update-cart">Update Cart</button>
            </Link>
          </div>

          <div className="cart-checkout">
            <div className="coupon-container">
              <input
                className="coupon-input"
                type="text"
                placeholder="Coupon Code"
              />
              <button className="apply-coupon">Apply Coupon</button>
            </div>
            <div className="cart-total-container">
              <h3 className="cart-total-heading">Cart Total</h3>

              {/* Subtotal */}
              <div className="sub-total-container">
                <p>Subtotal:</p>
                <p>$1750</p>
              </div>
              <hr />
              {/* Shipping */}
              <div className="sub-total-container">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <hr />
              {/* Total */}
              <div className="sub-total-container">
                <p>Total:</p>
                <p>$1750</p>
              </div>

              <button className="process-to-checkout">
                Process to checkOut
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 

