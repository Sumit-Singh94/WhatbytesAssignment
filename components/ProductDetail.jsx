"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { useStore } from "@/components/StoreProvider";

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useStore();

  function handleAddToCart() {
    for (let i = 0; i < quantity; i += 1) {
      addToCart(product);
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f8fc]">
      <main className="mx-auto max-w-[1100px] px-5 py-8 md:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to products
        </Link>

        <div className="grid overflow-hidden rounded-2xl bg-white shadow-sm md:grid-cols-2">
          <div className="flex min-h-[400px] items-center justify-center bg-[#f7f9fc] p-8">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[420px] w-full object-contain"
            />
          </div>

          <div className="p-7 md:p-10">
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              {product.category}
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-[#0b2344]">
              {product.title}
            </h1>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star
                  size={17}
                  className="fill-yellow-400 text-yellow-400"
                />
                <span className="font-medium text-gray-700">
                  {product.rating}
                </span>
              </div>

              <span className="text-gray-400">•</span>

              <span className="text-sm text-gray-500">
                Customer rating
              </span>
            </div>

            <p className="mt-6 text-3xl font-bold text-[#0b2344]">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center rounded-lg border border-gray-200">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  className="p-3 text-gray-600 hover:bg-gray-50"
                >
                  <Minus size={16} />
                </button>

                <span className="w-10 text-center font-semibold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  className="p-3 text-gray-600 hover:bg-gray-50"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#0b2344] px-5 py-3 font-semibold text-white transition hover:bg-blue-600"
              >
                <ShoppingCart size={19} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}