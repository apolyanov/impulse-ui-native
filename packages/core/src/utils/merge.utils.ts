import { DeepPartial } from "../types";

export function isObject<Target>(value: Target | undefined) {
  return typeof value === "object";
}

export function merge<Target>(target: Target, source?: DeepPartial<Target>) {
  if (!source) return target;

  const result = { ...target };

  for (const key in source) {
    if (!Object.prototype.hasOwnProperty.call(source, key)) continue;

    const sourceValue = source[key];
    const targetValue = target[key];

    if (isObject(sourceValue)) {
      result[key] = merge(targetValue, sourceValue);
    } else {
      result[key] = sourceValue as Target[typeof key];
    }
  }

  return result;
}
