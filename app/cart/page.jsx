"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useStore } from "@/components/StoreProvider";

export default function CartPage() {
  const {
    cart,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useStore();

  return (
    <div className="min-h-screen bg-[#f5f8fc]">
      <Header />

      <main className="mx-auto max-w-[1100px] px-5 py-8 md:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Continue Shopping
        </Link>

        <h1 className="text-3xl font-bold text-[#0b2344]">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-white p-12 text-center shadow-sm">
            <ShoppingBag
              size={48}
              className="mx-auto text-gray-300"
            />

            <h2 className="mt-4 text-xl font-semibold text-[#0b2344]">
              Your cart is empty
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Add some products to your cart to get started.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded-lg bg-[#0b2344] px-5 py-3 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-[#f7f9fc] p-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="font-semibold text-[#0b2344]">
                      {item.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.category}
                    </p>

                    <p className="mt-2 font-bold text-[#0b2344]">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-lg border border-gray-200">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1
                            )
                          }
                          className="p-2 text-gray-600 hover:bg-gray-50"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="w-8 text-center text-sm font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }
                          className="p-2 text-gray-600 hover:bg-gray-50"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={15} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#0b2344]">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>

              <div className="mt-3 flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="my-5 border-t border-gray-100" />

              <div className="flex justify-between text-lg font-bold text-[#0b2344]">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-lg bg-[#0b2344] px-5 py-3 font-semibold text-white transition hover:bg-blue-600"
              >
                Proceed to Checkout
              </button>
            </aside>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}