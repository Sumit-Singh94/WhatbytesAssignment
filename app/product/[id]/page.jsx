import { notFound } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import { products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </>
  );
}