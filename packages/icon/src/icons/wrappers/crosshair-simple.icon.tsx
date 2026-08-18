import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CrosshairSimpleBoldIcon } from "../bold/crosshair-simple-bold.icon";
import { CrosshairSimpleDuotoneIcon } from "../duotone/crosshair-simple-duotone.icon";
import { CrosshairSimpleFillIcon } from "../fill/crosshair-simple-fill.icon";
import { CrosshairSimpleLightIcon } from "../light/crosshair-simple-light.icon";
import { CrosshairSimpleRegularIcon } from "../regular/crosshair-simple-regular.icon";
import { CrosshairSimpleThinIcon } from "../thin/crosshair-simple-thin.icon";

export const CrosshairSimpleIcon = memo(function CrosshairSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CrosshairSimpleBoldIcon,
      duotone: CrosshairSimpleDuotoneIcon,
      fill: CrosshairSimpleFillIcon,
      light: CrosshairSimpleLightIcon,
      regular: CrosshairSimpleRegularIcon,
      thin: CrosshairSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
