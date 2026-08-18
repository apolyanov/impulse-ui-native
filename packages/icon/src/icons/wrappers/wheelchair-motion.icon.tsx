import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WheelchairMotionBoldIcon } from "../bold/wheelchair-motion-bold.icon";
import { WheelchairMotionDuotoneIcon } from "../duotone/wheelchair-motion-duotone.icon";
import { WheelchairMotionFillIcon } from "../fill/wheelchair-motion-fill.icon";
import { WheelchairMotionLightIcon } from "../light/wheelchair-motion-light.icon";
import { WheelchairMotionRegularIcon } from "../regular/wheelchair-motion-regular.icon";
import { WheelchairMotionThinIcon } from "../thin/wheelchair-motion-thin.icon";

export const WheelchairMotionIcon = memo(function WheelchairMotion(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WheelchairMotionBoldIcon,
      duotone: WheelchairMotionDuotoneIcon,
      fill: WheelchairMotionFillIcon,
      light: WheelchairMotionLightIcon,
      regular: WheelchairMotionRegularIcon,
      thin: WheelchairMotionThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
