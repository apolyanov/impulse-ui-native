import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SwimmingPoolBold } from "../bold";
import { SwimmingPoolDuotone } from "../duotone";
import { SwimmingPoolFill } from "../fill";
import { SwimmingPoolLight } from "../light";
import { SwimmingPoolRegular } from "../regular";
import { SwimmingPoolThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SwimmingPool = memo(function SwimmingPool(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SwimmingPoolBold,
      duotone: SwimmingPoolDuotone,
      fill: SwimmingPoolFill,
      light: SwimmingPoolLight,
      regular: SwimmingPoolRegular,
      thin: SwimmingPoolThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
