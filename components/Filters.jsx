'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { brands, categories } from '@/lib/products';

export function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get('category') || 'all';
  const selectedBrand = searchParams.get('brand') || 'all';
  const price = searchParams.get('price') || '0-1000';
  const maxPrice = Number(price.split('-')[1]) || 1000;

  function updateFilter(name, value) {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === 'All') {
      params.delete(name);
    } else {
      params.set(name, value.toLowerCase());
    }

    router.push(`/?${params.toString()}`);
  }

  return (
    <aside className="sidebar">
      <div className="filter-panel">
        <h2>Filters</h2>

        <section className="filter-section">
          <h3>Category</h3>

          {categories.map((category) => (
            <label className="radio-row" key={category}>
              <input
                type="radio"
                name="category"
                checked={
                  selectedCategory === category.toLowerCase()
                }
                onChange={() => updateFilter('category', category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </section>

        <section className="filter-section price-filter">
          <h3>Price</h3>

          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={maxPrice}
            onChange={(event) =>
              updateFilter('price', `0-${event.target.value}`)
            }
          />

          <div className="range-labels">
            <span>$0</span>
            <span>${maxPrice}</span>
          </div>
        </section>
      </div>

      <div className="filter-panel secondary">
        <h3>Brand</h3>

        {brands.map((brand) => (
          <label className="radio-row" key={brand}>
            <input
              type="radio"
              name="brand"
              checked={selectedBrand === brand.toLowerCase()}
              onChange={() => updateFilter('brand', brand)}
            />
            <span>{brand}</span>
          </label>
        ))}
      </div>
    </aside>
  );
}
