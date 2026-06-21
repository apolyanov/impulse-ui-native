import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SwimmingPoolBoldIcon } from "../bold";
import { SwimmingPoolDuotoneIcon } from "../duotone";
import { SwimmingPoolFillIcon } from "../fill";
import { SwimmingPoolLightIcon } from "../light";
import { SwimmingPoolRegularIcon } from "../regular";
import { SwimmingPoolThinIcon } from "../thin";

export const SwimmingPoolIcon = memo(function SwimmingPool(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SwimmingPoolBoldIcon,
      duotone: SwimmingPoolDuotoneIcon,
      fill: SwimmingPoolFillIcon,
      light: SwimmingPoolLightIcon,
      regular: SwimmingPoolRegularIcon,
      thin: SwimmingPoolThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
