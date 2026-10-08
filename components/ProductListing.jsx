'use client';

import { useSearchParams } from 'next/navigation';
import { products } from '@/lib/products';
import { ProductCard } from './ProductCard';

export function ProductListing() {
  const searchParams = useSearchParams();

  const category = searchParams.get('category') || 'all';
  const brand = searchParams.get('brand') || 'all';
  const search = (searchParams.get('search') || '').trim().toLowerCase();
  const price = searchParams.get('price') || '0-1000';
  const maxPrice = Number(price.split('-')[1]) || 1000;

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === 'all' || product.category.toLowerCase() === category;

    const matchesBrand =
      brand === 'all' || product.brand.toLowerCase() === brand;

    const matchesSearch =
      !search ||
      `${product.title} ${product.category} ${product.brand}`
        .toLowerCase()
        .includes(search);

    const matchesPrice = product.price <= maxPrice;

    return (
      matchesCategory &&
      matchesBrand &&
      matchesSearch &&
      matchesPrice
    );
  });

  return (
    <section className="listing">
      <div className="listing-heading">
        <div>
          <p className="eyebrow">DISCOVER OUR COLLECTION</p>
          <h1>Product Listing</h1>
        </div>
        <span>{filteredProducts.length} products</span>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="empty-state">
          <h2>No products found</h2>
          <p>Try changing your search or filters.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              featured={product.id === 'smartphone'}
            />
          ))}
        </div>
      )}
    </section>
  );
}
