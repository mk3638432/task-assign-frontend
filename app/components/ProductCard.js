import Link from "next/link";

export default function ProductCard({ product }) {
  const truncate = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <Link href={`/product/${product.id}`}>
      <div className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer">
        <img src={product.image} className="h-40 object-contain mx-auto" />
        <h2 className="font-bold text-sm mt-2">
          {truncate(product.title, 30)}
        </h2>
        <p className="text-green-600 font-semibold">${product.price}</p>
        <p className="text-sm text-yellow-500">⭐ {product.rating?.rate}</p>
      </div>
    </Link>
  );
}
