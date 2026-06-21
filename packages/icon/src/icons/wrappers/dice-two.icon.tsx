import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DiceTwoBoldIcon } from "../bold";
import { DiceTwoDuotoneIcon } from "../duotone";
import { DiceTwoFillIcon } from "../fill";
import { DiceTwoLightIcon } from "../light";
import { DiceTwoRegularIcon } from "../regular";
import { DiceTwoThinIcon } from "../thin";

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
