"use client";

import { useProducts } from "../products-context";

function ProductsCount() {
  const { products } = useProducts();

  return (
    <p className="text-sm text-muted-foreground">
      {products.length} produktów w katalogu
    </p>
  );
}

export default ProductsCount;
