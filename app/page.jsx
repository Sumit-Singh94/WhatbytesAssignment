import { Suspense } from 'react';

import { Header } from '@/components/Header';
import { Filters } from '@/components/Filters';
import { ProductListing } from '@/components/ProductListing';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            Loading...
          </div>
        }
      >
        <Header />

        <main className="mx-auto grid max-w-[1250px] grid-cols-1 gap-7 px-5 py-8 md:grid-cols-[220px_1fr] md:px-8">
          <Filters />
          <ProductListing />
        </main>

        <Footer />
      </Suspense>
    </div>
  );
}