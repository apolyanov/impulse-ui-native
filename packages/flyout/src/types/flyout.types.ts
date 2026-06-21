import { LayerComponentBaseProps } from "@impulse-ui-native/types";

export interface FlyoutProps extends LayerComponentBaseProps {
  open?: boolean;
  placement?: "top" | "bottom";
  topOffset?: number;
  bottomOffset?: number;
}
