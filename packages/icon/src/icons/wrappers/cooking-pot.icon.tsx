import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CookingPotBoldIcon } from "../bold";
import { CookingPotDuotoneIcon } from "../duotone";
import { CookingPotFillIcon } from "../fill";
import { CookingPotLightIcon } from "../light";
import { CookingPotRegularIcon } from "../regular";
import { CookingPotThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CookingPotIcon = memo(function CookingPot(
  props: IconWrapperProps
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
