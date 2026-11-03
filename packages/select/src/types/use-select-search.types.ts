import type { SelectOptionsProps } from "./select-options.types";
import type { PrimitiveValue } from "./select.types";

export type UseSelectSearchProps<Value extends PrimitiveValue> = Pick<
  SelectOptionsProps<Value>,
  "options" | "searchable" | "searchValue" | "onSearchChange" | "optionsLoading"
>;
