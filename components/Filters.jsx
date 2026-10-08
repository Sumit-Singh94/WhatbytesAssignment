'use client';

import {
  useRouter,
  useSearchParams,
} from 'next/navigation';

import {
  brands,
  categories,
} from '@/lib/products';

export function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCategory =
    searchParams.get('category') || 'all';

  const selectedBrand =
    searchParams.get('brand') || 'all';

  const price =
    searchParams.get('price') || '0-1000';

  const maxPrice =
    Number(price.split('-')[1]) || 1000;

  function updateFilter(name, value) {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (!value || value === 'All') {
      params.delete(name);
    } else {
      params.set(name, value.toLowerCase());
    }

    router.push(`/?${params.toString()}`);
  }

  return (
    <aside className="space-y-6">
      <div className="rounded-xl bg-gradient-to-br from-[#0759a8] to-[#06488b] p-5 text-white shadow-sm">
        <h2 className="mb-6 text-2xl font-bold">
          Filters
        </h2>

        <div className="mb-7">
          <h3 className="mb-3 text-lg font-semibold">
            Category
          </h3>

          <div className="space-y-3">
            {categories.map((category) => (
              <label
                key={category}
                className="flex cursor-pointer items-center gap-3 text-sm"
              >
                <input
                  type="radio"
                  name="category"
                  checked={
                    selectedCategory ===
                    category.toLowerCase()
                  }
                  onChange={() =>
                    updateFilter(
                      'category',
                      category
                    )
                  }
                  className="h-4 w-4 accent-blue-500"
                />

                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">
            Price
          </h3>

          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={maxPrice}
            onChange={(event) =>
              updateFilter(
                'price',
                `0-${event.target.value}`
              )
            }
            className="w-full accent-white"
          />

          <div className="mt-2 flex justify-between text-sm">
            <span>$0</span>
            <span>${maxPrice}</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white p-5 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-[#0b2344]">
          Brand
        </h3>

        <div className="space-y-3">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
            >
              <input
                type="radio"
                name="brand"
                checked={
                  selectedBrand ===
                  brand.toLowerCase()
                }
                onChange={() =>
                  updateFilter(
                    'brand',
                    brand
                  )
                }
                className="h-4 w-4 accent-blue-600"
              />

              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}