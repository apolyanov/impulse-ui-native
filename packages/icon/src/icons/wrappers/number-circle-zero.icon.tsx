import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberCircleZeroBoldIcon } from "../bold/number-circle-zero-bold.icon";
import { NumberCircleZeroDuotoneIcon } from "../duotone/number-circle-zero-duotone.icon";
import { NumberCircleZeroFillIcon } from "../fill/number-circle-zero-fill.icon";
import { NumberCircleZeroLightIcon } from "../light/number-circle-zero-light.icon";
import { NumberCircleZeroRegularIcon } from "../regular/number-circle-zero-regular.icon";
import { NumberCircleZeroThinIcon } from "../thin/number-circle-zero-thin.icon";

export const NumberCircleZeroIcon = memo(function NumberCircleZero(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleZeroBoldIcon,
      duotone: NumberCircleZeroDuotoneIcon,
      fill: NumberCircleZeroFillIcon,
      light: NumberCircleZeroLightIcon,
      regular: NumberCircleZeroRegularIcon,
      thin: NumberCircleZeroThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
