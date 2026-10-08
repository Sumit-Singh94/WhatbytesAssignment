import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#043e7f] to-[#032a5d] px-8 py-8 text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 sm:grid-cols-3">
        
        <div>
          <h3 className="mb-4 text-lg font-bold">
            Filters
          </h3>

          <div className="space-y-2 text-sm">
            <Link
              href="/"
              className="block hover:text-blue-200"
            >
              All
            </Link>

            <Link
              href="/?category=electronics"
              className="block hover:text-blue-200"
            >
              Electronics
            </Link>

            <p className="pt-3">
              © 2026 WhatBytes Store
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">
            About Us
          </h3>

          <div className="space-y-2 text-sm">
            <Link
              href="/"
              className="block hover:text-blue-200"
            >
              About Us
            </Link>

            <Link
              href="/"
              className="block hover:text-blue-200"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">
            Follow Us
          </h3>

          <div className="flex gap-3">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 transition hover:bg-blue-500"
            >
              <Facebook size={18} />
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 transition hover:bg-blue-500"
            >
              <Twitter size={18} />
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 transition hover:bg-blue-500"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}