import React from "react";
import Timer from "./Timer";
import "./styles.css";
import { ProductDisplay } from "./ProductDisplay";
import { products } from "./ProductData";


export function FlashSales() {
  return (
    <>
    <div className="exclusive-wrapper">
      <div className="sales-container">
        <div className="flash-sales-container">
          <div className="name-tag-container ">
            <div className="name-tag"></div>
            <p className="today">Today's</p>
          </div>
          <div className="flash-sales-text">
            <p className="flash-text">Flash Sales</p>
            <Timer duration={3 * 24 * 60 * 60 * 1000} />
            <div className="arrow-right-left"></div>
          </div>
        </div>
        <ProductDisplay products={products} />
      </div>
      
    </div>
    </>
  );
}
