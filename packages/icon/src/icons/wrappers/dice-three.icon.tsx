import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DiceThreeBoldIcon } from "../bold/dice-three-bold.icon";
import { DiceThreeDuotoneIcon } from "../duotone/dice-three-duotone.icon";
import { DiceThreeFillIcon } from "../fill/dice-three-fill.icon";
import { DiceThreeLightIcon } from "../light/dice-three-light.icon";
import { DiceThreeRegularIcon } from "../regular/dice-three-regular.icon";
import { DiceThreeThinIcon } from "../thin/dice-three-thin.icon";

export const DiceThreeIcon = memo(function DiceThree(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiceThreeBoldIcon,
      duotone: DiceThreeDuotoneIcon,
      fill: DiceThreeFillIcon,
      light: DiceThreeLightIcon,
      regular: DiceThreeRegularIcon,
      thin: DiceThreeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
