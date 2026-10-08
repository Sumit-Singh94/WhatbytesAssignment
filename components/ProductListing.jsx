<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {filteredProducts.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      featured={product.id === 'smartphone'}
    />
  ))}
</div>