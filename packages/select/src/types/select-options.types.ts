import type {
  PrimitiveValue,
  SelectFlyoutProps,
  SelectOption,
} from "./select.types";

export type SelectOptionsProps<Value extends PrimitiveValue> = Pick<
  SelectFlyoutProps<Value>,
  "options" | "isSelected" | "onSelect" | "initialScrollToSelected"
>;

export interface SelectFlyoutOptionProps<Value extends PrimitiveValue> {
  option: SelectOption<Value>;
  selected: boolean;
  onSelect: (value: Value) => void;
}
