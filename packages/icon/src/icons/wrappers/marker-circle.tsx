import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MarkerCircleBold } from "../bold";
import { MarkerCircleDuotone } from "../duotone";
import { MarkerCircleFill } from "../fill";
import { MarkerCircleLight } from "../light";
import { MarkerCircleRegular } from "../regular";
import { MarkerCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MarkerCircle = memo(function MarkerCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MarkerCircleBold,
      duotone: MarkerCircleDuotone,
      fill: MarkerCircleFill,
      light: MarkerCircleLight,
      regular: MarkerCircleRegular,
      thin: MarkerCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
