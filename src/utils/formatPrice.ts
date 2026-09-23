export function formatPrice(price: number, currency: string = "PLN"): string {
  return price.toLocaleString("pl-PL", {
    style: "currency",
    currency: currency,
    currencyDisplay: "code",
  });
}
