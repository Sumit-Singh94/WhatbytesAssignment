'use client';

import Link from 'next/link';
import {
  Search,
  ShoppingCart,
  UserCircle,
  X,
} from 'lucide-react';

import {
  useRouter,
  useSearchParams,
} from 'next/navigation';

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

    const params = new URLSearchParams(
      searchParams.toString()
    );

    const value = search.trim();

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    router.push(`/?${params.toString()}`);
  }

  function clearSearch() {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.delete('search');
    setSearch('');

    router.push(`/?${params.toString()}`);
  }

  return (
    <header className="sticky top-0 z-50 flex min-h-[80px] items-center justify-between gap-6 bg-gradient-to-r from-[#0759a8] to-[#06488b] px-6 py-4 text-white shadow-md md:px-10">
      
      <Link
        href="/"
        className="shrink-0 text-3xl font-bold tracking-tight"
      >
        Logo
      </Link>

      <form
        onSubmit={handleSearch}
        className="flex h-11 w-full max-w-[520px] items-center gap-3 rounded-lg border border-white/50 bg-white/5 px-4"
      >
        <Search size={19} />

        <input
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          placeholder="Search for products..."
          className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/80"
        />

        {search && (
          <button
            type="button"
            onClick={clearSearch}
            className="text-white/80 transition hover:text-white"
          >
            <X size={16} />
          </button>
        )}
      </form>

      <div className="flex shrink-0 items-center gap-3">
        <Link
          href="/cart"
          className="relative flex h-11 items-center gap-2 rounded-lg bg-[#003d79] px-5 font-semibold transition hover:bg-[#003365]"
        >
          <ShoppingCart size={18} />
          <span className="hidden sm:inline">
            Cart
          </span>

          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold">
              {cartCount}
            </span>
          )}
        </Link>

        <button
          aria-label="Profile"
          className="hidden rounded-full p-1 transition hover:bg-white/10 sm:block"
        >
          <UserCircle size={24} />
        </button>
      </div>
    </header>
  );
}