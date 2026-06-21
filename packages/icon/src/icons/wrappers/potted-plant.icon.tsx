import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PottedPlantBoldIcon } from "../bold";
import { PottedPlantDuotoneIcon } from "../duotone";
import { PottedPlantFillIcon } from "../fill";
import { PottedPlantLightIcon } from "../light";
import { PottedPlantRegularIcon } from "../regular";
import { PottedPlantThinIcon } from "../thin";

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
