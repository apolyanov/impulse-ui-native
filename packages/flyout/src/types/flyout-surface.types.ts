import type { FlyoutPlacement } from "@impulse-ui-native/theme";

import type { FlyoutLifecycle } from "./flyout-lifecycle.types";
import type { FlyoutRootProps } from "./flyout.types";

export interface FlyoutSurfaceProps extends Pick<
  FlyoutRootProps,
  "children" | "style"
> {
  placement: FlyoutPlacement;
  offset: number;
  layer: number;
  lifecycle: FlyoutLifecycle;
}
