export const MANUFACTURERS = [
  "Apple",
  "Samsung",
  "Sony",
  "Bosch",
  "Xiaomi",
  "LG",
  "Dell",
] as const;

export const CATEGORIES = [
  "Komputery",
  "Telefony",
  "RTV",
  "AGD",
  "Akcesoria",
] as const;

export const FEATURES = [
  "Bluetooth",
  "WiFi",
  "USB-C",
  "Wodoodporny",
  "Bezprzewodowy",
  "Ekologiczny",
  "Premium",
] as const;

export const VAT_RATES = [0, 5, 8, 23] as const;

export const CURRENCIES = ["PLN", "EUR", "USD"] as const;

export const CREATE_PRODUCT_STEPS = [
  {
    step: 1,
    label: "Informacje",
    description: "Dane podstawowe",
  },
  {
    step: 2,
    label: "Cena",
    description: "Dane cenowe",
  },
  {
    step: 3,
    label: "Dostępność",
    description: "Stany magazynowe",
  },
] as const;
