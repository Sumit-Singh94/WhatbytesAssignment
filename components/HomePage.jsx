"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

import Header from "@/components/Header";
import Filters from "@/components/Filters";
import ProductListing from "@/components/ProductListing";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";

export default function HomePage() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "all";
  const maxPrice = Number(searchParams.get("maxPrice")) || Infinity;

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        product.title.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "all" ||
        product.category.toLowerCase() === category.toLowerCase();

      const matchesPrice = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [search, category, maxPrice]);

  return (
    <div className="min-h-screen bg-[#f5f8fc]">
      <Header />

      <main className="mx-auto grid max-w-[1250px] grid-cols-1 gap-7 px-5 py-8 md:grid-cols-[220px_1fr] md:px-8">
        <Filters />

        <section>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#0b2344]">
                All Products
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""} found
              </p>
            </div>
          </div>

          <ProductListing filteredProducts={filteredProducts} />
        </section>
      </main>

      <Footer />
    </div>
  );
}