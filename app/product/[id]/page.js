"use client";
import { CartContext } from "@/app/context/CartContext";
import { useEffect, useState, useContext } from "react";
import React from "react";

export default function ProductDetail({ params }) {
  const { id } = React.use(params);
  // const { params } = useRouter();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={product.image} className="h-80 object-contain" />
        <div>
          <h1 className="text-xl font-bold">{product.title}</h1>
          <p className="text-gray-700 my-4">{product.description}</p>
          <p className="text-lg font-bold text-green-600">${product.price}</p>
          <p className="text-yellow-500">
            ⭐ {product.rating.rate} ({product.rating.count} ratings)
          </p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 mt-4 rounded cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
