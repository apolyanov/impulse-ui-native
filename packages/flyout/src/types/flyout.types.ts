import type { OverlayComponentProps } from "@impulse-ui-native/overlay";

export interface FlyoutProps extends OverlayComponentProps {
  placement?: "top" | "bottom";
  topOffset?: number;
  bottomOffset?: number;
}
