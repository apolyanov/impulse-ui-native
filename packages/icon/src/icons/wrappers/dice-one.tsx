import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DiceOneBold } from "../bold";
import { DiceOneDuotone } from "../duotone";
import { DiceOneFill } from "../fill";
import { DiceOneLight } from "../light";
import { DiceOneRegular } from "../regular";
import { DiceOneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DiceOne = memo(function DiceOne(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiceOneBold,
      duotone: DiceOneDuotone,
      fill: DiceOneFill,
      light: DiceOneLight,
      regular: DiceOneRegular,
      thin: DiceOneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
