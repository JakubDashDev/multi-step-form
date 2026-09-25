function roundToCents(value: number): number {
  return Math.round(value * 100) / 100;
}

export function grossFromNet(net: number, vat: number): number {
  return roundToCents(net * (1 + vat / 100));
}

export function netFromGross(gross: number, vat: number): number {
  return roundToCents(gross / (1 + vat / 100));
}
