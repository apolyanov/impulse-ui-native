import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HeartHalfBoldIcon } from "../bold";
import { HeartHalfDuotoneIcon } from "../duotone";
import { HeartHalfFillIcon } from "../fill";
import { HeartHalfLightIcon } from "../light";
import { HeartHalfRegularIcon } from "../regular";
import { HeartHalfThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
