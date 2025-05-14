"use client";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQuantity } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="border p-4 rounded flex justify-between items-center"
              >
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>
                    ${item.price} × {item.quantity}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-bold text-lg">Total: ${total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}
