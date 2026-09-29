import type {
  ActionVariant,
  ComponentSize,
  DisplayVariant,
  FieldVariant,
  SelectionVariant,
} from "@impulse-ui-native/theme";

export const ComponentSizeOptions = [
  "small",
  "medium",
  "large",
] satisfies ComponentSize[];

export const ActionVariantOptions = [
  "filled",
  "outlined",
  "soft",
  "ghost",
] satisfies ActionVariant[];

export const DisplayVariantOptions = [
  "filled",
  "outlined",
  "soft",
] satisfies DisplayVariant[];

export const FieldVariantOptions = [
  "filled",
  "outlined",
] satisfies FieldVariant[];

export const SelectionVariantOptions = [
  "filled",
  "outlined",
  "soft",
] satisfies SelectionVariant[];

/** @deprecated Use the options for the relevant component family. */
export const ComponentVariantOptions = ActionVariantOptions;
