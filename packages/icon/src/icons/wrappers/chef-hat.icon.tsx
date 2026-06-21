import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChefHatBoldIcon } from "../bold";
import { ChefHatDuotoneIcon } from "../duotone";
import { ChefHatFillIcon } from "../fill";
import { ChefHatLightIcon } from "../light";
import { ChefHatRegularIcon } from "../regular";
import { ChefHatThinIcon } from "../thin";

export const ChefHatIcon = memo(function ChefHat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChefHatBoldIcon,
      duotone: ChefHatDuotoneIcon,
      fill: ChefHatFillIcon,
      light: ChefHatLightIcon,
      regular: ChefHatRegularIcon,
      thin: ChefHatThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
