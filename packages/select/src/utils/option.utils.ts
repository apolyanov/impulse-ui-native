import { PrimitiveValue, SelectOption } from "../types";

export function buildLabelMap<Value extends PrimitiveValue>(
  options: SelectOption<Value>[],
) {
  return options.reduce<Record<string, string>>((acc, current) => {
    if (current.value !== null && current.value !== undefined) {
      acc[String(current.value)] = current.label;

      return acc;
    }

    return acc;
  }, {});
}

export function getOptionId<Value extends PrimitiveValue>(
  option: SelectOption<Value>,
  index: number,
): string {
  return option.value === null || option.value === undefined
    ? `${option.label}-${index}`
    : String(option.value);
}
