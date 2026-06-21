import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberZeroBoldIcon } from "../bold";
import { NumberZeroDuotoneIcon } from "../duotone";
import { NumberZeroFillIcon } from "../fill";
import { NumberZeroLightIcon } from "../light";
import { NumberZeroRegularIcon } from "../regular";
import { NumberZeroThinIcon } from "../thin";

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
