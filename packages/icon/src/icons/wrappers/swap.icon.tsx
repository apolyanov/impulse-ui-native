import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SwapBoldIcon } from "../bold/swap-bold.icon";
import { SwapDuotoneIcon } from "../duotone/swap-duotone.icon";
import { SwapFillIcon } from "../fill/swap-fill.icon";
import { SwapLightIcon } from "../light/swap-light.icon";
import { SwapRegularIcon } from "../regular/swap-regular.icon";
import { SwapThinIcon } from "../thin/swap-thin.icon";

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
