import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { ExclusiveNavbar } from "./ExclusiveNavbar";
import { Slider } from "./Slider";
import { FlashSales } from "./FlashSales";
import { ProductDisplay2 } from "./ProductDisplay2";
import { ProductDisplay3 } from "./ProductDisplay3";
import { products2 } from "./ProductData2";
import { product3 } from "./ProductData3";
import "./styles.css";
import { Categories } from "./Categories";
import { product4 } from "./ProductData4";
import { ProductDisplay4 } from "./ProductDisplay4";
import { JamboxAvert } from "./JamboxAdvert";
import { ProductDisplay5 } from "./ProductDisplay5";
import { ProductDisplay6 } from "./ProductDisplay6";
import { NewArrival } from "./NewArrival";
import { WhyChooseUs } from "./WhyChooseUs";
import { Footer } from "./Footer";

export function Exclusive() {
  const [showAllProducts, setShowAllProducts] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("showAllProducts");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  // Update localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem("showAllProducts", JSON.stringify(showAllProducts));
  }, [showAllProducts]);

  const handleViewAllClick = () => {
    setShowAllProducts(true);
  };
  return (
    <>
      <Header />
      <ExclusiveNavbar />
      <div className="margin">
        <Slider />
        <FlashSales />
        <ProductDisplay2 products2={products2} />
        <Categories />
        <div className="product-alignment1">
          <ProductDisplay3 products3={product3} />
          <ProductDisplay4 products4={product4} />
          {/* {showAllProducts && <ProductDisplay4 products4={product4} />} */}
        </div>

        <JamboxAvert />
        <div className="product-alignment">
          <ProductDisplay5 />
          <ProductDisplay6 />
        </div>
        <NewArrival />
        <WhyChooseUs />
      </div>
      {/* <Footer /> */}
    </>
  );
}
