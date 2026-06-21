import { PrimitiveValue, SelectOption } from "../../dist/index.mjs";

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
