import { SEED_PRODUCTS } from "@/mocks/products";
import type { Product } from "./types";

export type ProductsPage = {
  data: Product[];
  page: number;
  pageSize: number;
  total: number;
};

export function getProducts({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}): ProductsPage {
  const total = SEED_PRODUCTS.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(Math.max(page, 1), pageCount);

  const start = (currentPage - 1) * pageSize;
  const data = SEED_PRODUCTS.slice(start, start + pageSize);

  return { data, page: currentPage, pageSize, total };
}
