export interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    imgUrl: string;
    rating: number;
    ratingCount: number;
  }
  
  export const product4: Product[] = [
    {
      id: 19,
      name: "Iphone 16 Pro Max",
      price: 1199,
      imgUrl: "./images/16Promax.png",
      rating: 5,
      ratingCount: 87,
    },
    {
      id: 20,
      name: "Silk Titan Durag",
      price: 7,
      oldPrice: 10,
      imgUrl: "./images/Durag.png",
      rating: 4,
      ratingCount: 47,
    },
    {
      id: 21,
      name: "Trend Sports Shoes",
      price: 300,
      imgUrl: "./images/VIP.png",
      rating: 5,
      ratingCount: 120,
    },
    {
      id: 22,
      name: "Infinix Smart 8",
      price: 500,
      oldPrice: 1160,
      imgUrl: "./images/infinix.png",
      rating: 4,
      ratingCount: 32,
    },
  ];
  