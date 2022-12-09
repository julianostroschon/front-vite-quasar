export * from './host'
export * from './query'

export function increment(value: number) {
  return value += 1
}

export function decrement(value: number) {
  return value -= 1
}

export function loga(value: any) {
  console.log(value)
}
