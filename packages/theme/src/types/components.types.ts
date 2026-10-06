export type ComponentSize = "small" | "medium" | "large";

export type VisualStateTokens<VisualState extends PropertyKey, Tokens> = Record<
  VisualState,
  Tokens
>;

export type ControlVisualState = "default" | "focused" | "disabled";

export interface ControlState {
  disabled?: boolean;
  focused?: boolean;
}

export type ActionVisualState = "default" | "loading" | "disabled";

export interface ActionState {
  disabled?: boolean;
  loading?: boolean;
}

export type AvailabilityVisualState = "default" | "disabled";

export interface AvailabilityState {
  disabled?: boolean;
}

export type FieldVisualState =
  | "default"
  | "error"
  | "disabled"
  | "disabledError";

export interface FieldState {
  disabled?: boolean;
  error?: boolean;
}

export type SelectionVisualState =
  | "unselected"
  | "selected"
  | "disabledUnselected"
  | "disabledSelected";

export interface SelectionState {
  disabled?: boolean;
  selected: boolean;
}

export type SelectionItemVisualState = "default" | "selected";

export interface SelectionItemState {
  selected: boolean;
}

export type ActionVariant = "filled" | "outlined" | "soft" | "ghost";

export type DisplayVariant = "filled" | "outlined" | "soft";

export type FieldVariant = "filled" | "outlined";

export type SelectionVariant = "filled" | "outlined" | "soft";

/** @deprecated Use the variant type for the relevant component family. */
export type ComponentVariant = ActionVariant;
