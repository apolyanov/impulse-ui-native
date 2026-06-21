import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RoadHorizonBoldIcon } from "../bold";
import { RoadHorizonDuotoneIcon } from "../duotone";
import { RoadHorizonFillIcon } from "../fill";
import { RoadHorizonLightIcon } from "../light";
import { RoadHorizonRegularIcon } from "../regular";
import { RoadHorizonThinIcon } from "../thin";

export const RoadHorizonIcon = memo(function RoadHorizon(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RoadHorizonBoldIcon,
      duotone: RoadHorizonDuotoneIcon,
      fill: RoadHorizonFillIcon,
      light: RoadHorizonLightIcon,
      regular: RoadHorizonRegularIcon,
      thin: RoadHorizonThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
