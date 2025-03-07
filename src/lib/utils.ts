import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stringCapitalization(str: string, scope: [number, number] = [0, 0]) {
  if (!str)
    return ''

  const list = [...str]

  return list.reduce((acc, cur, i) => {
    if (i >= scope[0] && i <= scope[1]) {
      return acc + cur.toUpperCase()
    }

    return acc + cur.toLowerCase()
  }, '')
}

export function stringPluralize(num: number, word: string) {
  if (num === 1) {
    return word
  }
  else {
    return `${word}s`
  }
}

export function parseWithDate(data: string) {
  const ISO_DATE_FORMAT
    = /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(\.\d+)?(Z|[+-][01]\d:[0-5]\d)$/

  return JSON.parse(data, (_: unknown, value: unknown) => {
    if (typeof value === 'string' && ISO_DATE_FORMAT.test(value)) {
      return new Date(value)
    }
    return value
  })
}
