import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HeartStraightBold } from "../bold";
import { HeartStraightDuotone } from "../duotone";
import { HeartStraightFill } from "../fill";
import { HeartStraightLight } from "../light";
import { HeartStraightRegular } from "../regular";
import { HeartStraightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HeartStraight = memo(function HeartStraight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeartStraightBold,
      duotone: HeartStraightDuotone,
      fill: HeartStraightFill,
      light: HeartStraightLight,
      regular: HeartStraightRegular,
      thin: HeartStraightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
