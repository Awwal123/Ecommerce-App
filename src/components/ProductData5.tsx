export interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    imgUrl: string;
    rating: number;
    ratingCount: number;
  }
  export const product5: Product[] = [
    {
      id: 23,
      name: "Booster Puppy PATE ",
      price: 100,
      imgUrl: "./images/Booster.png",
      rating: 4,
      ratingCount: 421,
    },
    {
      id: 24,
      name: "CANON EOS DSLR Camera",
      price: 360,
      imgUrl: "./images/Camera.png",
      rating: 4,
      ratingCount: 201,
    },
    {
      id: 25,
      name: "Curology Product Set",
      price: 500,
      imgUrl: "./images/Curology.png",
      rating: 5,
      ratingCount: 411,
    },
    {
      id: 26,
      name: "Electric Water Dispenser",
      price: 140,
      imgUrl: "./images/Dispenser.png",
      rating: 4.5,
      ratingCount: 341,
    },
  ];
  