import React from "react";
import { Header } from "./Header";
import { ExclusiveNavbar } from "./ExclusiveNavbar";
import { Slider } from "./Slider";
import { FlashSales } from "./FlashSales";
import "./styles.css";
export function Exclusive() {
  return (
    <>
      <Header />
      <ExclusiveNavbar />
      <div className="margin">
      <Slider />
        <FlashSales />
      </div>
    </>
  );
}
