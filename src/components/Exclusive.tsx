import React from "react";
import { Header } from "./Header";
import { ExclusiveNavbar } from "./ExclusiveNavbar";
import { Slider } from "./Slider";
import { FlashSales } from "./FlashSales";
import { ProductDisplay2 } from "./ProductDisplay2";
import { products2 } from "./ProductData2";
import "./styles.css";
import { Categories } from "./Categories";
export function Exclusive() {
  return (
    <>
      <Header />
      <ExclusiveNavbar />
      <div className="margin">
        <Slider />
        <FlashSales />
        <ProductDisplay2  products2={products2} />
        <Categories />
      </div>
    </>
  );
}
