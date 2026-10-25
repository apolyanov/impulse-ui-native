import type {
  ComponentSize,
  ComponentTone,
  SelectionVariant,
  SliderTrackLayout,
} from "@impulse-ui-native/theme";

export interface SliderLabelsThemeProps {
  disabled: boolean;
  variant: SelectionVariant;
  tone: ComponentTone;
}

export interface SliderThumbThemeProps extends SliderLabelsThemeProps {
  size: ComponentSize;
}

export interface SliderTrackThemeProps extends SliderThumbThemeProps {
  hasEndMark: boolean;
  hasStartMark: boolean;
  layout: SliderTrackLayout;
}
