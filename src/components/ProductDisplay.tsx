import React from "react";
import { Product } from "./ProductData";
import "./styles.css";

interface ProductDisplayProps {
  products: Product[];
}


export const ProductDisplay: React.FC<ProductDisplayProps> = ({products}) => 

{const getRatingImage = (rating: number) => {
  if (rating === 5) return "./images/FiveStar.png";
  if (rating === 4.5) return "./images/FourHalfStar.png";
  if (rating === 4) return "./images/FourStar.png";
};
  return (
    <div className="cart-container">
    {products.map((product) => (
      <div className="cart-img-container" key={product.id}>
        <div className="cart-img-wrapper">
          <div className="percentage-tag">{product.discount}</div>
          <div className="cart-wish-list-container">
            <div className="wish-list-img-wrapper">
              <img className="wish-list-img" src="./images/Wishlist.png" alt="Wishlist" />
            </div>
            <div className="wish-list-img-wrapper">
              <img className="wish-list-img" src="./images/Eye.png" alt="View" />
            </div>
          </div>
          <div className="cart-img-alignment">
            <img className="cart-images" src={product.imgUrl} alt={product.name} />
          </div>
          <div className="add-to-cart-btn">Add To Cart</div>
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
  );
};
