import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RoadHorizonBold } from "../bold";
import { RoadHorizonDuotone } from "../duotone";
import { RoadHorizonFill } from "../fill";
import { RoadHorizonLight } from "../light";
import { RoadHorizonRegular } from "../regular";
import { RoadHorizonThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RoadHorizon = memo(function RoadHorizon(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RoadHorizonBold,
      duotone: RoadHorizonDuotone,
      fill: RoadHorizonFill,
      light: RoadHorizonLight,
      regular: RoadHorizonRegular,
      thin: RoadHorizonThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
