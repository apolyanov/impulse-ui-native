import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GlobeHemisphereWestBold } from "../bold";
import { GlobeHemisphereWestDuotone } from "../duotone";
import { GlobeHemisphereWestFill } from "../fill";
import { GlobeHemisphereWestLight } from "../light";
import { GlobeHemisphereWestRegular } from "../regular";
import { GlobeHemisphereWestThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GlobeHemisphereWest = memo(function GlobeHemisphereWest(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GlobeHemisphereWestBold,
      duotone: GlobeHemisphereWestDuotone,
      fill: GlobeHemisphereWestFill,
      light: GlobeHemisphereWestLight,
      regular: GlobeHemisphereWestRegular,
      thin: GlobeHemisphereWestThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
