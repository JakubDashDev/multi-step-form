const AMOUNT_PATTERN = /^\d+([.,]\d{1,2})?$/;

export function parseAmount(value: string): number | null {
  const trimmed = value.trim();
  if (!AMOUNT_PATTERN.test(trimmed)) return null;
  return Number(trimmed.replace(",", "."));
}
