import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CircleHalfBoldIcon } from "../bold/circle-half-bold.icon";
import { CircleHalfDuotoneIcon } from "../duotone/circle-half-duotone.icon";
import { CircleHalfFillIcon } from "../fill/circle-half-fill.icon";
import { CircleHalfLightIcon } from "../light/circle-half-light.icon";
import { CircleHalfRegularIcon } from "../regular/circle-half-regular.icon";
import { CircleHalfThinIcon } from "../thin/circle-half-thin.icon";

export const CircleHalfIcon = memo(function CircleHalf(
  props: IconWrapperProps,
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
