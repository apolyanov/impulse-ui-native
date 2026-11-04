import type { useFlyoutLifecycle } from "../hooks/use-flyout-lifecycle.hook";
import type { FlyoutRootProps } from "./flyout.types";

export interface FlyoutSurfaceProps extends Pick<
  FlyoutRootProps,
  "children" | "style"
> {
  placement: NonNullable<FlyoutRootProps["placement"]>;
  offset: number;
  layer: number;
  lifecycle: ReturnType<typeof useFlyoutLifecycle>;
}
