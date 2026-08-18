import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberZeroBoldIcon } from "../bold/number-zero-bold.icon";
import { NumberZeroDuotoneIcon } from "../duotone/number-zero-duotone.icon";
import { NumberZeroFillIcon } from "../fill/number-zero-fill.icon";
import { NumberZeroLightIcon } from "../light/number-zero-light.icon";
import { NumberZeroRegularIcon } from "../regular/number-zero-regular.icon";
import { NumberZeroThinIcon } from "../thin/number-zero-thin.icon";

export const NumberZeroIcon = memo(function NumberZero(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberZeroBoldIcon,
      duotone: NumberZeroDuotoneIcon,
      fill: NumberZeroFillIcon,
      light: NumberZeroLightIcon,
      regular: NumberZeroRegularIcon,
      thin: NumberZeroThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
