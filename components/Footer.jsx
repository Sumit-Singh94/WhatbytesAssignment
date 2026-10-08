import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#0b2344] text-white">
      <div className="mx-auto grid max-w-[1250px] gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
        <div>
          <Link
            href="/"
            className="text-2xl font-extrabold"
          >
            What<span className="text-blue-400">Bytes</span>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-blue-100/70">
            A simple and modern shopping experience built with
            Next.js and Tailwind CSS.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">
            Shop
          </h3>

          <div className="space-y-3 text-sm text-blue-100/70">
            <Link
              href="/"
              className="block transition hover:text-white"
            >
              All Products
            </Link>

            <Link
              href="/?category=Electronics"
              className="block transition hover:text-white"
            >
              Electronics
            </Link>

            <Link
              href="/?category=Fashion"
              className="block transition hover:text-white"
            >
              Fashion
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">
            Help
          </h3>

          <div className="space-y-3 text-sm text-blue-100/70">
            <p>Shipping & Delivery</p>
            <p>Returns</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">
            Follow Us
          </h3>

          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 transition hover:bg-blue-500"
            >
              <Facebook size={17} />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 transition hover:bg-blue-500"
            >
              <Twitter size={17} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 transition hover:bg-blue-500"
            >
              <Instagram size={17} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1250px] px-5 py-5 text-center text-xs text-blue-100/60 md:px-8">
          © {new Date().getFullYear()} WhatBytes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}