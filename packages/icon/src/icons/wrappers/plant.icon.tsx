import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlantBoldIcon } from "../bold";
import { PlantDuotoneIcon } from "../duotone";
import { PlantFillIcon } from "../fill";
import { PlantLightIcon } from "../light";
import { PlantRegularIcon } from "../regular";
import { PlantThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
