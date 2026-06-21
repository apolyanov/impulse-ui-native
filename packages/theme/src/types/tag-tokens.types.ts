import { ComponentSize, ComponentVariant } from "./components.types";

export type TagColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "success"
  | "info";

export type TagSizeTokens = Record<
  ComponentSize,
  {
    height: number;
    paddingHorizontal: number;
    minWidth: number;
    fontSize: number;
  }
>;

export type TagVariantTokens = Record<
  ComponentVariant,
  {
    backgroundColor: string;
    borderColor: string;
    color: string;

    disabledBackgroundColor: string;
    disabledBorderColor: string;
    disabledColor: string;
  }
>;

export type TagColorTokens = Record<TagColor, TagVariantTokens>;

export interface TagTokens {
  borderWidth: number;
  borderRadius: number;
  gap: number;
  iconMarginLeft: number;
  sizes: TagSizeTokens;
  colors: TagColorTokens;
}
