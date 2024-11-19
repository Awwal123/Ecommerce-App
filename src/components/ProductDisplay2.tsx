import React, { useState } from "react";
import { Product } from "./ProductData2";
import { useCart } from "./CartContext"; // 1
import "./styles.css";
import { products } from "./ProductData";


interface ProductDisplayProps2 {
  products2: Product[];
}

export const ProductDisplay2: React.FC<ProductDisplayProps2> = ({
  products2,
}) => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const { addToCart } = useCart(); // 2 Access addToCart function from context

  const getRatingImage = (rating: number) => {
    if (rating === 5) return "./images/FiveStar.png";
    if (rating === 4.5) return "./images/FourHalfStar.png";
    if (rating === 4) return "./images/FourStar.png";
    return ""; // fallback image if rating doesn't match
  };

  const handleViewAllClick = () => {
    setShowAllProducts(true);
  };
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

  return (
    <div className="product-display2">
      {!showAllProducts && (
        <div className="view-all-btn" onClick={handleViewAllClick}>
          View All Products
        </div>
      )}
      {showAllProducts && (
        <div className="exclusive-wrapper">
          <div className="cart-container">
            {products2.map((product) => (
              <div className="cart-img-container" key={product.id}>
                <div className="cart-img-wrapper">
                  <div className="percentage-tag">{product.discount}</div>
                  <div className="cart-wish-list-container">
                    {/* <div className="wish-list-img-wrapper">
                      <img
                        className="wish-list-img"
                        src="./images/Wishlist.png"
                        alt="Wishlist"
                      />
                    </div>
                    <div className="wish-list-img-wrapper">
                      <img
                        className="wish-list-img"
                        src="./images/Eye.png"
                        alt="View"
                      />
                    </div> */}
                  </div>
                  <div className="cart-img-alignment">
                    <img
                      className="cart-images"
                      src={product.imgUrl}
                      alt={product.name}
                    />
                  </div>
                  <div
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add To Cart
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-heading">{product.name}</h4>
                  <div className="price-container">
                    <p className="recent-price">${product.price}</p>
                    <p className="old-price">${product.oldPrice}</p>
                  </div>
                  <div className="rating">
                    <img src={getRatingImage(product.rating)} alt="Rating" />
                    <p className="rating-text">({product.ratingCount})</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className="exclusive-horizontal-lines" />
        </div>
      )}
      
    </div>
    
  );
};
