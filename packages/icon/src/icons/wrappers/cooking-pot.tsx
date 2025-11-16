import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CookingPotBold } from "../bold";
import { CookingPotDuotone } from "../duotone";
import { CookingPotFill } from "../fill";
import { CookingPotLight } from "../light";
import { CookingPotRegular } from "../regular";
import { CookingPotThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CookingPot = memo(function CookingPot(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CookingPotBold,
      duotone: CookingPotDuotone,
      fill: CookingPotFill,
      light: CookingPotLight,
      regular: CookingPotRegular,
      thin: CookingPotThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
