import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const TEL = "(606) 776-6567";
export const TEL_HREF = "tel:+16067766567";
export const EMAIL = "tonygrantoutdoors@gmail.com";
export const ADDRESS = "10752 Highway 1274, Wellington, KY 40387";
