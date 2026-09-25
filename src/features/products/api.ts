import { parseAmount } from "@/utils/parseAmount";
import { parseInteger } from "@/utils/parseInteger";
import {
  productAvailabilitySchema,
  productInfoSchema,
  productPriceSchema,
} from "./schema";
import type { CreateProductFormValues, Product } from "./types";

export type ProductsPage = {
  data: Product[];
  page: number;
  pageSize: number;
  total: number;
};

export function getProducts(
  products: readonly Product[],
  {
    page,
    pageSize,
  }: {
    page: number;
    pageSize: number;
  },
): ProductsPage {
  const total = products.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(Math.max(page, 1), pageCount);

  const start = (currentPage - 1) * pageSize;
  const data = products.slice(start, start + pageSize);

  return { data, page: currentPage, pageSize, total };
}

export function createProduct(values: CreateProductFormValues): Product {
  const info = productInfoSchema.parse(values.step1);
  const price = productPriceSchema.parse(values.step2);
  const availability = productAvailabilitySchema.parse(values.step3);

  const netPrice = parseAmount(price.netPrice);
  const grossPrice = parseAmount(price.grossPrice);
  const stock = parseInteger(availability.stock);
  const minPerCart = parseInteger(availability.minPerCart);
  const maxPerCart = parseInteger(availability.maxPerCart);

  if (
    netPrice === null ||
    grossPrice === null ||
    minPerCart === null ||
    maxPerCart === null ||
    (availability.limited && stock === null)
  ) {
    throw new Error("Validated form values could not be parsed");
  }

  return {
    id: crypto.randomUUID(),
    name: info.name,
    sku: info.sku,
    description: info.description?.trim() ?? "",
    manufacturer: info.manufacturer,
    category: info.category,
    features: info.features,
    netPrice,
    vat: price.vat,
    grossPrice,
    currency: price.currency,
    available: availability.available,
    limited: availability.limited,
    stock: availability.limited ? stock : null,
    minPerCart,
    maxPerCart,
  };
}
