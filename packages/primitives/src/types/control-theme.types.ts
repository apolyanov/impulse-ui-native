import type {
  ComponentSize,
  FieldTone,
  FieldVariant,
} from "@impulse-ui-native/theme";

export interface ControlStateThemeProps {
  disabled?: boolean;
  error?: string;
}

export interface ControlFieldThemeProps extends ControlStateThemeProps {
  size: ComponentSize;
  variant: FieldVariant;
  tone: FieldTone;
}
