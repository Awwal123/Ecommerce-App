import React from "react";
import { ExclusiveNavbar } from "./ExclusiveNavbar";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { useCart } from "./CartContext"; // Import the Cart context
import "./styles.css";

export function Cart() {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart(); // Access context data and actions

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

            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div className="products-item" key={item.id}>
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
                      </div>
                    </div>

                    <p className="price">${item.price.toFixed(2)}</p>
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
              <p className="empty-cart-message">Your cart is empty!</p>
            )}
          </div>
          <div className="products-btn">
            <Link to={"/exclusive"}>
              <button className="return-to-shop-btn">Return To Shop</button>
            </Link>
            <button className="update-cart">Update Cart</button>
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
