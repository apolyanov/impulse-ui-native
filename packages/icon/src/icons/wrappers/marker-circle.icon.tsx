import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MarkerCircleBoldIcon } from "../bold";
import { MarkerCircleDuotoneIcon } from "../duotone";
import { MarkerCircleFillIcon } from "../fill";
import { MarkerCircleLightIcon } from "../light";
import { MarkerCircleRegularIcon } from "../regular";
import { MarkerCircleThinIcon } from "../thin";

export const MarkerCircleIcon = memo(function MarkerCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MarkerCircleBoldIcon,
      duotone: MarkerCircleDuotoneIcon,
      fill: MarkerCircleFillIcon,
      light: MarkerCircleLightIcon,
      regular: MarkerCircleRegularIcon,
      thin: MarkerCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
