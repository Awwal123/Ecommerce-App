export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  imgUrl: string;
  rating: number;
  ratingCount: number;
}

export const product6: Product[] = [
  {
    id: 27,
    name: "Kids Electric Car",
    price: 960,
    imgUrl: "./images/KidsElectricCar.png",
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 28,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    imgUrl: "./images/SoccerBoot.png",
    rating: 5,
    ratingCount: 35,
  },
  {
    id: 29,
    name: "Havic HV G-92 Gamepad",
    price: 1160,
    imgUrl: "./images/HavicPad.png",
    rating: 4,
    ratingCount: 703,
  },
  {
    id: 30,
    name: "Apple MacBook Air 13.3",
    price: 1000,
    imgUrl: "./images/Mackbook.png",
    rating: 4.5,
    ratingCount: 112,
  },
];
