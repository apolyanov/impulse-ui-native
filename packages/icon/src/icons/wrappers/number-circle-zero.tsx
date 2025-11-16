import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberCircleZeroBold } from "../bold";
import { NumberCircleZeroDuotone } from "../duotone";
import { NumberCircleZeroFill } from "../fill";
import { NumberCircleZeroLight } from "../light";
import { NumberCircleZeroRegular } from "../regular";
import { NumberCircleZeroThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberCircleZero = memo(function NumberCircleZero(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleZeroBold,
      duotone: NumberCircleZeroDuotone,
      fill: NumberCircleZeroFill,
      light: NumberCircleZeroLight,
      regular: NumberCircleZeroRegular,
      thin: NumberCircleZeroThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
