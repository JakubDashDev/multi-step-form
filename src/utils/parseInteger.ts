const INTEGER_PATTERN = /^\d+$/;

export function parseInteger(value: string): number | null {
  const trimmed = value.trim();
  if (!INTEGER_PATTERN.test(trimmed)) return null;
  return Number(trimmed);
}
