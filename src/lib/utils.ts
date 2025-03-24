import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractSegmentURL(path: string) {
  if (!path)
    return ''
  if (path === '/')
    return null
  return path.split('/')[1]
}

export function capitalizer(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function formatToCurrency(value: number) {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    currencyDisplay: 'code',
  })
    .format(value)
    .replace('KES', 'KES.')
}
