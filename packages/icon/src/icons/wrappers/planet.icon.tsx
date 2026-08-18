import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PlanetBoldIcon } from "../bold/planet-bold.icon";
import { PlanetDuotoneIcon } from "../duotone/planet-duotone.icon";
import { PlanetFillIcon } from "../fill/planet-fill.icon";
import { PlanetLightIcon } from "../light/planet-light.icon";
import { PlanetRegularIcon } from "../regular/planet-regular.icon";
import { PlanetThinIcon } from "../thin/planet-thin.icon";

export const PlanetIcon = memo(function Planet(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlanetBoldIcon,
      duotone: PlanetDuotoneIcon,
      fill: PlanetFillIcon,
      light: PlanetLightIcon,
      regular: PlanetRegularIcon,
      thin: PlanetThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
