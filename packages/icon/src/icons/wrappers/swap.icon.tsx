import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SwapBoldIcon } from "../bold";
import { SwapDuotoneIcon } from "../duotone";
import { SwapFillIcon } from "../fill";
import { SwapLightIcon } from "../light";
import { SwapRegularIcon } from "../regular";
import { SwapThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SwapIcon = memo(function Swap(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SwapBoldIcon,
      duotone: SwapDuotoneIcon,
      fill: SwapFillIcon,
      light: SwapLightIcon,
      regular: SwapRegularIcon,
      thin: SwapThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
