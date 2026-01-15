import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function smoothScroll(target: string) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
