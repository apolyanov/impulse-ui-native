import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HeartBreakBoldIcon } from "../bold";
import { HeartBreakDuotoneIcon } from "../duotone";
import { HeartBreakFillIcon } from "../fill";
import { HeartBreakLightIcon } from "../light";
import { HeartBreakRegularIcon } from "../regular";
import { HeartBreakThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HeartBreakIcon = memo(function HeartBreak(
  props: IconWrapperProps
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
