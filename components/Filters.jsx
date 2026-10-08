"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { RotateCcw } from "lucide-react";
import { categories } from "@/lib/products";

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "all";
  const currentMaxPrice = Number(searchParams.get("maxPrice")) || 1000;

  function updateFilter(key, value) {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.push(`/?${params.toString()}`);
  }

  function resetFilters() {
    router.push("/");
  }

  return (
    <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#0b2344]">Filters</h2>

        <button
          type="button"
          onClick={resetFilters}
          className="flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800"
        >
          <RotateCcw size={13} />
          Reset
        </button>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-[#0b2344]">
          Category
        </h3>

        <div className="space-y-2">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
            <input
              type="radio"
              name="category"
              checked={currentCategory === "all"}
              onChange={() => updateFilter("category", "all")}
              className="accent-blue-600"
            />
            All Categories
          </label>

          {categories.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
            >
              <input
                type="radio"
                name="category"
                checked={currentCategory === category}
                onChange={() => updateFilter("category", category)}
                className="accent-blue-600"
              />

              {category}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-gray-100 pt-6">
        <h3 className="mb-3 text-sm font-semibold text-[#0b2344]">
          Maximum Price
        </h3>

        <input
          type="range"
          min="10"
          max="1000"
          step="10"
          value={currentMaxPrice}
          onChange={(event) =>
            updateFilter("maxPrice", event.target.value)
          }
          className="w-full accent-blue-600"
        />

        <div className="mt-2 flex justify-between text-xs text-gray-500">
          <span>$10</span>
          <span>${currentMaxPrice}</span>
        </div>
      </div>
    </aside>
  );
}