import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DiceTwoBold } from "../bold";
import { DiceTwoDuotone } from "../duotone";
import { DiceTwoFill } from "../fill";
import { DiceTwoLight } from "../light";
import { DiceTwoRegular } from "../regular";
import { DiceTwoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DiceTwo = memo(function DiceTwo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiceTwoBold,
      duotone: DiceTwoDuotone,
      fill: DiceTwoFill,
      light: DiceTwoLight,
      regular: DiceTwoRegular,
      thin: DiceTwoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
