"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CartButton() {
  const pathname = usePathname();

  return (
    <Link href={pathname === "/cart" ? "/" : "/cart"}>
      <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
        {pathname === "/cart" ? "Go to Home" : "Go to Cart 🛒"}
      </button>
    </Link>
  );
}
