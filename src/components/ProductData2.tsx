import React from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  discount: string;
  imgUrl: string;
  rating: number;
  ratingCount: number;
}

export const products2: Product[] = [
  {
    id: 10,
    name: "Men Casual Sneakers",
    price: 560,
    oldPrice: 1400,
    imgUrl: "./images/MenFahsionShoe.png",
    discount: "-40%",
    rating: 4,
    ratingCount: 60,
  },
  {
    id: 11,
    name: "Itel 20000mh Power Bank",
    price: 150,
    oldPrice: 500,
    imgUrl: "./images/PowerBank.png",
    discount: "-30%",
    rating: 4,
    ratingCount: 215,
  },
  {
    id: 12,
    name: "Sony PS4 Console",
    price: 1200,
    oldPrice: 2000,
    imgUrl: "./images/PS4.png",
    discount: "-60%",
    rating: 5,
    ratingCount: 96,
  },
  {
    id: 13,
    name: "P47 Wireless Headphone",
    price: 116,
    oldPrice: 560,
    imgUrl: "./images/HeadPhone.png",
    discount: "-20%",
    rating: 4,
    ratingCount: 78,
  },
  {
    id: 14,
    name: "Casual High-Top Shoes",
    price: 420,
    oldPrice: 1200,
    imgUrl: "./images/TimberLand.png",
    discount: "-35%",
    rating: 4.5,
    ratingCount: 28,
  },
  {
    id: 15,
    name: "XIAOMI Redmi 13 6.79",
    price: 700,
    oldPrice: 900,
    imgUrl: "./images/Redmi.png",
    discount: "-57%",
    rating: 5,
    ratingCount: 300,
  },
  {
    id: 16,
    name: "2 In 1 Men's Short Sleeve",
    price: 20,
    oldPrice: 200,
    imgUrl: "./images/MenShort.png",
    discount: "-10%",
    rating: 4,
    ratingCount: 96,
  },
  {
    id: 17,
    name: "Rubick Cube",
    price: 7,
    oldPrice: 18,
    imgUrl: "./images/Rubic2.png",
    discount: "-37%",
    rating: 4.5,
    ratingCount: 114,
  },
];
