import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CrosshairBoldIcon } from "../bold";
import { CrosshairDuotoneIcon } from "../duotone";
import { CrosshairFillIcon } from "../fill";
import { CrosshairLightIcon } from "../light";
import { CrosshairRegularIcon } from "../regular";
import { CrosshairThinIcon } from "../thin";

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
