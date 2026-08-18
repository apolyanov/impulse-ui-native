import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BowlFoodBoldIcon } from "../bold/bowl-food-bold.icon";
import { BowlFoodDuotoneIcon } from "../duotone/bowl-food-duotone.icon";
import { BowlFoodFillIcon } from "../fill/bowl-food-fill.icon";
import { BowlFoodLightIcon } from "../light/bowl-food-light.icon";
import { BowlFoodRegularIcon } from "../regular/bowl-food-regular.icon";
import { BowlFoodThinIcon } from "../thin/bowl-food-thin.icon";

export const BowlFoodIcon = memo(function BowlFood(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BowlFoodBoldIcon,
      duotone: BowlFoodDuotoneIcon,
      fill: BowlFoodFillIcon,
      light: BowlFoodLightIcon,
      regular: BowlFoodRegularIcon,
      thin: BowlFoodThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
