import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DiceOneBoldIcon } from "../bold/dice-one-bold.icon";
import { DiceOneDuotoneIcon } from "../duotone/dice-one-duotone.icon";
import { DiceOneFillIcon } from "../fill/dice-one-fill.icon";
import { DiceOneLightIcon } from "../light/dice-one-light.icon";
import { DiceOneRegularIcon } from "../regular/dice-one-regular.icon";
import { DiceOneThinIcon } from "../thin/dice-one-thin.icon";

export const DiceOneIcon = memo(function DiceOne(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiceOneBoldIcon,
      duotone: DiceOneDuotoneIcon,
      fill: DiceOneFillIcon,
      light: DiceOneLightIcon,
      regular: DiceOneRegularIcon,
      thin: DiceOneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
