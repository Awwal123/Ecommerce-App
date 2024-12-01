import React from "react";
import { ExclusiveNavbar } from "./ExclusiveNavbar";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Fade } from "react-awesome-reveal";
import { useCart } from "./CartContext";
import "./styles.css";

export function Cart() {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart(); // Access context data and actions

  return (
    <>
    <Fade direction="up" duration={3000} triggerOnce>
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
            {/* Large Screen Headings */}
            <div className="product-item-heading">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {/* Mobile Total Section */}
            <div className="total">
              <h2 className="total-mobile">Total:</h2>
              <p className="total-amount">${total.toFixed(2)}</p>
            </div>

            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div className="products-item" key={item.id}>
                  {/* Product Details */}
                  <div className="product-item-headings">
                    <div className="added-item-container">
                      <img
                        className="cancel-btn"
                        src="./images/CancelBtn.png"
                        alt="delete"
                        onClick={() => removeFromCart(item.id)}
                      />
                      <img
                        className="added-img"
                        src={item.imgUrl}
                        alt={item.name}
                      />
                      <div className="product-name-container">
                        <p className="product-name">{item.name}</p>
                        <p className="price-mobile">${item.price.toFixed(2)}</p>
                      </div>
                    </div>

                    <p className="price">${item.price.toFixed(2)}</p>

                    {/* Mobile Quantity Controls */}
                    <div className="mobile-quantity">
                      <div
                        className="add-item"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </div>
                      <p className="quanti">{item.quantity}</p>
                      <div
                        className="reduce-item"
                        onClick={() =>
                          item.quantity > 1 &&
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </div>
                    </div>

                    {/* Desktop Quantity Controls */}
                    <div className="quantity-container">
                      <div className="quantity-wrapper">
                        <div className="quantity-alignment">
                          <p>{item.quantity}</p>
                          <div className="add-sub-container">
                            <img
                              src="./images/DropUp.png"
                              alt="Increase"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            />
                            <img
                              src="./images/DropDown.png"
                              alt="Decrease"
                              onClick={() =>
                                item.quantity > 1 &&
                                updateQuantity(item.id, item.quantity - 1)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="sub-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="empty-cart-message">Your cart is empty!</h1>
            )}
          </div>
          <div className="coupon-alignment">
          <div className="products-btn">
            <Link to={"/exclusive"} className="cart-links">
              <button className="return-to-shop-btn">Return To Shop</button>
            </Link>
            <Link to={"/exclusive"} className="cart-links">
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
                <p>${total.toFixed(2)}</p>
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
                <p>${total.toFixed(2)}</p>
              </div>

              <button className="process-to-checkout">
                Process to Checkout
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer />
      </Fade>
    </>
  );
}
