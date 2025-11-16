import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WheelchairMotionBold } from "../bold";
import { WheelchairMotionDuotone } from "../duotone";
import { WheelchairMotionFill } from "../fill";
import { WheelchairMotionLight } from "../light";
import { WheelchairMotionRegular } from "../regular";
import { WheelchairMotionThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WheelchairMotion = memo(function WheelchairMotion(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WheelchairMotionBold,
      duotone: WheelchairMotionDuotone,
      fill: WheelchairMotionFill,
      light: WheelchairMotionLight,
      regular: WheelchairMotionRegular,
      thin: WheelchairMotionThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
