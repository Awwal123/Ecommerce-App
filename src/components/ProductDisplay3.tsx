import React, { useState, useEffect } from "react";
import "./styles.css";
import { ProductDisplay4 } from "./ProductDisplay4";
import { Product } from "./ProductData3";
import { useCart } from "./CartContext";
import {product4} from "./ProductData4"
// import { products } from "./ProductData";

interface ProductDisplayProps3 {
  products3: Product[];
}

export const ProductDisplay3: React.FC<ProductDisplayProps3> = ({
  products3,
}) => {
  const { addToCart } = useCart();
  //3
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

  // functionality to view the remaining products
  const [showAllProducts, setShowAllProducts] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("showAllProducts");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  // Update localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem("showAllProducts", JSON.stringify(showAllProducts));
  }, [showAllProducts])
  

  const handleViewAllClick = () => {
    setShowAllProducts(true);
  };
  const getRatingImage = (rating: number) => {
    if (rating === 5) return "./images/FiveStar.png";
    if (rating === 4.5) return "./images/FourHalfStar.png";
    if (rating === 4) return "./images/FourStar.png";
    return ""; // fallback image if rating doesn't match
  };
  return (
    <div className="exclusive-wrapper ">
      <div className="flash-sales-container">
        <div className="name-tag-container ">
          <div className="name-tag"></div>
          <p className="today">This Month</p>
        </div>
        <div>
          <div className="best-selling-product">
            <p className="flash-text">Best Selling Products</p>
            {!showAllProducts && (
              <button className="view-all" onClick={handleViewAllClick}>
                View All
              </button>
            )}

          </div>
        </div>
        <div className="best-cart-container">
          {products3.map((product) => (
            <div className="cart-img-container" key={product.id}>
              <div className="cart-img-wrapper">
                <div className="cart-img-alignment">
                  <img
                    className="cart-images"
                    src={product.imgUrl}
                    alt={product.name}
                  />
                </div>

                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add To Cart
                </button>
              </div>

              <div className="product-info">
                <h4 className="product-heading">{product.name}</h4>
                <div className="price-container">
                  <p className="recent-price">{product.price}</p>
                  {product.oldPrice && (
                    <p className="old-price">${product.oldPrice}</p>
                  )}
                </div>
              </div>
              <div className="rating">
                <img src={getRatingImage(product.rating)} alt="Rating" />
                <p className="rating-text">({product.ratingCount})</p>
              </div>
            </div>
          ))}
        </div>
        {showAllProducts && <ProductDisplay4 products4={product4}/>}
        {/* <ProductDisplay4 /> */}
      </div>
    </div>
  );
};
