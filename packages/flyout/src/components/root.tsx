import { memo } from "react";

import type { FlyoutRootProps } from "../types";
import { useFlyoutLifecycle } from "../hooks";
import { FlyoutSurface } from "./surface";

export const FlyoutRoot = memo(function FlyoutRoot({
  children,
  placement = "bottom",
  layer = 0,
  style,
  topOffset = 0,
  bottomOffset = 0,
  ...props
}: FlyoutRootProps) {
  const offset = placement === "top" ? topOffset : bottomOffset;
  const lifecycle = useFlyoutLifecycle({ ...props, placement, offset });

  return lifecycle.mounted ? (
    <FlyoutSurface
      placement={placement}
      offset={offset}
      layer={layer}
      style={style}
      lifecycle={lifecycle}
    >
      {children}
    </FlyoutSurface>
  ) : null;
});
