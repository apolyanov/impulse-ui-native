import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BowlFoodBold } from "../bold";
import { BowlFoodDuotone } from "../duotone";
import { BowlFoodFill } from "../fill";
import { BowlFoodLight } from "../light";
import { BowlFoodRegular } from "../regular";
import { BowlFoodThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BowlFood = memo(function BowlFood(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BowlFoodBold,
      duotone: BowlFoodDuotone,
      fill: BowlFoodFill,
      light: BowlFoodLight,
      regular: BowlFoodRegular,
      thin: BowlFoodThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
