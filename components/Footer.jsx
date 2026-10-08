import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-col">
        <h3>Filters</h3>
        <Link href="/">All</Link>
        <Link href="/?category=electronics">Electronics</Link>
        <p>© 2026 WhatBytes Store</p>
      </div>

      <div className="footer-col">
        <h3>About Us</h3>
        <Link href="/">About Us</Link>
        <Link href="/">Contact</Link>
      </div>

      <div className="footer-col">
        <h3>Follow Us</h3>
        <div className="socials">
          <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
