import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WarningDiamondBoldIcon } from "../bold/warning-diamond-bold.icon";
import { WarningDiamondDuotoneIcon } from "../duotone/warning-diamond-duotone.icon";
import { WarningDiamondFillIcon } from "../fill/warning-diamond-fill.icon";
import { WarningDiamondLightIcon } from "../light/warning-diamond-light.icon";
import { WarningDiamondRegularIcon } from "../regular/warning-diamond-regular.icon";
import { WarningDiamondThinIcon } from "../thin/warning-diamond-thin.icon";

export const WarningDiamondIcon = memo(function WarningDiamond(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WarningDiamondBoldIcon,
      duotone: WarningDiamondDuotoneIcon,
      fill: WarningDiamondFillIcon,
      light: WarningDiamondLightIcon,
      regular: WarningDiamondRegularIcon,
      thin: WarningDiamondThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
