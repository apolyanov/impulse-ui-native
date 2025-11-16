import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DiceThreeBold } from "../bold";
import { DiceThreeDuotone } from "../duotone";
import { DiceThreeFill } from "../fill";
import { DiceThreeLight } from "../light";
import { DiceThreeRegular } from "../regular";
import { DiceThreeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DiceThree = memo(function DiceThree(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiceThreeBold,
      duotone: DiceThreeDuotone,
      fill: DiceThreeFill,
      light: DiceThreeLight,
      regular: DiceThreeRegular,
      thin: DiceThreeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
