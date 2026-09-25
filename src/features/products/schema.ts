import { z } from "zod";
import { CATEGORIES, FEATURES, MANUFACTURERS } from "./constants";

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
