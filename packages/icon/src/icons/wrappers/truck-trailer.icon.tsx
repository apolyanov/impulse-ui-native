import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TruckTrailerBoldIcon } from "../bold/truck-trailer-bold.icon";
import { TruckTrailerDuotoneIcon } from "../duotone/truck-trailer-duotone.icon";
import { TruckTrailerFillIcon } from "../fill/truck-trailer-fill.icon";
import { TruckTrailerLightIcon } from "../light/truck-trailer-light.icon";
import { TruckTrailerRegularIcon } from "../regular/truck-trailer-regular.icon";
import { TruckTrailerThinIcon } from "../thin/truck-trailer-thin.icon";

export const TruckTrailerIcon = memo(function TruckTrailer(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TruckTrailerBoldIcon,
      duotone: TruckTrailerDuotoneIcon,
      fill: TruckTrailerFillIcon,
      light: TruckTrailerLightIcon,
      regular: TruckTrailerRegularIcon,
      thin: TruckTrailerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
