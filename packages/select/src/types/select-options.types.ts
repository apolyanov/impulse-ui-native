import type { ComponentTone } from "@impulse-ui-native/theme";

import type {
  PrimitiveValue,
  SelectFlyoutProps,
  SelectOption,
} from "./select.types";

export type SelectOptionsProps<Value extends PrimitiveValue> = Pick<
  SelectFlyoutProps<Value>,
  | "options"
  | "isSelected"
  | "onSelect"
  | "initialScrollToSelected"
  | "tone"
  | "searchable"
  | "searchValue"
  | "onSearchChange"
  | "optionsLoading"
>;

export interface SelectFlyoutOptionProps<Value extends PrimitiveValue> {
  tone?: ComponentTone;
  option: SelectOption<Value>;
  selected: boolean;
  onSelect: (value: Value) => void;
}
