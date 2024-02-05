"use client"
import React, { useState } from 'react';
import { createContext, useContext, ReactNode } from 'react';
import { CartItem, MyContextProps, Product } from '../../type';


const MyContext = createContext<MyContextProps | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState<boolean>(false); // Initial state for the example
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      setCart((prevCart) => {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      });
    } else {
      setCart((prevCart) => [...prevCart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const increaseQuantity = (productId: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };

  const decreaseQuantity = (productId: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.product.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const clearCart = () => {
    setCart([]);
  };


  return (
    <MyContext.Provider value={{ darkMode, setDarkMode, addToCart, removeFromCart, clearCart, cart, increaseQuantity, decreaseQuantity }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
