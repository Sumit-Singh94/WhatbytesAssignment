'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useStore } from './StoreProvider';

export function ProductCard({ product, featured = false }) {
  const { addToCart } = useStore();

  return (
    <article className={`product-card ${featured ? 'featured' : ''}`}>
      <Link
        href={`/product/${product.id}`}
        className="product-image-wrap"
      >
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </Link>

      <div className="product-info">
        <Link
          href={`/product/${product.id}`}
          className="product-title"
        >
          {product.title}
        </Link>

        <div className="product-price">${product.price}</div>

        {featured && (
          <>
            <div className="stars">★★★★★</div>
            <p className="featured-description">
              {product.description}
            </p>
            <p className="category-label">Category</p>
            <strong>{product.category}</strong>
          </>
        )}

        <button
          className="add-button"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
