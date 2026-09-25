"use client";

import { SEED_PRODUCTS } from "@/mocks/products";
import { createContext, use, useState } from "react";
import type { Product } from "./types";

interface ProductsContextValue {
  products: readonly Product[];
  addProduct: (product: Product) => void;
}

const ProductsContext = createContext<ProductsContextValue | null>(null);

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<readonly Product[]>(SEED_PRODUCTS);

  const addProduct = (product: Product) => {
    setProducts((current) => [...current, product]);
  };

  return (
    <ProductsContext value={{ products, addProduct }}>
      {children}
    </ProductsContext>
  );
}

export function useProducts() {
  const context = use(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used inside ProductsProvider");
  }
  return context;
}
