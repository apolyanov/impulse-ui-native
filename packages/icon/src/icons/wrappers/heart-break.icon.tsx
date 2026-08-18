import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HeartBreakBoldIcon } from "../bold/heart-break-bold.icon";
import { HeartBreakDuotoneIcon } from "../duotone/heart-break-duotone.icon";
import { HeartBreakFillIcon } from "../fill/heart-break-fill.icon";
import { HeartBreakLightIcon } from "../light/heart-break-light.icon";
import { HeartBreakRegularIcon } from "../regular/heart-break-regular.icon";
import { HeartBreakThinIcon } from "../thin/heart-break-thin.icon";

export const HeartBreakIcon = memo(function HeartBreak(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeartBreakBoldIcon,
      duotone: HeartBreakDuotoneIcon,
      fill: HeartBreakFillIcon,
      light: HeartBreakLightIcon,
      regular: HeartBreakRegularIcon,
      thin: HeartBreakThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
