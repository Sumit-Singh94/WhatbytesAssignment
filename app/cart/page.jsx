'use client';

import Link from 'next/link';
import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react';
import { useStore } from '@/components/StoreProvider';

export default function CartPage() {
  const {
    cart,
    cartCount,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useStore();

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} />
          Continue shopping
        </Link>

        <div className="empty-cart">
          <h1>Your cart is empty</h1>
          <p>Add a product to see it here.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <Link href="/" className="back-link">
        <ArrowLeft size={16} />
        Continue shopping
      </Link>

      <div className="cart-heading">
        <h1>Your Cart</h1>
        <span>{cartCount} items</span>
      </div>

      <div className="cart-layout">
        <section className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="cart-item-info">
                <h2>{item.title}</h2>
                <span>{item.brand}</span>
                <strong>${item.price}</strong>
              </div>

              <div className="quantity">
                <button
                  aria-label={`Decrease ${item.title}`}
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus size={14} />
                </button>

                <b>{item.quantity}</b>

                <button
                  aria-label={`Increase ${item.title}`}
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus size={14} />
                </button>
              </div>

              <button
                className="remove-button"
                aria-label={`Remove ${item.title}`}
                onClick={() => removeFromCart(item.id)}
              >
                <Trash2 size={18} />
              </button>
            </article>
          ))}
        </section>

        <aside className="summary">
          <h2>Price Summary</h2>

          <div>
            <span>Subtotal</span>
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>

          <div>
            <span>Shipping</span>
            <strong>Free</strong>
          </div>

          <hr />

          <div className="summary-total">
            <strong>Total</strong>
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>

          <button className="checkout-button">Checkout</button>
        </aside>
      </div>
    </main>
  );
}
