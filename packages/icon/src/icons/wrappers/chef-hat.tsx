import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChefHatBold } from "../bold";
import { ChefHatDuotone } from "../duotone";
import { ChefHatFill } from "../fill";
import { ChefHatLight } from "../light";
import { ChefHatRegular } from "../regular";
import { ChefHatThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChefHat = memo(function ChefHat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChefHatBold,
      duotone: ChefHatDuotone,
      fill: ChefHatFill,
      light: ChefHatLight,
      regular: ChefHatRegular,
      thin: ChefHatThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
