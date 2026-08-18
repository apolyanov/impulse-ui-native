import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CrosshairBoldIcon } from "../bold/crosshair-bold.icon";
import { CrosshairDuotoneIcon } from "../duotone/crosshair-duotone.icon";
import { CrosshairFillIcon } from "../fill/crosshair-fill.icon";
import { CrosshairLightIcon } from "../light/crosshair-light.icon";
import { CrosshairRegularIcon } from "../regular/crosshair-regular.icon";
import { CrosshairThinIcon } from "../thin/crosshair-thin.icon";

export const CrosshairIcon = memo(function Crosshair(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CrosshairBoldIcon,
      duotone: CrosshairDuotoneIcon,
      fill: CrosshairFillIcon,
      light: CrosshairLightIcon,
      regular: CrosshairRegularIcon,
      thin: CrosshairThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
