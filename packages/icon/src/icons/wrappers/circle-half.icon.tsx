import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CircleHalfBoldIcon } from "../bold";
import { CircleHalfDuotoneIcon } from "../duotone";
import { CircleHalfFillIcon } from "../fill";
import { CircleHalfLightIcon } from "../light";
import { CircleHalfRegularIcon } from "../regular";
import { CircleHalfThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CircleHalfIcon = memo(function CircleHalf(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CircleHalfBoldIcon,
      duotone: CircleHalfDuotoneIcon,
      fill: CircleHalfFillIcon,
      light: CircleHalfLightIcon,
      regular: CircleHalfRegularIcon,
      thin: CircleHalfThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
