type ClassNameValue = string | false | null | undefined;

export function classNames(...values: ClassNameValue[]) {
  return values.filter(Boolean).join(" ");
}
