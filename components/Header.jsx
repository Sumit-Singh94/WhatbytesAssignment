'use client';

import Link from 'next/link';
import { Search, ShoppingCart, UserCircle, X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useStore } from './StoreProvider';

export function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { cartCount } = useStore();

  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearch(searchParams.get('search') || '');
  }, [searchParams]);

  function handleSearch(event) {
    event.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    const value = search.trim();

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    router.push(`/?${params.toString()}`);
  }

  function clearSearch() {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('search');
    setSearch('');
    router.push(`/?${params.toString()}`);
  }

  return (
    <header className="site-header">
      <Link href="/" className="logo">
        Logo
      </Link>

      <form className="search-box" onSubmit={handleSearch}>
        <Search size={19} />
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search for products..."
          aria-label="Search products"
        />

        {search && (
          <button
            type="button"
            className="clear-search"
            onClick={clearSearch}
            aria-label="Clear search"
          >
            <X size={15} />
          </button>
        )}
      </form>

      <div className="header-actions">
        <Link href="/cart" className="cart-button">
          <ShoppingCart size={18} />
          <span>Cart</span>

          {cartCount > 0 && (
            <b className="cart-badge">{cartCount}</b>
          )}
        </Link>

        <button className="avatar-button" aria-label="Profile">
          <UserCircle size={22} />
        </button>
      </div>
    </header>
  );
}
