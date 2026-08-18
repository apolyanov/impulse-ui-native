import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RoadHorizonBoldIcon } from "../bold/road-horizon-bold.icon";
import { RoadHorizonDuotoneIcon } from "../duotone/road-horizon-duotone.icon";
import { RoadHorizonFillIcon } from "../fill/road-horizon-fill.icon";
import { RoadHorizonLightIcon } from "../light/road-horizon-light.icon";
import { RoadHorizonRegularIcon } from "../regular/road-horizon-regular.icon";
import { RoadHorizonThinIcon } from "../thin/road-horizon-thin.icon";

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
