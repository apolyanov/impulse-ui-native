import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HeartHalfBoldIcon } from "../bold/heart-half-bold.icon";
import { HeartHalfDuotoneIcon } from "../duotone/heart-half-duotone.icon";
import { HeartHalfFillIcon } from "../fill/heart-half-fill.icon";
import { HeartHalfLightIcon } from "../light/heart-half-light.icon";
import { HeartHalfRegularIcon } from "../regular/heart-half-regular.icon";
import { HeartHalfThinIcon } from "../thin/heart-half-thin.icon";

export const HeartHalfIcon = memo(function HeartHalf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeartHalfBoldIcon,
      duotone: HeartHalfDuotoneIcon,
      fill: HeartHalfFillIcon,
      light: HeartHalfLightIcon,
      regular: HeartHalfRegularIcon,
      thin: HeartHalfThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
