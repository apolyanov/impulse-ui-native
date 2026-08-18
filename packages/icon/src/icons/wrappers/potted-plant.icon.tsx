import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PottedPlantBoldIcon } from "../bold/potted-plant-bold.icon";
import { PottedPlantDuotoneIcon } from "../duotone/potted-plant-duotone.icon";
import { PottedPlantFillIcon } from "../fill/potted-plant-fill.icon";
import { PottedPlantLightIcon } from "../light/potted-plant-light.icon";
import { PottedPlantRegularIcon } from "../regular/potted-plant-regular.icon";
import { PottedPlantThinIcon } from "../thin/potted-plant-thin.icon";

export const PottedPlantIcon = memo(function PottedPlant(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PottedPlantBoldIcon,
      duotone: PottedPlantDuotoneIcon,
      fill: PottedPlantFillIcon,
      light: PottedPlantLightIcon,
      regular: PottedPlantRegularIcon,
      thin: PottedPlantThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
