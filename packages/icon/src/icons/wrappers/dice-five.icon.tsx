import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DiceFiveBoldIcon } from "../bold/dice-five-bold.icon";
import { DiceFiveDuotoneIcon } from "../duotone/dice-five-duotone.icon";
import { DiceFiveFillIcon } from "../fill/dice-five-fill.icon";
import { DiceFiveLightIcon } from "../light/dice-five-light.icon";
import { DiceFiveRegularIcon } from "../regular/dice-five-regular.icon";
import { DiceFiveThinIcon } from "../thin/dice-five-thin.icon";

export const DiceFiveIcon = memo(function DiceFive(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiceFiveBoldIcon,
      duotone: DiceFiveDuotoneIcon,
      fill: DiceFiveFillIcon,
      light: DiceFiveLightIcon,
      regular: DiceFiveRegularIcon,
      thin: DiceFiveThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
