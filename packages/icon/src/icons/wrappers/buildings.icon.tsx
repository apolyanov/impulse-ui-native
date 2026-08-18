import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BuildingsBoldIcon } from "../bold/buildings-bold.icon";
import { BuildingsDuotoneIcon } from "../duotone/buildings-duotone.icon";
import { BuildingsFillIcon } from "../fill/buildings-fill.icon";
import { BuildingsLightIcon } from "../light/buildings-light.icon";
import { BuildingsRegularIcon } from "../regular/buildings-regular.icon";
import { BuildingsThinIcon } from "../thin/buildings-thin.icon";

export const BuildingsIcon = memo(function Buildings(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BuildingsBoldIcon,
      duotone: BuildingsDuotoneIcon,
      fill: BuildingsFillIcon,
      light: BuildingsLightIcon,
      regular: BuildingsRegularIcon,
      thin: BuildingsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
