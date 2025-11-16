import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DiamondBold } from "../bold";
import { DiamondDuotone } from "../duotone";
import { DiamondFill } from "../fill";
import { DiamondLight } from "../light";
import { DiamondRegular } from "../regular";
import { DiamondThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Diamond = memo(function Diamond(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiamondBold,
      duotone: DiamondDuotone,
      fill: DiamondFill,
      light: DiamondLight,
      regular: DiamondRegular,
      thin: DiamondThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
