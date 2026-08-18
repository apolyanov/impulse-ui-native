import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NuclearPlantBoldIcon } from "../bold/nuclear-plant-bold.icon";
import { NuclearPlantDuotoneIcon } from "../duotone/nuclear-plant-duotone.icon";
import { NuclearPlantFillIcon } from "../fill/nuclear-plant-fill.icon";
import { NuclearPlantLightIcon } from "../light/nuclear-plant-light.icon";
import { NuclearPlantRegularIcon } from "../regular/nuclear-plant-regular.icon";
import { NuclearPlantThinIcon } from "../thin/nuclear-plant-thin.icon";

export const NuclearPlantIcon = memo(function NuclearPlant(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NuclearPlantBoldIcon,
      duotone: NuclearPlantDuotoneIcon,
      fill: NuclearPlantFillIcon,
      light: NuclearPlantLightIcon,
      regular: NuclearPlantRegularIcon,
      thin: NuclearPlantThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
