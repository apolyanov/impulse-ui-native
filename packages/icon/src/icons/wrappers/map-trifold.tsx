import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MapTrifoldBold } from "../bold";
import { MapTrifoldDuotone } from "../duotone";
import { MapTrifoldFill } from "../fill";
import { MapTrifoldLight } from "../light";
import { MapTrifoldRegular } from "../regular";
import { MapTrifoldThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MapTrifold = memo(function MapTrifold(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MapTrifoldBold,
      duotone: MapTrifoldDuotone,
      fill: MapTrifoldFill,
      light: MapTrifoldLight,
      regular: MapTrifoldRegular,
      thin: MapTrifoldThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
