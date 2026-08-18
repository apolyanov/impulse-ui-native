import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DiamondBoldIcon } from "../bold/diamond-bold.icon";
import { DiamondDuotoneIcon } from "../duotone/diamond-duotone.icon";
import { DiamondFillIcon } from "../fill/diamond-fill.icon";
import { DiamondLightIcon } from "../light/diamond-light.icon";
import { DiamondRegularIcon } from "../regular/diamond-regular.icon";
import { DiamondThinIcon } from "../thin/diamond-thin.icon";

export const DiamondIcon = memo(function Diamond(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiamondBoldIcon,
      duotone: DiamondDuotoneIcon,
      fill: DiamondFillIcon,
      light: DiamondLightIcon,
      regular: DiamondRegularIcon,
      thin: DiamondThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
