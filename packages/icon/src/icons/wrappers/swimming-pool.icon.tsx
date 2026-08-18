import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SwimmingPoolBoldIcon } from "../bold/swimming-pool-bold.icon";
import { SwimmingPoolDuotoneIcon } from "../duotone/swimming-pool-duotone.icon";
import { SwimmingPoolFillIcon } from "../fill/swimming-pool-fill.icon";
import { SwimmingPoolLightIcon } from "../light/swimming-pool-light.icon";
import { SwimmingPoolRegularIcon } from "../regular/swimming-pool-regular.icon";
import { SwimmingPoolThinIcon } from "../thin/swimming-pool-thin.icon";

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
