export function formatPrice(price: number): string {
  const locale = process.env.CURRENT_LOCALE;
  const currency = process.env.CURRENT_CURRENCY;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(price);
}
