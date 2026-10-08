import { Suspense } from 'react';
import { Header } from '@/components/Header';
import { Filters } from '@/components/Filters';
import { ProductListing } from '@/components/ProductListing';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<div className="page-loading">Loading...</div>}>
        <Header />
        <main className="page-shell">
          <Filters />
          <ProductListing />
        </main>
      </Suspense>

      <Footer />
    </>
  );
}
