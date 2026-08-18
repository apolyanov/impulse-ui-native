import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MapTrifoldBoldIcon } from "../bold/map-trifold-bold.icon";
import { MapTrifoldDuotoneIcon } from "../duotone/map-trifold-duotone.icon";
import { MapTrifoldFillIcon } from "../fill/map-trifold-fill.icon";
import { MapTrifoldLightIcon } from "../light/map-trifold-light.icon";
import { MapTrifoldRegularIcon } from "../regular/map-trifold-regular.icon";
import { MapTrifoldThinIcon } from "../thin/map-trifold-thin.icon";

export const MapTrifoldIcon = memo(function MapTrifold(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MapTrifoldBoldIcon,
      duotone: MapTrifoldDuotoneIcon,
      fill: MapTrifoldFillIcon,
      light: MapTrifoldLightIcon,
      regular: MapTrifoldRegularIcon,
      thin: MapTrifoldThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
