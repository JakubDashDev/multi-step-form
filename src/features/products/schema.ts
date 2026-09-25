import { parseAmount } from "@/utils/parseAmount";
import { parseInteger } from "@/utils/parseInteger";
import { z } from "zod";
import {
  CATEGORIES,
  CURRENCIES,
  FEATURES,
  MANUFACTURERS,
  VAT_RATES,
} from "./constants";

export const productInfoSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { error: "Nazwa jest wymagana", abort: true })
    .min(3, { error: "Minimum 3 znaki" }),
  sku: z
    .string()
    .trim()
    .min(1, { error: "SKU jest wymagane", abort: true })
    .max(24, { error: "Maksymalnie 24 znaki", abort: true })
    .regex(/^[a-zA-Z0-9]+$/, { error: "Tylko litery i cyfry" }),
  description: z.string().optional(),
  manufacturer: z.enum(MANUFACTURERS, { error: "Wybierz producenta" }),
  category: z.enum(CATEGORIES, { error: "Wybierz kategorię" }),
  features: z
    .array(z.enum(FEATURES), { error: "Wybierz cechę" })
    .min(1, { error: "Wybierz co najmniej jedną cechę" }),
});

export type ProductInfoInput = z.input<typeof productInfoSchema>;

const amount = (requiredError: string) =>
  z
    .string()
    .trim()
    .min(1, { error: requiredError, abort: true })
    .refine((value) => parseAmount(value) !== null, {
      error: "Podaj poprawną kwotę, np. 1299.99",
      abort: true,
    })
    .refine((value) => (parseAmount(value) ?? 0) > 0, {
      error: "Kwota musi być większa od zera",
    });

export const productPriceSchema = z.object({
  netPrice: amount("Podaj cenę netto"),
  grossPrice: amount("Podaj cenę brutto"),
  vat: z.literal(VAT_RATES, { error: "Wybierz stawkę VAT" }),
  currency: z.enum(CURRENCIES, { error: "Wybierz walutę" }),
});

export type ProductPriceInput = z.input<typeof productPriceSchema>;

const integer = (requiredError: string, minimum: number) =>
  z
    .string()
    .trim()
    .min(1, { error: requiredError, abort: true })
    .refine((value) => parseInteger(value) !== null, {
      error: "Podaj liczbę całkowitą",
      abort: true,
    })
    .refine((value) => (parseInteger(value) ?? 0) >= minimum, {
      error: `Minimalna wartość to ${minimum}`,
    });

export const productAvailabilitySchema = z
  .object({
    available: z.boolean(),
    limited: z.boolean(),
    stock: z.string().trim(),
    minPerCart: integer("Podaj minimalną ilość", 1),
    maxPerCart: integer("Podaj maksymalną ilość", 1),
  })
  .check((ctx) => {
    const { limited, stock, minPerCart, maxPerCart } = ctx.value;

    if (limited && stock === "") {
      ctx.issues.push({
        code: "custom",
        message: "Podaj ilość na magazynie",
        path: ["stock"],
        input: ctx.value,
      });
    } else if (limited && parseInteger(stock) === null) {
      ctx.issues.push({
        code: "custom",
        message: "Podaj liczbę całkowitą",
        path: ["stock"],
        input: ctx.value,
      });
    }

    const min = parseInteger(minPerCart);
    const max = parseInteger(maxPerCart);

    if (min !== null && max !== null && min > max) {
      ctx.issues.push({
        code: "custom",
        message: "Minimalna ilość nie może być większa niż maksymalna",
        path: ["minPerCart"],
        input: ctx.value,
      });
      ctx.issues.push({
        code: "custom",
        message: "Maksymalna ilość nie może być mniejsza niż minimalna",
        path: ["maxPerCart"],
        input: ctx.value,
      });
    }
  });

export type ProductAvailabilityInput = z.input<
  typeof productAvailabilitySchema
>;
