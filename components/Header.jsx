"use client";

import { Search, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/components/StoreProvider";

export default function Header() {
  const router = useRouter();
  const { cartCount } = useStore();

  const [search, setSearch] = useState("");

  // Load existing search value from the URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearch(params.get("search") || "");
  }, []);

  function handleSearch(event) {
    event.preventDefault();

    const params = new URLSearchParams(window.location.search);

    if (search.trim()) {
      params.set("search", search.trim());
    } else {
      params.delete("search");
    }

    router.push(`/?${params.toString()}`);
  }

  function goToCart() {
    router.push("/cart");
  }

  return (
    <header className="w-full bg-[#0b5cab]">
      <div className="mx-auto flex h-[80px] max-w-[1250px] items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <div className="shrink-0">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="!text-[32px] !font-bold !leading-none !text-white"
          >
            Logo
          </button>
        </div>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="mx-6 hidden w-full max-w-[315px] sm:block"
        >
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search for products..."
              className="h-[44px] w-full rounded-[9px] border border-white/70 bg-transparent pl-11 pr-4 text-sm text-white outline-none placeholder:text-white focus:border-white"
            />
          </div>
        </form>

        {/* Cart */}
        <button
          type="button"
          onClick={goToCart}
          className="flex h-[44px] min-w-[112px] items-center justify-center gap-2 rounded-[9px] bg-[#003d78] px-5 text-sm font-semibold text-white transition hover:bg-[#003566]"
        >
          <ShoppingCart size={18} />

          <span>Cart</span>

          {cartCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-[#003d78]">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Search */}
      <div className="px-5 pb-4 sm:hidden">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search for products..."
              className="h-[42px] w-full rounded-[9px] border border-white/70 bg-transparent pl-10 pr-4 text-sm text-white outline-none placeholder:text-white"
            />
          </div>
        </form>
      </div>
    </header>
  );
}