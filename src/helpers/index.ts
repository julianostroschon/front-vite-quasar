export * from "./host";
export * from "./api";

export function increment(value: number) {
  return (value += 1);
}

export function decrement(value: number) {
  return (value -= 1);
}

export function loga(value: string | number | object) {
  console.log(value);
}
