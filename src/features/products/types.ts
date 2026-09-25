import type {
  FormAsyncValidateOrFn,
  FormValidateOrFn,
  ReactFormExtendedApi,
} from "@tanstack/react-form";
import {
  CATEGORIES,
  CURRENCIES,
  FEATURES,
  MANUFACTURERS,
  VAT_RATES,
} from "./constants";
import type { ProductInfoInput, ProductPriceInput } from "./schema";

export type Manufacturer = (typeof MANUFACTURERS)[number];
export type Category = (typeof CATEGORIES)[number];
export type Feature = (typeof FEATURES)[number];
export type VatRate = (typeof VAT_RATES)[number];
export type Currency = (typeof CURRENCIES)[number];

export type Product = {
  id: string;
  name: string;
  sku: string;
  description: string;
  manufacturer: Manufacturer;
  category: Category;
  features: Feature[];
  netPrice: number;
  vat: VatRate;
  grossPrice: number;
  currency: Currency;
  available: boolean;
  limited: boolean;
  stock: number | null;
  minPerCart: number;
  maxPerCart: number;
};

export type CreateProductFormValues = {
  step1: ProductInfoInput;
  step2: ProductPriceInput;
};

type Sync = FormValidateOrFn<CreateProductFormValues> | undefined;
type Async = FormAsyncValidateOrFn<CreateProductFormValues> | undefined;

export type CreateProductFormApi = ReactFormExtendedApi<
  CreateProductFormValues,
  Sync,
  Sync,
  Async,
  Sync,
  Async,
  Sync,
  Async,
  Sync,
  Async,
  Async,
  unknown
>;
