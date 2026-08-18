import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CookingPotBoldIcon } from "../bold/cooking-pot-bold.icon";
import { CookingPotDuotoneIcon } from "../duotone/cooking-pot-duotone.icon";
import { CookingPotFillIcon } from "../fill/cooking-pot-fill.icon";
import { CookingPotLightIcon } from "../light/cooking-pot-light.icon";
import { CookingPotRegularIcon } from "../regular/cooking-pot-regular.icon";
import { CookingPotThinIcon } from "../thin/cooking-pot-thin.icon";

export const CookingPotIcon = memo(function CookingPot(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CookingPotBoldIcon,
      duotone: CookingPotDuotoneIcon,
      fill: CookingPotFillIcon,
      light: CookingPotLightIcon,
      regular: CookingPotRegularIcon,
      thin: CookingPotThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
