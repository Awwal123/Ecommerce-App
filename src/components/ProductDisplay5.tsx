import React from "react";
import "./styles.css";
import { useCart } from "./CartContext";
import { Product, product5 } from "./ProductData5";

export const ProductDisplay5 = () => {

  const { addToCart } = useCart();
  const handleAddToCart = (product: Product) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1, // New product added with quantity 1
      imgUrl: product.imgUrl,
    };
    addToCart(cartItem); // Pass the transformed product to addToCart
  };
  const getRatingImage = (rating: number) => {
    if (rating === 5) return "./images/FiveStar.png";
    if (rating === 4.5) return "./images/FourHalfStar.png";
    if (rating === 4) return "./images/FourStar.png";
    return ""; // fallback image if rating doesn't match
  };
  return (
    <div className="exclusive-wrapper">
      <div className="flash-sales-container">
        <div className="name-tag-container">
          <div className="name-tag"></div>
          <p className="today">Our Products</p>
        </div>
        <div>
          <div className="best-selling-product">
            <p className="flash-text">Explore Our Products</p>
          </div>
        </div>
        <div className="best-cart-container">
          {/* Map through the product5 array */}
          {product5.map((product: Product) => (
            <div className="cart-img-container" key={product.id}>
              <div className="cart-img-wrapper">
                <div className="cart-img-alignment">
                  <img
                    className="cart-images"
                    src={product.imgUrl}
                    alt={product.name}
                  />
                </div>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add To Cart</button>
              </div>
              <div className="product-info">
                <h4 className="product-heading">{product.name}</h4>
                <div className="price-container">
                  <p className="recent-price">${product.price}</p>
                  <div className="rating">
                    <img src={getRatingImage(product.rating)} alt="Rating" />
                    <p className="rating-text">({product.ratingCount})</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
