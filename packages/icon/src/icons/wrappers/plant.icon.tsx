import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PlantBoldIcon } from "../bold/plant-bold.icon";
import { PlantDuotoneIcon } from "../duotone/plant-duotone.icon";
import { PlantFillIcon } from "../fill/plant-fill.icon";
import { PlantLightIcon } from "../light/plant-light.icon";
import { PlantRegularIcon } from "../regular/plant-regular.icon";
import { PlantThinIcon } from "../thin/plant-thin.icon";

export const PlantIcon = memo(function Plant(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlantBoldIcon,
      duotone: PlantDuotoneIcon,
      fill: PlantFillIcon,
      light: PlantLightIcon,
      regular: PlantRegularIcon,
      thin: PlantThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
