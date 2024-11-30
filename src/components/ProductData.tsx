import React from "react";

export interface Product  {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  discount: string;
  imgUrl: string;
  rating: number;
  ratingCount: number;
}

export const products: Product[] = [
 
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    imgUrl: "./images/WiredPad.png",
    discount: "-40%",
    rating: 5,
    ratingCount: 120,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    imgUrl: "./images/WiredKeyboard.png",
    discount: "-35%",
    rating: 4,
    ratingCount: 80,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    imgUrl: "./images/GamingMonitor.png",
    discount: "-30%",
    rating: 4.5,
    ratingCount: 230,
  },
  {
    id: 4,
    name: "Wrist Waterproof Leather ",
    price: 375,
    oldPrice: 400,
    imgUrl: "./images/Smart.png",
    discount: "-25%",
    rating: 4.5,
    ratingCount: 120,
  },
  {
    id: 5,
    name: "Quilted Satin Jacket",
    price: 750,
    oldPrice: 1000,
    imgUrl: "./images/Jacket.png",
    discount: "-50%",
    rating: 4,
    ratingCount: 70,
  },
  {
    id: 6,
    name: "Spray Pressing Iron",
    price: 180,
    oldPrice: 270,
    imgUrl: "./images/PressingIron.png",
    discount: "-60%",
    rating: 5,
    ratingCount: 99,
  },
  {
    id: 7,
    name: "Rolex 2813",
    price: 1000,
    oldPrice: 730,
    imgUrl: "./images/GoldenRolex.png",
    discount: "-40%",
    rating: 4,
    ratingCount: 60,
  },
  {
    id: 8,
    name: "The North Coat",
    price: 260,
    oldPrice: 360,
    imgUrl: "./images/PinkHoddy.png",
    discount: "-37%",
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 9,
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    oldPrice: 1100,
    imgUrl: "./images/GamingLaptop.png",
    discount: "-25%",
    rating: 5,
    ratingCount: 65,
  },
];
// console.log(products)