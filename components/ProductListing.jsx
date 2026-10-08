import ProductCard from "@/components/ProductCard";

export default function ProductListing({ filteredProducts = [] }) {
  if (filteredProducts.length === 0) {
    return (
      <div className="flex min-h-[320px] items-center justify-center rounded-2xl bg-white p-8 shadow-sm">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-[#0b2344]">
            No products found
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Try changing your search or filter options.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}