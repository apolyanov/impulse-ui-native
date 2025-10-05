import { LayerComponentBaseProps } from "@impulse-ui-native/layer-manager-types";

export interface FlyoutProps extends LayerComponentBaseProps {
  open?: boolean;
  placement?: "top" | "bottom";
}
