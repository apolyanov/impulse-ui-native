import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberCircleTwoBoldIcon } from "../bold/number-circle-two-bold.icon";
import { NumberCircleTwoDuotoneIcon } from "../duotone/number-circle-two-duotone.icon";
import { NumberCircleTwoFillIcon } from "../fill/number-circle-two-fill.icon";
import { NumberCircleTwoLightIcon } from "../light/number-circle-two-light.icon";
import { NumberCircleTwoRegularIcon } from "../regular/number-circle-two-regular.icon";
import { NumberCircleTwoThinIcon } from "../thin/number-circle-two-thin.icon";

export const NumberCircleTwoIcon = memo(function NumberCircleTwo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleTwoBoldIcon,
      duotone: NumberCircleTwoDuotoneIcon,
      fill: NumberCircleTwoFillIcon,
      light: NumberCircleTwoLightIcon,
      regular: NumberCircleTwoRegularIcon,
      thin: NumberCircleTwoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
