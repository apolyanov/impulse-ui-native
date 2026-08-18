import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GlobeHemisphereWestBoldIcon } from "../bold/globe-hemisphere-west-bold.icon";
import { GlobeHemisphereWestDuotoneIcon } from "../duotone/globe-hemisphere-west-duotone.icon";
import { GlobeHemisphereWestFillIcon } from "../fill/globe-hemisphere-west-fill.icon";
import { GlobeHemisphereWestLightIcon } from "../light/globe-hemisphere-west-light.icon";
import { GlobeHemisphereWestRegularIcon } from "../regular/globe-hemisphere-west-regular.icon";
import { GlobeHemisphereWestThinIcon } from "../thin/globe-hemisphere-west-thin.icon";

export const GlobeHemisphereWestIcon = memo(function GlobeHemisphereWest(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GlobeHemisphereWestBoldIcon,
      duotone: GlobeHemisphereWestDuotoneIcon,
      fill: GlobeHemisphereWestFillIcon,
      light: GlobeHemisphereWestLightIcon,
      regular: GlobeHemisphereWestRegularIcon,
      thin: GlobeHemisphereWestThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
