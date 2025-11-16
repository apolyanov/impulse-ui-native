import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WarningDiamondBold } from "../bold";
import { WarningDiamondDuotone } from "../duotone";
import { WarningDiamondFill } from "../fill";
import { WarningDiamondLight } from "../light";
import { WarningDiamondRegular } from "../regular";
import { WarningDiamondThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WarningDiamond = memo(function WarningDiamond(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WarningDiamondBold,
      duotone: WarningDiamondDuotone,
      fill: WarningDiamondFill,
      light: WarningDiamondLight,
      regular: WarningDiamondRegular,
      thin: WarningDiamondThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
