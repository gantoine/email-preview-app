import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// twMerge prevents conflicts between tailwind classes
export function cx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
