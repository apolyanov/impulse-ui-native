import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChefHatBoldIcon } from "../bold/chef-hat-bold.icon";
import { ChefHatDuotoneIcon } from "../duotone/chef-hat-duotone.icon";
import { ChefHatFillIcon } from "../fill/chef-hat-fill.icon";
import { ChefHatLightIcon } from "../light/chef-hat-light.icon";
import { ChefHatRegularIcon } from "../regular/chef-hat-regular.icon";
import { ChefHatThinIcon } from "../thin/chef-hat-thin.icon";

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
