
export interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    imgUrl: string;
    rating: number;
    ratingCount: number
}

export const product3: Product[] = [
    {
        id: 18,
        name: "RGB liquid CPU Cooler",
        price: 160,
        oldPrice: 170,
        imgUrl: "./images/CPUCooler.png",
        rating: 4.5,
        ratingCount: 65,
      },
      {
        id: 19,
        name: "Gucci duffle bag",
        price: 960,
        oldPrice: 1160,
        imgUrl: "./images/GucciHandbag.png",
        rating: 4.5,
        ratingCount: 65,
      },
      {
        id: 20,
        name: "Silver Rolex",
        price: 360,
        imgUrl: "./images/SilverRolex.png",
        rating: 4.5,
        ratingCount: 65,
      },
      {
        id: 21,
        name: "Men's Fashion Sneakers",
        price: 180,
        oldPrice: 260,
        imgUrl: "./images/VIP2.png",
        rating: 4,
        ratingCount: 71,
      },
]