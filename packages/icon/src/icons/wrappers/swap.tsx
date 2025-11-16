import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SwapBold } from "../bold";
import { SwapDuotone } from "../duotone";
import { SwapFill } from "../fill";
import { SwapLight } from "../light";
import { SwapRegular } from "../regular";
import { SwapThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Swap = memo(function Swap(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SwapBold,
      duotone: SwapDuotone,
      fill: SwapFill,
      light: SwapLight,
      regular: SwapRegular,
      thin: SwapThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
