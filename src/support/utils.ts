export const camelToSnake = (key: string): string => {
  let snakeCaseKey = "";
  for (let i = 0; i < key.length; i++) {
    if (i > 0 && key[i] === key[i].toUpperCase()) {
      snakeCaseKey += "_";
    }
    snakeCaseKey += key[i].toLowerCase();
  }
  return snakeCaseKey;
};

export function snakeToCamel(obj: any): Record<keyof typeof obj, any> {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item): Record<string, any> => snakeToCamel(item));
  }
  return Object.keys(obj).reduce(
    (acc: Record<keyof typeof obj, any>, key: string): Record<string, any> => {
      const searchValue = /_([a-z])/g;
      const replacer = (_: string, letter: string): string =>
        letter.toUpperCase();
      const camelKey = key.replace(searchValue, replacer);
      acc[camelKey] = snakeToCamel(obj[key]);
      return acc;
    },
    {}
  );
}
