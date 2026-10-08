'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

import { useStore } from './StoreProvider';

export function ProductCard({
  product,
  featured = false,
}) {
  const { addToCart } = useStore();

  return (
    <article
      className={`overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
        featured
          ? 'lg:col-span-2 lg:grid lg:grid-cols-2'
          : ''
      }`}
    >
      <Link
        href={`/product/${product.id}`}
        className={`flex items-center justify-center bg-white p-4 ${
          featured
            ? 'min-h-[320px]'
            : 'h-[190px]'
        }`}
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full max-h-[180px] w-full object-contain"
        />
      </Link>

      <div className="p-3">
        <Link
          href={`/product/${product.id}`}
          className="block text-lg font-semibold text-[#0b2344] hover:text-blue-600"
        >
          {product.title}
        </Link>

        <p className="mt-1 text-lg font-bold text-[#071c36]">
          ${product.price}
        </p>

        {featured && (
          <>
            <div className="mt-2 text-sm text-blue-900">
              ★★★★★
            </div>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {product.description}
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Category
            </p>

            <p className="font-medium">
              {product.category}
            </p>
          </>
        )}

        <button
          onClick={() => addToCart(product)}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}