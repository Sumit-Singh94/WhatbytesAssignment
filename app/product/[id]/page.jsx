import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { products } from '@/lib/products';
import { ProductDetail } from '@/components/ProductDetail';

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <main className="not-found">
        <h1>Product not found</h1>
        <Link href="/">Back to products</Link>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <Link href="/" className="back-link">
        <ArrowLeft size={16} />
        Back to products
      </Link>

      <ProductDetail product={product} />
    </main>
  );
}
