import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlanetBold } from "../bold";
import { PlanetDuotone } from "../duotone";
import { PlanetFill } from "../fill";
import { PlanetLight } from "../light";
import { PlanetRegular } from "../regular";
import { PlanetThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Planet = memo(function Planet(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlanetBold,
      duotone: PlanetDuotone,
      fill: PlanetFill,
      light: PlanetLight,
      regular: PlanetRegular,
      thin: PlanetThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
