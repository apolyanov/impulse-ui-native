import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DiceTwoBoldIcon } from "../bold/dice-two-bold.icon";
import { DiceTwoDuotoneIcon } from "../duotone/dice-two-duotone.icon";
import { DiceTwoFillIcon } from "../fill/dice-two-fill.icon";
import { DiceTwoLightIcon } from "../light/dice-two-light.icon";
import { DiceTwoRegularIcon } from "../regular/dice-two-regular.icon";
import { DiceTwoThinIcon } from "../thin/dice-two-thin.icon";

export const DiceTwoIcon = memo(function DiceTwo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiceTwoBoldIcon,
      duotone: DiceTwoDuotoneIcon,
      fill: DiceTwoFillIcon,
      light: DiceTwoLightIcon,
      regular: DiceTwoRegularIcon,
      thin: DiceTwoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
