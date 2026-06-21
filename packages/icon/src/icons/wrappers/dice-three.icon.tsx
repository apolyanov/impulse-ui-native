import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DiceThreeBoldIcon } from "../bold";
import { DiceThreeDuotoneIcon } from "../duotone";
import { DiceThreeFillIcon } from "../fill";
import { DiceThreeLightIcon } from "../light";
import { DiceThreeRegularIcon } from "../regular";
import { DiceThreeThinIcon } from "../thin";

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
