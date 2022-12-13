

export function getEnvironmentVariable(key: string) {
  return import.meta.env[key];
}