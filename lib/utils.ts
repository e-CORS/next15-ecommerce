import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  const locale = process.env.CURRENT_LOCALE ?? "en-ES";
  const currency = process.env.CURRENT_CURRENCY ?? "EUR";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(price);
}
