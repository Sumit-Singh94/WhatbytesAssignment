"use client";

import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useStore } from "@/components/StoreProvider";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { cartCount } = useStore();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  function handleSubmit(event) {
    event.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (search.trim()) {
      params.set("search", search.trim());
    } else {
      params.delete("search");
    }

    router.push(`/?${params.toString()}`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-[1250px] items-center gap-4 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="shrink-0 text-xl font-extrabold tracking-tight text-[#0b2344]"
        >
          What<span className="text-blue-600">Bytes</span>
        </Link>

        <form
          onSubmit={handleSubmit}
          className="mx-auto hidden max-w-xl flex-1 md:block"
        >
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
            />
          </div>
        </form>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/cart"
            className="relative rounded-full p-2.5 text-[#0b2344] transition hover:bg-blue-50"
          >
            <ShoppingCart size={21} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            className="rounded-full p-2.5 text-[#0b2344] transition hover:bg-blue-50"
          >
            <User size={21} />
          </button>
        </div>
      </div>

      <div className="border-t border-gray-100 px-5 py-3 md:hidden">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
            />
          </div>
        </form>
      </div>
    </header>
  );
}