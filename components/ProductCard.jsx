"use client";

import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { useStore } from "@/components/StoreProvider";

export default function ProductCard({ product }) {
  const { addToCart } = useStore();

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/product/${product.id}`}>
        <div className="flex h-52 items-center justify-center overflow-hidden bg-[#f7f9fc] p-5">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
            {product.category}
          </span>

          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Star
              size={14}
              className="fill-yellow-400 text-yellow-400"
            />
            {product.rating}
          </div>
        </div>

        <Link href={`/product/${product.id}`}>
          <h2 className="line-clamp-2 min-h-[48px] text-base font-semibold text-[#0b2344] transition hover:text-blue-600">
            {product.title}
          </h2>
        </Link>

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-xl font-bold text-[#0b2344]">
            ${product.price.toFixed(2)}
          </span>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 rounded-lg bg-[#0b2344] px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            <ShoppingCart size={17} />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}