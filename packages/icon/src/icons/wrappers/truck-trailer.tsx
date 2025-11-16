import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TruckTrailerBold } from "../bold";
import { TruckTrailerDuotone } from "../duotone";
import { TruckTrailerFill } from "../fill";
import { TruckTrailerLight } from "../light";
import { TruckTrailerRegular } from "../regular";
import { TruckTrailerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TruckTrailer = memo(function TruckTrailer(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TruckTrailerBold,
      duotone: TruckTrailerDuotone,
      fill: TruckTrailerFill,
      light: TruckTrailerLight,
      regular: TruckTrailerRegular,
      thin: TruckTrailerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
