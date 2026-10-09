import type { ComponentSize } from "@impulse-ui-native/theme";

export interface ModalRootThemeProps {
  insets: { top: number; right: number; bottom: number; left: number };
  layer: number;
}

export interface ModalSurfaceThemeProps {
  size: ComponentSize;
}
