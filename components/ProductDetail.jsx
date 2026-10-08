'use client';

import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useStore } from './StoreProvider';

export function ProductDetail({ product }) {
  const { addToCart } = useStore();
  const [quantity, setQuantity] = useState(1);

  function addSelectedQuantity() {
    for (let i = 0; i < quantity; i += 1) {
      addToCart(product);
    }
  }

  return (
    <article className="detail-card">
      <div className="detail-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="detail-content">
        <span className="detail-category">{product.category}</span>
        <h1>{product.title}</h1>

        <div className="detail-rating">
          <span className="stars">★★★★★</span>
          <span>{product.rating}/5</span>
        </div>

        <div className="detail-price">${product.price}</div>
        <p>{product.description}</p>

        <div className="detail-meta">
          <div>
            <span>Brand</span>
            <br />
            <strong>{product.brand}</strong>
          </div>

          <div>
            <span>Category</span>
            <br />
            <strong>{product.category}</strong>
          </div>
        </div>

        <div className="quantity-row">
          <strong>Quantity</strong>

          <div className="quantity">
            <button
              aria-label="Decrease quantity"
              onClick={() =>
                setQuantity((current) => Math.max(1, current - 1))
              }
            >
              <Minus size={15} />
            </button>

            <b>{quantity}</b>

            <button
              aria-label="Increase quantity"
              onClick={() => setQuantity((current) => current + 1)}
            >
              <Plus size={15} />
            </button>
          </div>
        </div>

        <button className="detail-add" onClick={addSelectedQuantity}>
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
