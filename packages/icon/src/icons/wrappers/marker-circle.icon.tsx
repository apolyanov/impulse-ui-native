import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MarkerCircleBoldIcon } from "../bold/marker-circle-bold.icon";
import { MarkerCircleDuotoneIcon } from "../duotone/marker-circle-duotone.icon";
import { MarkerCircleFillIcon } from "../fill/marker-circle-fill.icon";
import { MarkerCircleLightIcon } from "../light/marker-circle-light.icon";
import { MarkerCircleRegularIcon } from "../regular/marker-circle-regular.icon";
import { MarkerCircleThinIcon } from "../thin/marker-circle-thin.icon";

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
