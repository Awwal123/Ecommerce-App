import React, {useEffect, useState} from "react";
import { Product } from "./ProductData4";
import "./styles.css"
import { useCart } from "./CartContext";
import { products } from "./ProductData";


interface ProductDisplayProps4{
  products4: Product[];
}

export const ProductDisplay4: React.FC<ProductDisplayProps4>  = ({products4}) => 
{

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
  

  
  const getRatingImage = (rating: number) => {
    if (rating === 5) return "./images/FiveStar.png";
    if (rating === 4.5) return "./images/FourHalfStar.png";
    if (rating === 4) return "./images/FourStar.png";
    return ""; // fallback image if rating doesn't match
  };
  return (
    <>
      <div className="best-cart-container">
      {products4.map((product) => (
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
    </>
  );
};
