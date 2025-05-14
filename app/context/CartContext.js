"use client";
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) setCart(JSON.parse(localCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        toast.error("Already the item was added to your cart!");
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      toast.success("Added to cart!");
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, p.quantity + amount) } : p
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity }}>
      {children}
      <ToastContainer position="top-right" autoClose={2000} />
    </CartContext.Provider>
  );
};
