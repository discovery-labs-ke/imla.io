import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractSegmentURL(path: string) {
  if (!path) return ""
  if (path === "/") return null
  return path.split("/")[1]
}
