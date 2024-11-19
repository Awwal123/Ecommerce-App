import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import {toast} from "react-toastify";


//Defines d structure of cart item 
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imgUrl: string;
}

//Defines d data and function d CartContext will provide
interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  total: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
      });
    
      // Save cart items to localStorage whenever it changes
      useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }, [cartItems]);
    
      const addToCart = (product: CartItem) => {
        setCartItems((prev) => {
          const existingProduct = prev.find((item) => item.id === product.id);
          if (existingProduct) {
            toast.success(`${product.name} quantity increased!`);
            return prev.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          }
          toast.success(`${product.name} added to cart!`);
          return [...prev, { ...product, quantity: 1 }];
        });
      };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
