import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DiceOneBoldIcon } from "../bold";
import { DiceOneDuotoneIcon } from "../duotone";
import { DiceOneFillIcon } from "../fill";
import { DiceOneLightIcon } from "../light";
import { DiceOneRegularIcon } from "../regular";
import { DiceOneThinIcon } from "../thin";

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
