import type {
  ComponentSize,
  SelectionVariant,
  SliderTrackLayout,
} from "@impulse-ui-native/theme";

export interface SliderLabelsThemeProps {
  disabled: boolean;
  variant: SelectionVariant;
}

export interface SliderThumbThemeProps extends SliderLabelsThemeProps {
  size: ComponentSize;
}

export interface SliderTrackThemeProps extends SliderThumbThemeProps {
  hasEndMark: boolean;
  hasStartMark: boolean;
  layout: SliderTrackLayout;
}
